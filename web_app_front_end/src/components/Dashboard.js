import React from 'react';
import '../ui_components/Dashboard.css';
import { useLocation } from "react-router-dom";

function Dashboard(){
    const {state} = useLocation();
    const {userEmail} = state
    return(
        <div className='divDashboard'>
            Welcome to Dashboard - {userEmail}
        </div>
    )
}

export default Dashboard;