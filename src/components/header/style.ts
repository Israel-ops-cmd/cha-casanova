import styled from "styled-components"
import { pxToRem } from "../../utils/utils"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${pxToRem(30)};
`
export const Container_2 = styled.div`
    margin-top: ${pxToRem(30)};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${pxToRem(80)};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: ${pxToRem(40)};
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
        gap: ${pxToRem(40)};
    }
`
export const Container_3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const StyledH1 = styled.h1`
    font-size: ${pxToRem(30)};
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
        font-size: ${pxToRem(24)};
        padding: 0 ${pxToRem(10)};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${pxToRem(26)};
    }
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

    @media (max-width: 768px) {
        img {
            max-width: ${pxToRem(280)};
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        img {
            max-width: ${pxToRem(300)};
        }
    }
`
export const Verse = styled.p`
    margin-top: ${pxToRem(30)};
    font-size: ${pxToRem(30)};
    max-width: ${pxToRem(500)};
    text-align: center;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
        font-size: ${pxToRem(22)};
        max-width: ${pxToRem(320)};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${pxToRem(26)};
        max-width: ${pxToRem(400)};
    }
`
export const ReferenceVerse = styled.h2`
    margin-top: ${pxToRem(10)};
    font-size: ${pxToRem(20)};
    font-weight: bold;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
        font-size: ${pxToRem(16)};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${pxToRem(18)};
    }
`