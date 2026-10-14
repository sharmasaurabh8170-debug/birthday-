
import { useState } from "react";
import { supabase } from "../lib/supabase";
import "./Cake.css";

export default function Cake({ onBack }) {
  const [step, setStep] = useState("blow");
  const [showWish, setShowWish] = useState(false);
  const [wish, setWish] = useState("");
  const [savingWish, setSavingWish] = useState(false);
  const [wishStatus, setWishStatus] = useState("");
  const [wishSaved, setWishSaved] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleBlow = () => {
    setStep("blowing");

    setTimeout(() => {
      setStep("cut");
    }, 1000);
  };

  const handleCut = () => {
    setStep("cutting");

    setTimeout(() => {
      setStep("bite");
    }, 1200);
  };

  const handleSaveWish = async () => {
    const cleanedWish = wish.trim();

    if (!cleanedWish) {
      setWishStatus("Please write your birthday wish first 💗");
      return;
    }

    setSavingWish(true);
    setWishStatus("");

    try {
      const { error } = await supabase
        .from("birthday_wishes")
        .insert([{ wish: cleanedWish }]);

      if (error) {
        throw error;
      }

      setWishSaved(true);
      setWishStatus("Your wish has been saved successfully! 💌✨");
    } catch (error) {
      console.error("Error saving birthday wish:", error);

      setWishStatus(
        "We couldn't save your wish. Please try again. 💗"
      );
    } finally {
      setSavingWish(false);
    }
  };

  return (
    <main className="cake-page">
      <div className="cake-glow cake-glow-one" />
      <div className="cake-glow cake-glow-two" />

      {!showFinal && (
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      )}

      {/* BIRTHDAY CAKE EXPERIENCE */}

      {step !== "gift" && (
        <section className="cake-section">
          <p className="eyebrow">A LITTLE BIRTHDAY MAGIC ✨</p>

          {step === "blow" && (
            <>
              <h1 className="cake-heading">
                Blow the <span>Candles 🕯️</span>
              </h1>

              <p className="cake-intro">
                Close your eyes, make a little wish,
                <br />
                and blow out the candles. 💗
              </p>
            </>
          )}

          {step === "blowing" && (
            <>
              <h1 className="cake-heading">
                Make a Wish <span>✨</span>
              </h1>

              <p className="cake-intro">
                Whoosh! Blow those candles away! 💨
              </p>
            </>
          )}

          {(step === "cut" || step === "cutting") && (
            <>
              <h1 className="cake-heading">
                Time to <span>Cut the Cake 🎂</span>
              </h1>

              <p className="cake-intro">
                A birthday isn't complete without cake.
                <br />
                Let's cut your special cake! 💕
              </p>
            </>
          )}

          {step === "bite" && (
            <>
              <h1 className="cake-heading">
                A Little <span>Birthday Treat 🍰</span>
              </h1>

              <p className="cake-intro">
                I saved the sweetest piece just for you.
                <br />
                Come on, take a bite! 😋💗
              </p>
            </>
          )}

          {/* CAKE AND CANDLES */}

          <div
            className={`birthday-cake ${
              step === "cutting" ? "cake-cut" : ""
            } ${step === "bite" ? "cake-after-cut" : ""}`}
          >
            <div
              className={`candles ${
                ["blowing", "cut", "cutting", "bite"].includes(step)
                  ? "candles-blowing"
                  : ""
              }`}
            >
              {[1, 2, 3].map((candle) => (
                <div className="candle" key={candle}>
                  {step === "blow" && (
                    <div className="flame">🔥</div>
                  )}

                  {["cut", "cutting", "bite"].includes(step) && (
                    <div className="smoke">〰</div>
                  )}
                </div>
              ))}
            </div>

            <div className="cake-top">
              <span>♥ ♥</span>
            </div>

            <div className="cake-middle" />
            <div className="cake-bottom" />
            <div className="cake-plate" />

            {step === "bite" && (
              <div
                className="cake-slice"
                aria-label="A slice of birthday cake"
              >
                <div className="slice-icing">♥</div>
                <div className="slice-layer slice-layer-top" />
                <div className="slice-layer slice-layer-bottom" />
                <div className="slice-plate" />
              </div>
            )}
          </div>

          {/* CAKE BUTTONS */}

          {step === "blow" && (
            <button className="wish-button" onClick={handleBlow}>
              Blow the Candles 🕯️
            </button>
          )}

          {step === "blowing" && (
            <p className="cake-message">✨ Whoosh... ✨</p>
          )}

          {step === "cut" && (
            <button className="cut-cake-button" onClick={handleCut}>
              Cut the Cake 🎂
            </button>
          )}

          {step === "cutting" && (
            <p className="cake-message">
              Cutting your birthday cake... 🎂✨
            </p>
          )}

          {step === "bite" && (
            <button
              className="wish-button"
              onClick={() => {
                setStep("gift");
                setShowWish(false);
                setWishStatus("");
              }}
            >
              Take a Bite 😋🍰
            </button>
          )}
        </section>
      )}

      {/* TEDDY BEAR AND BIRTHDAY WISH */}

      {step === "gift" && !showFinal && (
        <section className="teddy-section">
          <p className="eyebrow">YOUR LITTLE SURPRISE 🎁</p>

          <div className="teddy">
            <div className="teddy-ear teddy-ear-left" />
            <div className="teddy-ear teddy-ear-right" />

            <div className="teddy-head">
              <div className="teddy-eye left" />
              <div className="teddy-eye right" />
              <div className="teddy-nose" />
              <div className="teddy-mouth" />
            </div>

            <div className="teddy-body">
              <div className="teddy-heart">♥</div>
            </div>

            <div className="teddy-arm teddy-arm-left" />
            <div className="teddy-arm teddy-arm-right" />
          </div>

          <h1 className="teddy-title">
            I am the <span>gift. 🧸</span>
          </h1>

          <p className="teddy-message">
            Because you deserve something
            <br />
            a little extra special today. ❤️
          </p>

          {!showWish && (
            <div className="wish-area">
              <button
                className="make-wish-button"
                onClick={() => {
                  setShowWish(true);
                  setWishStatus("");
                }}
              >
                Make a Wish ✨
              </button>
            </div>
          )}

          {showWish && (
            <div className="wish-box">
              {!wishSaved ? (
                <>
                  <h2>Make a Wish ✨</h2>

                  <p>
                    Write your birthday wish and keep it somewhere
                    special. 💖
                  </p>

                  <textarea
                    value={wish}
                    onChange={(event) => {
                      setWish(event.target.value);
                      setWishStatus("");
                    }}
                    placeholder="Write your wish here..."
                    maxLength={2000}
                    disabled={savingWish}
                  />

                  <p className="wish-character-count">
                    {wish.length}/2000
                  </p>

                  <button
                    className="send-wish-button"
                    onClick={handleSaveWish}
                    disabled={savingWish}
                  >
                    {savingWish
                      ? "Saving Your Wish... 💗"
                      : "Send My Wish 💌"}
                  </button>
                </>
              ) : (
                <h2>Wish Saved! 💖</h2>
              )}

              {wishStatus && (
                <p className="wish-status" role="status">
                  {wishStatus}
                </p>
              )}
            </div>
          )}

          {/* REVEAL FINALE AFTER SUCCESSFUL SAVE */}

          {wishSaved && (
            <button
              className="final-reveal-button"
              onClick={() => setShowFinal(true)}
            >
              One Last Thing, Pari… 💌
            </button>
          )}
        </section>
      )}

      {/* CINEMATIC FINAL SURPRISE */}

      {step === "gift" && showFinal && (
        <section className="final-surprise">
          <div className="final-stars" aria-hidden="true">
            <span>✦</span>
            <span>✧</span>
            <span>♡</span>
            <span>✦</span>
            <span>✧</span>
            <span>♡</span>
            <span>✦</span>
          </div>

          <div className="final-content">
            <p className="final-eyebrow">
              ONE LAST THING, PARI ✨
            </p>

            <div className="final-heart" aria-hidden="true">
              ♡
            </div>

            <h1 className="final-title">
              My World Is <span>More Beautiful</span>With You ❤️
            </h1>

            <p className="final-message">
              Babbyyy 💕💖 , I made this little world just for you 💞,
              <br />
              filled with memories and moments 💞 ,
              <br />
              that mean soooo muchhhh to me. 💕🤞😚
              <br />
              <br />
              I hope this little surprise brings, 🤗
              <br />
              a smile to your face today..   😘🤗💘
              <br />
              and whenever you remember it. 💘💗
            </p>

            <div className="final-divider">
              <span>✦</span>
              <span>♡</span>
              <span>✦</span>
            </div>

            <p className="final-signature">
              Happy Birthday, Wifey ! 🎂💘
            </p>

            <p className="final-forever">
              Made with love, just for you. 💘😘🤗
              <br />
            </p>

            <button
              className="final-replay-button"
              onClick={() => setShowFinal(false)}
            >
              Return to Your Surprise 💕
            </button>
          </div>
        </section>
      )}
    </main>
  );
}