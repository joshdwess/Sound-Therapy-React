import { useRef, useState } from "react";
import {BsCloudRain} from "react-icons/bs";
import {BsPauseFill} from "react-icons/bs";
import RainAudio from "../audio/Rainstorm.mp3"

const Rain = () => {
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
    <audio ref={audioPlayer} src={RainAudio}  loop></audio>
      <button className="sound-button" onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill/> : <BsCloudRain />}</button>
    </>
    )
}

export default Rain;