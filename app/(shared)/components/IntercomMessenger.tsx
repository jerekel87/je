"use client";

import { useEffect } from "react";
import { Intercom as IntercomSDK } from "@intercom/messenger-js-sdk";

function IntercomMessenger(): React.ReactElement | null {
  useEffect(() => {
    IntercomSDK({
      app_id: "r8e9gnqq",
    });

    const toggleIntercomOnDevice = () => {
      const isMobile = window.innerWidth <= 768; // Define your breakpoint for mobile

      if (isMobile) {
        window.Intercom && window.Intercom("hide");
      } else {
        window.Intercom && window.Intercom("show");
      }
    };

    // Initial call to set the correct visibility
    toggleIntercomOnDevice();

    // Add resize event listener to toggle visibility based on screen size
    window.addEventListener("resize", toggleIntercomOnDevice);

    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener("resize", toggleIntercomOnDevice);
      window.Intercom && window.Intercom("shutdown"); // Shutdown Intercom when the component unmounts
    };
  }, []);

  return null; // This component doesn't render any UI
}

export default IntercomMessenger;
