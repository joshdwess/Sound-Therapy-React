import { useRef, useState } from "react";
import {FaEarlybirds} from "react-icons/fa";
import {BsPauseFill} from "react-icons/bs";
import Birdsounds from "../audio/Birds.mp3"

const Birds = () => {
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
    <audio ref={audioPlayer} src={Birdsounds} loop></audio>
      <button className="sound-button" onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill/> : <FaEarlybirds />}</button>
    </>
    )
}

export default Birds;