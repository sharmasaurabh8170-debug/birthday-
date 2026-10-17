
import { useState, useEffect, useRef } from "react";
import "./Memories.css";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
  Play,
  BookHeart,
} from "lucide-react";

const memoryFolders = [
  {
    id: "first",
    title: "Little Baby",
    description: "When my babyy is actually a babyy 😁😅.",
    photos: [
      "cover.jpg",
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg",
      "photo6.jpg",
      "photo7.jpg",
      "photo8.jpg",
    ].map((name) => ({
      src: `/memories/little-baby/${name}`,
      type: "photo",
    })),
    videos: [],
  },
  {
    id: "Second",
    title: "Wife material 💕",
    description: "🤞💕",
    photos: [
      "cover.jpg",
      "photo1.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg",
      "photo6.jpg",
      "photo7.jpg",
      "photo8.jpg",
      "photo9.jpg",
      "photo10.jpg",
      "photo11.jpg",
      "photo12.jpg",
      "photo13.jpg",
      "photo14.jpg",
      "photo15.jpg",
      "phot016.jpg",
      "photo17.jpg",
      "photo18.jpg",
      "photo19.jpg",
      "photo20.jpg",
      "photo21.jpg",
      "photo22.jpg",
    ].map((name) => ({
      src: `/memories/my wifey/${name}`,
      type: "photo",
    })),
    videos: [],
  },
  {
    id: "Fourth",
    title: "When We're Together 🤞💕",
    description: "Our silly little moments 🤗👻",
    photos: [
      "cover.jpg",
      ...Array.from({ length: 15 }, (_, i) => `photo${i + 1}.jpg`),
    ].map((name) => ({
      src: `/memories/our moments/${name}`,
      type: "photo",
    })),
    videos: Array.from({ length: 13 }, (_, i) => ({
      src: `/memories/our moments/video${i + 1}.mp4`,
      type: "video",
    })),
  },
  {
    id: "Third",
    title: "Cutiepie ❤️",
    description: "My favorite person and my favorite memories.",
    photos: [
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg",
      "photo6.jpg",
      "photo8.jpg",
      "photo9.jpg",
      "photo10.jpg",
      "photo11.jpg",
      "photo12.jpg",
      "photo13.jpg",
      "cover.jpg",
      "photo14.jpg",
      "photo15.jpg",
      "photo16.jpg",
      "photo17.jpg",
    ].map((name) => ({
      src: `/memories/cutiepie/${name}`,
      type: "photo",
    })),
    videos: Array.from({ length: 7 }, (_, i) => ({
      src: `/memories/cutiepie/video${i + 1}.mp4`,
      type: "video",
    })),
  },
  {
    id: "Fifth",
    title: "Random Moments",
    description: "Privacy, vo nhi hoti hum dono m 😁👻.",
    photos: [
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg",
      "cover.jpg",
      "photo4.jpg",
      "photo5.jpg",
    ].map((name) => ({
      src: `/memories/little-moments/${name}`,
      type: "photo",
    })),
    videos: [13, 10, 9, 8, 7, 12, 11, 4, 3, 6, 5, 2, 1].map(
      (number) => ({
        src: `/memories/little-moments/video${number}.mp4`,
        type: "video",
      })
    ),
  },
];

const scrapbookPages = memoryFolders.map((folder) => ({
  ...folder,
  items: [...folder.photos, ...folder.videos].map((item) => ({
    ...item,
    collection: folder.title,
  })),
}));

const allMemories = scrapbookPages.flatMap((page) => page.items);

const pageSize = 8;
const photosPerSide = 4;
const FLIP_DURATION = 700;

