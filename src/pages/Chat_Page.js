import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import '../components/Chat/Chat.css';
import video from '../components/Header/logo.mp4';
const response = "";
class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Connect with Designer");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(response);
  }

  render() {
    return (
      <div className = "Chat">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          addResponseMessage = {this.addResponseMessage}
          profileAvatar={video}
          title="Developing Innovative Designs"
          titleAvatar = {video}
          subtitle="Michelle Hall Web Developer"
        />
      </div>
    );
  } 
}

export default Chat;