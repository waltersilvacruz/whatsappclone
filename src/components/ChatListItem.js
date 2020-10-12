import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {
    return (
        <div 
        className={`chatListItem ${active?'active':''}`}
        onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:25</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Tranquilo, e você? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam libero dignissimos iure repudiandae optio reprehenderit rem! Nemo consequuntur amet nisi itaque magni fuga libero! Suscipit, quos? Vitae, cum consectetur!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}