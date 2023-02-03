import styled from 'styled-components';

export const Wrapped = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerChat = styled.section`
    height: 35rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0.2rem solid #535353;
    border-radius: 0.5rem;
    box-shadow: -0.1px 0.1em 0.1em rgba(0.2, 0.2, 0.2, 0.5);
    background: linear-gradient(45deg, #d3d3d3, #dcdcdc);
    overflow-x: auto;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: 1;
    align-items: center;
    height: 5em;
    width: 29.7em;
    border-radius: 0.4rem 0.4rem 0 0;
    border-width: 0.2em;
    box-shadow: 0 0.1em 0.2em rgba(0.2, 0.2, 0.2, 0.6);
    background-color: #fff;
`;

export const Input = styled.input`
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: 1;
    height: 2.5rem;
    width: 23rem;
    padding: 0 1rem 0 1rem;
    margin: 0 1em 0.8em 0.8em;
    border-width: 0.1rem;
    border-color: #535353;
    border-radius: 2rem;
    background-color: #fff;
    font-size: 1rem;
    font-weight: medium;
    box-shadow: 0em 0.1em 0.1em #535353;
    overflow: auto;
`;

export const Footer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled.button`
    margin-bottom: 0.5em;
    cursor: pointer;
    border-radius: 1em;
    background: none;
    border: none;
`;

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:3.5em;
    width: 3.5em;
    border:0.1em solid black;
    border-radius: 2em;
    margin-left: 1.3em;
    background-color: #000;
`;

export const Text = styled.text`
    font-size: 2rem;
    font-weight: medium;
    margin-left: 1em;
    font-family: 'Acme';
`;

export const ChatBot = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1em;
`;

export const ChatText = styled.li`
    display: flex;
    justify-content: center;
    width: 15rem;
    margin: 1em 1em 0 0;
    font-size: 1em;
    font-weight: lighter;
    font-style: 'Acme';
    box-sizing: border-box;
    background-color: #a9a9a9;
    border-radius: 1rem;
    box-shadow: 0em 0.1em 0.1em #535353;
    text-align: center;
    overflow-x: auto;
`;

export const ChatResponse = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`;

/*color schema: {
  red: '#FF0043'
  white: '#FAFAFA'
  gray: '#535353'
} 
color schema dark: {
  black: '#100F10'
  gray1: '#1B1B1B'
  gray2: '#242424'  
}
*/

