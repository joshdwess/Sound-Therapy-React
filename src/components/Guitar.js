import { useRef, useState } from "react";
import {FaGuitar} from "react-icons/fa";
import {BsPauseFill} from "react-icons/bs";
import Guitaraudio from "../audio/Guitar.mp3";

const Guitar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    
    const audioPlayer =useRef();
    
    const togglePlayPause = () => {
      const prevValue = isPlaying; 
      setIsPlaying(!prevValue);
       if (!prevValue) {
        audioPlayer.current.play();
       }
       else {
        audioPlayer.current.pause();
       }
    }
    return( <>
    <audio ref={audioPlayer} src={Guitaraudio}loop></audio>
      <button className="sound-button" onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill/> : <FaGuitar />}</button>
    </>
    )
}

export default Guitar;