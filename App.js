import { Root } from "native-base";
import React, { Component } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import Add from "./app/screens/Add";
import DetailPokemon from "./app/screens/DetailPokemon";
import Home from "./app/screens/Home";
import Login from "./app/screens/Login";
import MapPokemon from "./app/screens/Map";
import PickMap from "./app/screens/PickMap";
import Register from "./app/screens/Register";
import Splash from "./app/screens/splash";

const AppTabNavigator = createBottomTabNavigator(
    {
        Homescreen: {
            screen: Home,
            navigationOptions: () => ({
                tabBarLabel: "Home"
            })
        },
        MapScreen: {
            screen: MapPokemon,
            navigationOptions: () => ({
                title: "Pokemon Maps"
            })
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = FontAwesome5;
                let iconName;
                if (routeName === "Homescreen") {
                    iconName = "home";
                } else if (routeName === "MapScreen") {
                    iconName = "map-marked-alt";
                }

                return (
                    <IconComponent
                        name={iconName}
                        size={25}
                        color={tintColor}
                    />
                );
            }
        }),
        resetOnBlur: true,
        tabBarOptions: {
            activeTintColor: "#CF1A21",
            inactiveTintColor: "#000"
        }
    }
);

AppTabNavigator.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];

    let title;
    if (routeName === "Homescreen") {
        title = "Pokemon List";
    } else if (routeName === "MapScreen") {
        title = "Pokemon Locations";
    }
    return { title };
};

const AppNavigator = createStackNavigator(
    {
        TabHome: AppTabNavigator,
        Detailscreen: {
            screen: DetailPokemon,
            navigationOptions: () => ({
                title: "Product Details",
                tabBarVisible: "false"
            })
        },
        Addscreen: {
            screen: Add,
            navigationOptions: () => ({
                title: "Add Pokemon",
                tabBarVisible: "false"
            })
        },
        LoginScreen: {
            screen: Login,
            navigationOptions: () => ({
                title: "Login",
                tabBarVisible: "false"
            })
        },
        RegisterScreen: {
            screen: Register,
            navigationOptions: () => ({
                title: "Register",
                headerTintColor: "#000",
                tabBarVisible: "false"
            })
        },
        PickMapScreen: {
            screen: PickMap,
            navigationOptions: () => ({
                title: "Pick A Location",
                headerTintColor: "#000",
                tabBarVisible: "false"
            })
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#CF1A21"
            },
            headerTintColor: "#fff"
        }),
        initialRouteName: "TabHome"
    }
);

const switchNavigator = createSwitchNavigator(
    {
        Splash,
        Main: AppNavigator
    },
    {
        initialRouteName: "Splash"
    }
);

const AppContainer = createAppContainer(switchNavigator);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppContainer />
                </Root>
            </Provider>
        );
    }
}
