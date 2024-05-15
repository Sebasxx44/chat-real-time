import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import logoGoogle from '/google.svg';
import { useState } from 'react';

export function LogOut() {
    const [error, setError] = useState(null);

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            setError('Failed to log out');
            console.error("Error signing out: ", err);
        }
    };

    return (
        <>
            <button className="btn-logout" onClick={logOut}>
                <img src={logoGoogle} alt="log-google" />
                Logout
            </button>
            {error && <p className="error-message">{error}</p>}
        </>
    );
}
