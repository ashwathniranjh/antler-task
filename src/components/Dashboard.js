import React, { useEffect, useState } from 'react';
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import {docs} from "../firebase";
import { getDocs } from 'firebase/firestore';
import Current from './Current';
import Graph from './Graph';

export const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [btcPrice, setBtcPrice] = useState([])
    const [f, setF] = useState(true);

    const signOutHandler = async () => {
        try {
            await logout();
            navigate("/");
        }
        catch (err) {
            console.log(err);
            setError("An error occured while logging out.")
        }
    }

    useEffect(() => {
        let tmp = []
        async function res(){
            const snapshot = await getDocs(docs)
            snapshot.docs.forEach(snap => {
            tmp = snap.data().prices;
            })
            for(let i = 0; i<tmp.length; i++){
                tmp[i] = {id:i, ...tmp[i]};
            }
            setBtcPrice(tmp);
            setF(false);
        }
        res();
    },[])

    return <div className="bg-slate-900 min-h-screen text-gray-50">
        <div onClick={() => signOutHandler()} className="w-11/12 mx-auto flex justify-end items-center" style={{ minHeight: "5vh"}}>
            <a href="/">Sign Out</a>
            
        </div>
        {error.length?
            <div className='flex items-center justify-end text-red-500 mr-5'>{error}</div>
            :
            <></>
        }
        <div className="flex flex-col items-center justify-center" style={{ minHeight: "95vh" }}>
            {f?
            <div className='flex'>
                <div className={`h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce`}></div>
                <div className={`h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce200`}></div>
                <div className={`h-2.5 w-2.5 bg-current rounded-full animate-bounce400`}></div>
        </div>
            : 
            <>
            <Current 
            currPrice = {btcPrice[btcPrice.length - 1].val} 
            currDate =  {btcPrice[btcPrice.length - 1].date}
            currTime =  {btcPrice[btcPrice.length - 1].time}
            />
            <Graph
            fullData = {btcPrice}
            />
            </>
            }
            
        </div>
    </div>
}