import { useRef, useState } from "react";
import {TiWaves} from "react-icons/ti";
import {BsPauseFill} from "react-icons/bs";
import Wavesounds from "../audio/Waves.mp3"

const Waves = () => {
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
    <audio ref={audioPlayer} src={Wavesounds} loop></audio>
      <button className="sound-button" onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill/> : <TiWaves />}</button>
    </>
    )
}

export default Waves;