export default function Memories({ onBack }) {
  const [coverOpen, setCoverOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [failedImages, setFailedImages] = useState([]);
  const [turnDirection, setTurnDirection] = useState("next");
  const [isTurning, setIsTurning] = useState(false);

  const flipTimer = useRef(null);

  const totalPages = Math.ceil(allMemories.length / pageSize);

  const visibleMemories = allMemories.slice(
    pageIndex * pageSize,
    pageIndex * pageSize + pageSize
  );

  const leftMemories = visibleMemories.slice(0, photosPerSide);
  const rightMemories = visibleMemories.slice(photosPerSide, pageSize);

  useEffect(() => {
    return () => {
      if (flipTimer.current) {
        window.clearTimeout(flipTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!selectedMedia || selectedMedia.type !== "photo") return;

    const timer = window.setInterval(() => {
      setSelectedMedia((current) => {
        if (!current || current.type !== "photo") return current;

        const index = allMemories.findIndex(
          (item) => item.src === current.src
        );

        if (index < 0) return current;

        return allMemories[(index + 1) % allMemories.length];
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [selectedMedia]);

  function goBack() {
    if (selectedMedia) {
      setSelectedMedia(null);
    } else if (coverOpen) {
      if (flipTimer.current) {
        window.clearTimeout(flipTimer.current);
        flipTimer.current = null;
      }

      setIsTurning(false);
      setCoverOpen(false);
      setPageIndex(0);
    } else if (onBack) {
      onBack();
    }
  }

  function changePage(direction) {
    if (isTurning) return;

    const nextIndex = Math.max(
      0,
      Math.min(totalPages - 1, pageIndex + direction)
    );

    if (nextIndex === pageIndex) return;

    setTurnDirection(direction > 0 ? "next" : "prev");
    setIsTurning(true);

    if (flipTimer.current) {
      window.clearTimeout(flipTimer.current);
    }

    flipTimer.current = window.setTimeout(() => {
      setPageIndex(nextIndex);
      setIsTurning(false);
      flipTimer.current = null;
    }, FLIP_DURATION);
  }

  function goToPage(index) {
    if (isTurning || index === pageIndex) return;

    const nextIndex = Math.max(0, Math.min(totalPages - 1, index));

    setTurnDirection(nextIndex > pageIndex ? "next" : "prev");
    setIsTurning(true);

    if (flipTimer.current) {
      window.clearTimeout(flipTimer.current);
    }

    flipTimer.current = window.setTimeout(() => {
      setPageIndex(nextIndex);
      setIsTurning(false);
      flipTimer.current = null;
    }, FLIP_DURATION);
  }

  function changeSelectedMedia(direction) {
    if (!selectedMedia) return;

    const index = allMemories.findIndex(
      (item) => item.src === selectedMedia.src
    );

    if (index < 0) return;

    const nextIndex =
      (index + direction + allMemories.length) % allMemories.length;

    setSelectedMedia(allMemories[nextIndex]);
  }

  function renderMemory(item, index, side) {
    return (
      <button
        key={`${item.src}-${side}-${index}`}
        type="button"
        className={`scrapbook-photo scrapbook-photo-${index + 1}`}
        onClick={() => setSelectedMedia(item)}
        aria-label={`Open ${
          item.type === "video" ? "video" : "photo"
        } from ${item.collection}`}
      >
        <div className="scrapbook-photo-frame">
          {item.type === "video" ? (
            <div className="scrapbook-video-thumb">
              <video
                src={item.src}
                muted
                preload="metadata"
                playsInline
              />
              <span className="scrapbook-play">
                <Play size={19} fill="currentColor" />
              </span>
            </div>
          ) : failedImages.includes(item.src) ? (
            <div className="scrapbook-missing-photo">
              <Heart size={26} />
              <span>Memory</span>
            </div>
          ) : (
            <img
              src={item.src}
              alt={`${item.collection} memory`}
              loading="lazy"
              onError={() =>
                setFailedImages((current) =>
                  current.includes(item.src)
                    ? current
                    : [...current, item.src]
                )
              }
            />
          )}
        </div>

        <span className="scrapbook-photo-caption">
          {item.type === "video" ? "a little movie ♡" : item.collection}
        </span>

        <span className="scrapbook-photo-heart">♡</span>
      </button>
    );
  }

  return (
    <main className="memories-page scrapbook-page">
      <div className="memories-glow memories-glow-one" />
      <div className="memories-glow memories-glow-two" />

      <button
        type="button"
        className="back-button memories-back"
        onClick={goBack}
      >
        <ArrowLeft size={17} />

        {selectedMedia
          ? "Back to scrapbook"
          : coverOpen
            ? "Close scrapbook"
            : "Back to Home"}
      </button>

      {!coverOpen ? (
<section className="scrapbook-cover-screen">
  <div className="scrapbook-cover scrapbook-collage-cover">
    <span className="scrapbook-sticker sticker-top">♡</span>
    <span className="scrapbook-sticker sticker-side">✿</span>

    <div className="scrapbook-cover-ribbon">
      A LITTLE BOOK OF US
    </div>

    <div className="cover-bow" aria-hidden="true">
      🎀
    </div>

    <p className="scrapbook-small-title">our little</p>

    <h1 className="scrapbook-cover-title">
      Scrapbook <span>♡</span>
    </h1>

    <div className="cover-photo-collage">
      <div className="cover-polaroid cover-polaroid-main">
        <span className="cover-washi-tape" />
        <img
          src="/memories/cover/main.jpg"
          alt="Our favourite memory"
        />
        <p>my favourite person ♡</p>
      </div>

      <div className="cover-polaroid cover-polaroid-small cover-polaroid-one">
        <img
          src="/memories/cover/polaroid1.jpg"
          alt="A special memory"
        />
        <p>sweet days</p>
      </div>

      <div className="cover-polaroid cover-polaroid-small cover-polaroid-two">
        <img
          src="/memories/cover/polaroid2.jpg"
          alt="A happy moment"
        />
        <p>little joys ♡</p>
      </div>

      <div className="cover-polaroid cover-polaroid-small cover-polaroid-three">
        <img
          src="/memories/cover/polaroid3.jpg"
          alt="A favourite picture"
        />
        <p>always us</p>
      </div>
    </div>

    <p className="scrapbook-cover-note">
      Little moments, endless love.
    </p>

    <div className="scrapbook-cover-bottom">
      <span>MADE WITH LOVE</span>
      <Heart size={17} fill="currentColor" />
    </div>
  </div>

  <p className="scrapbook-intro">
    A tiny place for all our favourite memories 🎀
  </p>

  <button
    type="button"
    className="scrapbook-open-button"
    onClick={() => setCoverOpen(true)}
  >
    Open our scrapbook <span>♡</span>
  </button>
</section>

      ) : (
        <section className="scrapbook-inside">
          <header className="scrapbook-heading">
            <p className="eyebrow">OUR LITTLE WORLD ♡</p>
            <h1>
              Pages of <span>Us</span>
            </h1>
            <p>Every photo is a little piece of our story.</p>
          </header>

          <div
            className={`scrapbook-book ${
              isTurning ? `is-turning turn-${turnDirection}` : ""
            }`}
            aria-busy={isTurning}
          >
            <div className="scrapbook-binding" />

            {/* LEFT PAGE */}
            <div className="scrapbook-paper scrapbook-left-page">
              <div className="scrapbook-paper-header">
                <span>OUR LITTLE MEMORIES</span>
                <span>♡</span>
              </div>

              <div className="scrapbook-photo-grid">
                {leftMemories.map((item, index) =>
                  renderMemory(item, index, "left")
                )}
              </div>

              <div className="scrapbook-paper-footer">
                <span>made with love ♡</span>
                <span>{pageIndex + 1} / {totalPages}</span>
              </div>
            </div>

            {/* RIGHT PAGE */}
            <div className="scrapbook-paper scrapbook-right-page">
              <div className="scrapbook-paper-header">
                <span>OUR STORY CONTINUES</span>
                <span>✿</span>
              </div>

              <div className="scrapbook-photo-grid">
                {rightMemories.map((item, index) =>
                  renderMemory(item, index, "right")
                )}
              </div>

              <div className="scrapbook-paper-footer">
                <span>stuck here forever ♡</span>
                <span>{pageIndex + 1} / {totalPages}</span>
              </div>
            </div>

            {/* ANIMATED TURNING LEAF */}
            {isTurning && (
              <div
                key={`${pageIndex}-${turnDirection}`}
                className={`scrapbook-turn-leaf turn-leaf-${turnDirection}`}
                aria-hidden="true"
              >
                <div className="scrapbook-leaf-front">
                  <span>♡</span>
                  <small>little moments</small>
                </div>
                <div className="scrapbook-leaf-back">
                  <span>୨୧</span>
                  <small>our story</small>
                </div>
              </div>
            )}
          </div>

          <nav
            className="scrapbook-navigation"
            aria-label="Scrapbook pages"
          >
            <button
              type="button"
              onClick={() => changePage(-1)}
              disabled={pageIndex === 0 || isTurning}
              aria-label="Previous scrapbook page"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div
              className="scrapbook-page-dots"
              aria-label={`Page ${pageIndex + 1} of ${totalPages}`}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === pageIndex ? "active" : ""}
                  onClick={() => goToPage(index)}
                  disabled={isTurning}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={index === pageIndex ? "page" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => changePage(1)}
              disabled={pageIndex === totalPages - 1 || isTurning}
              aria-label="Next scrapbook page"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </nav>

          <p className="scrapbook-page-note">
            Turn the page, find another little memory ✨
          </p>
        </section>
      )}

      {selectedMedia && (
        <div
          className="memory-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Memory viewer"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close media viewer"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              changeSelectedMedia(-1);
            }}
            aria-label="Previous memory"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            type="button"
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              changeSelectedMedia(1);
            }}
            aria-label="Next memory"
          >
            <ChevronRight size={30} />
          </button>

          {selectedMedia.type === "video" ? (
            <video
              key={selectedMedia.src}
              className="lightbox-media"
              src={selectedMedia.src}
              controls
              autoPlay
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              key={selectedMedia.src}
              className="lightbox-media"
              src={selectedMedia.src}
              alt={`${selectedMedia.collection} memory`}
              onClick={(event) => event.stopPropagation()}
            />
          )}

          <p className="lightbox-caption">
            {selectedMedia.collection}
          </p>
        </div>
      )}
    </main>
  );
}
