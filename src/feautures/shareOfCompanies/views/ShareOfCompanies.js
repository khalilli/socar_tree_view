import ShareOfCompaniesComponent from "./ShareOfCompaniesComponents";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import initiateWorkflow from "../../api/initiateWorkflow";
import { useEffect, useState } from "react";

const getState = state => [
    state.companyShares,
    state.getCompanyShares
];

const ShareOfCompanies = () => {
    const [companyShares, getCompanyShares] = useStore(getState, shallow);
    useEffect(()=>{
        getCompanyShares();
    }, [getCompanyShares]);

    const [companyNameShare, setCompanyNameShare] = useState(companyShares);

    useEffect(() => {
      setCompanyNameShare(companyShares);
    }, [companyShares]);
  
    console.log(companyNameShare);
  
    const changeNameShare = (e, id) => {
      const values = [...companyNameShare];
      values[id][e.target.name] = e.target.value;
      setCompanyNameShare(values);
    }
    const addShare = () => {
      setCompanyNameShare([...companyNameShare, {Y: "", CNAME: ""}]);
    }
    const deleteNameShare = (id) => {
      console.log(id);
      const list = [...companyNameShare];
      list.splice(id, 1);
      setCompanyNameShare(list);
    }

    const args = {
        companyNameShare,
        changeNameShare,
        addShare,
        deleteNameShare,
        onSubmitForm: () => {
            const args = {
                companyShares: companyNameShare
            };
            initiateWorkflow(args);
        }
    }

    return <ShareOfCompaniesComponent {...args} />
}

export default ShareOfCompanies;