import {
    Button,
    Container,
    Content,
    Form,
    Icon,
    Input,
    Item,
    Label,
    Picker,
    Text
} from "native-base";
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";
import { fetchPokemonCategory } from "../redux/actions/category";
import { fetchPokemonType } from "../redux/actions/type";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: null,
            type1: null,
            type2: null,
            image: null,
            name: null
        };
    }

    onValueChangeCategory = value => {
        this.setState({
            category: value
        });
    };

    onValueChangeType1 = value => {
        this.setState({
            type1: value
        });
    };

    onValueChangeType2 = value => {
        this.setState({
            type2: value
        });
    };

    componentDidMount() {
        this.props.navigation.addListener("willFocus", () => {
            if (!this.props.user.isLoggedIn) {
                this.props.navigation.navigate("LoginScreen");
            } else {
                this.props.fetchPokemonCategory();
                this.props.fetchPokemonType();
            }
        });
    }

    render() {
        const types = this.props.type.pokemonType.map(x => {
            return <Picker.Item label={x.name} value={x.id} key={x.id} />;
        });

        const categories = this.props.category.pokemonCategory.map(x => {
            return <Picker.Item label={x.name} value={x.id} key={x.id} />;
        });

        const { navigation } = this.props;
        const latitude = navigation.getParam("latitude", "");
        const longitude = navigation.getParam("longitude", "");

        console.log("test", this.state);

        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel style={{ marginRight: 15 }}>
                            <Label>Name</Label>
                            <Input
                                onChangeText={name => {
                                    this.setState({
                                        name
                                    });
                                }}
                            />
                        </Item>
                        <Text style={{ marginLeft: 15 }}>Category</Text>
                        <Item
                            picker
                            style={{ marginRight: 15, marginLeft: 15 }}
                        >
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Category"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.category}
                                onValueChange={this.onValueChangeCategory}
                            >
                                {categories}
                            </Picker>
                        </Item>
                        <Text style={{ marginLeft: 15 }}>Type 1</Text>
                        <Item
                            picker
                            style={{ marginRight: 15, marginLeft: 15 }}
                        >
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Type 1"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.type1}
                                onValueChange={this.onValueChangeType1}
                            >
                                {types}
                            </Picker>
                        </Item>
                        <Text style={{ marginLeft: 15 }}>Type 2</Text>
                        <Item
                            picker
                            style={{ marginRight: 15, marginLeft: 15 }}
                        >
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Type 2"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.type2}
                                onValueChange={this.onValueChangeType2}
                            >
                                <Picker.Item label={""} value={null} />
                                {types}
                            </Picker>
                        </Item>
                        <View>
                            <Item stackedLabel style={{ marginRight: 15 }}>
                                <Label>Latitude</Label>
                                <Input value={latitude.toString()} />
                            </Item>
                            <Item stackedLabel style={{ marginRight: 15 }}>
                                <Label>Longitude</Label>
                                <Input value={longitude.toString()} />
                            </Item>
                            <Button
                                style={{ alignSelf: "center", marginTop: 15 }}
                                onPress={() => {
                                    this.props.navigation.navigate(
                                        "PickMapScreen"
                                    );
                                }}
                            >
                                <Text>Pick A Location</Text>
                            </Button>
                        </View>
                        <Form
                            style={{
                                flexDirection: "row",
                                marginRight: 15,
                                marginLeft: 15,
                                marginBottom: 10,
                                marginTop: 10
                            }}
                        >
                            <Text>Image :</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    const options = {
                                        title: "Select Picture",
                                        storageOptions: {
                                            skipBackup: true,
                                            path: "images"
                                        }
                                    };
                                    ImagePicker.showImagePicker(
                                        options,
                                        response => {
                                            console.log(
                                                "Response = ",
                                                response
                                            );

                                            if (response.didCancel) {
                                                console.log(
                                                    "User cancelled image picker"
                                                );
                                            } else if (response.error) {
                                                console.log(
                                                    "ImagePicker Error: ",
                                                    response.error
                                                );
                                            } else {
                                                const source = {
                                                    uri: response.uri
                                                };
                                                this.setState({
                                                    image: source
                                                });
                                            }
                                        }
                                    );
                                }}
                            >
                                <Text>Pick An Image</Text>
                            </TouchableOpacity>
                        </Form>
                        <Button
                            onPress={() => {
                                this.props.navigation.navigate("HomeScreen");
                            }}
                            block
                            style={{
                                marginRight: 15,
                                marginLeft: 15,
                                backgroundColor: "#CF1A21"
                            }}
                        >
                            <Text style={{ color: "#fff" }}>Add</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        category: state.category,
        type: state.type
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemonCategory: () => dispatch(fetchPokemonCategory()),
        fetchPokemonType: () => dispatch(fetchPokemonType())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);
