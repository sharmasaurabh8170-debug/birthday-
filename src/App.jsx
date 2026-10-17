import { useState } from "react";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

import Memories from "./pages/Memories";
import Letter from "./pages/Letter";
import Cake from "./pages/Cake";

const CORRECT_BIRTHDAY = {
day: 21,
month: 10,
year: 2008,
};

export default function App() {
const [birthday, setBirthday] = useState("");
const [error, setError] = useState("");
const [unlocked, setUnlocked] = useState(false);
const [started, setStarted] = useState(false);
const [page, setPage] = useState("home");
const [retry, setRetry] = useState(false);
const [mascotLoaded, setMascotLoaded] = useState(true);

function checkBirthday(event) {
event.preventDefault();

if (!birthday) {
  setError("Pehle birthday date toh enter karo! 💗");
  setRetry(true);
  return;
}

const [year, month, day] = birthday.split("-").map(Number);

const isCorrect =
  day === CORRECT_BIRTHDAY.day &&
  month === CORRECT_BIRTHDAY.month &&
  year === CORRECT_BIRTHDAY.year;

if (isCorrect) {
  setError("");
  setRetry(false);
  setUnlocked(true);
  setStarted(false);
} else {
  setError("BUUGUUU! 😝 Galat birthday! Dobara try karo!");
  setRetry(true);
}

}

function enterWebsite() {
setStarted(true);
setPage("home");
}

function goHome() {
setPage("home");
}

if (unlocked && !started) {
return ( <main className="welcome-screen"> <div className="background-glow glow-one" /> <div className="background-glow glow-two" />

    <div className="welcome-card">
      <div className="welcome-sparkle">✨ 💗 ✨</div>

      <p className="eyebrow">A little surprise for you  💗</p>

      <h1 className="welcome-title">
        YAYYY ! 💕
        <br />
        <span>You unlocked the gift !🧸</span>
      </h1>

      <p className="welcome-text">
        Someone very special is waiting for you inside. 🥹💕
      </p>

      <div className="welcome-decoration">🎂 🎁 🧸</div>

      <button className="begin-button" onClick={enterWebsite}>
        Open My Surprise  💗<span>♡</span>
      </button>
    </div>

    <MusicPlayer autoPlay={false} />
  </main>
);

}

if (!unlocked) {
return ( <main className="birthday-page"> <div className="background-glow glow-one" /> <div className="background-glow glow-two" />

    <div className="floating-heart heart-one">♡</div>
    <div className="floating-heart heart-two">♥</div>
    <div className="floating-heart heart-three">♡</div>

    <div className="birthday-content">
      {/* Main birthday heading */}
      <header className="birthday-hero">
        <p className="eyebrow">
          A little surprise made with love ✨
        </p>

        <h1 className="hero-birthday-title">
          Happy Birthday
          <span>Babyyy! ♡</span>
        </h1>

        <p className="hero-subtitle">
          A little world made just for you 🎀
        </p>
      </header>

      {/* Doraemon and Secret Diary */}
      <div className="birthday-layout">
        {/* Left side: Doraemon */}
        <section
          className={`mascot-section ${
            retry ? "mascot-retry" : ""
          }`}
        >
          <div className="mascot-sparkle sparkle-one">✦</div>
          <div className="mascot-sparkle sparkle-two">✧</div>
          <div className="mascot-sparkle sparkle-three">♡</div>

          <div className="mascot-image-wrap">
            {mascotLoaded ? (
              <img
                className="doraemon-dance"
                src="/doraemon-dance.gif"
                alt="Doraemon dancing for a birthday surprise"
                onError={() => setMascotLoaded(false)}
              />
            ) : (
              <div
                className="mascot-placeholder"
                aria-label="Birthday mascot"
              >
                <span>🤖💙</span>
                <span className="mascot-placeholder-face">
                  🐱
                </span>
              </div>
            )}
          </div>

          <div className="mascot-speech">
            {retry ? (
              <>
                <span className="speech-emoji">😝</span>
                <p>Buuguu! Wrong birthday!</p>
                <small>Try again, birthday girl! 💗</small>
              </>
            ) : (
              <>
                <span className="speech-emoji">🎀</span>
                <p>Your Doraemon is waiting!</p>
                <small>
                  Unlock your special surprise 💕
                </small>
              </>
            )}
          </div>

          <p className="mascot-caption">
            Made with a little magic & lots of love
          </p>
        </section>

        {/* Right side: Secret Diary and lock */}
        <section className="birthday-card diary-card">
          <div className="diary-ribbon">
            ♡ A SECRET JUST FOR YOU ♡
          </div>

          <div className="diary-cover">
            <div className="diary-cover-decoration">
              <span>✦</span>
              <span className="diary-bow">🎀</span>
              <span>✦</span>
            </div>

            <div className="diary-lock" aria-hidden="true">
              <span className="lock-shackle" />
              <span className="lock-body">♡</span>
            </div>

            <p className="diary-cover-small">MY LITTLE</p>

            <h2 className="diary-title">
              Secret
              <br />
              Diary
            </h2>

            <p className="diary-cover-footer">
              Only for the birthday girl  💗
            </p>
          </div>

          <p className="eyebrow diary-eyebrow">
            Your little surprise awaits 💗
          </p>

          <h2 className="birthday-title diary-heading">
            Hey, Birthday
            <br />
            <span>Princess! ♡</span>
          </h2>

          <p className="question">
            Enter your birthday to unlock this little diary. 🎂
          </p>

          <form
            onSubmit={checkBirthday}
            className="birthday-form"
          >
            <label htmlFor="birthday-date">
              Your secret birth-date 🎂
            </label>

            <input
              id="birthday-date"
              type="date"
              value={birthday}
              onChange={(event) => {
                setBirthday(event.target.value);
                setError("");
                setRetry(false);
              }}
              required
            />

            {error && (
              <p className="error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="unlock-button">
              <span aria-hidden="true">🔐</span>
              Unlock My gift 💕🎀
              <span aria-hidden="true">♡</span>
            </button>
          </form>

          <div className="card-divider">
            <span>✦</span>
            <span>♡</span>
            <span>✦</span>
          </div>

          <p className="secret">
            fast... a little birthday magic is waiting inside ✨
          </p>
        </section>
      </div>
    </div>

    <MusicPlayer autoPlay={false} />
  </main>
);

}

return (
<>
{page === "memories" ? ( <Memories onBack={goHome} />
) : page === "letter" ? ( <Letter onBack={goHome} />
) : page === "cake" ? ( <Cake onBack={goHome} />
) : ( <main className="home-page"> <div className="home-background-glow glow-left" /> <div className="home-background-glow glow-right" />

      <div className="home-content">
        <p className="eyebrow">
          Today is all about you ✨
        </p>

        <div className="home-sparkles">✧ ˚ · ♡ · ˚ ✧</div>

        <h1 className="birthday-title">
          Happpyyy Birthday ,
          <br />
          <span>Wifeeyyy  💗!</span>
        </h1>

        <p className="her-name">
          A little world made just for you 💗
        </p>

        <p className="home-description">
          Every little corner holds a surprise.✨
          <br />
          Pick one and let the gifts begin.💗🦋
        </p>

        <div className="experience-grid">
          <button
            className="experience-card memories-card"
            onClick={() => setPage("memories")}
          >
            <span className="card-icon">📸</span>
            <h2>My Beautiful Babbyy 💗💕🎀</h2>
            <p>I Loveeee Uhhhh Wifeyyy 💗🎀...</p>
            <span className="card-arrow">↗</span>
          </button>

          <button
            className="experience-card letter-card"
            onClick={() => setPage("letter")}
          >
            <span className="card-icon">💌</span>
            <h2>MY Wishes and Love for you 💌🎀💗</h2>
            <p>Kuch Bate jo m Bol nhi pata🎀,kunki aapko dekhkr sb bhul jata hu💗.</p>
            <span className="card-arrow">↗</span>
          </button>

          <button
            className="experience-card cake-card"
            onClick={() => setPage("cake")}
          >
            <span className="card-icon">🎂</span>
            <h2>Your Cake is Waiting ✨🎂💗</h2>
            <p>Make a Wish and Lets Celebrate!✨💗</p>
            <span className="card-arrow">↗</span>
          </button>
        </div>

        <footer className="home-footer">
          Crafted with 💗 and a little birthday magic ✨
        </footer>
      </div>
    </main>
  )}

  <MusicPlayer autoPlay={started} />
</>
);
}
