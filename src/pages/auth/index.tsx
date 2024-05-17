import { authModalState } from '@/atoms/authModalAtoms';
import AuthModal from '@/components/modals/AuthModal';
import Navbar from '@/components/navbar/navbar';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';


type AuthPageProps = {};

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModel=useRecoilValue(authModalState)
    const [user,loading,error]=useAuthState(auth)
    const router = useRouter();
    const[pageloading,setPageLoading]=useState(false);
    useEffect(() => {
        if(user) router.push('/');
        if(!loading && !user) setPageLoading(false);
    }, [user,router,loading]);
      if(pageloading) return null;

    return(
     <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                <img src='/hero.png' alt='Hero img' />

            </div>
            {authModel.isopen && <AuthModal />}
             </div>
    </div>
    );
};
export default AuthPage;