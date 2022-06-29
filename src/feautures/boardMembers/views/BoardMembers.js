import BoardMembersComponent from "./BoardMembersComponent";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import initiateWorkflow from "../../api/initiateWorkflow";
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
    const args = {
        directorList,
        representativeList,
        onSubmitForm: () => {
            let params = new URLSearchParams(window.location.search);
            let key = parseInt(params.get("key"));
            const args = {
                cid: key,
            };
            initiateWorkflow(args);
        }
    };
    return <BoardMembersComponent {...args} />
}

export default BoardMembers;