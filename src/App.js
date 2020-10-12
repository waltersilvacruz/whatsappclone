import React, { useState, useEffect} from 'react';
import './App.css';

import ChatItemList from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

//icones
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Fulano de tal', image: 'https://img.lovepik.com/element/40150/6018.png_860.png'},
    {chatId: 2, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 3, title: 'Fulano de tal', image: 'https://www.w3schools.com/w3images/avatar6.png'},
    {chatId: 4, title: 'Fulano de tal', image: 'https://www.blexar.com/avatar.png'},
    {chatId: 5, title: 'Fulano de tal', image: 'https://img.lovepik.com/element/40032/5163.png_860.png'},
  ]);

  const [showNewChat, setShowNewChat] = useState(false);

  const [activeChat, setActiveChat] = useState({});
  const[user, setUser] = useState({
    id: 2,
    avatar: 'https://www.blexar.com/avatar.png',
    name: 'Walter Cruz'
  });

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