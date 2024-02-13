import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';



function Sidebar() {
    return (

        <div className="sidebar">
            <Link to="/"><HomeIcon fontSize="large" />HOME</Link>
            <Link to="/addstudent"><InfoIcon fontSize="large" />ADD STUDENT</Link>
            <Link to="/viewstudents"><VisibilityIcon fontSize="large" />VIEW STUDENTS</Link>
        </div>

    )
}

export default Sidebar