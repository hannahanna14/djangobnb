'use client';

import Modal from './Modal';
import { useState } from 'react';
import useLoginModal from '@/app/hooks/useLoginModal';
import CustomButton from '../forms/CustomButton';

const LoginModal = () => {
    const loginModal = useLoginModal()

    const content = (
        <>

            <form className='space-y-4'>
                <input type="email" placeholder='Your E-mail Address' className='w-full h-[54] px-4 border border-gray-300 rounded-xl' />

                <input type="password" placeholder='Your Password' className='w-full h-[54] px-4 border border-gray-300 rounded-xl' />
            
                <div className='p-5 bg-airbnb text-white rounded-xl opacity-80'>
                    The error message
                </div>

                <CustomButton
                    label="Log In"
                    onClick={() => console.log('Test')}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log In"
            content={content}
        />
    )
}

export default LoginModal;