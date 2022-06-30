import React from "react";
import Header from "../header";
import * as styled from "./styled";

function layout({children}){

    return(
       <styled.WrapperLayout>
           <Header/>
           {children}
       </styled.WrapperLayout>
    )
};

export default layout;