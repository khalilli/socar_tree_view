import FinancialDataComponent from "./FinancialDataComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import { useEffect } from "react";

const getState = state => [
    state.financialData,
    state.setFinancialData,
    state.setInitialFinancialData,
    state.initWorkflow,
    state.getFinancialData
];
const FinancialData = () => {
    const [financialData, setFinancialData, setInitialFinancialData, initWorkflow, getFinancialData] = useStore(getState, shallow);
    useEffect(() => {
      getFinancialData();
    }, []);
    var color, colorC, colorL, colorE, colorLoss, coloriT, colorpT, colorD1, colorD2 = false;
    if(financialData.active !== financialData.activeWarn){
        color = true;
    }
    if(financialData.capital !== financialData.capitalWarn){
        colorC = true;
    }
    if(financialData.liability !== financialData.liabilityWarn){
        colorL = true;
    }
    if(financialData.ebitda !== financialData.ebitdaWarn){
        colorE = true;
    }
    if(financialData.loss !== financialData.lossWarn){
        colorLoss = true;
    }
    if(financialData.incomeTax !== financialData.incomeTaxWarn){
        coloriT = true;
    }
    if(financialData.propertyTax !== financialData.propertyTaxWarn){
        colorpT = true;
    }
    if(financialData.dividend1 !== financialData.dividend1Warn){
        colorD1 = true;
    }
    if(financialData.dividend2 !== financialData.dividend2Warn){
        colorD2 = true;
    }
    console.log(financialData.active,financialData.activeWarn, color);
    console.log(financialData.capital, financialData.capitalWarn, colorC);
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
        color, colorC, colorL, colorE, colorLoss, coloriT, colorpT, colorD1, colorD2,
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
        },
        onSubmitForm: () => {
            const args = {
                color, colorC, colorL, colorE, colorLoss, coloriT, colorpT, colorD1, colorD2
            };
            initWorkflow(args);
        }
    }
    return <FinancialDataComponent {...args} />;
}

export default FinancialData;