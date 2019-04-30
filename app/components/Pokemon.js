import { Badge, Card, CardItem, Left, Right, Text } from "native-base";
import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

class Pokemon extends Component {
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
                        {types}
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
