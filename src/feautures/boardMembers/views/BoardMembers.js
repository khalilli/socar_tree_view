import BoardMembersComponent from "./BoardMembersComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import { useEffect } from "react";

const getState = state => [
    state.directorList,
    state.getDirectors
];

const BoardMembers = () => {
    const [directorList, getDirectors] = useStore(getState, shallow);

    useEffect(()=>{
        getDirectors();
    }, [])

    const args = {
        directorList
    };
    return <BoardMembersComponent {...args} />
}

export default BoardMembers;