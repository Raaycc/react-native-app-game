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
  import axios from "axios";

export default class Jogar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: "",
            page: this.props.navigation.params.page,
            round: "",
            data: [],
            pontos: "",
        };
    }

    componentDidMount  () {
        handleInit();
    };

    handleInit = async () => {
        const http = await axios.get('http://jogoingles.test/api/pegar');
        alert(JSON.stringify(http.request));
    }

    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.seila}>
                    <Text> {this.state.page}</Text>
                    <Button title="Jogar" onPress/>
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