import {
    Button,
    Content,
    Form,
    Icon,
    Input,
    Item,
    Label,
    Text
} from "native-base";
import React, { Component } from "react";
import {
    BackHandler,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/user";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "rivo.rizaldy18@gmail.comm",
            password: "12345"
        };
    }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Homescreen");
                }}
                style={{ marginLeft: 16 }}
            >
                <Icon
                    type="FontAwesome5"
                    name="arrow-left"
                    style={{ color: "#fff" }}
                />
            </TouchableOpacity>
        )
    });

    componentDidMount() {
        this.props.navigation.addListener("willFocus", () => {
            BackHandler.addEventListener("hardwareBackPress", () => {
                this.props.navigation.navigate("Homescreen");
                return true;
            });
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.user.isFulfilled) {
            this.props.navigation.navigate("Homescreen", {
                loginFulfilled: "You are Logged In!"
            });
        }
    }

    render() {
        return (
            <ScrollView>
                <Content contentContainerStyle={styles.contentCustom}>
                    <Image
                        source={require("../assets/pokeball.png")}
                        style={{
                            height: 150,
                            width: 150,
                            alignSelf: "center"
                        }}
                    />
                    <Form>
                        <Item stackedLabel style={styles.textInputCustom}>
                            <Label>Email</Label>
                            <Input
                                onChangeText={email => {
                                    this.setState({
                                        email: email
                                    });
                                }}
                                value={this.state.email}
                            />
                        </Item>
                        <Item stackedLabel style={styles.textInputCustom}>
                            <Label>Password</Label>
                            <Input
                                onChangeText={password => {
                                    this.setState({
                                        password: password
                                    });
                                }}
                                value={this.state.password}
                            />
                        </Item>
                        <Button
                            block
                            style={styles.buttonCustom}
                            onPress={() => {
                                this.props.storesUserData(
                                    this.state.email,
                                    this.state.password
                                );
                            }}
                        >
                            <Text style={{ color: "#fff" }}>Sign In</Text>
                        </Button>
                        <Form style={styles.formCustom}>
                            <Label style={styles.labelCustom}>
                                Dont Have Account ?
                            </Label>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate(
                                        "RegisterScreen"
                                    );
                                }}
                            >
                                <Text>Sign Up</Text>
                            </TouchableOpacity>
                        </Form>
                    </Form>
                </Content>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentCustom: {
        justifyContent: "center",
        flex: 1,
        paddingRight: 16,
        paddingLeft: 16
    },
    buttonCustom: {
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        backgroundColor: "#CF1A21"
    },
    textInputCustom: {
        marginRight: 15
    },
    formCustom: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 8
    },
    labelCustom: {
        marginRight: 1
    }
});

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        storesUserData: (email, pass) => dispatch(loginUser(email, pass))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
