import { Login } from "./Login";
import { LogOut } from "./Logout";
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export function User() {

    const [user] = useAuthState(auth)
    const image = user ? user.photoURL : ""
    const name = user ? user.displayName : "Guest"

    return(

        <>

        <section className="container-user">
            <div className="card-user">

                {user && (
                    <>
                        <div className="user-info">
                            <img src={image} alt=" image" referrerPolicy="no-referrer"/>
                            <p>{name}</p>
                        </div>
                    </>
                )}


                {user ? <LogOut/> : <Login/>}
            </div>
        </section>

            

        </>
    )
}