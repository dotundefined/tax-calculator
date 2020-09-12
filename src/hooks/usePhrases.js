import { useState, useEffect } from 'react';

const usePhrases = (lang = 'bh') => {
    const [language, setLanguage] = useState(lang);
    const [phrases, setPhrases] = useState({});

    useEffect(() => {
        setLanguage(lang);
    }, [lang]);

    useEffect(() => {
        refreshPhrases(language);
    }, [language, lang]);

    const refreshPhrases = (_lang) => {
        switch (_lang) {
            default:
            case 'bh': setPhrases({
                taxCalculator: 'Kalkulator Poreza',
                calculate: 'izracunaj',
            }); break;
            case 'en': setPhrases({
                taxCalculator: 'Tax Calculator',
                calculate: 'calculate',
            }); break;
        }
    }

    return {
        phrases,
        setLanguage,
        language
    }

}

export default usePhrases;
