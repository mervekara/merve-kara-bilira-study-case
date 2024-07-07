import { useEffect, useState } from "react";
import { getHighlightClass } from "../utils/highlightClass";

const useAssetPriceFlash = (
  initialPrice: number | null,
  currentPrice: number,
) => {
  const [prevPrice, setPrevPrice] = useState<number | null>(initialPrice);
  const [flashClass, setFlashClass] = useState<string>("");

  useEffect(() => {
    try {
      const highlightClass = getHighlightClass(prevPrice, currentPrice);

      setFlashClass(highlightClass);
      setPrevPrice(currentPrice);

      const timeout = setTimeout(() => {
        setFlashClass("");
      }, 1000);

      return () => clearTimeout(timeout);
    } catch (error) {
      console.error("Error in useAssetPriceFlash useEffect:", error);
    }
  }, [currentPrice, prevPrice]);

  return flashClass;
};

export default useAssetPriceFlash;
