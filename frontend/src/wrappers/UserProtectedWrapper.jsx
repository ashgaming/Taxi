import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/Context_User';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const { user } = useContext(UserDataContext);
    const navigate = useNavigate();
    useEffect(() => {
    
        if (!token) {
            navigate('/user/login')
        }
    }, [])

    return (<>{children}</>)
}

export default UserProtectedWrapper
