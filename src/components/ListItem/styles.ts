import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}
export const Container = styled.div(({ done }: ContainerProps) => (

    `display:flex;
    background-color: #20212c;
    justify-content:space-between;
    border-radius: 10px;
    padding:12px;
    margin-bottom:10px;
    margin-top:20px;
    gap:1rem;

    input{
        height:20px;
        width:20px;
        cursor:pointer;
        appearance: none;
        border-radius:50%;
        background-color: #fff;
        
    }
    input:checked {
        background-color: #00FF00;
       
      }
      
    label{
        font-size:20px;
        color:#ffffff;
        width:40vw;
        text-decoration: ${done ? 'line-through' : 'none'};  
        
    };
    button{
        border:none;
        font-size:20px;
        color:#fff;
        background-color:transparent;
        cursor:pointer
    }

    button:hover{
        color:red;
        transition: all .5s ease-in-out;
    }
    `

));

export const DeleteButton = styled.button``;



