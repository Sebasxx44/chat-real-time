
import './index.css'
import {ChatComponent} from './components/chat/Chat'
import { User } from './components/auth/User'

function App() {

  return (
    <>
      <div className='render-container-app'>
        <User/>
        <ChatComponent/>  
      </div>
    </>
  )
}

export default App
