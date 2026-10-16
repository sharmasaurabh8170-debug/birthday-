import { useState, useEffect } from "react";
import "./Memories.css";

import {
  ArrowLeft,
  FolderHeart,
  Image,
  Film,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const memoryFolders = [
  {
    id: "first",
    title: "Little Baby",
    description: "When my babyy is actually a babyy 😁😅.",
    path: "/memories/little-baby",
    cover: "/memories/little-baby/cover.jpg",
    photos: [
       {
        src: "/memories/little-baby/cover.jpg",
        type: "photo",
        
         },
      {
        src: "/memories/little-baby/photo1.jpg",
        type: "photo",
        
         },
         {
        src: "/memories/little-baby/photo2.jpg",
        type: "photo",
        
         },
         {
        src: "/memories/little-baby/photo3.jpg",
        type: "photo",
        
         },
         {
        src: "/memories/little-baby/photo4.jpg",
        type: "photo",
        
         },
          {
        src: "/memories/little-baby/photo5.jpg",
        type: "photo",
        
         },
          {
        src: "/memories/little-baby/photo6.jpg",
        type: "photo",
        
         },
          {
        src: "/memories/little-baby/photo7.jpg",
        type: "photo",
        
         },
        { src: "/memories/little-baby/photo8.jpg",
        type: "photo",
        
         },

    ],
    videos: [],
    icon: "♡",
  },

  {
    id: "Second",
    title: "wife material 💕",
    description: "🤞💕",
    path: "/memories/my wifey",
    cover: "/memories/my wifey/cover.jpg",
    photos: [
        {
        src: "/memories/my wifey/cover.jpg",
        type: "photo",
         },
      {
        src: "/memories/my wifey/photo1.jpg",
        type: "photo",
         },
          {
        src: "/memories/my wifey/photo3.jpg",
        type: "photo",
         },
          {
        src: "/memories/my wifey/photo4.jpg",
        type: "photo",
         },
          {
        src: "/memories/my wifey/photo5.jpg",
        type: "photo",
         },
          {
        src: "/memories/my wifey/photo6.jpg",
        type: "photo",
         },
       
         {
           src: "/memories/my wifey/photo7.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo8.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo9.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo10.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo11.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo12.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo13.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo14.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo15.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/phot016.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo17.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo18.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo19.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo20.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo21.jpg",
        type: "photo",
         },
         {
           src: "/memories/my wifey/photo22.jpg",
        type: "photo",
         },

   ],
    videos: [ ],
    icon: "♡",
  },
        
  {
    id: "Fourth",
    title: "When we are Together 🤞💕",
    description: " 🤗👻.",
    path: "/memories/our moments",
    cover: "/memories/our moments/cover.jpg",
    photos: [
       {
        src: "/memories/our moments/cover.jpg",
        type: "photo",
        
       },
      {
        src: "/memories/our moments/photo1.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo2.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo3.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo4.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo5.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo6.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo7.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo8.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/cover.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo9.jpg",
        type: "photo",
        
       },
        {
        src: "/memories/our moments/photo10.jpg",
        type: "photo",
        
       }, {
        src: "/memories/our moments/photo11.jpg",
        type: "photo",
        
       }, {
        src: "/memories/our moments/photo12.jpg",
        type: "photo",
        
       }, 
       
       {
        src: "/memories/our moments/photo13.jpg",
        type: "photo",
        
       },
       {
        src: "/memories/our moments/photo14.jpg",
        type: "photo",
        
       },
       {
        src: "/memories/our moments/photo15.jpg",
        type: "photo",
        
       },

    ],
    videos: [
       {
        src: "/memories/our moments/video1.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video2.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video3.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video4.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video5.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video6.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video7.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video8.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video9.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video10.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video11.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video12.mp4",
        type: "video",
        
       },
       {
        src: "/memories/our moments/video13.mp4",
        type: "video",
        
       },

    ],
    icon: "✦",
  },
  {
    id: "Third",
    title: "Cutiepie ❤️",
    description: "My favorite person and my favorite memories.",
    path: "/memories/cutiepie",
    cover: "/memories/cutiepie/cover.jpg",
    photos: [
      {
        src: "/memories/cutiepie/photo1.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo2.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo3.jpg",
        type: "photo",
        
      },
      
      {
        src: "/memories/cutiepie/photo4.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo5.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo6.jpg",
        type: "photo",
        
      },
     
      {
        src: "/memories/cutiepie/photo8.jpg",
        type: "photo",
        
      },
     
      {
        src: "/memories/cutiepie/photo9.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo10.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo11.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo12.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo13.jpg",
        type: "photo",
        
      },
       {
        src: "/memories/cutiepie/cover.jpg",
        type: "photo",
        
      },
       {
        src: "/memories/cutiepie/photo14.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo15.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo16.jpg",
        type: "photo",
        
      },
      {
        src: "/memories/cutiepie/photo17.jpg",
        type: "photo",
        
      },
     
    ],
    videos: [
      { src: "/memories/cutiepie/video1.mp4",
        type: "video",
    },
    { src: "/memories/cutiepie/video2.mp4",
        type: "video",
    },
    { src: "/memories/cutiepie/video3.mp4",
        type: "video",
    },
    { src: "/memories/cutiepie/video4.mp4",
        type: "video",
    },
    { src: "/memories/cutiepie/video5.mp4",
        type: "video",
    },
    { src: "/memories/cutiepie/video6.mp4",
        type: "video",
    },
    { src: "/memories/cutiepie/video7.mp4",
        type: "video",
    },

    ],
    icon: "❤️",
  },
 
  {
    id: "Fifth",
    title: "Random Moments",
    description: "Privacy, vo nhi hoti hum dono m 😁👻.",
    path: "/memories/little-moments",
    cover: "/memories/little-moments/cover.jpg",
    photos: [
      {
        src: "/memories/little-moments/photo1.jpg",
        type: "photo",
        
      },
       {
        src: "/memories/little-moments/photo2.jpg",
        type: "photo",
        
      },
       {
        src: "/memories/little-moments/photo3.jpg",
        type: "photo",
        
      },

      {
        src: "/memories/little-moments/cover.jpg",
        type: "photo",
        
      },
       {
        src: "/memories/little-moments/photo4.jpg",
        type: "photo",
        
      },
       {
        src: "/memories/little-moments/photo5.jpg",
        type: "photo",
        
      },

    ],
    videos: [
       { src: "/memories/little-moments/video13.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video10.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video9.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video8.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video7.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video12.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video11.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video4.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video3.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video6.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video5.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video2.mp4",
        type: "video",
    },
    { src: "/memories/little-moments/video1.mp4",
        type: "video",
    },
    ],
    icon: "♡",
  },
];

export default function Memories({ onBack }) {
  const [activeFolder, setActiveFolder] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const folder = memoryFolders.find(
    (item) => item.id === activeFolder
  );

  const media = folder
    ? [
        ...folder.photos,
        ...folder.videos,
      ]
    : [];


    // Automatically change photos every 5 seconds
useEffect(() => {
  if (!selectedMedia || selectedMedia.type !== "photo") {
    return;
  }

  const currentFolder = memoryFolders.find(
    (item) => item.id === activeFolder
  );

  if (!currentFolder || currentFolder.photos.length < 2) {
    return;
  }

  const photos = currentFolder.photos;

  const timer = setInterval(() => {
    setSelectedMedia((current) => {
      if (!current || current.type !== "photo") {
        return current;
      }

      const currentIndex = photos.findIndex(
        (photo) => photo.src === current.src
      );

      const nextIndex =
        (currentIndex + 1 + photos.length) % photos.length;

      return photos[nextIndex];
    });
  }, 2000);

  return () => clearInterval(timer);
}, [selectedMedia, activeFolder]);



  const openFolder = (folderId) => {
    setActiveFolder(folderId);
    setSelectedMedia(null);
  };

  const goBack = () => {
    if (selectedMedia) {
      setSelectedMedia(null);
    } else if (activeFolder) {
      setActiveFolder(null);
    } else if (onBack) {
      onBack();
    }
  };

  const changeMedia = (direction) => {
    if (!selectedMedia || media.length < 2) return;

    const currentIndex = media.findIndex(
      (item) => item.src === selectedMedia.src
    );

    if (currentIndex === -1) return;

    const nextIndex =
      (currentIndex + direction + media.length) %
      media.length;

    setSelectedMedia(media[nextIndex]);
  };

  return (
    <main className="memories-page">
      <div className="memories-glow memories-glow-one" />
      <div className="memories-glow memories-glow-two" />

      <button
        className="back-button memories-back"
        onClick={goBack}
      >
        <ArrowLeft size={17} />

        {selectedMedia
          ? "Back to memories"
          : activeFolder
            ? "All folders"
            : "Back to Home"}
      </button>

      {!folder ? (
        <section className="memories-container">
          <div className="memories-heading">
            <p className="eyebrow">
              A LITTLE VAULT OF HAPPINESS
            </p>

            <h1>
              Our <span>Memories</span>
            </h1>

            <p>
              Every picture holds a moment.
              <br />
              Every moment holds a little piece of us.
            </p>
          </div>

          <div className="memory-folder-grid">
            {memoryFolders.map((item, index) => (
              <button
                key={item.id}
                className="memory-folder-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => openFolder(item.id)}
              >
                <div className="folder-cover">
                  {item.cover ? (
                    <img
                      src={item.cover}
                      alt={item.title}
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />
                  ) : (
                    <div className="folder-placeholder">
                      <FolderHeart
                        size={55}
                        strokeWidth={1.2}
                      />

                      <span className="folder-decoration">
                        {item.icon}
                      </span>
                    </div>
                  )}

                  <span className="folder-open-label">
                    OPEN COLLECTION ↗
                  </span>
                </div>

                <div className="folder-card-info">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>

                  <Heart
                    className="folder-heart"
                    size={20}
                  />
                </div>
              </button>
            ))}
          </div>

          <p className="memories-footer">
            MADE WITH LOVE, JUST FOR YOU <span>♥</span>
          </p>
        </section>
      ) : (
        <section className="memory-inside-container">
          <div className="inside-heading">
            <p className="eyebrow">
              A COLLECTION OF US
            </p>

            <h1>{folder.title}</h1>

            <p>{folder.description}</p>
          </div>

          {media.length === 0 ? (
            <div className="empty-memory-state">
              <div className="empty-memory-icon">
                <FolderHeart
                  size={48}
                  strokeWidth={1.2}
                />
              </div>

              <h2>Our moments will live here ❤️</h2>

              <p>
                This collection is waiting for your photos
                and videos. Add their paths to the folder's
                photos and videos arrays in Memories.jsx.
              </p>

              <div className="empty-memory-hints">
                <span>
                  <Image size={17} />
                  Photos
                </span>

                <span>
                  <Film size={17} />
                  Videos
                </span>
              </div>
            </div>
          ) : (
            <div className="memory-media-grid">
              {media.map((item, index) => (
                <button
                  key={item.src}
                  className="memory-media-card"
                  onClick={() => setSelectedMedia(item)}
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  {item.type === "video" ? (
                    <div className="video-thumbnail">
                      <video
                        src={item.src}
                        muted
                        preload="metadata"
                        playsInline
                      />

                      <span className="video-play">
                        ▶
                      </span>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title || folder.title}
                    />
                  )}

                  <span className="media-title">
                    {item.title || folder.title}
                  </span>
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {selectedMedia && (
        <div
          className="memory-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close media viewer"
          >
            <X size={25} />
          </button>

          {media.length > 1 && (
            <>
              <button
                className="lightbox-arrow lightbox-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  changeMedia(-1);
                }}
                aria-label="Previous media"
              >
                <ChevronLeft size={30} />
              </button>

              <button
                className="lightbox-arrow lightbox-next"
                onClick={(event) => {
                  event.stopPropagation();
                  changeMedia(1);
                }}
                aria-label="Next media"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}

          {selectedMedia.type === "video" ? (
            <video
              className="lightbox-media"
              src={selectedMedia.src}
              controls
              autoPlay
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              className="lightbox-media"
              src={selectedMedia.src}
              alt={selectedMedia.title || "Our memory"}
              onClick={(event) => event.stopPropagation()}
            />
          )}

          <p className="lightbox-caption">
            {selectedMedia.title}
          </p>
        </div>
      )}
    </main>
  );
}