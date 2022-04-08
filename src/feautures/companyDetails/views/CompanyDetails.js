import CompanyDetailsComponent from "./CompanyDetailsComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';

const getState = state => [
    state.companyDetails,
    state.setCompanyDetails
];

const CompanyDetails = () => {
    const [companyDetails, setCompanyDetails] = useStore(getState, shallow);
    const args = {
        companyName: companyDetails.name,
        companySegment: companyDetails.segment,
        companyShare: companyDetails.share,
        companyNumberOfEmployees: companyDetails.numberOfEmployees,
        companyCEO: companyDetails.ceo,
        companyFieldOfActivity: companyDetails.fieldOfActivity,
        companyCountryOfOperation: companyDetails.countryOfOperation,
        setCompanyName: name => { 
            setCompanyDetails([{property: "name", value: name}]) 
        },
        setCompanySegment: segment => {
            setCompanyDetails([{property: 'segment', value: segment}])
        },
        setCompanyShare: share => {
            setCompanyDetails([{property: 'share', value: share}])
        },
        setCompanyNumberOfEmployees: numberOfEmployees => {
            setCompanyDetails([{property: 'numberOfEmployees', value: numberOfEmployees}])
        },
        setCompanyCEO: ceo => {
            setCompanyDetails([{property: 'ceo', value: ceo}])
        },
        setCompanyFieldOfActivity: fieldOfActivity => {
            setCompanyDetails([{property: 'fieldOfActivity', value: fieldOfActivity}])
        },
        setCountryOfOperation: countryOfOperation => {
            setCompanyDetails([{property: 'countryOfOperation', value: countryOfOperation}])
        }
    }
    return <CompanyDetailsComponent {...args} />
}

export default CompanyDetails;