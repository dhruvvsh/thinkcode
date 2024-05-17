import {atom} from 'recoil';

type AuthModalState = {
    [x: string]: any;
    
    isopen:boolean;
    type:'login' | 'signup' | 'forgetpassword';
};

const intialAuhtModalState:AuthModalState = {
    isopen: false,
    type: 'login',
    
};

export const authModalState = atom<AuthModalState>({
    key:'authModalState',
    default:intialAuhtModalState,
});