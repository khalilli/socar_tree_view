import CompanyDetailsComponent from "./CompanyDetailsComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import countries from '../../../assets/countries.json';
import { useEffect } from "react";

const getState = state => [
    state.companyDetails,
    state.setCompanyDetails,
    state.setInitialCompanyDetails,
    state.initWorkflow,
    state.getCompanyDetails
];

const CompanyDetails = () => {
    const [companyDetails, setCompanyDetails, setInitialCompanyDetails, initWorkflow, getCompanyDetails] = useStore(getState, shallow);
    
    useEffect(()=>{
        getCompanyDetails();
    }, [])

    const args = {
        companyName: companyDetails.name,
        nameWarn: companyDetails.nameWarn,
        companySegment: companyDetails.segment,
        segmentWarn: companyDetails.segmentWarn,
        companyShare: companyDetails.share,
        shareWarn: companyDetails.shareWarn,
        companyNumberOfEmployees: companyDetails.numberOfEmployees,
        numberOfEmployeesWarn: companyDetails.numberOfEmployeesWarn,
        companyCEO: companyDetails.ceo,
        CEOWarn: companyDetails.ceoWarn,
        countries,
        companyCountryOfOperation: companyDetails.countryOfOperation,
        cleanCountryName: () => {
            console.log("Test");
            if(countries.findIndex(x=>x.Name === companyDetails.countryOfOperation) === -1){
                setCompanyDetails([{property: "countryOfOperation", value: ''}]) 
            } 
        },
        setCompanyName: name => {
            setCompanyDetails([{property: "name", value: name}]) 
        },
        setCompanySegment: segment => {
            setCompanyDetails([{property: 'segment', value: segment}])
        },
        setCompanyShare: share => {
            setCompanyDetails([{property: 'share', value: Number.parseInt(share)}])
        },
        setCompanyNumberOfEmployees: numberOfEmployees => {
            setCompanyDetails([{property: 'numberOfEmployees', value: Number.parseInt(numberOfEmployees)}])
        },
        setCompanyCEO: ceo => {
            setCompanyDetails([{property: 'ceo', value: ceo}])
        },
        setCountryOfOperation: countryOfOperation => {
            setCompanyDetails([{property: 'countryOfOperation', value: countryOfOperation}])
        },
        reset: () => {
            setInitialCompanyDetails();
        }, 
        onSubmitForm: () => {
            initWorkflow();
        }
    }

    return <CompanyDetailsComponent {...args} />
}

export default CompanyDetails;