import React, { useState, useEffect} from 'react';
import './App.css';

import Api from './Api';

import ChatItemList from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

//icones
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatlist, setChatList] = useState([]);

  const [showNewChat, setShowNewChat] = useState(false);

  const [activeChat, setActiveChat] = useState({});
  const[user, setUser] = useState({
    id: 'QR66VIcbzdWNtHrk1V7GQkZEPJy1',
    name: 'Walter Cruz',
    avatar: 'https://graph.facebook.com/3643279839049620/picture'
  });

  const handleLoginData = async (fbUser) => {
    let newUser = {
      id: fbUser.uid,
      name: fbUser.displayName,
      avatar: fbUser.photoURL
    };

    // TODO: adicionar no firebase...
    await Api.addUser(newUser);
    setUser(newUser);
  };

  if(user === null) {
    return (<Login onReceive={handleLoginData}  />);
  }

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat show={showNewChat} setShow={setShowNewChat} user={user} chatlist={chatlist} />
        <header>
          <img src={user.avatar} alt="" className="header--avatar" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className="header--btn" onClick={handleNewChat}>
              <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
        {chatlist.map((item, key)=> (
          <ChatItemList 
            key={key}
            data={item}
            active={activeChat.chatId === item.chatId}
            onClick={()=>setActiveChat(item)}
          />
        ))}
        </div>
      </div>
      <div className="contentarea">  
        {activeChat.chatId !== undefined &&
          <ChatWindow user={user} />
        }

        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}