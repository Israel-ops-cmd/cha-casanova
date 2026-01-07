import React from "react"
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
} from "./style"

import panela from "../../assets/jogo-de-panelas.webp"
import cortina from "../../assets/cortina.webp"
import tabuadepassar from "../../assets/tabuadepassar.webp"
import tapetedesala from '../../assets/tapetedesala.webp'
import jogodecopos from '../../assets/jogodecopos (2).webp'
import escorredor from '../../assets/escorredordelouças.webp'
import panelapressao from '../../assets/paneladepressao.webp'
import sanduichera from '../../assets/sanduichera.webp'
import lixeira from '../../assets/lixeira.webp'
import ferro from '../../assets/ferro.webp'
import kitfrigideira from '../../assets/kitfrigideira.webp'
import varal from '../../assets/varalportatil.webp'
import espremedor from '../../assets/espremedor.webp'

type Gift = {
  id: number
  title: string
  price: string
  image: string,
  amazonLink: string
}

const gifts: Gift[] = [
  {
    id: 1,
    title: "Jogo de Panelas",
    price: "R$ 144,90",
    image: panela,
    amazonLink: "https://www.amazon.com.br/Panelas-Antiaderente-Alum%C3%ADnio-Premium-Esp%C3%A1tula/dp/B0DFMY4QHB/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XJU38UOLSFLT&dib=eyJ2IjoiMSJ9.tYFpmRZzcbnete97x-NbudZwYf-4FYdg1qOxEq-_HNClqfNQg7gwljl9Nev4vcZ8bRLsi9PBQzZDZt4Us5MjkUwQwEM9REHBh_PjZGVOSm6aT1iw1Cf-eAt1Evoj9XbpxKAeKOtRTcqwrAMbczfuP0xbq5vrPOMZ1GC63SBW9o1tBUrc7Dqaf8H1-BPgs5RW9sNCl01uooD-NPIRy6kPD3bx9XcpMqYPa0T4b-DXWw-JHMdaWaUIPZBjojwBEc3nDVohlDpAQI3E0kqSBRpPk0OmBDxy3zqRNX1wpT9PqeE.d4a8m3ZQiaeE0wCC2R7_gV3Yjnb_3LcJiS7-tqUq0uA&dib_tag=se&keywords=jogo%2Bde%2Bpanelas&qid=1767787295&sprefix=jogo%2Bde%2Bpanelas%2Caps%2C319&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
  },
  {
    id: 2,
    title: "Cortina tecido blackout",
    price: "R$ 139,99",
    image: cortina,
    amazonLink: "https://www.amazon.com.br/Cortina-Tecido-Blackout-Corta-Palha/dp/B09Y6RR43P/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2UT5UXYM9T0WC&dib=eyJ2IjoiMSJ9.MpovUiYhw4Up2j_9t2Dc86XYbWe74eoIySA8cf99g1hqZfaKfSEPjIqbToU_a0WsdbkzvJ9irRQK0up6_XdYzfvRN0ry7tSxPR22Aw80WApiWQuAdLudxJGG42P_qU42hA89MpI-K2snjlsVobXzkhfCW8PVIKDVa8gwmuvPrsLnfwpv6R9i04Xrwls7YEjXwoRP6rv2oomc0MPqKMIv_CAye0Q_i9pFdIOogL4vUMc128FXNrMYZkyfgsH3gZjr4uEKWwDyi0fb_wK-nzbCfcDQQOVeZOKsgTBJTcXNvqs.bh8iRKJlLQD5jb7UvTD__-Nxg5uT9RnZkw0_8Uy3WrA&dib_tag=se&keywords=cortina%2Btecido%2Bblackout&qid=1767787609&sprefix=cortinas%2Btecido%2Bblaclout%2Caps%2C275&sr=8-5&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&th=1"
  },
  {
    id: 3,
    title: "Tabua de passar",
    price: "R$ 107,91",
    image: tabuadepassar,
    amazonLink: "https://www.amazon.com.br/Tabua-Passar-Roupa-Tecido-T%C3%A9rmico/dp/B0CGXZ6XM8/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=73ZQIMG6HZ9F&dib=eyJ2IjoiMSJ9.DDHJAoZQyHYjpj4Rlnm3OKZ2FlQ7-3w9AqQjElcAPfQggCBYIMhEplqFJkyCHCP4hmRR0RP_m10d5e9U390SHzTUeRPYd0sX0TzBwPNrxaiKSsUKmPdaovLkktK0zEVbFrX-U5CzRCsKPuafPdrgUurXv0N76mM2Z07si_RA_8wFdl5xU8EiCSJPiSFcgePqUpDnWsuTTmP_fsgEohM1AJ1_GcS8pmRYvK6JQ21yEdVrrfzAP7WiFJhOn7rOL0gwb-cL4tIzoXrrnTyicqZ6dHC8vi5ePj7YrB3E6rah4E4.BgCcsKLDeukqRvrfcjmayNy4MFwrShv_Rd7z1uMXlcA&dib_tag=se&keywords=tabua+de+passar&qid=1767787808&sprefix=tabua+de+passar%2Caps%2C315&sr=8-8&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d"
  },
  {
    id: 4,
    title: "Tapete de Sala",
    price: "R$ 174,90",
    image: tapetedesala,
    amazonLink: "https://www.amazon.com.br/Beatriz-Enxovais-Antiderrapante-Retangular-Confort%C3%A1vel/dp/B0FKD2NCYN/ref=sr_1_6?crid=4LOH69HFBO5G&dib=eyJ2IjoiMSJ9.IatbtcU1lSJnn53W3elq6gde77aL-f3orxjbcYT7Tw9jQy1VHZsVxmlZWHfor_xknxTnczMSbvtmKSRQiqhZ3vpAwyjy3sZgKTaSQXnx3uPSFKrxMRSQvzPsZxNemOn1wkBbCdK9Yur7-jAQEI7-WoKLFjpLmQClJHaDGr4_wfsxtcjFfNeBTKS10uWs7SGNFQCFDdvprrF3eq-SM9b3NiBKyMo18n9gQyfmTfjfYskMDGutg7qkwxLLXJKatU-Ibp5czHosiTbVCCIZkw6S49dcZ8E4zZz9kiYOFgW8Buk.EDWqKRu5gof6gggICmFGHIjsFVnFRZflzpQYQsRGKYw&dib_tag=se&keywords=tapete%2Bde%2Bsala&qid=1767788279&sprefix=tapete%2Bde%2Bsala%2Caps%2C336&sr=8-6&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&th=1"
  },
  {
    id: 5,
    title: "Jogo de copos",
    price: "R$ 69,21",
    image: jogodecopos,
    amazonLink: "https://www.amazon.com.br/Haus-Concept-Copos-Esfera-Cristal/dp/B0DGHC16VY/ref=sr_1_1_sspa?crid=3H4LE2L3IB3YA&dib=eyJ2IjoiMSJ9.R_ST_xBYqErUwbYhuGt8KvRMEqylABN4CmQSy78VOsJ1Xetg4E0FfSsYZILnACoI3qhfAqVmlH0SowIbnBz6a-AApZdAJjo4H8mTW5hDuLFUnaBEFBGEehFj7ho1Ps8lgdDrEN2OyRJfrTRgdi8Iy6wK4zkM_lrTOYloNj63VGD5ytUj6g5unY_oAGiiKP94dTGynYt0uEWDnMrGSVc5dSRiCmrAGzFAhpN1Lx_5OWjHFhOY7u5lgjgMdKuUm-MOFhbbBjVPmqDpKLv4iTdz0R0hVdDfKccuw9fLUrSjVX0.3lMjnqC7jee_po77MRNGmPqcUUBkvl_WlfNE9c0UtCA&dib_tag=se&keywords=jogo+de+copos+12+pe%C3%A7as&qid=1767788690&sprefix=jogo+de+copos%2Caps%2C277&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  },
  {
    id: 6,
    title: "Escorredor de louças inox",
    price: "R$ 129,90",
    image: escorredor,
    amazonLink: "https://www.amazon.com.br/Escorredor-Pratos-Porta-Talheres-Inox/dp/B0786TZMTH/ref=sr_1_5?crid=B6NDTR2RLIDV&dib=eyJ2IjoiMSJ9.wZCnrlCTo8zEJSNz96eZjx7CeGO1uYhK8fceTcnogICAo6ptrgbLV9gPkELQRlzhpdFrRZdCx9jPAIszmc6OX2rN8LLcdmQrFPgT1dqvsc5Yi3rUVpg3BaAl6PQ_kZEEzR12tSYWdWDWtnim8UjGeOq1iy13qX5E01fqkTs0r7WDwjYizYw31GNJ06CC69Gk8OT2IIVjSQr2sosO8eCiv_5Aj2pQ8GV6rocFUbHFnEiaaZWoCeh8ja2WkgY6Iwi2YKY2-THMHbRwMSYDt7t4cW6W_6N_qxfRbNlx4A7s-MY.sdTXU_OsQcmaN0kZFiiSvznYyye-WPRjDSlQh2Ul2sQ&dib_tag=se&keywords=escorredor+de+lou%C3%A7a+inox&qid=1767789371&sprefix=escorredor+de+%2Caps%2C291&sr=8-5&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74"
  },
  {
    id: 7,
    title: "Panela de pressão 7 litros",
    price: "R$ 121,60",
    image: panelapressao,
    amazonLink: "https://www.amazon.com.br/PRESSAO-ALUMINIO-FECHAMENTO-INTERNO-MAGNIFIC/dp/B077V6S3XB/ref=sr_1_7?crid=2VFZ2LNMH7O9C&dib=eyJ2IjoiMSJ9.pthHz8VSj_e3-zO3PK_i_S04-mgCNn1Lf9LLAzoKD70OqDc949dD6XAK8pDa8DAZN2lKrXCGZNUilmEs5LInF4QoB-JSRg7h34Sam-YJhicz03gl81UzcDEMy7rl90yHtvrywyLcn8x0R3eJUng9GCM4saEJ2gta_NMV_4AtSB2TOVwHYwzDkX9A5UHNoL3ABfJJsM8dvea9mRtj_EhRiXL64v4gRy76Dg_Z4neCCvvriAg5V1_46Qe4Y1Se9zYBvTfcHdvHDaZFW1nvZx5XZiXihnX0WgyezHq-o29rZn4.-KhTZliGZDN_KNKnefvDYJVp3GXsIsM6NXo1Fiia0U0&dib_tag=se&keywords=panela+de+press%C3%A3o+7+litros&qid=1767789709&sprefix=panela+de+press%C3%A3o+7+litros%2Caps%2C262&sr=8-7&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74"
  },
  {
    id: 8,
    title: "Sanduichera",
    price: "R$ 60,83",
    image: sanduichera,
    amazonLink: "https://www.amazon.com.br/Sanduicheira-Grill-Sandwich-Mondial-S-12/dp/B076FGX8GR/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=87OD4NPEMEBA&dib=eyJ2IjoiMSJ9.UzCUWFzZFZ66hdicWvWpyRXdv0ehTEdbIFA_NkHqaJxtYBIN398QKkTHFPzdNnB_neWOfoiVvq_MyDASDq3EoVWj1XSP0ZpHDJcfZ6iZWPtBpXEM8dzBon-ofrDox0XgF-twqTwxtGFdxMZ3kePn1KHK2rL9iSHqeaSiVZn_Ns3B-pbAmsERZ36q8-YHANWHQEFZ6R_vYGvS0NqSS6-5iBHw1snJUAcAkR5f5CY2uGqSYR2US9c7Qnw7Nf7UNCXtMqsyg4uljkzKD9yb5DapznGMcDH9f55i9siZWRZHCPI.TiVMwO9rqMKX_EBmvDV2neg9dIw_jr8tDINKlwCZL4s&dib_tag=se&keywords=sanduicheira&qid=1767791840&sprefix=sanduicher%2Caps%2C316&sr=8-7&th=1"
  },
  {
    id: 9,
    title: "Lixeira inox",
    price: "R$ 57,49",
    image: lixeira,
    amazonLink: "https://www.amazon.com.br/Lixeira-Litros-Pedal-Antiderrapante-Remov%C3%ADvel/dp/B0G26ZWFLD/ref=sr_1_2_sspa?crid=2LW6HSYVO5SZG&dib=eyJ2IjoiMSJ9.FeMnhRgNNlEiPGH2SQj9HAgnK78fq2-eU5f5nRCwbJn4D7GyTz-vrzyYKXz699SCrC5nyyWCJBdr0Hq6Y5hcYJH1kke0OGtcsgF8_TS7kyu478mYdFAhkUvy4BYTAAsh144DlPkPBcLAubU-zUu3AG0axYET396S1n7XjflCwkRg54O91TCRn4HPhDFtrV8Pn1rBYW2PDlEZ9WvfHg3rGbsNMIT-oCs70QibhSkODL4WYSw9zqTQ8-hF8Krl3wTlPyRo5YY6tquGcCgR1KtsgKgP7ou5Cv4GX-eJGdrBRxI.Gu9-gBB7jFFL0280tOrsRnq3Pny1aXJs5OfozaU9h2o&dib_tag=se&keywords=lixeira+inox&qid=1767792149&sprefix=lixeira+inox%2Caps%2C294&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  },
  {
    id: 10,
    title: "Ferro de passar roupa",
    price: "R$ 99,00",
    image: ferro,
    amazonLink: "https://www.amazon.com.br/Ferro-Met%C3%A1lico-Black-Decker-Preto/dp/B07613Y23B/ref=sr_1_6?crid=2QAU9255467DR&dib=eyJ2IjoiMSJ9.CH9vzOkr6whuM0XbSly3iC0OwqQbTC8eReZPVZQR6lTl2r7n_Kp9Ra9LNZ4mR2B0mDiTcjBCOuFCvZfEG54k0j18QcI35NRyKrR6Bn85E3sHKguaIhWOs-U8bLVGZA9yN-KQN_kDrZ14m85F77zgr3uFHApE4o9NxfmFkELYac-M8BNE4z_y1nIlov4egs2xvBdvyyeu9XGgLgqVOIeGSbTb7UyQJsfLj3xnN5XDQT7UVZGBUCWtP41VpJB8CxmUomVkTZwOjdYq3WpEBFRgOiJpXHwliWHAVVEuW9LHeYk.QjYj9fUs6BOsYnezXC-qRJAJ1nNpYr4rcIF-FPdJJOY&dib_tag=se&keywords=ferro+de+passar+roupa&qid=1767792562&sprefix=ferro+de+%2Caps%2C289&sr=8-6"
  },
  {
    id: 11,
    title: "Kit de frigideiras",
    price: "R$ 77,90",
    image: kitfrigideira,
    amazonLink: "https://www.amazon.com.br/Tramontina-JOGO-FRIGIDEIRAS-CARIBE-PRETO/dp/B09W48TKX2/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3NJ5Y40R9DRMX&dib=eyJ2IjoiMSJ9.lPyy5NuPHOMljzdDqBe_mf4S8ZMzQXDrKe-OUZczJqgw0_f4hQGqKuR9Jun7VbNJ2yVxVHloekTIgDCq2F_SNO2-csRE9bWmZ63kn8ywsovU8qXoFyQlbzGvMoU-lIzDFZZPprRG_j2re6dHfRQ-trwd744f5YrlTppbXXrPdk93us3nu0CSdkCF-XC_WqLSI3gvJDKhQ5JZYpMigH8FAw8IETiyheBkaV9iJr9CIcBX5D7cDoHsKcOeXlbubbdJ9xBgaS-ZMcWT1QrNl-kwAz-uvcZgKkXBw998-RKCuOM.td89_h7Qx1e9MjgrPm51GEGbDSAFTKxfYolk1FkP5Ho&dib_tag=se&keywords=kit+de+frigideira&qid=1767792948&sprefix=kit+de+frigideira%2Caps%2C283&sr=8-5"
  },
  {
    id: 12,
    title: "Varal portátil sanfonado",
    price: "R$ 149,90",
    image: varal,
    amazonLink: "https://www.amazon.com.br/Parede-Sanfonado-varetas-Suporta-Roupas/dp/B0FKCR4LN7/ref=sr_1_41?crid=QD00OLBF0ZGC&dib=eyJ2IjoiMSJ9.vdmh3Z-AJKE_RaJOGnCKA__gpdxsUcdeqUPs7ezgfNBBGTLhbPK01a2aFCskkdYPueUKtsq64PNWFmhPpIVD_K_AII55v8_8_UWRB0r3PvVR_qusDxhIrFU4bKJsGsW9XhOBc9sGdHFTLeQpY-Ye2MNpRLgZIdvMpe30ELJRC1GDPROT68HGPpVCgqPDMtPiblB7kBeIiG-cmlW64d2JHH5a5VQBZOQzSrn8UdQmvZwo1Lq8n86lEtvvF364j_UjrZb7yH-0NaxFGrjBcH_umXHeEdkyhxBGWM3mf8IWziw.fFC62Go3ubtadu7lZAea_Y51XAL-I-kZRCODjD6hVHM&dib_tag=se&keywords=varal%2Bportatil%2Bde%2Bparede&qid=1767793549&sprefix=varal%2Bportatil%2Caps%2C213&sr=8-41&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1"
  },
  {
    id: 13,
    title: "Espremedor de laranja",
    price: "R$ 169,00",
    image: espremedor,
    amazonLink: "https://www.amazon.com.br/Velocidades-KOOKIN-Multifuncional-Espremedor-Aprimoradas/dp/B0G38CWP2H/ref=sr_1_1_sspa?crid=3LSE8AFZACZKV&dib=eyJ2IjoiMSJ9.eMb7_IJ6YhwTfy6YhQx5XHfo4sQAsgJ_v92JgYMCLbaLuIdoOsW2poKcyTWZ0hQanW0mQvrvAK-fWZLmXfrvbme5eoBXz2-eN2OI5iwWk76RrGA4t3gknRB-2XjcFjgROmG8Kj55b07-ckiAPjkKLVJkOnKpMLw03CQ-9lWOYQeUnxaqUe2u_tTgbNK0y0CNhEg8oVuwmqEiE4HVrW-LkF4oXdW8TWYwD8QqZbTmmE2YeLvDbJJ77HpyTjaFYyTjCwz4CaEKzaeXgqU5FuucSmvudliyJQpsiQqTTEAmmZM.BkuhGNU-tsaPieV-BzCmT4YD6bkQGGgxphtbEah-Jh4&dib_tag=se&keywords=espremedor%2Bde%2Blaranja&qid=1767794211&sprefix=espremed%2Caps%2C300&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
  },
]

export const Gifts: React.FC = () => {
  return (
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
        {gifts.map((gift) => (
          <Card key={gift.id}>
            <CardImage>
              <img src={gift.image} alt={gift.title} />
            </CardImage>

            <CardContent>
              <CardTitle>{gift.title}</CardTitle>
              <CardPrice>{gift.price}</CardPrice>

              <StoreLabel>Disponível na Amazon</StoreLabel>

              <ButtonGroup>
                <SelectButton>Selecionar</SelectButton>

                <AmazonButton
                  href={gift.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver na Amazon
                </AmazonButton>
              </ButtonGroup>
            </CardContent>
          </Card>
        ))}
      </SecondPart>
    </Container>
  )
}
