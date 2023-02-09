import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import { Audio } from 'expo-av'
export default class PhonicSoundButton extends Component{
    playSound = async(soundChunk)=>{
        var SoundLink='https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3'
        await Audio.Sound.createAsync({
            uri: SoundLink
        },
        {
            shouldPlay: true
        })   
    }
    render(){
        return(
            <TouchableOpacity 
            onPress={()=> {
                this.playSound(this.props.soundChunk)
            }}
            style={styles.chunkButton}>
                <Text>
                    {this.props.wordChunk}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    displayText:{
        textAlign: 'center',
        fontSize: 30,
        color: '#fff'
    },
    chunkButton:{
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        margin: 5,
        backgroundColor: 'red'
    }
})