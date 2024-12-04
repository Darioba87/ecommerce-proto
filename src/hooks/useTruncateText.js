import { useMemo } from "react";

const useTruncateText = (text, maxWords) => {
  const truncatedText = useMemo(() => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }, [text, maxWords]);

  return truncatedText;
};

export default useTruncateText;
