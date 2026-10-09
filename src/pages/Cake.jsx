import { useState } from "react";

export default function Cake({ onBack }) {
  const [step, setStep] = useState("wish");
const [showWish, setShowWish] = useState(false);
const [wish, setWish] = useState("");

  const handleWish = () => {
    setStep("blow");
  };

  const handleBlow = () => {
    // Start candle-blowing animation
    setStep("blowing");

    // After the animation, show the cut-cake step
    setTimeout(() => {
      setStep("cut");
    }, 1000);
  };

  const handleCut = () => {
    setStep("cutting");

    setTimeout(() => {
      setStep("gift");
    }, 1200);
  };

  return (
    <main className="cake-page">
      <div className="cake-glow cake-glow-one" />
      <div className="cake-glow cake-glow-two" />

      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      {/* =========================
          CAKE SECTION
      ========================= */}

      {step !== "gift" && (
        <section className="cake-section">

          <p className="eyebrow">
            ONE MORE LITTLE SURPRISE 🤭
          </p>

          {/* =========================
              MAKE A WISH
          ========================= */}

          {step === "wish" && (
            <>
              <h1 className="cake-heading">
                Make a
                <span>Wish</span>
              </h1>

              <p className="cake-intro">
                Close your eyes and think of something 💫💬
                <br />
                you really wish for. ✨
              </p>
            </>
          )}

          {/* =========================
              BLOW CANDLES
          ========================= */}

          {(step === "blow" || step === "blowing") && (
            <>
              <h1 className="cake-heading">
                Now
                <span>Blow the Candles🕯️</span>
              </h1>

              <p className="cake-intro">
                Make your wish ✨...
                <br />
                and blow out the candles🕯️..
              </p>
            </>
          )}

          {/* =========================
              CUT CAKE
          ========================= */}

          {step === "cut" && (
            <>
              <h1 className="cake-heading">
                One Last
                <span>Thing...</span>
              </h1>

              <p className="cake-intro">
                Your wish has been made 💫.
                <br />
                Now let's cut the birthday cake🎂
              </p>
            </>
          )}

          {/* =========================
              CAKE
          ========================= */}

          <div
            className={`birthday-cake ${
              step === "cutting" ? "cake-cut" : ""
            }`}
          >

            {/* Candles */}

            <div
              className={`candles ${
                step === "blowing" ? "candles-blowing" : ""
              }`}
            >

              {/* Candle 1 */}

              <div className="candle">
                {(step === "wish" ||
                  step === "blow" ||
                  step === "blowing") && (
                  <div className="flame">
                    🔥
                  </div>
                )}

                {step === "cut" && (
                  <div className="smoke">
                    〰
                  </div>
                )}
              </div>

              {/* Candle 2 */}

              <div className="candle">
                {(step === "wish" ||
                  step === "blow" ||
                  step === "blowing") && (
                  <div className="flame">
                    🔥
                  </div>
                )}

                {step === "cut" && (
                  <div className="smoke">
                    〰
                  </div>
                )}
              </div>

              {/* Candle 3 */}

              <div className="candle">
                {(step === "wish" ||
                  step === "blow" ||
                  step === "blowing") && (
                  <div className="flame">
                    🔥
                  </div>
                )}

                {step === "cut" && (
                  <div className="smoke">
                    〰
                  </div>
                )}
              </div>

            </div>

            {/* Cake top */}

            <div className="cake-top">
              <span>♥ ♥</span>
            </div>

            {/* Cake layers */}

            <div className="cake-middle" />

            <div className="cake-bottom" />

            {/* Plate */}

            <div className="cake-plate" />

          </div>

          {/* =========================
              BUTTONS
          ========================= */}

          {/* Make a Wish */}

          {step === "wish" && (
            <button
              className="wish-button"
              onClick={handleWish}
            >
              Make a Wish ✨
            </button>
          )}

          {/* Blow Candles */}

          {step === "blow" && (
            <button
              className="wish-button"
              onClick={handleBlow}
            >
              Blow the Candles 🕯️
            </button>
          )}

          {/* Blowing animation */}

          {step === "blowing" && (
            <p className="cake-message">
              ✨ Whoosh... ✨
            </p>
          )}

          {/* Cut Cake */}

          {step === "cut" && (
            <button
              className="cut-cake-button"
              onClick={handleCut}
            >
              Cut the Cake🎂
            </button>
          )}

          {/* Cutting */}

          {step === "cutting" && (
            <p className="cake-message">
              Cutting your birthday cake...✨
            </p>
          )}

        </section>
      )}

      {/* =========================
          FINAL GIFT
      ========================= */}

      {step === "gift" && (
        <section className="teddy-section">

          <p className="eyebrow">
            AAPKA GIFT 😁✨
          </p>

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

              <div className="teddy-heart">
                ♥
              </div>

            </div>

            <div className="teddy-arm teddy-arm-left" />

            <div className="teddy-arm teddy-arm-right" />

          </div>

          <h1 className="teddy-title">
            I am the
            <span>gift. 🧸</span>
          </h1>

        <p className="teddy-message">
  Because you deserve something❤️
  <br />
  a little extra special today. ❤️
</p>

<div className="wish-area">
  <button
    className="make-wish-button"
    onClick={() => setShowWish(true)}
  >
    Make a Wish ✨
  </button>
</div>

{showWish && (
  <div className="wish-box">
    <h2>Make a Wish ✨</h2>

    <p>
      Write your birthday wish and keep it
      somewhere special. 💖
    </p>

    <textarea
      value={wish}
      onChange={(e) => setWish(e.target.value)}
      placeholder="Write your wish here..."
      maxLength={300}
    />

    <button
      className="send-wish-button"
      onClick={() => {
        console.log("Wish:", wish);
      }}
    >
      Send My Wish 💌
    </button>
  </div>
)}

</section>
      )}

    </main>
  );
}