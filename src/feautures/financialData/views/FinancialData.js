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
            setFinancialData([{property: 'active', value: active}])
        },
        setCapital: capital => {
            setFinancialData([{property: "capital", value: capital}])
        },
        setLiability: liability => {
            setFinancialData([{property: "liability", value: liability}])
        },
        setEBITDA: ebitda => {
            setFinancialData([{property: "ebitda", value: ebitda}])
        },
        setLoss: loss => {
            setFinancialData([{property: "loss", value: loss}])
        },
        setIncomeTax: incometax => {
            setFinancialData([{property: "incometax", value: incometax}])
        },
        setPropertyTax: propertytax => {
            setFinancialData([{property: "propertytax", value: propertytax}])
        },
        setDividend1: dividend1 => {
            setFinancialData([{property: "dividend1", value: dividend1}])
        },
        setDividend2: dividend2 => {
            setFinancialData([{property: "dividend2", value: dividend2}])
        },
        reset: () => {
            setInitialFinancialData();
        }

    }
    return <FinancialDataComponent {...args} />;
}

export default FinancialData;