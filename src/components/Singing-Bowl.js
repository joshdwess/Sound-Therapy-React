import { useRef, useState } from "react";
import {CgBowl} from "react-icons/cg";
import {BsPauseFill} from "react-icons/bs";
import Singingbowl from "../audio/Bowl.mp3"

const Bowl = () => {
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
    <audio ref={audioPlayer} src={Singingbowl} loop></audio>
      <button className="sound-button" onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill/> : <CgBowl />}</button>
    </>
    )
}

export default Bowl;