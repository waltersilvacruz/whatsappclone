import React, { useState, useEffect} from 'react';
import './App.css';

import ChatItemList from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

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

  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img src="https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.708001390.1599523200" alt="" className="header--avatar" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className="header--btn">
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
          <ChatWindow />
        }

        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}