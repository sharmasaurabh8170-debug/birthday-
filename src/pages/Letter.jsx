import { useState } from "react";

export default function Letter({ onBack }) {
  const [opened, setOpened] = useState(false);
const [opening, setOpening] = useState(false);

const handleOpenLetter = () => {
  setOpening(true);

  setTimeout(() => {
    setOpened(true);
    setOpening(false);
  }, 900);
};

  return (
    <main className="letter-page">

      <div className="letter-glow letter-glow-one" />
      <div className="letter-glow letter-glow-two" />

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      {!opened ? (
        /* =================================
           ENVELOPE SCREEN
        ================================= */

        <section className="envelope-section">

          <p className="eyebrow">
            SOMETHING I WANTED TO TELL YOU 💕❤️
          </p>

          <h1 className="letter-heading">
          
            <span>For Birthday Girl ❤️😁</span>
          </h1>

          <p className="letter-intro">
            Some things are easier to write
            than to say 🤭.
          </p>
          <button
  className={`envelope ${opening ? "envelope-opening" : ""}`}
  onClick={handleOpenLetter}
  aria-label="Open letter"
>

            <div className="envelope-flap" />

            <div className="envelope-body">

              <span className="envelope-heart">
                ♥
              </span>

            </div>

            <div className="envelope-label">
              For My Girl💕
            </div>

          </button>

          <p className="open-hint">
            Click the envelope to open .
          </p>

        </section>

      ) : (

        /* =================================
           OPENED LETTER
        ================================= */

        <section className="letter-content-section">

          <div className="letter-card">

            {/* Elegant inner border */}

            <div className="letter-card-border" />


          

            {/* Header decoration */}

            <div className="letter-card-header">

              <span className="letter-mini-line" />

            </div>

            {/* Small heading */}

            <p className="letter-card-label">
             <nav> A LETTER, JUST FOR YOU 😘😙</nav>
            </p>

            {/* Main heading */}

            <h1 className="letter-card-title">
              <span>Happy Birthday </span>
              <span>Babyy 🤭❤️</span>
            </h1>

            {/* Divider */}

            <div className="letter-divider">
              
            </div>

            {/* Greeting */}

            <p className="letter-greeting">
             
              <span>for My Ladoo💕❤️ </span>
            </p>

            {/* Main letter */}

            <div className="letter-card-text">

              <p>
               <nav> Happiesttt Birthday to bestestttt part of my life 🤗😁😍..</nav>
                        <nav>MY Dear Bestfriend 😘😙😘❤️..</nav>
                <nav> who makes it very special by coming into my life 🤭❤️..</nav>
                  <nav>I hope you are always with me ❤️💕...</nav>
              </p>

              <p>
                <nav>Its your 3rd birthday with me 🤭</nav>

                <nav>In a relationship 2nd h but this is best because is bar aap bilkul mere pass rhoge 😁🤗</nav>
               <nav> to kuch to special bnta h n ❤️😁..</nav>
              </p>
              <p>
               <nav> Hope so hum hmesha aapka Birthday sath celebrate kre🤭❤️...</nav>
              </p>

              <p>
                <nav> khene ko to bhoot kuch h but kuch times ,
                words enough nhi hote ❣❤️..</nav>

                <nav>aur aapke aage to ma waise bhi sb kuch bhul jata hu❤️😁🤭..</nav>

              <nav> You are such a princess🤭 With a pure soul and heart ❣💘🤗..</nav>
                
              </p>

              {/* Highlighted message */}

              <div className="letter-highlight">

                <span>♡❤️</span>

                <p>
                 <nav>Hmne jitna bhi time sath m spend kiya h vo 
                  best tha mere liye ❣💘❤️...</nav>

                 <nav> ya khe to aap hi best ho mere liye❤️😁..</nav>
                </p>

              </div>

              {/* Personal section */}

              <p className="personal-placeholder">
               <nav>Always remember you are the best 💕❤️..</nav>
               </p>

               <p> ma jb jb aapko dekhta hu  ,
                aap hmesha pichli bar se jyada pyare lgte ho 💕❤️..
                <nav>jaise aapka nam h waise hi aap khud ho💕❤️..</nav>
                         <nav>   PARI ❤️😁🤭...</nav>
              </p>

              <p className="personal-placeholder">
                <nav>Remember jb hmari phli bar bat start hui thi 😁..</nav>
                <nav>aur vo nights jb hmari hesitation kam hui 🤭..</nav>
                <nav> aur humne ek dusre ke sath comfortable hona start kiya tha ❤️😁..</nav>
                
              </p>

              <p className="personal-placeholder">
                <nav>yaad h vo hmari first kiss 🤭..
                jo hmne dr dr kr ki thii 💕❤️..</nav>
                <nav>but sachii vo moment mere liye bhoot special tha ❤️
                  aur hmesha rhega 💝🤗..</nav>

               <nav> usse to m kabhi ni bhulnga 🤭..</nav>
              </p>

              <p>
                I hope this birthday brings you lots
                of happiness, beautiful memories🤞💕❤️,
                and countless reasons to smile💕❤️💕...
                </p>
                
                <p> 
                  <nav> Hmesha ese hi hste rhna babyy ❤️🤭🤞</nav>
              </p>

            </div>

            {/* Wish section */}

            <div className="letter-wish">
              <p>
               <nav> one again happy birthday wifeyyy 💝🤗😘.</nav>

               <nav> hmesha happy rhna aur meri rhna 😁💘💞.</nav>
               
               <nav>Happy happy happy Birthday my Love 💞</nav>
              </p>

            </div>

            {/* Signature */}

            <div className="letter-card-footer">

              <div>

                <span>
                    
                 <nav> With love 💕❤️..</nav>
                     
                </span>

                <h2>
                 
                <nav>your bacha❤️..</nav>
                </h2>

              </div>

             

            </div>

          </div>

          {/* Read again */}

          <button
            className="close-letter-button"
            onClick={() => setOpened(false)}
          >
            Read it again🤭..
          </button>

        </section>

      )}

    </main>
  );
}