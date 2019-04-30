import React, { Component } from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class PickMap extends Component {
    constructor() {
        super();
        this.state = {
            focusLocation: {
                latitude: -6.300937,
                longitude: 106.735044,
                latitudeDelta: 0.015,
                longitudeDelta:
                    (Dimensions.get("window").width /
                        Dimensions.get("window").height) *
                    0.0015
            },
            locationPick: false
        };
    }

    pickLocation = event => {
        const coords = event.nativeEvent.coordinate;
        this.setState(prevState => {
            return {
                focusLocation: {
                    ...prevState.focusLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationPick: true
            };
        });
    };

    render() {
        let marker = null;
        if (this.state.locationPick) {
            marker = <MapView.Marker coordinate={this.state.focusLocation} />;
        }
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={this.state.focusLocation}
                    region={this.state.focusLocation}
                    onPress={this.pickLocation}
                >
                    {marker}
                </MapView>
                <View>
                    <Button
                        title="Pick Location"
                        onPress={() => {
                            this.props.navigation.navigate("Addscreen", {
                                latitude: this.state.focusLocation.latitude,
                                longitude: this.state.focusLocation.longitude
                            });
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    button: {
        margin: 8
    }
});

export default PickMap;
