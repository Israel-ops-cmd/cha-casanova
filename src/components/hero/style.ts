import styled from 'styled-components'
import { pxToRem } from '../../utils/utils'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${pxToRem(20)} ${pxToRem(40)} 0 ${pxToRem(40)};
`
export const NamesContainer = styled.p`
    font-size: ${pxToRem(30)};
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
`


