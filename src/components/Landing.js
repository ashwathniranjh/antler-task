import React from 'react';

export const Landing = () => {
    return <div className='grid grid-cols-2 h-screen'>
        <div className='overflow-hidden'>
            <img src='/landing.jpg' alt='banner' className="h-full object-cover" />
        </div>
        <div className='bg-slate-900 flex flex-col justify-center items-center'>
            <h1 className='text-gray-50 text-3xl mb-10'> Hello! 👋</h1>
            <Authcard />
        </div>
    </div>;
}


function Authcard() {
    return <div className='shadow-2xl text-slate-50 '>
        <div className='flex flex-col bg-slate-700 p-10 rounded-t-lg'>
            <input type='text' placeholder='User ID' name='userId' className='bg-slate-600 m-4 rounded-md p-1 px-2' />
            <input type='password' placeholder='Password' name='password' className='bg-slate-600 m-4 rounded-md p-1 px-2' />
            <button type='submit' className='bg-slate-900 rounded-lg p-2 text-gray-50 hover:scale-105 hover:shadow-gray-600 transition ease-out duration-100'>Log In</button>
        </div>
        <div className='flex justify-around items-center bg-slate-800 rounded-b-lg p-3'>
            Don't have an account?
            <button className='bg-slate-900 rounded-lg p-2 px-4 text-gray-50 hover:scale-105 hover:shadow-gray-600 transition ease-out duration-100'>
                <a href="/">Sign Up</a>
            </button>
        </div>
    </div>
}