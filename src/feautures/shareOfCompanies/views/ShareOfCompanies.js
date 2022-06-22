import ShareOfCompaniesComponent from "./ShareOfCompaniesComponents";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import initiateWorkflow from "../../api/initiateWorkflow";
import { useEffect, useState } from "react";

const getState = state => [
    state.companyShares,
    state.companySharesWarn,
    state.getCompanyShares
];

const ShareOfCompanies = () => {
    const [companyShares, companySharesWarn, getCompanyShares] = useStore(getState, shallow);
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

    //remove keys of array to fit tags
    const cname = [];
    const cshare = [];
    for (var i=0; i<companyNameShare.length; i++){
        cname.push(companyNameShare[i].CNAME);
        cshare.push(parseInt(companyNameShare[i].Y));
    }

    const args = {
        companyNameShare,
        companySharesWarn,
        changeNameShare,
        addShare,
        deleteNameShare,
        onSubmitForm: () => {
            const args = {
                companyName: cname,
                companyShare: cshare,
                nameLength: cname.length
            };
            initiateWorkflow(args);
        }
    }

    return <ShareOfCompaniesComponent {...args} />
}

export default ShareOfCompanies;