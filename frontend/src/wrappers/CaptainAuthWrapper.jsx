import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainAuthWrapper = async ({
    children
}) => {
    const token = localStorage.getItem('token')
    const { captain, setCaptain, loading, setLoading } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true)
        if (!token) {
            navigate('/captain/login')
        }
    }, [token])

    try {


        const { status, data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (status === 200) {
            setCaptain(data.captain)
            setLoading(false)
        }
    } catch (error) {
        localStorage.removeItem('token')
        navigate('/captain/login')
    }

    if (loading) {
        return (
            <div>Loading ...</div>
        )
    }

    return (<>{children}</>)
}

export default CaptainAuthWrapper
