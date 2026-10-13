import { useEffect, useRef, useState } from "react";
import { Music2, Play, Pause } from "lucide-react";
import "./MusicPlayer.css";

export default function MusicPlayer({ autoPlay = false }) {
const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
const [error, setError] = useState(false);

useEffect(() => {
if (!autoPlay || !audioRef.current) return;

const audio = audioRef.current;

audio.play()
  .then(() => {
    setIsPlaying(true);
    setError(false);
  })
  .catch(() => {
    setIsPlaying(false);
    setError(true);
  });

}, [autoPlay]);

async function toggleMusic() {
const audio = audioRef.current;
if (!audio) return;

if (audio.paused) {
  try {
    await audio.play();
    setIsPlaying(true);
    setError(false);
  } catch {
    setIsPlaying(false);
    setError(true);
  }
} else {
  audio.pause();
  setIsPlaying(false);
}

}

return ( <div className="music-player">
<audio
ref={audioRef}
src="/music/birthday-song.mp3"
loop
preload="auto"
onPause={() => setIsPlaying(false)}
onPlay={() => {
setIsPlaying(true);
setError(false);
}}
/>

  <button
    className={`music-toggle ${isPlaying ? "playing" : ""}`}
    onClick={toggleMusic}
    aria-label={isPlaying ? "Pause birthday music" : "Play birthday music"}
    title={isPlaying ? "Pause music" : "Play music"}
  >
    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
    <Music2 size={17} />
  </button>

  {error && (
    <p className="music-error">
      Tap the music button to start the song.
    </p>
  )}
</div>

);
}
