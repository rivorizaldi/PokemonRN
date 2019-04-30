import { Button, Container, Footer, Icon, Text } from "native-base";
import React, { Component } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import Detail from "../components/Detail";
import { baseUrl } from "../helper/routes";
import { deletePokemon } from "../redux/actions/pokemon";

class DetailPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        };
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity
                onPress={navigation.getParam("deleteItem")}
                style={{ marginRight: 16 }}
            >
                <Icon
                    type="FontAwesome5"
                    name="trash-alt"
                    style={{ color: "#fff" }}
                />
            </TouchableOpacity>
        )
    });

    toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    componentDidMount() {
        this.props.navigation.setParams({ deleteItem: this.toggleModal });
    }

    deletePokemon = () => {
        this.props.deletePokemon(this.props.pokemonId);
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.navigation.navigate("TabHome");
    };

    render() {
        console.log("pokemonItem render");
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
                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={this.toggleModal}
                    onBackButtonPress={this.toggleModal}
                    animationOutTiming={300}
                    animationIn={"fadeIn"}
                    animationOut={"fadeOut"}
                >
                    <View
                        style={{
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            padding: 8,
                            borderRadius: 5
                        }}
                    >
                        <Text style={{ fontWeight: "bold" }}>
                            Do You Want To Delete {this.props.pokemonName}?
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "flex-end"
                            }}
                        >
                            <Button
                                transparent
                                dark
                                onPress={this.deletePokemon}
                            >
                                <Text>Yes</Text>
                            </Button>

                            <Button transparent dark onPress={this.toggleModal}>
                                <Text>No</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
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
        isPending: state.pokemon.isPending,
        isFulfilled: state.pokemon.isFulfilled,
        pokemonName: state.pokemon.pokemonName,
        pokemonId: state.pokemon.pokemonId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deletePokemon: id => dispatch(deletePokemon(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPokemon);
