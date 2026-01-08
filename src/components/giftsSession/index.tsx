import React, { useEffect, useState } from "react"
import {
  Container,
  FirstPart,
  StyledButton,
  StyledH1,
  Styledp,
  SecondPart,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardPrice,
  StoreLabel,
  ButtonGroup,
  SelectButton,
  AmazonButton,
  Overlay,
  Modal,
  ModalInput,
  ModalButtons,
  ConfirmButton,
  CancelButton,
} from "./style"

import panela from "../../assets/jogodepanelas.webp"
import cortina from "../../assets/cortina.webp"
import tabuadepassar from "../../assets/tabuadepassar.webp"
import tapetedesala from "../../assets/tapetedesala.webp"
import jogodecopos from "../../assets/jogodecopos (2).webp"
import escorredor from "../../assets/escorredordelouças.webp"
import panelapressao from "../../assets/paneladepressao.webp"
import sanduichera from "../../assets/sanduichera.webp"
import lixeira from "../../assets/lixeira.webp"
import ferro from "../../assets/ferro.webp"
import kitfrigideira from "../../assets/kitfrigideira.webp"
import varal from "../../assets/varalportatil.webp"
import espremedor from "../../assets/espremedor.webp"

type Gift = {
  id: number
  title: string
  price: string
  image: string
  amazonLink: string
}

const SHEET_MONKEY_URL =
  "https://api.sheetmonkey.io/form/6SwjeFH488SpZQsJTBedD4"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxXKqycLDFYH0YMCIM6nTKcKNi0KTyNR3s9xm8aX35fNoWMdyGBEbEBmMOdpiE-XTjA/exec"

const gifts: Gift[] = [
  { id: 1, title: "Jogo de Panelas", price: "R$ 180,59", image: panela, amazonLink: "https://www.amazon.com.br/Panelas-Pe%C3%A7as-Preto-Antiaderente-Utens%C3%ADlios/dp/B0BVRMSG5Q" },
  { id: 2, title: "Cortina tecido blackout", price: "R$ 139,99", image: cortina, amazonLink: "https://www.amazon.com.br/" },
  { id: 3, title: "Tábua de passar", price: "R$ 107,91", image: tabuadepassar, amazonLink: "https://www.amazon.com.br/" },
  { id: 4, title: "Tapete de Sala", price: "R$ 174,90", image: tapetedesala, amazonLink: "https://www.amazon.com.br/" },
  { id: 5, title: "Jogo de copos", price: "R$ 69,21", image: jogodecopos, amazonLink: "https://www.amazon.com.br/" },
  { id: 6, title: "Escorredor de louças inox", price: "R$ 129,90", image: escorredor, amazonLink: "https://www.amazon.com.br/" },
  { id: 7, title: "Panela de pressão 7 litros", price: "R$ 121,60", image: panelapressao, amazonLink: "https://www.amazon.com.br/" },
  { id: 8, title: "Sanduicheira", price: "R$ 60,83", image: sanduichera, amazonLink: "https://www.amazon.com.br/" },
  { id: 9, title: "Lixeira inox", price: "R$ 57,49", image: lixeira, amazonLink: "https://www.amazon.com.br/" },
  { id: 10, title: "Ferro de passar roupa", price: "R$ 99,00", image: ferro, amazonLink: "https://www.amazon.com.br/" },
  { id: 11, title: "Kit de frigideiras", price: "R$ 77,90", image: kitfrigideira, amazonLink: "https://www.amazon.com.br/" },
  { id: 12, title: "Varal portátil sanfonado", price: "R$ 149,90", image: varal, amazonLink: "https://www.amazon.com.br/" },
  { id: 13, title: "Espremedor de laranja", price: "R$ 169,00", image: espremedor, amazonLink: "https://www.amazon.com.br/" },
]

export const Gifts: React.FC = () => {
  const [selectedGifts, setSelectedGifts] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [guestName, setGuestName] = useState("")
  const [currentGift, setCurrentGift] = useState<Gift | null>(null)

  // Busca presentes já selecionados
  useEffect(() => {
    fetch(SCRIPT_URL, { cache: "no-store" })
      .then(res => res.json())
      .then((selectedTitles: string[]) => {
        const ids = gifts
          .filter(gift => selectedTitles.includes(gift.title))
          .map(gift => gift.id)
        setSelectedGifts(ids)
        setLoading(false)
      })
      .catch(err => {
        console.error("Erro ao buscar presentes:", err)
        setLoading(false)
      })
  }, [])

  const openModal = (gift: Gift) => {
    setCurrentGift(gift)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setGuestName("")
    setCurrentGift(null)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!currentGift) return

    // Bloqueia o botão imediatamente
    setSelectedGifts(prev => [...prev, currentGift.id])

    // Envia para SheetMonkey
    const formData = new FormData(e.currentTarget)
    fetch(SHEET_MONKEY_URL, { method: "POST", body: formData })
      .then(() => closeModal())
      .catch(err => {
        console.error("Erro ao enviar para SheetMonkey:", err)
        closeModal()
      })
  }

  return (
    <>
      <Container>
        <FirstPart>
          <StyledH1>Lista de Presentes</StyledH1>
          <Styledp>
            Preparamos essa lista com muito carinho para quem deseja nos presentear.
            <br />
            Sua presença já é um presente.
          </Styledp>
          <StyledButton>Ver lista de presentes</StyledButton>
        </FirstPart>

        <SecondPart>
          {!loading ? (
            gifts.map((gift) => (
              <Card key={gift.id}>
                <CardImage>
                  <img src={gift.image} alt={gift.title} />
                </CardImage>

                <CardContent>
                  <CardTitle>{gift.title}</CardTitle>
                  <CardPrice>{gift.price}</CardPrice>
                  <StoreLabel>Disponível na Amazon</StoreLabel>

                  <ButtonGroup>
                    <SelectButton
                      onClick={() => openModal(gift)}
                      disabled={selectedGifts.includes(gift.id)}
                    >
                      {selectedGifts.includes(gift.id)
                        ? "Item selecionado"
                        : "Selecionar"}
                    </SelectButton>

                    <AmazonButton href={gift.amazonLink} target="_blank">
                      Ver na Amazon
                    </AmazonButton>
                  </ButtonGroup>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>Carregando presentes...</p>
          )}
        </SecondPart>

        {modalOpen && currentGift && (
          <Overlay>
            <Modal>
              <p><strong>{currentGift.title}</strong></p>

              <form onSubmit={handleSubmit}>
                <ModalInput
                  name="Name"
                  placeholder="Seu nome"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                />
                <input type="hidden" name="Presente" value={currentGift.title} />
                <input type="hidden" name="Data" value={new Date().toLocaleString()} />

                <ModalButtons>
                  <ConfirmButton type="submit">Confirmar</ConfirmButton>
                  <CancelButton type="button" onClick={closeModal}>Cancelar</CancelButton>
                </ModalButtons>
              </form>
            </Modal>
          </Overlay>
        )}
      </Container>
    </>
  )
}
