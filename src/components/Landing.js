import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import banner from '../banner.jpg'

export const Landing = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()

    const signInWithFirebase = async () => {
        try {
            await login();
            navigate('/dashboard');
        }
        catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    return <div className='md:grid md:grid-cols-2 h-screen'>
        <div className='overflow-hidden h-1/2 md:h-full'>
            <img src={banner} alt='banner' className="w-full h-full object-cover" />
        </div>
        <div className='bg-slate-900 flex flex-col justify-center items-center h-1/2 md:h-full'>
            <h1 className='text-gray-50 text-3xl mb-10'> Hello! 👋</h1>

            <div className='shadow-2xl text-slate-50 '>
                {/* Sign in with Google */}
                <div className='flex flex-col bg-slate-700 p-10 rounded-lg'>
                    <button disabled={loading} onClick={() => signInWithFirebase()} className='bg-slate-900 rounded-lg p-2 text-gray-50 hover:scale-105 hover:shadow-gray-600 transition ease-out duration-100'>Log In With Google</button>
                </div>
            </div>

        </div>
    </div>;
}


// function Authcard() {



//     return
// }

// {/* <div className='flex flex-col bg-slate-700 p-10 rounded-t-lg'>
//             <input type='text' placeholder='User ID' name='userId' className='bg-slate-600 m-4 rounded-md p-1 px-2' />
//             <input type='password' placeholder='Password' name='password' className='bg-slate-600 m-4 rounded-md p-1 px-2' />
//             <button type='submit' className='bg-slate-900 rounded-lg p-2 text-gray-50 hover:scale-105 hover:shadow-gray-600 transition ease-out duration-100'>Log In</button>
//         </div>
//         <div className='flex justify-around items-center bg-slate-800 rounded-b-lg p-3'>
//             Don't have an account?
//             <button className='bg-slate-900 rounded-lg p-2 px-4 text-gray-50 hover:scale-105 hover:shadow-gray-600 transition ease-out duration-100'>
//                 <a href="/">Sign Up</a>
//             </button>
//         </div> */}

            // {/* <Authcard /> */}
            // {/* <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            //     {error && { error }}
            // </div> */}