import axios from "axios";

const initiateWorkflow = async (args) => {
    const data = new FormData();
    data.append('func', 'll');
    data.append("objId", window.initiateWorkflowId);
    data.append("objAction", "RunReport");
    console.log(args.cid);
    args.cid && data.append("cid", args.cid);
    if (args.colorN === true){
      args.cname && data.append("cname", args.cname);
    }
    if (args.colorS === true){
      args.segment && data.append("segment", args.segment);
    }
    if (args.colorSh === true){
      args.share && data.append("share", args.share);
    }
    if (args.colorEmp === true){
      args.numberOfEmployees && data.append("numberOfEmployees", args.numberOfEmployees);
    }
    if (args.colorCeo === true){
      args.ceo && data.append("ceo", args.ceo);
    }
    args.directorLength && data.append("directorLength", args.directorLength);
    for(var j=0; j<args.directorLength; j++){
      args.directorList[j] && data.append("directorList"+[j+1], args.directorList[j]);
    }
    args.representativeLength && data.append("representativeLength", args.representativeLength);
    for(var k=0; k<args.representativeLength; k++){
      args.representativeList[k] && data.append("representativeList"+[k+1], args.representativeList[k]);
    }
    if (args.color === true){
      args.active && data.append("active", args.active);
    }
    if(args.colorC === true){
      args.capital && data.append("capital", args.capital);
    }
    if(args.colorL === true){
      args.liability && data.append("liability", args.liability);
    }
    if(args.colorE === true){
      args.ebitda && data.append("ebitda", args.ebitda);
    }
    if(args.colorLoss === true){
      args.loss && data.append("loss", args.loss);
    }
    if(args.coloriT === true){
      args.incometax && data.append("incometax", args.incometax);
    }
    if(args.colorpT === true){
      args.propertytax && data.append("propertytax", args.propertytax);
    }
    if(args.colorD1 === true){
      args.dividend1 && data.append("dividend1", args.dividend1);
    }
    if(args.colorD2 === true){
      args.dividend2 && data.append("dividend2", args.dividend2);
    }
    if (args.change === true){
      args.nameLength && data.append("nameLength", args.nameLength);
      for(var i=0; i<args.nameLength; i++){
        args.companyName[i] && data.append("companyName"+[i+1], args.companyName[i]);
      }
      args.companyShare && data.append("companyShare", args.companyShare);
      data.append("nextUrl", window.nextUrl);
    }

    const config = {
      method: 'post',
      url: window.baseUrl,
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

export default initiateWorkflow;