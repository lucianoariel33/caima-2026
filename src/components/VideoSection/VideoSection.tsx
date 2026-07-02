import { useState } from "react";

export default function VideoSection() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="video-wrapper">
        <div className="video-overlay"></div>

        {open && (
          <div className="video-popup" onClick={() => setOpen(false)}>
            <div
              className="video-popup-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/uySn1BZiWWs?autoplay=1"
                title="YouTube Video"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>

              <button
                className="video-popup-close"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="video-content">
          <button
            className="video-play-button"
            onClick={() => setOpen(true)}
            aria-label="Play Video"
          >
            <i className="las la-play"></i>
          </button>
        </div>
      </div>
    </>
  );
}
