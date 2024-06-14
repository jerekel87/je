"use client";

import { useEffect, useState } from "react";
import FakePurchasePopUp from "./FakePurchasePopUp";

function FakePurchase() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const showRandomPopup = () => {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        const nextPopupTime =
          Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000; // Random time between 15 to 30 seconds
        setTimeout(showRandomPopup, nextPopupTime);
      }, 10000); // Hide the popup after 10 seconds
    };

    const initialPopupTime =
      Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000; // Initial random time between 15 to 30 seconds
    setTimeout(showRandomPopup, initialPopupTime);
  }, []);
  if (showPopup) return <FakePurchasePopUp />;
  return null;
}

export default FakePurchase;
