import BoardMembersComponent from "./BoardMembersComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import initiateWorkflow from "../../api/initiateWorkflow";
import { useEffect, useState } from "react";

const getState = state => [
    state.directorList,
    state.getDirectors,
    state.representativeList,
    state.repListWarn,
    state.getRepresentatives,
    state.initWorkflow
];

const BoardMembers = () => {
    const [directorList, getDirectors, representativeList, repListWarn, getRepresentatives, initWorkflow] = useStore(getState, shallow);

    useEffect(()=>{
        getDirectors();
    }, [getDirectors]);

    useEffect(()=>{
        getRepresentatives();
    }, [getRepresentatives]);

    const [names, setNames] = useState(directorList);
    const [namesR, setNamesR] = useState(representativeList);

    useEffect(() => {
      setNames(directorList);
    }, [directorList]);
    useEffect(() => {
      setNamesR(representativeList);
    }, [representativeList]);

    const handleChangeDirectors = (event, id) => {
        const values = [...names];
        values[id][event.target.name] = event.target.value;
        setNames(values);
    };
    const handleChangeRep = (event, id) => {
        const valuesR = [...namesR];
        valuesR[id][event.target.name] = event.target.value;
        setNamesR(valuesR);
    };

    const addName = () => {
        setNames([...names, {dirname: ""}]);
    };
      const addNameR = () => {
        setNamesR([...namesR, {repname: ""}]);
    };
    const deleteName = (e, id) => {
        e.preventDefault();
        const list = [...names];  
        list.splice(id, 1);
        setNames(list);
    };
    const deleteNameR = (e, id) => {
       e.preventDefault();
       const list = [...namesR];
       list.splice(id, 1);
       setNamesR(list);
    };
    //remove keys for tag
    const namesValue = [];
    const namesRValue = [];
    for (var i=0;i<names.length;i++){
        namesValue.push(names[i].dirname);
    }
    for (var j=0;j<namesR.length;j++){
        namesRValue.push(namesR[j].repname);
    }
    // check if any change happened
    var checkChangeDir = false;
    var checkChangeRep = false;
    console.log(names);
    console.log(directorList);
    console.log(namesR);
    console.log(representativeList);

    const args = {
        names,
        namesR,
        handleChangeDirectors,
        handleChangeRep,
        addName,
        addNameR,
        deleteName,
        deleteNameR,
        onSubmitForm: () => {
            let params = new URLSearchParams(window.location.search);
            let key = parseInt(params.get("key"));
            const args = {
                cid: key,
                directorList: namesValue,
                directorLength: namesValue.length,
                representativeList: namesRValue,
                representativeLength: namesRValue.length
            };
            initiateWorkflow(args);
        }
    };
    return <BoardMembersComponent {...args} />
}

export default BoardMembers;