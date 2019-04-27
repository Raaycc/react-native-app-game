import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
  } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.seila}>
                    <Button title="Jogar" onPress={() => this.props.navigation.navigate('AppInicio')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 30,
    },
    seila: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    }
})