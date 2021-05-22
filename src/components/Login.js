import React from 'react';

export default function Login() {
    return (
        <section className="login-wrap">
            <header>
                <h1>Login</h1>
            </header>
            
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}