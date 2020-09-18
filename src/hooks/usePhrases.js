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
                calculate: 'Izracunaj',
                gross: 'Bruto',
                grossAmount: 'Bruto Iznos',
                grossAmountDescription: 'Ukupan iznos dohotka na koji se placa porez.',
                cantonalZZO: 'Doprinos za Kantonalni ZZO',
                federalZZO: 'Doprionos za Federalni ZZO',
                incomeTax: 'Porez na dohodak',
                total: 'Ukupno',
                totalAmount: 'Ukupan iznos',
                totalAmountDescription: 'Ukupan iznos za uplatu',
                // NAVIGATION
                calculator: 'Kalkulator',
                blog: 'Blog',
            }); break;
            case 'en': setPhrases({
                taxCalculator: 'Tax Calculator',
                calculate: 'Calculate',
                gross: 'Gross',
                grossAmount: 'Gross Amount',
                grossAmountDescription: 'The total amount of taxable income.',
                cantonalZZO: 'Contribution to the Cantonal Health Insurance Fund',
                federalZZO: 'Contribution to the Federal Health Insurance Fund',
                incomeTax: 'Income tax',
                total: 'Total',
                totalAmount: 'Total amount',
                totalAmountDescription: 'Total amount to pay',
                // NAVIGATION
                calculator: 'Calculator',
                blog: 'Blog',
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
