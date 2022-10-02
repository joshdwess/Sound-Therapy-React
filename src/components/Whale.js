import { useRef, useState } from "react";
import {GiWhaleTail} from "react-icons/gi";
import {BsPauseFill} from "react-icons/bs";
import Whalesounds from "../audio/Whales.mp3"

const Whale = () => {
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
    <audio ref={audioPlayer} src={Whalesounds}></audio>
      <button className="sound-button" onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill/> : <GiWhaleTail />}</button>
    </>
    )
}

export default Whale;