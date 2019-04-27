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

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: "",
            dados: []
        };
    }

    componentDidMount  () {
        
    };

    handleInit = async () => {
        try{
            const http = await axios.get('https://backendinglesfap.herokuapp.com/api/pegar');
            alert(JSON.stringify(http.data));
            this.setState({dados: http.data});
        } catch (error){
            alert(error, "error doido");
        }
        
    }

    handleGay = () => {
        alert("GAYYY");
    }

    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.seila}>
                    <Button title="Jogar" onPress={() => this.handleInit()}/>
                    <Button title="vai tomano cu" onPress={() => this.props.navigation.navigate('Jogar', {page: this.state.dados.current_page})}/>
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