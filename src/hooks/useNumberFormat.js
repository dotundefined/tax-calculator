import { useState, useEffect } from "react";

export const useNumberFormat = () => {
  const [local, setLocal] = useState('');

  useEffect(() => {
    setLocal(
      navigator.userLanguage ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.systemLanguage ||
      "bs-BA"
    );
  }, []);

  const formatNumberOutput = (number) => {
    return new Intl.NumberFormat(local).format(number);
  }

  
  return { 
    formatNumberOutput,
  };
};