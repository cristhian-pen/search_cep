import React, { useState } from 'react';
import { SendSharp } from 'react-ionicons/lib/SendSharp';
//import API from './services/API/index';
import Chatbot from './assets/chatbot.jpg'

import './App.css';
import 'animate.css';

import {
  Wrapped,
  ContainerChat,
  Input,
  Header,
  Footer,
  Icon,
  Image,
  Text,
  ChatBot,
  ChatText,
  ChatResponse
} from './styled';

export default function App() {
  const [message, setMessage] = useState('');
  const [messageUser, setMessageUser] = useState([]);

  const callMessage = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value
    });
  }

  const addMessage = () => {
    setMessageUser([message.userMessage].concat(messageUser))
    setMessage('');
  }

  return (
    <>
      <Wrapped >
        <ContainerChat>
          <Header>
            <Image>
              <img className='chatbot' src={Chatbot} height="52px" width="52px" alt='chatbot' />
            </Image>
            <Text>Kurobot</Text>
          </Header>
          <ChatBot>
            <ChatText className='animate__animated animate__fadeInDown'>Olá!, eu sou o Kurobot, o seu robo que descobre ceps</ChatText>
            <ChatText className='animate__animated animate__fadeInDown'>O que voce precisa descobrir?</ChatText>
            <ChatText className='animate__animated animate__fadeInDown'>1-Buscar endereço com CEP</ChatText>
            <ChatText className='animate__animated animate__fadeInDown'>2-Encontrar CEP por endereço</ChatText>
          </ChatBot>
          <ChatResponse>
            {messageUser.map((message) => (
              <ChatText>{message}</ChatText>
            ))}
          </ChatResponse>
          <Footer>
            <Input
              type="text"
              name="userMessage"
              onChange={callMessage}
            />
            <Icon
              onClick={addMessage}
            >
              <SendSharp
                color="#000"
                height="30px"
                width="40px"
              />
            </Icon>
          </Footer>
        </ContainerChat>
      </Wrapped>
    </>
  );
}


