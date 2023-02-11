import styled from "styled-components";

export const Container = styled.div `
    display:flex;
    align-center;
    margin:20px 0;
    padding:10px;
    border-radius:15px;
    border: 1px solid #555;
    gap:1rem;
    cursor:pointer;

    .image:hover{
        opacity:70%;
        transition: all .6s ease-in-out;
        transform:scale(1.1);
    }
    input{
        border:none;
        outline:none;
        border-radius:15px;
        background-color:transparent;
        font-size:20px;
        flex:1;
        color:#ffffff;
        
    };
   
`;
