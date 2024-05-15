import '../../index.css';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../../firebase';
import logoGoogle from '/google.svg';

export function Login() {

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account' 
        });
        signInWithRedirect(auth, provider);
    };

    return (
        <>
            <button className="btn-login" onClick={googleLogin}>
                <img src={logoGoogle} alt="log-google" />
                Sign in with Google
            </button>
        </>
    );
}
