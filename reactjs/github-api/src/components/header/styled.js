import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 4px;

input{
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 100%;
    height: 30px;
    
}

button{
    background-color: #ddd;
    padding: 4px 16px;
    margin: 0 8px;
    border-radius: 10px;
    
    &:hover{
        box-shadow: 0px 0px 3px black;
        cursor: pointer;
    }
}

`;