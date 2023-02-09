import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb.js'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PhonicSoundButton from './PhonicSoundButton.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <Header
          backgroundColor='#9c47c2'
          centerComponent={{ text: 'Fonema', style: { color: '#000', fontSize: 20 } }} />
        <Image style={styles.imageIcon} source={require('./assets/boca.png')} />
        <TextInput
          onChangeText={text => { this.setState({ text: text }) }}
          value={this.state.text}
          style={styles.inputBox}/>
        
        <TouchableOpacity
          style={styles.goButton}
          onPress={()=>{this.setState({ chunks: db[this.state.text].chunks })
          this.setState({phonicSounds: db[this.state.text].phones})
          }}>
          <Text style={styles.buttonText}>
            Go
          </Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>
          {this.state.displayText}
        </Text>
        <View>
          {this.state.chunks.map((item, index)=>{
            return(
              <PhonicSoundButton 
              wordChunk={this.state.chunks[index]}
              soundChunk={this.state.phonicSounds[index]}
              key={index} />
            )
          })}
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontWeight: 'bold'
  },
  goButton: {
    width: 65,
    height: 65,
    alignSelf: 'center',
    padding: 10,
    margin: 25,
    borderWidth: 4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cdcdcd'
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  displayText: {
    alignItems: 'center',
    fontSize: 30
    },
  imageIcon: {
    width: 150,
    height: 100,
    marginLeft: 100,
    },
    chunkButton: {
    backgroundColor: 'red',
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10
    }
});
