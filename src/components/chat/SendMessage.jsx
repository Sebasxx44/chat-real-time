import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db,auth } from "../../firebase"
import { useState } from "react"
import Picker from 'emoji-picker-react';
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';


export function SendMessage() {

    const [input,setInput] = useState('')
    const [open,setOpen] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769);
    const [user] = useAuthState(auth);

    const sendMessage = async (e) => {
        
        e.preventDefault()

        const {uid,displayName, photoURL} = auth.currentUser

        await addDoc(collection(db, 'messages'), {
            text : input,
            name : displayName,
            uid : uid,
            photo : photoURL,
            timestamp : serverTimestamp()
        })

        setInput('')
        setOpen(false)
    }

    const closeEmoji = () => {
        setOpen(!open)
    }

    const onEmojiClick = (emojiObject) => {
        setInput((prevInput) => prevInput + emojiObject.emoji);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 700);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return(

        <>


        {user ? 

            <form onSubmit={sendMessage}>

                <div className="send-message-container">
                    <button type="button" className="btn-emoji"  onClick={closeEmoji}>
                        {open ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-face-smile"></i>}
                    </button>

                    <div className={open ? 'open' : 'close'}>
                        <Picker onEmojiClick={onEmojiClick}/>
                    </div>

                    <input type="text" placeholder="Escribe tu mensaje" value={input} onChange={(e) => setInput(e.target.value)}/>

                    <button type="submit" className="btn-send-message">
                        {isSmallScreen ? <i className="fa-solid fa-paper-plane"></i> : "Enviar"}
                    </button>
                </div>


            </form>
        
        : 

            <h1>dsdsdsdsd</h1>
        
        }

        </>
        

    )
}