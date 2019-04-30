import { Button, Container, Footer, Icon, Text } from "native-base";
import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import Detail from "../components/Detail";
import { baseUrl } from "../helper/routes";

class DetailPokemon extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity onPress={() => {}} style={{ marginRight: 16 }}>
                <Icon
                    type="FontAwesome5"
                    name="trash-alt"
                    style={{ color: "#fff" }}
                />
            </TouchableOpacity>
        )
    });

    isEmpty = obj => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }
        return true;
    };

    render() {
        console.log(this.props.pokemonDetail);
        return (
            <Container>
                {this.props.isPending && (
                    <View style={styles.spinnerCustom}>
                        <ActivityIndicator size="small" color="#CF1A21" />
                    </View>
                )}
                {this.props.pokemonDetail.length ? (
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={this.props.pokemonDetail}
                        renderItem={({ item }) => (
                            <Detail
                                image={`${baseUrl}/${item.image_url}`}
                                name={item.name}
                                categories={item.categories.name}
                                types={item.types}
                            />
                        )}
                    />
                ) : null}
                <Footer style={styles.footerCustom}>
                    <Button style={styles.buttonCustom} onPress={() => {}}>
                        <Text>Edit</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    spinnerCustom: {
        flex: 1,
        justifyContent: "center"
    },
    buttonCustom: {
        flex: 1,
        backgroundColor: "#CF1A21",
        color: "#ffffff",
        marginLeft: 6,
        marginRight: 6,
        marginTop: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    footerCustom: {
        backgroundColor: "white",
        paddingBottom: 8
    }
});

const mapStateToProps = state => {
    return {
        pokemonDetail: state.pokemon.pokemonDetail,
        isPending: state.pokemon.isPending
    };
};

export default connect(
    mapStateToProps,
    null
)(DetailPokemon);
