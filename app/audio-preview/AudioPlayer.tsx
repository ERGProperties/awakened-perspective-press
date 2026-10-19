"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const META_PIXEL_ID = "1057775080418962";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasTrackedPlay = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;
    let cancelled = false;

    const trackAudioPlay = () => {
      if (hasTrackedPlay.current) return;

      // Keep the existing custom browser event.
      window.dispatchEvent(new CustomEvent("audio-preview-play"));

      const sendMetaEvents = () => {
        if (cancelled || hasTrackedPlay.current) return;

        if (typeof window.fbq === "function") {
          hasTrackedPlay.current = true;

          window.fbq(
            "trackSingle",
            META_PIXEL_ID,
            "ViewContent",
            {
              content_name: "Understanding External Reflections Audio Preview",
              content_type: "product",
              content_ids: [
                "understanding-external-reflections-audio-preview",
              ],
            }
          );

          window.fbq(
            "trackSingle",
            META_PIXEL_ID,
            "AudioPlay",
            {
              content_name: "Understanding External Reflections Audio Preview",
            }
          );

          return;
        }

        attempts += 1;

        if (attempts < 50) {
          timer = setTimeout(sendMetaEvents, 100);
        }
      };

      sendMetaEvents();
    };

    audio.addEventListener("play", trackAudioPlay);

    return () => {
      cancelled = true;
      audio.removeEventListener("play", trackAudioPlay);

      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      controls
      preload="metadata"
      className="mt-6 w-full"
    >
      <source
        src="/audio/gary-and-sage-audio.mp4"
        type="audio/mp4"
      />
      Your browser does not support audio playback.
    </audio>
  );
}