import styled from "styled-components"
import { pxToRem } from "../../utils/utils"

export const Container = styled.div`
  margin-top: ${pxToRem(150)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${pxToRem(150)};
`

export const FirstPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const StyledH1 = styled.h1`
  font-size: ${pxToRem(30)};
  font-weight: 400;
`

export const Styledp = styled.p`
  max-width: ${pxToRem(650)};
  margin-top: ${pxToRem(15)};
  font-size: ${pxToRem(15)};

  @media (max-width: 768px) {
    margin-left: ${pxToRem(20)};
    margin-right: ${pxToRem(20)};
  }

  @media (max-width: 480px) {
    max-width: ${pxToRem(500)};
    margin-left: ${pxToRem(20)};
    margin-right: ${pxToRem(20)};
  }
`

export const StyledButton = styled.button`
  margin-top: ${pxToRem(15)};
  padding: ${pxToRem(14)} ${pxToRem(60)};
  border: ${pxToRem(1)} solid #4e361c;
  border-radius: ${pxToRem(12)};
  background: transparent;

  font-family: 'Lora', serif;
  font-size: ${pxToRem(16)};
  font-weight: 500;
  color: #4e361c;

  transition: all 0.3s ease;

  &:hover {
    background-color: #4e361c;
    color: #f8f3ec;
  }
`

export const SecondPart = styled.div`
  margin-top: ${pxToRem(60)};
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 250px));
  gap: ${pxToRem(100)};
  width: 100%;
  justify-content: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(180px, 250px));
    gap: ${pxToRem(50)};
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* mantém 2 */
    gap: ${pxToRem(16)};
    padding: 0 ${pxToRem(16)};
    justify-items: center;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: ${pxToRem(40)};
    padding: 0 ${pxToRem(20)};
    justify-items: center;
  }

`

export const Card = styled.div<{ selected?: boolean }>`
  background-color: #ffffff;
  border-radius: ${pxToRem(16)};
  overflow: hidden;
  max-width: ${pxToRem(300)};
  box-shadow: 0 8px 25px rgba(0,0,0,0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  ${({ selected }) =>
    selected &&
    `
      opacity: 0.5;
      filter: grayscale(100%);
      pointer-events: none;
    `}

    @media (max-width: 768px) {
      max-width: ${pxToRem(300)};
    }
`


export const CardImage = styled.div`
  width: 100%;
  height: ${pxToRem(180)};
  overflow: hidden;
  background-color: #f8f3ec;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardContent = styled.div`
  padding: ${pxToRem(20)};
  text-align: center;
`

export const CardTitle = styled.h3`
  font-size: ${pxToRem(16)};
  font-weight: 500;
  margin-bottom: ${pxToRem(8)};
`

export const CardPrice = styled.p`
  font-size: ${pxToRem(14)};
  margin-bottom: ${pxToRem(12)};
`

/* 🔹 NOVOS COMPONENTES */

export const StoreLabel = styled.span`
  font-size: ${pxToRem(12)};
  color: #8a7a65;
  margin-bottom: ${pxToRem(10)};
  display: block;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${pxToRem(8)};
  justify-content: center;
  align-items: center;
`

export const SelectButton = styled.button`
  padding: ${pxToRem(8)} ${pxToRem(20)};
  border-radius: ${pxToRem(20)};
  border: 1px solid #4e361c;
  background: transparent;
  color: #4e361c;

  font-family: 'Lora', serif;
  font-size: ${pxToRem(14)};
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #4e361c;
    color: #f8f3ec;
  }
`

export const AmazonButton = styled.a`
  padding: ${pxToRem(8)} ${pxToRem(12)};
  border-radius: ${pxToRem(20)};
  border: 1px solid #ddd;
  background: #f8f3ec;
  color: #4e361c;

  font-family: 'Lora', serif;
  font-size: ${pxToRem(12)};
  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #ff9900;
    color: #ffffff;
    border-color: #ff9900;
  }
`
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 280px;
  text-align: center;
`

export const ModalInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`

export const ConfirmButton = styled.button`
  flex: 1;
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
`

export const CancelButton = styled.button`
  flex: 1;
  background: #ccc;
  border: none;
  padding: 8px;
  cursor: pointer;
`


