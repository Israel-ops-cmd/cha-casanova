import styled from 'styled-components'
import { pxToRem } from '../../utils/utils'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${pxToRem(20)} ${pxToRem(40)} 0 ${pxToRem(40)};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: ${pxToRem(20)};
        margin: ${pxToRem(20)} ${pxToRem(20)} 0 ${pxToRem(20)};
    }

    @media (max-width: 480px) {
        ul {
            flex-direction: column;
            align-items: center;
            gap: ${pxToRem(15)};
        }
    }

`
export const NamesContainer = styled.p`
    font-size: ${pxToRem(30)};
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
        font-size: ${pxToRem(26)};
        text-align: center;
    }
`
export const Elements = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        gap: ${pxToRem(30)};
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    cursor: pointer;

        &:hover {
        opacity: 0.7;
        }
    }

    @media (max-width: 768px) {
        ul {
            gap: ${pxToRem(20)};
            justify-content: center;
        }
    }
`


