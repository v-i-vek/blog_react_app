import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Dashbaord() {
    const { user } = useAuth();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {user?.email}</p>
            <p>Hello this is dashboard</p>
        </div>
    )
}