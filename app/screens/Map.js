import React, { Component } from "react";
import {
    ActivityIndicator,
    Dimensions,
    Image,
    StyleSheet,
    View
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { connect } from "react-redux";
import { baseUrl } from "../helper/routes";
import { fetchPokemonList } from "../redux/actions/pokemon";

class Maps extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        navigation.addListener("willFocus", () => {
            this.props.fetchPokemonList();
        });
    }
    render() {
        return (
            <View style={styles.container}>
                {this.props.isPending && (
                    <View style={styles.spinnerCustom}>
                        <ActivityIndicator size="small" color="#CF1A21" />
                    </View>
                )}
                {this.props.pokemonList.length ? (
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: -6.300937,
                            longitude: 106.735044,
                            latitudeDelta: 0.015,
                            longitudeDelta:
                                (Dimensions.get("window").width /
                                    Dimensions.get("window").height) *
                                0.0015
                        }}
                    >
                        {this.props.pokemonList.map(marker => (
                            <Marker
                                key={marker.id}
                                coordinate={{
                                    latitude: parseFloat(marker.latitude),
                                    longitude: parseFloat(marker.longitude)
                                }}
                                title={marker.name}
                                description={`${
                                    marker.categories.name
                                } Pokemon`}
                            >
                                <Image
                                    source={{
                                        uri: `${baseUrl}/${marker.image_url}`
                                    }}
                                    style={{ height: 50, width: 50 }}
                                />
                            </Marker>
                        ))}
                    </MapView>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    spinnerCustom: {
        flex: 1,
        justifyContent: "center"
    }
});

const mapStateToProps = state => {
    return {
        pokemonList: state.pokemon.pokemonList,
        isPending: state.pokemon.isPending
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemonList: () => dispatch(fetchPokemonList())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Maps);
