export interface Login {
    user : string,
    password : string;
}
export const createEmptyLogin = () => ({
    user : '',
    password : '',
});