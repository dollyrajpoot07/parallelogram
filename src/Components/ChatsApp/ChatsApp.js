import { ChatEngine } from 'react-chat-engine';
import Logo from './components/Images/Parallelogram_Chats.png';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './ChatsApp.css';

const projectID = 
'c51b9f3f-42e7-474c-b89d-53accf03a399';

const ChatsApp = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      <div className="nav-bar">
        <div className='logo-outer-box'>
          <img src= {Logo} alt='logo' className='logo'/>
        </div>
      </div>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
};


export default ChatsApp;