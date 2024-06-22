"use client";

import { useEffect } from "react";
import FakePurchasePopUp from "./FakePurchasePopUp";
import { toast } from "react-toastify";

function FakePurchase() {
  useEffect(() => {
    const handleClose = () => {
      const nextPopupTime =
        Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000; // Random time between 15 to 30 seconds
      setTimeout(showRandomPopup, nextPopupTime);
    };
    const showRandomPopup = () => {
      toast(<FakePurchasePopUp />, {
        onClose: handleClose,
      });
    };

    const initialPopupTime =
      Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000; // Initial random time between 15 to 30 seconds
    setTimeout(showRandomPopup, initialPopupTime);
  }, []);
  return null;
}

export default FakePurchase;
