import { useEffect, useState } from "react"
import { auth, db } from "../../firebase"
import { query,collection,orderBy,onSnapshot } from "firebase/firestore"
import { Message } from "./Message"
import { SendMessage } from "./SendMessage"

export function ChatComponent() {

    const [messages, setMessages] = useState('')

    useEffect(() => {
        
        const newQuery = query(collection(db, 'messages'), orderBy('timestamp'))

        const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
            let currentMessages = []
            querySnapshot.forEach((item) => {
                currentMessages.push({ content: item.data(), id: item.id })
            })
            setMessages(currentMessages);
        })

        return unsubscribe;


    }, [])

    return(

        <>
            <section className="chat-content">

                <div className="chat-messages">
                    {messages && messages.map((message) => (
                        <Message key={message.id} message={message.content}/>
                    ))}
                </div>

                <div className="chat-send-message">
                    <SendMessage/>
                </div>




            </section>
        </>
    )
    
}  

