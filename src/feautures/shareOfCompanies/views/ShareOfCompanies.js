import ShareOfCompaniesComponent from "./ShareOfCompaniesComponents";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import { useEffect } from "react";

const getState = state => [
    state.companyShares,
    state.getCompanyShares
];
const ShareOfCompanies = () => {
    const [companyShares, getCompanyShares] = useStore(getState, shallow);
    useEffect(()=>{
        getCompanyShares();
    }, [getCompanyShares]);
    const args = {
        companyShares
    }

    return <ShareOfCompaniesComponent {...args} />
}

export default ShareOfCompanies;