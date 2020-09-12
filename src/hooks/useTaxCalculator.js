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

    const calculateFond = (_healthcare) => {
        // Formula za fond solidarnosti je: ZDRAVSTVO * 10.2%
        return _healthcare * 0.102;
    }

    const calculateZZOTK = (_healthcare) => {
        // Formula za ZZO TK je: ZDRAVSTVO * 89.8%
        return _healthcare * 0.898;
    }

    const calculateBudgetBase = (_base, _healthcare) => {
        // Formula za ZZO TK je: ZDRAVSTVO * 89.8%
        return _base - _healthcare;
    }

    const calculateBudgetTax = (_budgetBase) => {
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
        const zzotk = calculateZZOTK(healthcare);
        const fond = calculateFond(healthcare);
        const budgetBase = calculateBudgetBase(base, healthcare);
        const budgetTax = calculateBudgetTax(budgetBase);
        const total = calculateTotal(zzotk, fond, budgetTax);
        setTaxCalculations({
            bruto,
            base,
            healthcare,
            zzotk,
            fond,
            budgetBase,
            budgetTax,
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
