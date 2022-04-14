import axios from 'axios';
import create from 'zustand';
import {devtools} from 'zustand/middleware';
import initiateWorkflow from '../feautures/companyDetails/api/initiateWorkflow';

const handleSetCompany = (set, get, args) => {
    const companyDetails = Object.assign({}, get().companyDetails);
    for (const object of args) {
        switch (object.property) {
            case 'name':
                companyDetails.name = object.value;
                break;
            case 'segment':
                companyDetails.segment = object.value; 
                break;
            case 'share':
                companyDetails.share = object.value;
                break;
            case 'numberOfEmployees':
                companyDetails.numberOfEmployees = object.value;
                break;
            case 'ceo':
                companyDetails.ceo = object.value;
                break;
            case 'countryOfOperation':
                companyDetails.countryOfOperation = object.value;
                break;
            default:
                break;
        }
    }
    set({companyDetails});
}

const handleInitiateWorkflow = async (set, get) => {
    const companyDetails = get().companyDetails;
    const args = {
        cname: companyDetails.name,
        countemp: companyDetails.numberOfEmployees,
        ceo: companyDetails.ceo
    };
    await initiateWorkflow(args);
}

const handleGetCompanyDetails = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=116190&objAction=RunReport&key="+key);
        const data = response.data;
        data.pop();
        set({
            companyDetails: {
                name: data[0].CNAME,
                segment: data[0].SERVICENAME !== '?' ? data[0].SERVICENAME : '',
                share: data[0].CSHARE !== '?' ? data[0].CSHARE : '',
                numberOfEmployees: data[0].COUNTEMP !== '?' ? data[0].COUNTEMP : '',
                ceo: data[0].NNAME !== '?' ? data[0].NNAME : '',
                countryOfOperation: ''
            }
        })
    }
}

const handleGetDirectors = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=116138&objAction=RunReport&key="+key);
        let data = response.data;
        data.pop();
        data = data.map(x=>x.NAME);
        console.log(data);
        set({
            directorList: data
        })
    }
}

const store = (set, get) => ({
    companyDetails: {
        name: '',
        segment: '',
        share: 0,
        numberOfEmployees: 0,
        ceo: '',
        countryOfOperation: ''
    },
    directorList: [],
    setCompanyDetails:  args => handleSetCompany(set, get, args),
    setInitialCompanyDetails: () => set({companyDetails: {
        name: '',
        segment: '',
        share: 0,
        numberOfEmployees: 0,
        ceo: '',
        countryOfOperation: ''
    }}),
    initWorkflow: () => handleInitiateWorkflow(set, get),
    getCompanyDetails: () => handleGetCompanyDetails(set, get),
    getDirectors: () => handleGetDirectors(set, get)
})

const useStore = create(devtools(store));

export default useStore;