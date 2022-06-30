import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: flex-start;
    div{
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    margin: 0px;

    h3{
        margin: 2px;
        margin-right: 8px;
    }

    a{
        font-size: 16px;
        color: firebrick;
        font-weight: bold;
    }
`;

export const WrapperInfouser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;

    h1{
        font-size: 32px;
        font-weight: bold;
        margin: 0px;
    }
    h3{
        font-size:18px;
        font-weight: bold;
    }
`;

export const WrapperImg = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;