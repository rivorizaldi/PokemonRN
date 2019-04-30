import { Button, Content, Form, Input, Item, Label, Text } from "native-base";
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

class Register extends Component {
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
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel style={styles.textInputCustom}>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel style={styles.textInputCustom}>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button
                            block
                            style={styles.buttonCustom}
                            onPress={() => {}}
                        >
                            <Text style={{ color: "#F1C40F" }}>Sign In</Text>
                        </Button>
                        <Form style={styles.formCustom}>
                            <Label style={styles.labelCustom}>
                                Have An Account ?
                            </Label>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate(
                                        "LoginScreen"
                                    );
                                }}
                            >
                                <Text>Sign In</Text>
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
        backgroundColor: "#34495E"
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

export default Register;
