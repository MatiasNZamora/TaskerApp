import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../Auth/useAuth';

export default function PublicRoute(props) {
    
    const { user } = useAuth();
    if(user) return <Redirect to='/projects'/>


    return (
        <Route {...props}/>
    )
};