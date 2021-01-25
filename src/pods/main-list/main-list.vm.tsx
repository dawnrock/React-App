export interface MainListEntity {	
    id: string;
    login: string;
    avatar_url: string;    
}

export const defaultList = () => ({
    id: "",
    login: "",
    avatar_url: "",
});
