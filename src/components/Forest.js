import { useRef, useState } from "react";
import {BsTree} from "react-icons/bs";
import {BsPauseFill} from "react-icons/bs";
import Forestsound from "../audio/Forest.mp3"

const Forest = () => {
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
    <audio ref={audioPlayer} src={Forestsound} loop></audio>
      <button className="sound-button" onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill/> : <BsTree />}</button>
    </>
    )
}

export default Forest;