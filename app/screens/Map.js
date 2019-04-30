import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default class Map extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta:
                            (Dimensions.get("window").width /
                                Dimensions.get("window").height) *
                            0.0015
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(37.78825),
                            longitude: parseFloat(-122.4324)
                        }}
                        title={"test"}
                        description={"ini marker"}
                        image={require("../assets/Bulbasaur.png")}
                    />
                </MapView>
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
    }
});
