import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import '../components/Chat/Chat.css';

import weblogo from '../components/Header/logo.gif';

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Make a connection");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className = "Chat">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={weblogo}
          title="Developing Innovative Designs"
          subtitle="Michelle Hall Web Developer"
        />
      </div>
    );
  } 
}

export default Chat;