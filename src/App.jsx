import { useState } from "react";
import "./App.css";
import Memories from "./pages/Memories";
import Letter from "./pages/Letter";
import Cake from "./pages/Cake";
const CORRECT_BIRTHDAY = {
  day: 21,
  month: 10,
  year: 2008,
};

function App() {
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [started, setStarted] = useState(false);
  const [page, setPage] = useState("home");

  const checkBirthday = () => {
    if (!birthday) {
      setError("Please enter your birthday ❤️");
      return;
    }

    const [year, month, day] = birthday.split("-").map(Number);

    const correct =
      day === CORRECT_BIRTHDAY.day &&
      month === CORRECT_BIRTHDAY.month &&
      year === CORRECT_BIRTHDAY.year;

    if (correct) {
      setError("");
      setUnlocked(true);
    } else {
      setError("Hmm... that's not the date I'm looking for 💕");
    }
  };

  /* =========================
     HOME PAGE
  ========================= */

  if (started) {
    if (page === "memories") {
      return <Memories onBack={() => setPage("home")} />;
    }

    if (page === "letter") {
  return <Letter onBack={() => setPage("home")} />;
}

if (page === "cake") {
  return <Cake onBack={() => setPage("home")} />;
}

    return (
      <main className="home-page">

        <div className="home-background-glow glow-left" />
        <div className="home-background-glow glow-right" />

        <div className="home-content">

          <p className="eyebrow">
            TODAY IS A LITTLE MORE SPECIAL 😘😚
          </p>

          <div className="home-sparkles">
            ✦　✧　✦　✧　✦
          </div>

          <h1 className="birthday-title">
           <span> Happy </span>
            <span>Birthday 💝❣</span>
          </h1>

          <p className="her-name">
      
          </p>

          <p className="home-description">
            I made this little world just for you ❤️.
            <br />
            Take your time and discover every little surprise ❤️.
          </p>

          <div className="experience-grid">

            {/* OUR MEMORIES */}
            <button
              className="experience-card"
              onClick={() => setPage("memories")}
            >
              <div className="card-icon">
                📸
              </div>

              <div>
                <h2>
                 <span> My Princess ❤️</span>
                  </h2>

                <p>
                  Little moments that mean a lot ❤️.
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>
            </button>

            {/* A LETTER FOR YOU */}
            <button
                className="experience-card"
                onClick={() => setPage("letter")}
>
  <div className="card-icon">
                💌
              </div>

              <div>
                <h2>
                  <span> My Love for You ❤️</span>
                  </h2>

                <p>
                  Something I wanted to tell you ❤️.
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>
            </button>

            {/* YOUR BIRTHDAY */}
            <button
  className="experience-card cake-card"
  onClick={() => setPage("cake")}
>
              <div className="card-icon">
                🎂
              </div>

              <div>
                <h2>
                 <span> Cake cutting time😁😚</span> 
                  </h2>

                <p>
                  There's a surprise waiting😉..
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>
            </button>

          </div>

          <p className="home-footer">
            Made with love💘❤..
          </p>

        </div>
      </main>
    );
  }

  /* =========================
     WELCOME SCREEN
  ========================= */

  if (unlocked) {
    return (
      <main className="welcome-screen">

        <div className="stars">
          ✦　✧　✦　✧　✦
        </div>

        <p className="eyebrow">
          A LITTLE SURPRISE FOR YOU ❣💝
        </p>

        <h1>
         <span> Welcome, </span>
          <span>Babyy 💝❣</span>
        </h1>

        <p className="welcome-text">
          I made something special for you 🤗..
          <br />
          And this is only the beginning 😎..
        </p>

        <button
          className="begin-button"
          onClick={() => setStarted(true)}
        >
         <span> Begin the surprise 💖💝..</span>
          
        </button>

      </main>
    );
  }

  /* =========================
     BIRTHDAY GATE
  ========================= */

  return (
    <main className="birthday-page">

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <div className="floating-heart heart-one">
        ♡
      </div>

      <div className="floating-heart heart-two">
        ♡
      </div>

      <div className="floating-heart heart-three">
        ♡
      </div>

      <section className="birthday-card">

        <div className="gift">
          <div className="gift-glow" />
          <span>🎁</span>
        </div>

        <p className="eyebrow">
          A LITTLE SURPRISE FOR YOU 💖💝.
        </p>

        <h1>
          Before we
          <span>begin...</span>
        </h1>

        <p className="question">
          I need to know something first.
        </p>

        <label htmlFor="birthday">
          When is your birthday?
        </label>

        <input
          id="birthday"
          type="date"
          value={birthday}
          onChange={(event) => {
            setBirthday(event.target.value);
            setError("");
          }}
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <button
          className="unlock-button"
          onClick={checkBirthday}
        >
          Unlock my surprise 🤞😜
          <span>♥</span>
        </button>

        <p className="secret">
          Birthday girl knows the answer👻 ...
        </p>

      </section>

    </main>
  );
}

export default App;