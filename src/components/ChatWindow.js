import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import './ChatWindow.css';

// icones
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default ()=> {

    const [ emojiOpen, setEmojiOpen ] = useState(false);

    const handleEmojiClick = () => {

    };

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    };

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    };

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://img.lovepik.com/element/40150/6018.png_860.png" alt=""></img>
                    <div className="chatWindow--name">Walter Cruz</div>
                </div>

                <div className="chatWindow--headerbuttons">
                     <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                     </div>

                     <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                     </div>

                     <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                     </div>
                </div>
            </div>

            <div className="chatWindow--body">

            </div>

            <div 
                className="chatWindow--emojiarea"
                style={{height: emojiOpen ? '200px' : '0px'}}
                >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div className="chatWindow--btn" style={{width: emojiOpen ? '40px' : '0px'}}>
                        <CloseIcon 
                        style={{color: '#919191'}} 
                        onClick={handleCloseEmoji}
                        />
                    </div>

                    <div 
                    className="chatWindow--btn"
                    onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </div>
                </div>

                <div className="chatWindow--inputarea">
                    <input 
                    placeholder="Digite uma mensagem"
                    type="text" 
                    className="chatWindow--input" 
                    />
                </div>

                <div className="chatWindow--pos">
                <div className="chatWindow--btn">
                        <SendIcon style={{color: '#919191'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}