import styled from "styled-components"
import { pxToRem } from "../../utils/utils"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${pxToRem(30)};
`
export const StyledH1 = styled.h1`
    font-size: ${pxToRem(30)};
    font-family: 'Playfair Display', serif;
`
export const Image = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        max-width: ${pxToRem(350)};
        height: auto;
        border-radius: ${pxToRem(15)};
        margin-top: ${pxToRem(30)};
    }
`
export const Verse = styled.p`
    margin-top: ${pxToRem(30)};
    font-size: ${pxToRem(15)};
    max-width: ${pxToRem(500)};
    text-align: center;
    font-family: 'Playfair Display', serif;
`
export const ReferenceVerse = styled.h2`
    margin-top: ${pxToRem(10)};
    font-size: ${pxToRem(20)};
    font-weight: bold;
    font-family: 'Playfair Display', serif;
`