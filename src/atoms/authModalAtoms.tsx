import {atom} from 'recoil';

type AuthModalState = {
    authType: string;
    isopen:boolean;
    type:'login' | 'signup' | 'forgetpassword';
};

const intialAuhtModalState:AuthModalState = {
    isopen: false,
    type: 'login',
    authType: ''
};

export const authModalState = atom<AuthModalState>({
    key:'authModalState',
    default:intialAuhtModalState,
});