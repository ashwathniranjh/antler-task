import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


export function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    if (currentUser) {
        return <Component />
    }
    return <Navigate to="/" />
}