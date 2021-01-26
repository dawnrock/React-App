export interface MainListEntity {	
    id: string;
    name: string;
    login: string;
    avatar_url: string;
    email: string;
    
        
}

export const defaultList = () => ({
    id: "",
    name: "",
    login: "",
    avatar_url: "",
    email: "", 
});
