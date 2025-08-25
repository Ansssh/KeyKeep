import React, { useEffect } from 'react';
// useContext has been removed as it was not used
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserHome = () => {
    const navigate = useNavigate();
    const name = localStorage.getItem("user");

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found, redirecting to login.');
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_LINK}/getuser`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log("food",response.data.rows);

            } catch (error) {
                console.error('Error fetching data:', error);
                
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.error('Unauthorized or expired token, redirecting to login.');
                    navigate('/login');
                }
            }
        };

        fetchData();
    }, [navigate]);

    return (
        <>
            <h1>Hello, Welcome! {name}</h1>
        </>
    );
};

export default UserHome;