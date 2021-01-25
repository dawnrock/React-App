export interface MemberEntity {
    id: string;
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    company: string;
}

export const createDefaultMember = () => ({
    id: "",
    login: "",
    name: "",
    avatar_url: "",
    bio: "",
    company: ""
})