import styled from "styled-components"
import { pxToRem } from "../../utils/utils"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${pxToRem(80)};
    margin-bottom: ${pxToRem(40)};
    font-weight: 541;

    img {
        width: ${pxToRem(20)};
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    img:hover {
        transform: translateY(-5px);
    }

    a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: transform 0.2s ease;
    }

    a:hover {
        transform: translateY(-3px);
    }

`