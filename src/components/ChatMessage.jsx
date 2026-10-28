import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  //const message = props.message;

  return (
    <div className = 
      {sender === 'user' 
        ? "user" 
        : "bot"
    }>

      {sender === 'robot' && (
        <img 
          src = {RobotProfileImage} 
          width = "50" 
        />
      )}

      <div className = "text">
        {message}
      </div>

      {sender === 'user' && (
        <img 
          src = {UserProfileImage} 
          width = "50" 
        />
      )}
    </div>
  );
}