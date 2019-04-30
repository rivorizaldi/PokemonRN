import { Badge, Body, Card, CardItem, H1, Left, Text } from "native-base";
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

class Details extends Component {
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
            <ScrollView>
                <Card>
                    <CardItem cardBody>
                        <Image
                            style={styles.imageCustom}
                            source={{ uri: this.props.image }}
                            resizeMode="contain"
                        />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <H1 style={styles.itemName}>{this.props.name}</H1>
                        </Left>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{ fontWeight: "bold" }}>
                                Pokemon Description
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontWeight: "bold" }}>
                                {this.props.categories} Pokemon
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{ paddingBottom: 12 }}>
                        <Body>{types}</Body>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    imageCustom: {
        flex: 1,
        width: 200,
        height: 400
    },
    itemPrice: {
        color: "#ff5722",
        fontWeight: "bold"
    },
    itemName: {
        color: "#494d52",
        fontWeight: "bold"
    },
    fabCustom: {
        backgroundColor: "#fff"
    },
    iconActive: {
        color: "red"
    },
    icon: {
        color: "gray"
    }
});

export default Details;
