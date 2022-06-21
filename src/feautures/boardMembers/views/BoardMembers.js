import BoardMembersComponent from "./BoardMembersComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import { useEffect } from "react";

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
    console.log(directorList);
    const args = {
        directorList,
        representativeList,  
        onSubmitForm: () => {
            initWorkflow();
        }
    };
    return <BoardMembersComponent {...args} />
}

export default BoardMembers;