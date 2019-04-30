import {
    Badge,
    Body,
    Card,
    CardItem,
    H1,
    Left,
    Right,
    Text
} from "native-base";
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

class Details extends Component {
    render() {
        const types = this.props.types.map(x => {
            switch (x.name) {
                case "Grass":
                    return (
                        <Left key={x.id}>
                            <Badge success>
                                <Text style={{ fontSize: 12 }}>{x.name}</Text>
                            </Badge>
                        </Left>
                    );
                case "Poison":
                    return (
                        <Right key={x.id}>
                            <Badge style={{ backgroundColor: "#A040A0" }}>
                                <Text style={{ fontSize: 12 }}>{x.name}</Text>
                            </Badge>
                        </Right>
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
                    <CardItem style={{ paddingBottom: 12 }}>{types}</CardItem>
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
