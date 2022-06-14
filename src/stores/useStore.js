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
            case 'nameWarn':
                companyDetails.nameWarn = object.value;
                break;
            case 'segment':
                companyDetails.segment = object.value; 
                break;
            case 'segmentWarn':
                companyDetails.segmentWarn = object.value; 
                break;
            case 'share':
                companyDetails.share = object.value;
                break;
            case 'shareWarn':
                companyDetails.shareWarn = object.value;
                break;
            case 'numberOfEmployees':
                companyDetails.numberOfEmployees = object.value;
                break;
            case 'numberOfEmployeesWarn':
                companyDetails.numberOfEmployeesWarn = object.value;
                break;
            case 'ceo':
                companyDetails.ceo = object.value;
                break;
            case 'ceoWarn':
                companyDetails.ceoWarn = object.value;
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
                nameWarn: data[0].CNAME,
                segment: data[0].SERVICENAME !== '?' ? data[0].SERVICENAME : '',
                segmentWarn: data[0].SERVICENAME !== '?' ? data[0].SERVICENAME : '',
                share: data[0].CSHARE !== '?' ? data[0].CSHARE : '',
                shareWarn: data[0].CSHARE !== '?' ? data[0].CSHARE : '',
                numberOfEmployees: data[0].COUNTEMP !== '?' ? data[0].COUNTEMP : '',
                numberOfEmployeesWarn: data[0].COUNTEMP !== '?' ? data[0].COUNTEMP : '',
                ceo: data[0].NNAME !== '?' ? data[0].NNAME : '',
                ceoWarn: data[0].NNAME !== '?' ? data[0].NNAME : '',
                countryOfOperation: ''
            }
        })
    }
}

const handleGetDirectors = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=128822&objAction=RunReport&key="+key);
        let data = response.data;
        data.pop();
        data = data.map(x=>x.DIREKTOR);
        console.log(data);
        set({
            directorList: data,
        })
    }
}
const handleGetRepresentatives = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=127757&objAction=RunReport&key="+key);
        let data = response.data;
        data.pop();
        data = data.map(x=>x.UMUMIYIGINCAQ);
        console.log(data);
        set({
            representativeList: data,
        })
    }
}

const handleSetFinancialData = (set, get, args) => {
    const financialData = Object.assign({}, get().financialData);
    for (const object of args) {  
        switch (object.property) {
            case 'active':
                financialData.active = object.value;
                break;
            case 'activeWarn':
                financialData.activeWarn = object.value;
                break;
            case 'capital':
                financialData.capital = object.value;
                break;
            case 'capitalWarn':
                financialData.capitalWarn = object.value;
                break;
            case 'liability':
                financialData.liability = object.value;
                break;
            case 'liabilityWarn':
                financialData.liabilityWarn = object.value;
                break;
            case 'ebitda':
                financialData.ebitda = object.value;
                break;
            case 'ebitdaWarn':
                financialData.ebitdaWarn = object.value;
                break;
            case 'loss':
                financialData.loss = object.value;
                break; 
            case 'lossWarn':
                financialData.lossWarn = object.value;
                break; 
            case 'incometax':
                financialData.incometax = object.value;
                break;
            case 'incometaxWarn':
                financialData.incometaxWarn = object.value;
                break;
            case 'propertytax':
                financialData.propertytax = object.value;
                break; 
            case 'propertytaxWarn':
                financialData.propertytaxWarn = object.value;
                break;   
            case 'dividend1':
                financialData.dividend1 = object.value;
                break;
            case 'dividend1Warn':
                financialData.dividend1Warn = object.value;
                break;
            case 'dividend2':
                financialData.dividend2 = object.value;
                break;   
            case 'dividend2Warn':
                financialData.dividend2Warn = object.value;
                break;     
            default:
                break;
        }
    }
    set({financialData});
}

const handleGetFinancialData = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=126689&objAction=RunReport&key"+key);
        const data = response.data;
        data.pop();
        set({
            financialData: {
                active: data[0].CEMIAKTIVLER,
                activeWarn: data[0].CEMIAKTIVLER,
                capital: data[0].CEMIKAPITAL,
                capitalWarn: data[0].CEMIKAPITAL,
                liability: data[0].CEMIOHDELIKLER,
                liabilityWarn: data[0].CEMIOHDELIKLER,
                ebitda: data[0].EBITDA,
                ebitdaWarn: data[0].EBITDA,
                loss: data[0].XALISMENFEET,
                lossWarn: data[0].XALISMENFEET,
                incometax: data[0].MENFEETVERGI,
                incometaxWarn: data[0].MENFEETVERGI,
                propertytax: data[0].EMLAKVERGI,
                propertytaxWarn: data[0].EMLAKVERGI,
                dividend1: data[0].BUTUNTESISCILERE,
                dividend1Warn: data[0].BUTUNTESISCILERE,
                dividend2: data[0].SOCARA,
                dividend2Warn: data[0].SOCARA,
            }
        })
    }
}

const handleGetCompanyShares = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key")); 
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=128820&objAction=RunReport&key"+key);
        const dataShare = response.data;
        const dataName = response.data;
        dataShare.pop();
        dataName.pop();
        dataShare = dataShare.map(x=>x.Y);
        dataName = dataName.map(x=>x.CNAME);
        set({
            companyShares: [{
                share: dataShare,
                name: dataName
            }]
        })
    }
}

const store = (set, get) => ({
    companyDetails: {
        name: '',
        nameWarn: '',
        segment: '',
        segmentWarn: '',
        share: 0,
        shareWarn: 0,
        numberOfEmployees: 0,
        numberOfEmployeesWarn: 0,
        ceo: '',
        ceoWarn: '',
        countryOfOperation: ''
    },
    directorList: [{dirname: ''}],
    representativeList: [{repname: ''}],
    financialData: {
        active: 0,
        activeWarn: 0,
        capital: 0,
        capitalWarn: 0,
        liability: 0,
        liabilityWarn: 0,
        ebitda: 0,
        ebitdaWarn: 0,
        loss: 0,
        lossWarn: 0,
        incometax: 0,
        incometaxWarn: 0,
        propertytax: 0,
        propertytaxWarn: 0,
        dividend1: 0,
        dividend1Warn: 0,
        dividend2: 0,
        dividend2Warn: 0,
    },
    companyShares: [{name: '', share: 0}],
    setCompanyDetails:  args => handleSetCompany(set, get, args),
    setFinancialData: args => handleSetFinancialData(set, get, args),
    setInitialCompanyDetails: () => set({companyDetails: {
        name: '',
        segment: '',
        share: 0,
        numberOfEmployees: 0,
        ceo: '',
        countryOfOperation: ''
    }}),
    setInitialFinancialData: () => set({financialData: {
        active: 0,
        capital: 0,
        liability: 0,
        ebitda: 0,
        loss: 0,
        incometax: 0,
        propertytax: 0,
        dividend1: 0,
        dividend2: 0
    }}),
    initWorkflow: () => handleInitiateWorkflow(set, get),
    getCompanyDetails: () => handleGetCompanyDetails(set, get),
    getDirectors: () => handleGetDirectors(set, get),
    getRepresentatives: () => handleGetRepresentatives(set, get),
    getFinancialData: () => handleGetFinancialData(set, get),
    getCompanyShares: () => handleGetCompanyShares(set, get)
})


const useStore = create(devtools(store));

export default useStore;