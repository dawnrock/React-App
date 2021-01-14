import { generatePath } from "react-router-dom";

type NavigateFnId = (id: string) => string;

interface SwitchRoutes {
    root: string;
    login: string;
    submodulelist: string;
    employees: string;
    editEmployee: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    login: '/login',
    submodulelist: '/submodule-list',
    employees: '/employees',
    editEmployee: '/employees/:id',
};

interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {
    editEmployee: NavigateFnId;
}

export const routes : Routes = {
    ...switchRoutes,
    editEmployee: id => generatePath(switchRoutes.editEmployee, {id})
}