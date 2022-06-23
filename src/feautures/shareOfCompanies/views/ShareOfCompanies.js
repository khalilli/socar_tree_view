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
  
    const changeNameShare = (e, id) => {
      const values = [...companyNameShare];
      values[id][e.target.name] = e.target.value;
      setCompanyNameShare(values);
    }
    const addShare = () => {
      setCompanyNameShare([...companyNameShare, {Y: "", CNAME: ""}]);
    }
    const deleteNameShare = (e, id) => {
      e.preventDefault();
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
    
    const checkChange = false;
    if(companySharesWarn.length !== companyNameShare.length){
      checkChange = true;
    }else{
      for(var n=0;n<companyNameShare.length;n++){
        if(companyNameShare[n].Y !== companySharesWarn[n].Y || companyNameShare[n].CNAME !== companySharesWarn[n].CNAME){
          checkChange = true;
        }
      }
    }
    console.log(checkChange);
    const args = {
        companyShares,
        companyNameShare,
        companySharesWarn,
        changeNameShare,
        addShare,
        deleteNameShare,
        onSubmitForm: () => {
          let params = new URLSearchParams(window.location.search);
          let key = parseInt(params.get("key"));
          const args = {
            cid: key,
            companyName: cname,
            companyShare: cshare,
            change: checkChange,
            nameLength: cname.length
          };
          initiateWorkflow(args);
        }
    }

    return <ShareOfCompaniesComponent {...args} />
}

export default ShareOfCompanies;