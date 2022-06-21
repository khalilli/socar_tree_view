import BoardMembersComponent from "./BoardMembersComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import { useEffect, useState } from "react";

const getState = state => [
    state.directorList,
    state.getDirectors,
    state.representativeList,
    state.getRepresentatives,
    state.initWorkflow
];

const BoardMembers = () => {
    const [directorList, getDirectors, representativeList, getRepresentatives, initWorkflow] = useStore(getState, shallow);

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
    const deleteName = (id, e) => {
       e.preventDefault();
       const list = [...names];  
       list.splice(id, 1);
       setNames(list);
    };
    const deleteNameR = (id, e) => {
       e.preventDefault();
       const list = [...namesR];
       list.splice(id, 1);
       console.log(id);
       setNamesR(list);
    };
    console.log(names);
    console.log(namesR);
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
            initWorkflow();
        }
    };
    return <BoardMembersComponent {...args} />
}

export default BoardMembers;