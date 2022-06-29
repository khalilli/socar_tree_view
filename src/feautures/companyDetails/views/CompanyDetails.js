import CompanyDetailsComponent from "./CompanyDetailsComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import countries from '../../../assets/countries.json';
import initiateWorkflow from "../../api/initiateWorkflow";
import { useEffect } from "react";

const getState = state => [
    state.companyDetails,
    state.initWorkflow,
    state.getCompanyDetails
];

const CompanyDetails = () => {
    const [companyDetails, initWorkflow, getCompanyDetails] = useStore(getState, shallow);
    
    useEffect(()=>{
        getCompanyDetails();
    }, []);

    const args = {
        companyName: companyDetails.name,
        companySegment: companyDetails.segment,
        companyShare: companyDetails.share,
        companyNumberOfEmployees: companyDetails.numberOfEmployees,
        companyCEO: companyDetails.ceo,
        countries,
        companyCountryOfOperation: companyDetails.countryOfOperation,
        onSubmitForm: () => {
            let params = new URLSearchParams(window.location.search);
            let key = parseInt(params.get("key"));
            const args = {
                cid: key,
                cname: companyDetails.name,
                segment: companyDetails.segment,
                share: companyDetails.share,
                numberOfEmployees: companyDetails.numberOfEmployees,
                ceo: companyDetails.ceo,
            };
            initiateWorkflow(args);
        }
    }

    return <CompanyDetailsComponent {...args} />
}

export default CompanyDetails;