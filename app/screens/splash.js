import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => {
                        setTimeout(() => {
                            this.props.navigation.navigate("Main");
                        }, 2000);
                    }}
                />
                <Image
                    source={require("../assets/pokeball.png")}
                    style={{ height: 150, width: 150 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
});

export default Splash;
