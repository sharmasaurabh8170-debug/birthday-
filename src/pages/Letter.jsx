
import { useState } from "react";
import "./Letter.css";

export default function Letter({ onBack }) {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);

  function handleOpenLetter() {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      setOpened(true);
      setOpening(false);
    }, 900);
  }

  return (
    <main className="letter-page">
      <div className="letter-glow letter-glow-one" />
      <div className="letter-glow letter-glow-two" />

      <button className="back-button letter-back-button" onClick={onBack}>
        ← Back
      </button>

      {!opened ? (
        <section className="envelope-section">
          <div className="letter-top-decoration">✦ ♡ ✦</div>

          <p className="eyebrow">A LITTLE SOMETHING FROM MY HEART 💗</p>

          <h1 className="letter-heading">
            A Letter
            <span>For My Birthday Girl ❤️</span>
          </h1>

          <p className="letter-intro">
            Kuch baatein kehna mushkil hota hai...
            <br />
            toh socha tumhare liye likh hi doon. 🤭💕
          </p>

          <button
            type="button"
            className={`envelope ${opening ? "envelope-opening" : ""}`}
            onClick={handleOpenLetter}
            aria-label="Open your birthday letter"
            disabled={opening}
          >
           <div className="envelope-back" />

<div className="envelope-paper">
  <span>♡</span>
  <small>A LITTLE LETTER</small>
</div>

<div className="envelope-flap" />

<div className="envelope-body" />

<div className="envelope-love-seal">
  <span>❤️</span>
</div>

<div className="envelope-label">For My Girl 🤭💕❤️</div>
          </button>

          <p className="open-hint">
            {opening
              ? "Opening something special for you... 💗"
              : "Tap the envelope to open your letter ❤️"}
          </p>

          <div className="letter-bottom-decoration">
            Made with love, just for you ✨❤️
          </div>
        </section>
      ) : (
        <section className="letter-content-section">
          <article className="letter-card">
            <div className="letter-card-border" />

            <header className="letter-card-header">
              <span>✦</span>
              <p>A LITTLE LETTER, JUST FOR YOU ❤️</p>
              <span>✦</span>
            </header>

            <div className="letter-card-title-wrap">
              <p className="letter-card-label">FOR MY FAVOURITE PERSON 💌</p>

              <h1 className="letter-card-title">
                Happy Birthday❤️
                <span>Babyy! 😁❤️</span>
              </h1>

              <div className="letter-divider">
                <span>♡    ❤️   </span>
              </div>

              <p className="letter-greeting">For my Ladoo 💕❤️</p>
            </div>

            <div className="letter-card-text">
              <p>
                Happiesttt Birthday to the bestesttt part of my life
                🤗😁😍...
                <br />
                My dear bestfriend 😘😙😘❤️...
                <br />
                Thank you for making my life so special by being a part
                of it. 🤭❤️
                <br />
                I hope you are always with me. ❤️💕
              </p>

              <p>
                It's your 3rd birthday with me. 🤭
                <br />
                Relationship mein 2nd hai, but this one is the best,
                kyunki is baar aap bilkul mere paas rahoge. 😁🤗
                <br />
                Toh kuch toh special banta hai na! ❤️😁
              </p>

              <p>
                Hope so hum hamesha aapka birthday saath celebrate
                karein. 🤭❤️
                <br />
                Kehne ko toh bahut kuch hai, but sometimes words
                enough nahi hote. ❣️❤️
                <br />
                Aur aapke aage toh main waise bhi sab kuch bhool jaata
                hoon. ❤️😁🤭
              </p>

              <p>
                You are such a princess, with a pure soul and heart.
                ❣️💘🤗
              </p>

              <div className="letter-highlight">
                <span className="highlight-heart">♡</span>
                <p>
                  Humne jitna bhi time saath mein spend kiya hai,
                  woh mere liye best tha. ❣️💘❤️
                  <br />
                  Ya kahe toh aap hi best ho mere liye. ❤️😁
                </p>
                <span className="highlight-heart">♡</span>
              </div>

              <p>
                Always remember, you are the best. 💕❤️
                <br />
                Main jab-jab aapko dekhta hoon, aap hamesha pichhli
                baar se zyada pyaare lagte ho. 💕❤️
                <br />
                Jaise aapka naam hai, waise hi aap khud ho...
                <br />
                <strong>PARI ❤️😁🤭</strong>
              </p>

              <div className="memory-note">
                <span className="memory-note-icon">🦋</span>
                <h2>Our Little Memories</h2>

                <p>
                  Yaad hai jab humari pehli baar baat start hui thi?
                  😁
                  <br />
                  Aur woh nights, jab humari hesitation kam hui aur
                  hum ek-doosre ke saath comfortable hona start hue.
                  ❤️😁
                </p>
              </div>

              <p>
                Yaad hai humara woh special first-kiss moment? 🤭💕
                <br />
                Woh moment mere liye bahut special tha aur hamesha
                rahega. 💝🤗
                <br />
                Usse toh main kabhi nahi bhoolunga. ❤️
              </p>

              <p>
                I hope this birthday brings you lots of happiness,
                beautiful memories 🤞💕❤️, and countless reasons
                to smile. 💕❤️💕
              </p>

              <p className="letter-final-line">
                Hamesha aise hi haste rehna, babyy. ❤️🤭🤞
              </p>
            </div>

            <div className="letter-wish">
              <span className="wish-decoration">✧</span>

              <p className="wish-small">ONE MORE TIME, FROM MY HEART</p>

              <h2>Happy Birthday, Wifeyyy! 💝</h2>

              <p>
                Hamesha happy rehna aur apni khushiyon ko kabhi mat
                khona. 😁💘
              </p>

              <p className="wish-main">
                Happy, happy, happy birthday, my favourite person! 💞
              </p>

              <span className="wish-decoration">♡</span>
            </div>

            <footer className="letter-card-footer">
              <p>With lots of love 💕❤️</p>
              <h2>Your Bacha ❤️</h2>
              <span>Forever a special part of your memories ✨</span>
            </footer>

            <div className="letter-card-end">♡ · ✦ · ♡</div>
          </article>

          <div className="letter-bottom-actions">
            <button
              type="button"
              className="close-letter-button"
              onClick={() => {
                setOpened(false);
                setOpening(false);
              }}
            >
              ↶ Read It Again 😋❤️
            </button>

            <button
              type="button"
              className="back-button letter-mobile-back"
              onClick={onBack}
            >
              ← Back to Home ❤️
            </button>
          </div>
        </section>
      )}
    </main>
  );
}