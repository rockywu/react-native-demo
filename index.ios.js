/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    WebView
} from 'react-native';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    configureScene(route){
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    renderScene(router, navigator) {
        let Comp = null;
        switch(router.name){
            case "home":
                Comp = Home;
                break;
            default:
                Comp = Login;
        }
        return <Comp navigator={navigator} />
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'login'}}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }

}

class Login extends Component {
    render() {
        let navi = this.props.navigator;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>{navi.push({name: 'home'})}} >
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome} onPress={()=>{navi.push({
                    name : "home"
                })}} >
                    replace
                </Text>
            </View>
        );
    }
}

class Home extends Component {

    state = {
        fixed : false,
    }

    render() {
        let _this = this;
        let navi = this.props.navigator;
        console.log(navi.getCurrentRoutes())
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>{navi.pop()}}>
                    Welcome to React Native!
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('test', () => Index);
