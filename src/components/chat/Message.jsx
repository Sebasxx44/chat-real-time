import { auth } from "../../firebase"
import { formatDate } from "../helpers"
import { useEffect,useRef  } from "react"

export  function Message({message}) {
    
    const messageEndRef = useRef(null);

    let newStyle = 'message'
    if(auth.currentUser){

        const user = auth.currentUser.uid
        const newUser = message.uid
        newStyle = user === newUser ? 'my-message' : 'message'
    }

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message.text]);

    return (
        
        <>

            <section className="message-component">

                <article className={newStyle}>

                    <div className="text-message">

                        <div className="message-send">
                            <h5>{message.text}</h5>
                        </div>

                        <div className="message-date">
                            <p>{formatDate(message.timestamp)}</p>
                        </div>

                    </div>

                    <div className="img-message">
                        <img src={message.photo} alt="photo" referrerPolicy="no-referrer"/>
                    </div>
                </article>

                <div ref={messageEndRef} />

            </section>
        </>
    )
}