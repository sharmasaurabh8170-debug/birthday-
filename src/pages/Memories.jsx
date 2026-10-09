import { useState } from "react";

const memories = [
  {
    src: "/photos/memory01.jpg",
    title: "Starting to Bachpan se hi honi chaiye n 😁😁",
    caption: "PYARA BACHA 😘😁.",
  },
  {
    src: "/photos/memory02.jpg",
    title: "",
    caption: "A little moment that means a lot.",
  },
  {
    src: "/photos/memory03.jpg",
    title: "That smile",
    caption: "One of my favorite memories.",
  },
  {
    src: "/photos/memory04.jpg",
    title: "Together",
    caption: "Another memory worth keeping close.",
  },
  {
    src: "/photos/memory05.jpg",
    title: "A special day",
    caption: "Some moments become memories forever.",
  },
  {
    src: "/photos/memory06.jpg",
    title: "Beautiful memories",
    caption: "A moment I will always remember.",
  },
  {
    src: "/photos/memory07.jpg",
    title: "Another chapter",
    caption: "And another beautiful memory added to our story.",
  },
  {
    src: "/photos/memory08.jpg",
    title: "Just us",
    caption: "A simple moment, a special memory.",
  },
  {
    src: "/photos/memory09.jpg",
    title: "Forever memorable",
    caption: "Some pictures say more than words.",
  },
  {
    src: "/photos/memory10.jpg",
    title: "A little happiness",
    caption: "One more reason to smile.",
  },
  {
    src: "/photos/memory11.jpg",
    title: "Sweet memory",
    caption: "Keeping this one close to my heart.",
  },
  {
    src: "/photos/memory12.jpg",
    title: "Another beautiful moment",
    caption: "A memory worth coming back to.",
  },
  {
    src: "/photos/memory13.jpg",
    title: "Our little story",
    caption: "Another page in our story.",
  },
  {
    src: "/photos/memory14.jpg",
    title: "Good times",
    caption: "A moment that deserves to be remembered.",
  },
  {
    src: "/photos/memory15.jpg",
    title: "Pure happiness",
    caption: "Some memories never get old.",
  },
  {
    src: "/photos/memory16.jpg",
    title: "A special memory",
    caption: "This one will always be special.",
  },
  {
    src: "/photos/memory17.jpg",
    title: "One more memory",
    caption: "Another moment to keep forever.",
  },
  {
    src: "/photos/memory18.jpg",
    title: "Beautiful day",
    caption: "A beautiful memory from a beautiful time.",
  },
  {
    src: "/photos/memory19.jpg",
    title: "Always remember",
    caption: "A memory made to last.",
  },
  {
    src: "/photos/memory20.jpg",
    title: "The memories",
    caption: "And this is only the beginning.",
  },
];

export default function Memories({ onBack }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const availableMemories = memories.filter((memory) => {
    return true;
  });

  const currentIndex = selectedPhoto
    ? availableMemories.findIndex(
        (memory) => memory.src === selectedPhoto.src
      )
    : -1;

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      (currentIndex - 1 + availableMemories.length) %
      availableMemories.length;

    setSelectedPhoto(availableMemories[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      (currentIndex + 1) % availableMemories.length;

    setSelectedPhoto(availableMemories[nextIndex]);
  };

  return (
    <main className="memories-page">
      <div className="memories-glow glow-one"></div>
      <div className="memories-glow glow-two"></div>

      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <section className="memories-header">
        <p className="eyebrow">OUR LITTLE WORLD</p>

        <h1>
          Our <span>Memories</span>
        </h1>

        <p>
          Every picture holds a moment,
          <br />
          and every moment is worth remembering.
        </p>
      </section>

      <div className="birthday-watermark">
        HAPPY BIRTHDAY
      </div>

      <section className="memories-grid">
        {availableMemories.map((memory, index) => (
          <article
            key={memory.src}
            className={`memory-card memory-card-${(index % 6) + 1}`}
            onClick={() => setSelectedPhoto(memory)}
          >
            <div className="memory-image-wrapper">
              <img
                src={memory.src}
                alt={memory.title}
                className="memory-image"
              />

              <div className="memory-overlay">
                <span>View memory</span>
                <span className="memory-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="memory-info">
              <h3>{memory.title}</h3>
              <p>{memory.caption}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="memories-footer">
        <span>20 memories</span>
        <span>♥</span>
        <span>More to come...</span>
      </footer>

      {selectedPhoto && (
        <div
          className="lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-left"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
            />

            <div className="lightbox-caption">
              <span>
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(availableMemories.length).padStart(2, "0")}
              </span>

              <h2>{selectedPhoto.title}</h2>

              <p>{selectedPhoto.caption}</p>
            </div>
          </div>

          <button
            className="lightbox-arrow lightbox-right"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}