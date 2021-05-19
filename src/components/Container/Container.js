import React,{Component} from "react";
import Card from './Card';
import Chat from '../Chat/Chat';
import '../Container/Container.css';

export default class Container extends Component {
    render(){
        return (
            <>

            <Card />
            <Chat />
            </>
        );
    }
}