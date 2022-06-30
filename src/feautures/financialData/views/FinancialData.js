import FinancialDataComponent from "./FinancialDataComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import initiateWorkflow from "../../api/initiateWorkflow";
import { useEffect } from "react";

const getState = state => [
    state.financialData,
    state.getFinancialData
];
const FinancialData = () => {
    const [financialData, getFinancialData] = useStore(getState, shallow);
    useEffect(() => {
      getFinancialData();
    }, []);
    const args = {
        active: financialData.active,
        capital: financialData.capital,
        liability: financialData.liability,
        ebitda: financialData.ebitda,
        loss: financialData.loss,
        incomeTax: financialData.incometax,
        propertyTax: financialData.propertytax,
        dividend1: financialData.dividend1,
        dividend2: financialData.dividend2,
        onSubmitForm: () => {
            let params = new URLSearchParams(window.location.search);
            let key = parseInt(params.get("key"));
            const args = {
                cid: key,
                active: financialData.active,
                capital: financialData.capital,
                liability: financialData.liability,
                ebitda: financialData.ebitda,
                loss: financialData.loss,
                incometax: financialData.incometax,
                propertytax: financialData.propertytax,
                dividend1: financialData.dividend1,
                dividend2: financialData.dividend2, 
            };
            initiateWorkflow(args);
        }
    }
    return <FinancialDataComponent {...args} />;
}

export default FinancialData;