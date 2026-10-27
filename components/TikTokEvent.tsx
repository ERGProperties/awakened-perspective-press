"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ttq?: {
      track?: (
        event: string,
        properties?: Record<string, unknown>
      ) => void;
    };
  }
}

type TikTokEventProps = {
  event: "ViewContent" | "CompleteRegistration";
};

export default function TikTokEvent({ event }: TikTokEventProps) {
  useEffect(() => {
    if (typeof window.ttq?.track !== "function") {
      return;
    }

    if (event === "ViewContent") {
      window.ttq.track("ViewContent", {
        contents: [
          {
            content_id: "understanding-external-reflections",
            content_type: "product",
            content_name: "Understanding External Reflections",
          },
        ],
      });
      return;
    }

    // Only record a registration when the signup API confirms
    // that a new reader record was successfully created.
    const url = new URL(window.location.href);

    if (url.searchParams.get("signup") !== "success") {
      return;
    }

    window.ttq.track("CompleteRegistration");

    // Remove the marker to prevent repeat tracking on refresh.
    url.searchParams.delete("signup");
    window.history.replaceState(
      window.history.state,
      "",
      url.pathname + url.search + url.hash
    );
  }, [event]);

  return null;
}