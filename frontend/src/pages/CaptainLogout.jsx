import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/captain/login');
            return; // Exit early if no token
        }

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/user/login');
                }
            })
            .catch(error => {
                console.error('Logout error:', error);
                // Handle error, e.g., show an error message to the user
            });
    }, []);


    return (
        <div>
            Captain LogOut
        </div>
    )
}

export default CaptainLogout;
