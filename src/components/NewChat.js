import React, { useState } from 'react';
import './NewChat.css';

// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState([
        {id: 1, avatar: 'https://img.lovepik.com/element/40150/6018.png_860.png', name: 'Josilene Oliviera'},
        {id: 2, avatar: 'https://img.lovepik.com/element/40150/6018.png_860.png', name: 'Josilene Oliviera'},
        {id: 3, avatar: 'https://img.lovepik.com/element/40150/6018.png_860.png', name: 'Josilene Oliviera'},
        {id: 4, avatar: 'https://img.lovepik.com/element/40150/6018.png_860.png', name: 'Josilene Oliviera'},
    ]);

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat--header">
                <div className="newChat--backbutton" onClick={handleClose}>
                    <ArrowBackIcon style={{color: '#fff'}} />
                </div>

                <div className="newChat--headertitle">
                    Nova Conversa
                </div>
            </div>

            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt={item.name} />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};