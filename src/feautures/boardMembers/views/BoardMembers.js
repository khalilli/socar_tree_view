import BoardMembersComponent from "./BoardMembersComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import { useEffect } from "react";

const getState = state => [
    state.directorList,
    state.getDirectors,
    state.representativeList,
    state.getRepresentatives
];

const BoardMembers = () => {
    const [directorList, getDirectors, representativeList] = useStore(getState, shallow);

    useEffect(()=>{
        getDirectors();
    }, []);

    const args = {
        directorList,
        representativeList,  
    };
    return <BoardMembersComponent {...args} />
}

export default BoardMembers;