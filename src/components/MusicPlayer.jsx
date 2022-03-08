import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function MusicPlayer (props){

    return(
    <ReactAudioPlayer
          src={props.song}
          autoPlay
          controls
        />
    )
}


/*
//this will loop the player
    <ReactAudioPlayer
          src={props.song}
          autoPlay
          controls
          loop
        />
*/