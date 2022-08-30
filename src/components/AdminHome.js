import React from 'react'

import AdminSideNav from "./AdminSideNav";
import Dashboard from './Dashboard';

export default function AdminHome() {
    return (
        <div>

            <Dashboard />
            <div className="row m-0 p-0" >
                <div style={{ zIndex: '1' }}>
                    <AdminSideNav />

                </div>
            </div>
        </div>

    )
}
