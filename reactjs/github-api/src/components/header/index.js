import React, { useState } from "react";
import * as Styled from "./styled"
import useGithub from "../../hooks/github-hooks";

function Header (){

    const {getUser} = useGithub();
    const[usernameForSearch, setUserNameForSearch] = useState();

    const submitGetUser = () =>{
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <Styled.Wrapper>
            <input type ="text" 
            placeholder="Digite o nome do usuário do Github" 
            onChange={(event) => setUserNameForSearch(event.target.value)}/>
            <button type="submit" onClick={submitGetUser}>Buscar</button>
        </Styled.Wrapper>
    )
};

export default Header;