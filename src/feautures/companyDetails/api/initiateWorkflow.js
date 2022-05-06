import axios from "axios";

const initiateWorkflow = async (args) => {
    const data = new FormData();
    data.append('func', 'll');
    data.append("objId", window.initiateWorkflowId);
    data.append("objAction", "RunReport");
    args.cid && data.append("cid", args.cid);
    args.cname && data.append("cname", args.cname);
    args.stype && data.append("stype", args.stype);
    args.countemp && data.append("countemp", args.countemp);
    args.ceo && data.append("ceo", args.ceo);
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