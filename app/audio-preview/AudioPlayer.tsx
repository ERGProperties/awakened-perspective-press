"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track?: (
        event: string,
        properties?: Record<string, unknown>
      ) => void;
    };
  }
}

const META_PIXEL_ID = "1057775080418962";

const AUDIO_CONTENT = {
  content_name: "Understanding External Reflections Audio Preview",
  content_type: "product",
  content_ids: [
    "understanding-external-reflections-audio-preview",
  ],
};

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

      // Preserve the existing custom browser event.
      window.dispatchEvent(new CustomEvent("audio-preview-play"));

      const sendTrackingEvents = () => {
        if (cancelled || hasTrackedPlay.current) return;

        const metaReady = typeof window.fbq === "function";
        const tiktokReady =
          typeof window.ttq?.track === "function";

        // Wait briefly for both tracking scripts to become available.
        if (!metaReady || !tiktokReady) {
          attempts += 1;

          if (attempts < 50) {
            timer = setTimeout(sendTrackingEvents, 100);
          }

          return;
        }

        // Mark the first play so repeated play/pause actions
        // do not generate duplicate events during this page visit.
        hasTrackedPlay.current = true;

        // Meta: preserve the existing book-specific events.
        window.fbq!(
          "trackSingle",
          META_PIXEL_ID,
          "ViewContent",
          AUDIO_CONTENT
        );

        window.fbq!(
          "trackSingle",
          META_PIXEL_ID,
          "AudioPlay",
          {
            content_name: AUDIO_CONTENT.content_name,
          }
        );

        // TikTok: record interest in the book.
        window.ttq!.track!("ViewContent", {
          contents: [
            {
              content_id:
                "understanding-external-reflections-audio-preview",
              content_name: AUDIO_CONTENT.content_name,
              content_type: "product",
              quantity: 1,
            },
          ],
          content_type: "product",
        });

        // TikTok: custom event for actual audio playback.
        window.ttq!.track!("AudioPlay", {
          content_name: AUDIO_CONTENT.content_name,
          content_type: "product",
        });
      };

      sendTrackingEvents();
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