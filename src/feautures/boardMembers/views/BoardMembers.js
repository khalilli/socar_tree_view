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
    const [directorList, getDirectors, representativeList, getRepresentatives] = useStore(getState, shallow);

    useEffect(()=>{
        getDirectors();
    }, [getDirectors]);

    useEffect(()=>{
        getRepresentatives();
    }, [getRepresentatives]);

    const directorListName = [];
    for(var i=0;i<directorList.length;i++){
        directorListName.push({dirname: directorList[i]});
    }
    console.log(directorListName);
    const args = {
        directorListName,
        representativeList,  
    };
    return <BoardMembersComponent {...args} />
}

export default BoardMembers;