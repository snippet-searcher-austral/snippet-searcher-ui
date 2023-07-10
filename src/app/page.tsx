'use client'

import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        fetch('/api/session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('accessToken', data.accessToken);
            });
    }, []); // Empty dependency array ensures this runs once when the app starts
    return (
        <>
            Some Content
        </>
    )
}

export default Home