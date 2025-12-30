import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`
export const StyledH1 = styled.h1`
    font-size: 30px;
`
export const Image = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 15px;
        margin-top: 30px;
    }
`