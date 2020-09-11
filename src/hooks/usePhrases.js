import { useState, useEffect } from 'react';

const usePhrases = (lang = 'bh') => {
    const [language, setLanguage] = useState(lang);
    const [phrases, setPhrases] = useState({});

    useEffect(() => {
        setLanguage(lang);
    }, []);

    useEffect(() => {
        refreshPhrases(language);
    }, [language, lang]);

    const refreshPhrases = (_lang) => {
        switch (_lang) {
            default:
            case 'bh': setPhrases({
                taxCalculator: 'Kalkulator Poreza'
            }); break;
            case 'en': setPhrases({
                taxCalculator: 'Tax Calculator'
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
