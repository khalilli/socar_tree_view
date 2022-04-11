import CompanyDetailsComponent from "./CompanyDetailsComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';

const getState = state => [
    state.companyDetails,
    state.setCompanyDetails,
    state.setInitialCompanyDetails,
    state.initWorkflow
];

const CompanyDetails = () => {
    const [companyDetails, setCompanyDetails, setInitialCompanyDetails, initWorkflow] = useStore(getState, shallow);
    const args = {
        companyName: companyDetails.name,
        companySegment: companyDetails.segment,
        companyShare: companyDetails.share,
        companyNumberOfEmployees: companyDetails.numberOfEmployees,
        companyCEO: companyDetails.ceo,
        companyCountryOfOperation: companyDetails.countryOfOperation,
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