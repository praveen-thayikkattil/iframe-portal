import React from 'react';
import useToken from './useToken';

export default function Toolbar() {
    const { unsetToken } = useToken();

    return (
        <div className="app-toolbar">
            <h4>Logged-in Toolbar</h4>

            <a href='/' onClick={unsetToken}>Logout</a>
        </div>
    );
}