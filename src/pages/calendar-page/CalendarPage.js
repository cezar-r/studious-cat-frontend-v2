import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import CalendarView from './CalendarView'; // Import CalendarView
import uofaLogo from '../../assets/uofa_logo_clear.png';


const CalendarPage = () => {
    const username = "cezarr";

    return (
        <div className="px-8 py-4">
            <div className="flex justify-between items-center pb-8">
                <button className="bg-red-500 hover:bg-red-800 text-white font-bold pt-4 pb-5 px-6 rounded-xl text-3xl leading-none">
                    +
                </button>
                <div className="flex flex-grow justify-center items-center">
                    <input 
                        type="text" 
                        placeholder="Find a Study Group..." 
                        className=" w-1/3 p-4 border bg-blue-500 border-blue-500 rounded font-bold text-lg text-white"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold px-4 py-4 rounded-lg text-lg flex items-center justify-center">
                    <img src={uofaLogo} alt="School Logo" className="w-auto max-h-8 mr-3" />
                    {username}
                </button>

            </div>
            <CalendarView />
        </div>
    );
};

export default CalendarPage;
