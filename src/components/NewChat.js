import React, { useState, useEffect } from 'react';
import './NewChat.css';

// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../Api';

export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            if(user !== null) {
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        };

        getList();
    }, [user]);

    const handleClose = () => {
        setShow(false);
    };

    const addNewChat = async (destino)=> {
        await Api.addNewChat(user, destino);
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
                    <div className="newChat--item" key={key} onClick={() => addNewChat(item)}>
                        <img className="newChat--itemavatar" src={item.avatar} alt={item.name} />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};