import axios from "axios";

const initiateWorkflow = async (args) => {
    const data = new FormData();
    data.append('func', 'll');
    data.append("objId", window.initiateWorkflowId);
    data.append("objAction", "RunReport");
    args.cid && data.append("cid", args.cid);
    args.cname && data.append("cname", args.cname);
    args.segment && data.append("segment", args.segment);
    args.share && data.append("share", args.share);
    args.numberOfEmployees && data.append("numberOfEmployees", args.numberOfEmployees);
    args.ceo && data.append("ceo", args.ceo);
    args.active && data.append("active", args.active);
    args.capital && data.append("capital", args.capital);
    args.liability && data.append("liability", args.liability);
    args.ebitda && data.append("ebitda", args.ebitda);
    args.loss && data.append("loss", args.loss);
    args.incometax && data.append("incometax", args.incometax);
    args.propertytax && data.append("propertytax", args.propertytax);
    args.dividend1 && data.append("dividend1", args.dividend1);
    args.dividend2 && data.append("dividend2", args.dividend2);
    data.append("nextUrl", window.nextUrl);

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