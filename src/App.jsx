import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  //const chatMessages = array[0]; //array elements
  //const setChatMessages = array[1]; //function React returns to set the array

  return (
    <div className = "app-container">
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
      <ChatMessages 
        chatMessages = {chatMessages}
      />
    </div>
  );
}

export default App
