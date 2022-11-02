export const removeLinksFromText = (text: string) => {
    return text.replace(/<[\w\s="/>]+/gi, " ").replace(/&#[\d;]+/gi, "");
  };