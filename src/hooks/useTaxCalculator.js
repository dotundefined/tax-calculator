import { useState } from 'react';

const useTaxCalculator = () => {
    const [taxCalculations, setTaxCalculations] = useState({});
    const [brutoValue, setBrutoValue] = useState(0);

    const calculateBaseValue = (_bruto) => {
        // Formula za osnovicu je: BRUTO - (20% * BRUTO)
        return _bruto - (0.2 * _bruto);
    }

    const calculateHealtcare = (_base) => {
        // Formula za zdravstvo je: OSNOVICA * 4%
        return _base * 0.04;
    }

    const calculateFederalZZO = (_healthcare) => {
        // Formula za fond solidarnosti je: ZDRAVSTVO * 10.2%
        return _healthcare * 0.102;
    }

    const calculateCantonalZZO = (_healthcare) => {
        // Formula za ZZO TK je: ZDRAVSTVO * 89.8%
        return _healthcare * 0.898;
    }

    const calculateIncomeTaxBase = (_base, _healthcare) => {
        // Formula za ZZO TK je: ZDRAVSTVO * 89.8%
        return _base - _healthcare;
    }

    const calculateIncomeTax = (_budgetBase) => {
        // Formula za ZZO TK je: ZDRAVSTVO * 10.2%
        return _budgetBase * 0.1;
    }

    const calculateTotal = (_zzotk, _fond, _budgetTax) => {
        return _zzotk + _fond + _budgetTax;
    }

    const calculateTaxes = () => {
        const bruto = brutoValue;
        const base = calculateBaseValue(bruto);
        const healthcare = calculateHealtcare(base);
        const cantonalZZO = calculateCantonalZZO(healthcare);
        const federalZZO = calculateFederalZZO(healthcare);
        const incomeTaxBase = calculateIncomeTaxBase(base, healthcare);
        const incomeTax = calculateIncomeTax(incomeTaxBase);
        const total = calculateTotal(cantonalZZO, federalZZO, incomeTax);
        setTaxCalculations({
            bruto,
            base,
            healthcare,
            cantonalZZO,
            federalZZO,
            incomeTaxBase,
            incomeTax,
            total
        });
    }

    const onBrutoChange = (event) => {
        const value = event.target.value;
        setBrutoValue(value);
    }

    return {
        brutoValue,
        onBrutoChange,
        calculateTaxes,
        taxCalculations,
    }

}

export default useTaxCalculator;
