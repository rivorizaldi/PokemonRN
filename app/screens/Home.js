import { Container, Fab, Icon, Input, Item } from "native-base";
import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Pokemon from "../components/Pokemon";
import { baseUrl } from "../helper/routes";
import { fetchPokemonDetail, fetchPokemonList } from "../redux/actions/pokemon";

class Home extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        navigation.addListener("willFocus", () => {
            this.props.fetchPokemonList();
        });
    }

    render() {
        return (
            <Container>
                <Item style={{ marginLeft: 10, marginRight: 10 }}>
                    <Icon active name="search" />
                    <Input placeholder="Search Pokemon" />
                </Item>
                {this.props.isPending && (
                    <View style={style.spinnerCustom}>
                        <ActivityIndicator size="small" color="#CF1A21" />
                    </View>
                )}
                {this.props.pokemonList.length ? (
                    <FlatList
                        columnWrapperStyle={{
                            marginTop: 8,
                            marginLeft: 8,
                            alignItems: "space-between"
                        }}
                        keyExtractor={item => item.id.toString()}
                        horizontal={false}
                        numColumns={2}
                        data={this.props.pokemonList}
                        renderItem={({ item }) => (
                            <Pokemon
                                name={item.name}
                                image={`${baseUrl}/${item.image_url}`}
                                types={item.types}
                                category={item.categories.name}
                                detail={() => {
                                    this.props.navigation.navigate(
                                        "Detailscreen"
                                    );
                                    this.props.fetchPokemonDetail(item.id);
                                }}
                            />
                        )}
                    />
                ) : null}

                <Fab
                    style={{ backgroundColor: "#CF1A21" }}
                    position="bottomRight"
                    onPress={() => {
                        this.props.navigation.navigate("Addscreen");
                    }}
                >
                    <Icon type="FontAwesome5" name="plus" />
                </Fab>
            </Container>
        );
    }
}

const style = StyleSheet.create({
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
        fetchPokemonList: () => dispatch(fetchPokemonList()),
        fetchPokemonDetail: id => dispatch(fetchPokemonDetail(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
