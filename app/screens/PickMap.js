import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class PickMap extends Component {
    constructor() {
        super();
        this.state = {
            focusLocation: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
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

        console.log(this.state.focusLocation.longitude);
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
        // ...StyleSheet.absoluteFillObject,
        // height: 400,
        // width: 400,
        // justifyContent: "flex-end",
        // alignItems: "center"
        width: "100%",
        alignItems: "center"
    },
    map: {
        // ...StyleSheet.absoluteFillObject
        width: "100%",
        height: 250
    },
    button: {
        margin: 8
    }
});

export default PickMap;
