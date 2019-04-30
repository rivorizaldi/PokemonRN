import { Badge, Body, Card, CardItem, Left, Text } from "native-base";
import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

class Pokemon extends Component {
    render() {
        const types = this.props.types.map(x => {
            switch (x.name) {
                case "Grass":
                    return (
                        <Badge success key={x.id}>
                            <Text style={{ fontSize: 12 }}>{x.name}</Text>
                        </Badge>
                    );
                case "Poison":
                    return (
                        <Badge
                            key={x.id}
                            style={{ backgroundColor: "#A040A0" }}
                        >
                            <Text style={{ fontSize: 12 }}>{x.name}</Text>
                        </Badge>
                    );
                case "Fire":
                    return (
                        <Badge
                            key={x.id}
                            style={{ backgroundColor: "#F08030" }}
                        >
                            <Text style={{ fontSize: 12 }}>{x.name}</Text>
                        </Badge>
                    );
                case "Water":
                    return (
                        <Badge
                            key={x.id}
                            style={{ backgroundColor: "#6890F0" }}
                        >
                            <Text style={{ fontSize: 12 }}>{x.name}</Text>
                        </Badge>
                    );
                case "Bug":
                    return (
                        <Badge
                            key={x.id}
                            style={{ backgroundColor: "#B8B8D0" }}
                        >
                            <Text style={{ fontSize: 12 }}>{x.name}</Text>
                        </Badge>
                    );
                case "Normal":
                    return (
                        <Badge
                            key={x.id}
                            style={{ backgroundColor: "#A8A878" }}
                        >
                            <Text style={{ fontSize: 12 }}>{x.name}</Text>
                        </Badge>
                    );
            }
        });

        return (
            <TouchableOpacity onPress={this.props.detail}>
                <Card>
                    <CardItem cardBody>
                        <Image
                            style={styles.imageCustom}
                            source={{
                                uri: this.props.image
                            }}
                            resizeMode="contain"
                        />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text style={{ marginLeft: 0 }}>
                                {this.props.name}
                            </Text>
                        </Left>
                    </CardItem>
                    <CardItem style={{ paddingTop: 0 }}>
                        <Left>
                            <Text style={{ marginLeft: 0 }}>
                                {this.props.category} Pokemon
                            </Text>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body style={{ flexDirection: "row" }}>{types}</Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    imageCustom: {
        width: 165,
        height: 200
    }
});

export default Pokemon;
