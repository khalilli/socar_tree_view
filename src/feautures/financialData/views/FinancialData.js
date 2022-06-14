import FinancialDataComponent from "./FinancialDataComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import { useEffect } from "react";

const getState = state => [
    state.financialData,
    state.setFinancialData,
    state.setInitialFinancialData,
    state.getFinancialData
];
const FinancialData = () => {
    const [financialData, setFinancialData, setInitialFinancialData, getFinancialData] = useStore(getState, shallow);
    useEffect(() => {
      getFinancialData();
    }, []);
    const args = {
        active: financialData.active,
        activeWarn: financialData.activeWarn,
        capital: financialData.capital,
        capitalWarn: financialData.capitalWarn,
        liability: financialData.liability,
        liabilityWarn: financialData.liabilityWarn,
        ebitda: financialData.ebitda,
        ebitdaWarn: financialData.ebitdaWarn,
        loss: financialData.loss,
        lossWarn: financialData.lossWarn,
        incomeTax: financialData.incometax,
        incomeTaxWarn: financialData.incometaxWarn,
        propertyTax: financialData.propertytax,
        propertyTaxWarn: financialData.propertytaxWarn,
        dividend1: financialData.dividend1,
        dividend1Warn: financialData.dividend1Warn,
        dividend2: financialData.dividend2,
        dividend2Warn: financialData.dividend2Warn,
        setActive: active => {
            setFinancialData([{property: "active", value: Number.parseInt(active)}])
        },
        setCapital: capital => {
            setFinancialData([{property: "capital", value: Number.parseInt(capital)}])
        },
        setLiability: liability => {
            setFinancialData([{property: "liability", value: Number.parseInt(liability)}])
        },
        setEBITDA: ebitda => {
            setFinancialData([{property: "ebitda", value: Number.parseInt(ebitda)}])
        },
        setLoss: loss => {
            setFinancialData([{property: "loss", value: Number.parseInt(loss)}])
        },
        setIncomeTax: incometax => {
            setFinancialData([{property: "incometax", value: Number.parseInt(incometax)}])
        },
        setPropertyTax: propertytax => {
            setFinancialData([{property: "propertytax", value: Number.parseInt(propertytax)}])
        },
        setDividend1: dividend1 => {
            setFinancialData([{property: "dividend1", value: Number.parseInt(dividend1)}])
        },
        setDividend2: dividend2 => {
            setFinancialData([{property: "dividend2", value: Number.parseInt(dividend2)}])
        },
        reset: () => {
            setInitialFinancialData();
        }

    }
    return <FinancialDataComponent {...args} />;
}

export default FinancialData;