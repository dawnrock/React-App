import { generatePath } from "react-router-dom";

type NavigateFnId = (id: string) => string;

interface SwitchRoutes {
    root: string;
    login: string;
    mainList: string;
    member: string;
    editMember: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    login: '/login',
    mainList: '/mainlist',
    member: '/members',
    editMember: '/members/:id',
};

interface Routes extends Omit<SwitchRoutes, 'editMember'> {
    editMember: NavigateFnId;
}

export const routes : Routes = {
    ...switchRoutes,
    editMember: id => generatePath(switchRoutes.editMember, {id})
}