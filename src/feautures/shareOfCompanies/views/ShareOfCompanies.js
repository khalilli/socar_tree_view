import ShareOfCompaniesComponent from "./ShareOfCompaniesComponents";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import initiateWorkflow from "../../api/initiateWorkflow";
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
        companyShares,
        onSubmitForm: () => {
          let params = new URLSearchParams(window.location.search);
          let key = parseInt(params.get("key"));
          const args = {
            cid: key,
          };
          initiateWorkflow(args);
        }
    }

    return <ShareOfCompaniesComponent {...args} />
}

export default ShareOfCompanies;