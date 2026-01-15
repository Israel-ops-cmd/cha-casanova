import React, { useEffect, useState } from "react"
import {
  Container,
  FirstPart,
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
import panelapressao from "../../assets/presao2,5.webp"
import sanduichera from "../../assets/sanduichera (2).webp"
import lixeira from "../../assets/lixeira.webp"
import ferro from "../../assets/ferro.webp"
import kitfrigideira from "../../assets/kitfrigideira.webp"
import varal from "../../assets/varalportatil.webp"
import espremedor from "../../assets/espremedor.webp"
import conjuntosobremes from '../../assets/conjuntosobremesa.webp'
import xicaras from '../../assets/jododexicaras.webp'
import batedeira from '../../assets/batedeira.webp'
import forno from '../../assets/forno.webp'
import parafusadeira from '../../assets/parafusadeira.webp'
import jogodecama from '../../assets/jogodecama.webp'
import espelhoparaquarto from '../../assets/espelho para quarto.webp'
import portatempero from '../../assets/portatempero.webp'
import toalhasteka from '../../assets/toalhas_teka.webp'
import toalhaskarsten from '../../assets/toalhas_karsten.webp'
import jogodejantar from '../../assets/jogodejantar.webp'
import tv from '../../assets/tv.webp'
import mesa from '../../assets/mesa.webp'
import cuscuzeira from '../../assets/cuscuzeira.webp'
import travesseiros from '../../assets/travesseiros.webp'
import utensilioscasa from '../../assets/utensilioscasa.webp'
import potesplastico from '../../assets/potesplastico.webp'
import potescozinha from '../../assets/potescozinha.webp'
import travessasvidro from '../../assets/travessas de vidro.webp'
import assadeiras from '../../assets/conjunto de assadeiras.webp'
import kitchurrasco from '../../assets/kit churrasco.webp'
import cafeteira from '../../assets/cafeteira.webp'
import espelhobanheiro from '../../assets/espelhobanheiro.webp'
import ventilador from '../../assets/ventilador.webp'
import paineltv from '../../assets/painel.webp'
import puff from '../../assets/puffs.webp'
import talheres from '../../assets/talheres.webp'
import jarracopos from '../../assets/jarra e copos.webp'
import formabolo from '../../assets/formas bolo.webp'
import portacondimentos from '../../assets/portacondimentos.webp'
import fruteira from '../../assets/fruteira.webp'
import pipoqueira from '../../assets/pipoqueira.webp'
import marinex from '../../assets/marinex.webp'
import mesasdecanto from '../../assets/mesasdecanto.webp'
import conjuntosDeFaca from '../../assets/conjunto de facas.webp'
import purificador from '../../assets/purificador.webp'
import almofadas from '../../assets/almofadas.webp'

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
  { id: 2, title: "Cortina tecido blackout", price: "R$ 139,99", image: cortina, amazonLink: "https://www.amazon.com.br/Cortina-Tecido-Blackout-Corta-Palha/dp/B09Y6RR43P/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=156J3XKQVWZ73&dib=eyJ2IjoiMSJ9.MpovUiYhw4Up2j_9t2Dc86nUZJ1aNTzrMWoSDI03rEVNr8iQAZV4sgSZSeW8aK0UdbkzvJ9irRQK0up6_XdYzWkAYkiazqXTHfyie7IkD79ihP_rSuSG8TbN4_TG6zJ5fJBOIxGAzii6v7jnVsr-QhXylX3DliSptARnLW_6ro_iGKL1kOo3wEx2F3WS9vibJQQ0krxMNILhvHndFBJAgr6wtvLkI5vVr-spHRuBV-hPjXtr6P6htQlWmDLPvcZhZcP5k5S6z2rmg5RqECyO3QNnlxiKS3YQTNBjyyC659c.6AdyJ1zQZ5QNHEP2uwzwqTtXAM6WfLOW9EwW8f6dB5k&dib_tag=se&keywords=cortina%2Btecido%2Bblackout&qid=1767881450&sprefix=cortina%2Btecido%2Bblackout%2Caps%2C266&sr=8-5&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&th=1" },
  { id: 3, title: "Tábua de passar", price: "R$ 107,91", image: tabuadepassar, amazonLink: "https://www.amazon.com.br/Tabua-Passar-Roupa-Tecido-T%C3%A9rmico/dp/B0CGXZ6XM8/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=RYF0T98914VV&dib=eyJ2IjoiMSJ9.oHO96ckhSjrU6ZRG6KTMBSQgtGw3Mp6VkNx_ZXxU_O2GhH4b_v214FcnoO2jGPsallbo8Tt_8rNwL7iZ76AwlkoWH5xulnaM7ADq5QWMeWlqpbh-FTVzlmA6XhmzFXhWlsE3Z9FapzCqhtr_jhfGdCELEU2N6qIRbXBXMFpHtRXQvRofEZd5kVymYmU8oNl7bGUv5PlEhS8sRVzIjsie6mNN-FXLSn7K-3gWiCx8gA0N57DmI-86t46REUOAPEPXX9U0eIZ5Mo_ds9SRftEOmDF7z99u_dpHu_hXYUTQOtg.1zpzEpBZJbWZe47VyAyO8qYN4ht3iQdl-XQ43AWy1CU&dib_tag=se&keywords=tabua+de+passar&qid=1767881519&sprefix=tabua+de+passar%2Caps%2C283&sr=8-7&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d" },
  { id: 4, title: "Tapete de Sala", price: "R$ 174,90", image: tapetedesala, amazonLink: "https://www.amazon.com.br/Beatriz-Enxovais-Antiderrapante-Retangular-Confort%C3%A1vel/dp/B0FKD2NCYN/ref=sr_1_6?crid=339X1X7WGGCPK&dib=eyJ2IjoiMSJ9.IatbtcU1lSJnn53W3elq6gde77aL-f3orxjbcYT7Tw9jQy1VHZsVxmlZWHfor_xkpJqPXwoFKgckSBM6xuYWRHM5zv08QyJ5eHzIxLFnV2ABTESUcTb530reawrCKyTn5mNU5AKg6KA-0tJESBQucoBeiXedbJiA7SHnnDi8MMczt2yWIfg0UgIRhK_k8BOJbx1JG5v173P46pK2_MoZM4UHyX_pj19rmUhwme9Kq8Y7nk3J4hJ23-Tw6Ahz9qADRWRvVRSb-lk8PfM-dztPAYshaYBf3h1-uRHagMl3IR4.qIs4-6CcYGbx6k7ynTVQjgKn18RMKbrsTEhc55VCRUM&dib_tag=se&keywords=tapete%2Bde%2Bsala&qid=1767881552&sprefix=tapete%2Bde%2Bsala%2Caps%2C258&sr=8-6&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&th=1" },
  { id: 5, title: "Jogo de copos", price: "R$ 69,21", image: jogodecopos, amazonLink: "https://www.amazon.com.br/Haus-Concept-Copos-Esfera-Cristal/dp/B0DGHC16VY/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3T5I8TEQ3MVGF&dib=eyJ2IjoiMSJ9.gKqOk-yofLoYiofm_0jyNCfVqdSzGHSlxbRnw1wBPpFV7oU9zVGWN9bHIJjY1KghyPUt95id5Uj008O9cY3yQOsQPxMd4PlWQarIJQLPRMUQkT-XAUZWyl3DfPlMosJZE96nY4cYiDQoXR7O5y0vg3gX5Wf7ZGw9UX0F4hr3ye4oJxv8AE8G7hsYD-WoB7zjPoEpmqn8a8q6N_NAhwkMjqKNz9_aslXRauxLklxXm5NFlc9eC4G6M8VA_bO9ZlAOXif9kluxWIDK-xnMtJJ3VvuGaOd0h_oyFAbNb-xHrFE.0691ZG92HTvHJ5TO6_ZbRjDdNXfxQd54JjWluVKxGlg&dib_tag=se&keywords=jogo+de+copos&qid=1767881586&sprefix=jogo+de+copos%2Caps%2C263&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { id: 6, title: "Escorredor de louças inox", price: "R$ 129,90", image: escorredor, amazonLink: "https://www.amazon.com.br/Escorredor-Pratos-Porta-Talheres-Inox/dp/B0786TZMTH/ref=sr_1_5?crid=3DTC8J7X957K2&dib=eyJ2IjoiMSJ9.wZCnrlCTo8zEJSNz96eZjx7CeGO1uYhK8fceTcnogIDFgUFABxq-4iN-L1OCJG0vkpgohWtZqCcMCEbpFjSj0GrN8LLcdmQrFPgT1dqvsc5Yi3rUVpg3BaAl6PQ_kZEEZ79LYMvipNoZMRmnh2U1XL1oEYSmg4QYQ3jslZyZ9_1zk9LqEQQThfYsNL69vU1jXMI5Z4Ly5h5AWxXcEfd1j3xYKSxn9cHUBNj_QFsVB3rfZ51m6D27sgoVU8tvUKw40SXIvWDaRR3bCy4-hQrLe9IWczzqVHpV6e02k-MBdJM.xK8cEWW_pgFpHgV-BQqr-2EcdX5HjTtGdbZ_n1OMbdQ&dib_tag=se&keywords=escorredor+de+lou%C3%A7a+inox&qid=1767881646&sprefix=escorredor+de+lou%C3%A7a+inox%2Caps%2C258&sr=8-5&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74" },
  { id: 7, title: "Panela de pressão 2,5 litros", price: "R$ 71,05", image: panelapressao, amazonLink: "https://www.amazon.com.br/Panela-Press%C3%A3o-Teflon-Pressionella-Ramos/dp/B08N3CZPK1/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2OPM8CG1ZMC6Z&dib=eyJ2IjoiMSJ9.U4OpXhKyvHO4AbKBzL40c77flSp4M9J2h0v1TU4LLRhOSLapi1k4FbQ3NxWf4JHkAGahMvQVEBtbqXUHndPBL88Qal2sQc7WtLI54ecvt2Pb6hkPe8SKiWCYgia0UN2XcRiusYO_06xuW0WhcD2i0AKJgE8KqcbymotpjfZ8rEmDeKwBuSyzqqpuSmzE0jT_3IWyj3PxoGUsvkkokPvF-qjVUfF9B_IAovACinyiZXNT__nQUenbELNwbwlwFTcaBq3n_H9D0I6c5fyAxnpKE7-Q835DuWo0xDZdF9ODXcA.i0x8hsGzT107bNVmCM3pzQFJ5ffxltS70bBdRPuCX_k&dib_tag=se&keywords=panela+de+press%C3%A3o+2%2C5l&qid=1768480485&sprefix=panela+de+press%C3%A3o+2+5l%2Caps%2C339&sr=8-8&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9" },
  { id: 8, title: "Sanduicheira", price: "R$ 104,40", image: sanduichera, amazonLink: "https://www.amazon.com.br/Sanduicheira-Grill-Brit%C3%A2nia-BGR27I-Press/dp/B0B5B7ZCZZ/ref=sr_1_8?crid=20HGC37XIUXP2&dib=eyJ2IjoiMSJ9.UzCUWFzZFZ66hdicWvWpyRXdv0ehTEdbIFA_NkHqaJxtYBIN398QKkTHFPzdNnB_cTlHs6Lq3JVtU12CkHd8zlZtuC-9Vi_P2KuzNqCRiKcKxj7o9dbjEpdCk8bfgXehrCFSGptBA-48BkhQBglAXnk8lyuxoNNp2sR4MYd6zB-R-R82wBNIQ-Fe6qmOra5E8LnB5iUV09QfFhjpt-MbyJaNQ7cYiwjenagPZVzpkilEKyI-LUg_22qadBATCHjemEtALdjgrD-uzNnLJuFaI-QvQnWMFzTQX60pXRBzsg4.RO8VMzUHaim38dBR02lznfGvK0WbQN7He5CNP_VHogI&dib_tag=se&keywords=sanduicheira&qid=1767881719&sprefix=sanduichera%2Caps%2C239&sr=8-8&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d" },
  { id: 9, title: "Lixeira inox", price: "R$ 53,90", image: lixeira, amazonLink: "https://www.amazon.com.br/Antiderrapante-Remov%C3%ADvel-Transporte-Banheiro-Escrit%C3%B3rio/dp/B0F8R6DP31/ref=sr_1_7?crid=SDC46BWIN7R5&dib=eyJ2IjoiMSJ9.lQ7zfz_suE6A1ByCwxoh4l3Vt0oT03b3ieXnTSl7ACmssxSjx3pjkYnJhQkhXz6srC5nyyWCJBdr0Hq6Y5hcYPhHFRsx4eiW0fsz1zZVuO-TXeiRxmaTyEZz4SJT2w6RCSa-GqmUlroPjmBp6Ct02XOV8GimTYBbBIQCMUCc-WOZKyyssf2x-azV9GoxWbnB4fuIQFvCdwryQVo-x-c_NTCFkYQ2a7LIYEg0W0gcJQhcyPY3gdkOg2PWRygWVmogpjSDxGVUBM7HIdVPu-7zSO5vhqEyaPWEUkZBj0xtJOM.cu3IKjluvW0D0cwTeLSmeDnPzTKCQG3BQnj-5bY-Cw0&dib_tag=se&keywords=lixeira+inox&qid=1767881960&sprefix=lixeira+inox%2Caps%2C290&sr=8-7&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9" },
  { id: 10, title: "Ferro de passar roupa", price: "R$ 99,00", image: ferro, amazonLink: "https://www.amazon.com.br/Ferro-Met%C3%A1lico-Black-Decker-Preto/dp/B07613Y23B/ref=sr_1_6?crid=28FHNJKO5NST1&dib=eyJ2IjoiMSJ9.CH9vzOkr6whuM0XbSly3iPSTWud5k3izY3UxNeOQj93jAb9H6jCDzPQeZNIHhJQG2slXQgtS_LWlv5AASgnQCc_NBTuuwZbMFAy-mZsYETHl-fIARb_qmvG3U0NH-RFTkkPu4HXusalGic3hQItxu5cw9H7tAKjKIfZkLnXuD8IYetI3ddJtir7ImaWi3ri_1_XFsrB8xnnULx4o_pU2tAJ5kw-2PSNSmsIRWmQM4r5H7K2EKHJfx5bbaTyiLToYAE62mOxbus6uNzeaARMR8xrWlI2ROVoNVExOWavbDZg.rGeMDUilA8H4lDQfTQabIVknv4Fqa9QBUmSY_dwI44U&dib_tag=se&keywords=ferro+de+passar+roupa&qid=1767882077&sprefix=ferro+de+%2Caps%2C354&sr=8-6" },
  { id: 11, title: "Kit de frigideiras", price: "R$ 77,90", image: kitfrigideira, amazonLink: "https://www.amazon.com.br/Tramontina-JOGO-FRIGIDEIRAS-CARIBE-PRETO/dp/B09W48TKX2/ref=sr_1_5?crid=32CR3ZG8YY3EQ&dib=eyJ2IjoiMSJ9.lPyy5NuPHOMljzdDqBe_mf4S8ZMzQXDrKe-OUZczJqgF5nh10L0zz48NmodtNO5APBc7gjDPHQ9XVBa43ULQcT1BwR8_6pCXORxJ_O6izxMFZ3ctPhIZSiFZ-ZwqGdArxUKCtFFPFqG2hIHpro8JOuz5kJSawKTArtOmTQQeTS8VD-wv-bhOere-z0K4lfFHRko8DWqOdw0IaWUWdCw4ASTHy486mJF_VMwprTMN2zo-YSex5Rxd2GapjnJ_BMqdqFUEQfUMUO-R3Hph4S0F5D-uvcZgKkXBw998-RKCuOM.IA0-IY3mB_HasuQoEs9Zj0ar9rqT7y6jPbgeU0U4klA&dib_tag=se&keywords=kit+de+frigideira&qid=1767882111&sprefix=kit+de+frigideiras%2Caps%2C281&sr=8-5" },
  { id: 12, title: "Varal portátil sanfonado", price: "R$ 149,90", image: varal, amazonLink: "https://www.amazon.com.br/Parede-Sanfonado-varetas-Suporta-Roupas/dp/B0FKCR4LN7/ref=sr_1_10?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TAQ0COIOAEM1&dib=eyJ2IjoiMSJ9.3rFkzpOQv0dI6L9WJ3NRNobxRNDjaxfwzH_vcrd19w_06q45Rv0JTtybyF_UZV15XOJYLNyMda1gfiT5CNblQpuXQxKZdjHOpjCPTvbs9Yg5c3B7H99l2ryv7kYvmFE0JzZW_Pb5mTAjiC4j8p7MszaoCax5hYZuxBEmIfGcvyHcezxRc9XrFRXmIEqbnYFoVoSFM_yPRUY8qdbkNg_Pa25vhytPV7_RatCJqL-x962SNTaEqPEH2ymeWrmHWTM5InUhzElSHVHkqrKCNmDw-8GKW6xZRTN7NpSpAK-Kt84.KfmAJYtrO0Y4Z7UfQilux5HzDD26dxxUnHiFJjq04Ww&dib_tag=se&keywords=varal%2Bportatil%2Bsanfonado&qid=1767882168&sprefix=varal%2Bportatil%2Bsanfonado%2Caps%2C285&sr=8-10&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1" },
  { id: 13, title: "Espremedor de laranja", price: "R$ 169,00", image: espremedor, amazonLink: "https://www.amazon.com.br/Velocidades-KOOKIN-Multifuncional-Espremedor-Aprimoradas/dp/B0G38CWP2H/ref=sr_1_1_sspa?crid=1YCISK2067A7F&dib=eyJ2IjoiMSJ9.eMb7_IJ6YhwTfy6YhQx5XHfo4sQAsgJ_v92JgYMCLbaLuIdoOsW2poKcyTWZ0hQanW0mQvrvAK-fWZLmXfrvbv_tXKGINHO4iecAcy4n_h1rhOEC1Zm4EfQZXC1xCoECFZuqZUDqFGX39bLKv-YWgbAQduYqq1ll8S7aedZ8-_jnK9in4z6olYF4ZjRSa2tldXoUuzLWiZkRn170EX_cxj5rYhyhEeQIIHWPhmnOnBBZmevcyftssKcOblHCQX8D0W2_DVioasJjIE_12R2b1omRfXP7RwNMGr9EwL6gfnw.sk-LVN6qU8Z-V-G6jpTBHfYOVUK2mqnfpnCBEvokm50&dib_tag=se&keywords=espremedor%2Bde%2Blaranja&qid=1767882199&sprefix=espremedor%2Bde%2Caps%2C338&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
  { id: 14, title: "Conjunto de taças de sobremesa", price: "R$ 35,90", image: conjuntosobremes, amazonLink: "https://www.amazon.com.br/Conjunto-Ta%C3%A7as-Sobremesa-Camilia-Vidro/dp/B0FPKQB2WB/ref=sr_1_5?crid=2HNK0V8TMUG4E&dib=eyJ2IjoiMSJ9.xECV9DpoQVJSPem_uW0S1dCdILT2ake00Gno2uJsSmpSYKWDNko7og7eTrVs8RYRsEDMRaHUQyAaq27nJ2xNgX6Htqvzr8vqSGH6YC4ObV7VDog110PZsJ26xexwYcb_cDArYVcAgStTOe2LgQ8qhbDq0uuVAOE3GPPWr67P9uFjOhllq_ScIccfG09laYTnwZBs7Anmm_Lt7qzjbMxwox63oz77rAoTPD9DXnHHG9Jxnk4yi1gMtN1_6t5x_grnIKZSjnOW_x6s1YMOHhf0jh5lagKmD-T_233gQfBhpQ8.-ym--pqTQwKV4apdDO9iEh48WOjWKTHYhuvCPXjTxFA&dib_tag=se&keywords=jogo%2Bde%2Bsobremesa&qid=1767882287&sprefix=jogo%2Bde%2Bsobremesa%2Caps%2C311&sr=8-5&th=1" },
  { id: 15, title: "Conjunto de xícaras", price: "R$ 56,90", image: xicaras, amazonLink: "https://www.amazon.com.br/JG-XICARA-CAFE-90ML-12PCS/dp/B07CQPFG49/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=36N5TDXQMMJKM&dib=eyJ2IjoiMSJ9.fLEa7yLngOBVshBHQLMaKySpIL1098_uhV9igu_9LNWnbcwUbdIO-rs2kDxnjK8jB0QBwqWwRNkbopEwLmZECPP_iMsdISHbqs-jiO3yrIJZ-W25yPjYGVfTbZuYzWjSTtcEsAdSVx8IQFjGOopxC2cmNIZcvVtpGD2I9Kkk6BiS7Jh1e7VZv-cUrGn9zpcHY5IYt9Xfrz-MxZD5NS3vytYIXYgEsT4Vg2i0xG5GRJO4ghgrksHMZFbMJvtSi6TcQfQp3eTE6EcBrYgdOx9jY23G73MUroUFb9aOVNuzm1k.HTdkzh3agP9mdKwQvdaDmaa_n_bjTUgedD7pvSNnX28&dib_tag=se&keywords=jogo+de+xicaras&qid=1767882611&sprefix=jogo+de+x%C3%ADcara%2Caps%2C307&sr=8-7&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9" },
  { id: 16, title: "Batedeira", price: "R$ 103,90", image: batedeira, amazonLink: "https://www.amazon.com.br/Batedeira-Brit%C3%A2nia-Perola-550-Neve/dp/B0CLBFZ3Z4/ref=sr_1_6?crid=1PRYHLUVI61H&dib=eyJ2IjoiMSJ9.Cm1kc7VjRiZo7srkZb4pK1KfGUbzhbEiqNPLYzXatFwwXkLvSEwkzqWOP2Z6uS5yu7EbB2tHhbMFOENLwMuf131j5zeSozStHdZX23K91hrIQxoVbtjVp2uzHPszvnKEaoOa_pyKoiPJnFIeRTb8zjQA6VE32so6vXp0XDWLbfby3_qcKfEaimGswdil_PRsulmIADP9hBZ2BoOobZUDxE5VWHfD8xJbc0_z8sWs3VeO3WP6Zy5CLWY1N4LnOOBl67969cQVGarphvvlSoeOxKNl8mATXtWIiZP0GzG49uM.aybhH_fXgwmsg4_UFnPZShnzEvLXmsHIkkL6sXOfRK8&dib_tag=se&keywords=batedeira&qid=1767882996&sprefix=batederia%2Caps%2C301&sr=8-6&ufe=app_do%3Aamzn1.fos.5d9ba569-7cc7-4a4f-871d-87ad9e73eca3" },
  { id: 17, title: "Forno elétrico 48 litros", price: "R$ 559,90", image: forno, amazonLink: "https://www.amazon.com.br/dp/B07GHMKPTS/ref=nosim?tag=listaideal0c-20&th=1" },
  { id: 18, title: "Furadeira e Parafusadeira", price: "R$ 185,90", image: parafusadeira, amazonLink: "https://www.amazon.com.br/Furadeira-Parafusadeira-Baterias-Recarreg%C3%A1veis-Acess%C3%B3rios/dp/B0DTJFZ4HZ/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BRSCCIZHRJED&dib=eyJ2IjoiMSJ9._OkJgkk0UfRBrMPWExGe9hEAdwth0B3DTIFGKXwMbZAkQWXgkUh8WU3RU3ffMd92TJqQo3wNjm-WqrXOx11qPzoFaN6Rlo7o0P_1N3Gisni2gwTSwuXBuZcsPWWmxCgPAbR7CKVFek2fehyK1cuw2M72B46_U9TyzZve8p-55zwmk6Fku5w5cRbpPTJ_CYWzU5jVRLYpkk2pbJIiVQ2olBP_ePT_qy5YKDTkYuJdHhkf_UlfnCfO8Op2we3GOAdWUn-bwE7ldo6MzS0e8DDW6F9e_c4VcCiYAV76DPolidc.HIrR4EpUT99T6ttgY-Fc5KoMVMFf6gs2Vn8XNBkHljw&dib_tag=se&keywords=kit+de+ferramentas&qid=1767890639&sprefix=kit+de+ferramwn%2Caps%2C2315&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { id: 19, title: "Cortina tecido blackout para quarto", price: "R$ 139,99", image: cortina, amazonLink: "https://www.amazon.com.br/Cortina-Tecido-Blackout-Corta-Palha/dp/B09Y6RR43P/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=156J3XKQVWZ73&dib=eyJ2IjoiMSJ9.MpovUiYhw4Up2j_9t2Dc86nUZJ1aNTzrMWoSDI03rEVNr8iQAZV4sgSZSeW8aK0UdbkzvJ9irRQK0up6_XdYzWkAYkiazqXTHfyie7IkD79ihP_rSuSG8TbN4_TG6zJ5fJBOIxGAzii6v7jnVsr-QhXylX3DliSptARnLW_6ro_iGKL1kOo3wEx2F3WS9vibJQQ0krxMNILhvHndFBJAgr6wtvLkI5vVr-spHRuBV-hPjXtr6P6htQlWmDLPvcZhZcP5k5S6z2rmg5RqECyO3QNnlxiKS3YQTNBjyyC659c.6AdyJ1zQZ5QNHEP2uwzwqTtXAM6WfLOW9EwW8f6dB5k&dib_tag=se&keywords=cortina%2Btecido%2Bblackout&qid=1767881450&sprefix=cortina%2Btecido%2Bblackout%2Caps%2C266&sr=8-5&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&th=1" },
  { id: 20, title: "Jogo de cama queen", price: "R$ 107,34", image: jogodecama, amazonLink: "https://www.amazon.com.br/Padr%C3%A3o-Percal-Anti%C3%A1caro-N%C3%A3o-bolinha/dp/B0CL7VDNRG/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=FFAGIVF1FOLT&dib=eyJ2IjoiMSJ9.N3pn-IwpETN6tBf32wZzGVkAfIljHarKrV4HaFlwcFMa_VwTaNvDMnVa8llb-OYUXbf9qLFDQj5yIX8pfTliKB8l43bPFPB90rmITpsf9nwv7sJchGItZm6sXEKIr9z53JyhzD_01LLIY0b9K-6qT-fy8F9Bi6obzipFzff1wkdjmx46GSQArtnZBRVPJ2-1wZvnGos2eAO-20vNaMFEYgEoYgaDIK-BX_GdpXwR2vYYm7z2fOBA2aBPVDxJcbhce9Ue-jTxQiXkBtrIvd8EDP2Bjrpt3aeDOW4hznFPCVg.ashbE9BQaWW_yMCQw7ZWxYTatwXDckKdPV8oQTCjB48&dib_tag=se&keywords=jogo%2Bde%2Bcama%2Bcasal%2Bking&qid=1767891683&sprefix=jogo%2Bde%2Bcama%2Bcasal%2Bking%2Caps%2C1668&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
  { id: 21, title: "Espelho de corpo inteiro", price: "R$ 219,99", image: espelhoparaquarto, amazonLink: "https://www.amazon.com.br/Espelho-Inteiro-Retangular-Cantos-Arredondado/dp/B0DW1BTBBB/ref=sr_1_12?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1B2L9SZ1SJKKL&dib=eyJ2IjoiMSJ9.siVDR6Mzhs7hzpH_Wwp1OJJimi23FHm4yBjIgt3jFVxF_yxYFsd4n2FXtC3SuIDqJND74VdnCdn3fGerZo9we0fKsKb1xeZoCiYEu2by6-GdZyDhlbMKJkuOQ6WomVC9Ihmk1ccA3BktIPXrRk4HHfqL3du9hofQBmKRfjZvhJUXgv_We2yauVkyWLH_qGx9T96s_UFnQH3CP4mckDXCYb0kp9JwNrswl0QfrWz8TLyxwWs3OZVNoAhN6xCrwDbArBDZwnvI1G0VeVWGBp3Pm02KAdlGXDek1uN08QJFKQU.qbtMUDS_jIpq85Ol0DUNQOi7_xxGC91rxaXNMe_d5GI&dib_tag=se&keywords=espelho%2Bgrande%2Bpara%2Bquarto&qid=1767892666&sprefix=espelho%2Bgrande%2Bpara%2Bquarto%2B%2Caps%2C379&sr=8-12&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678&th=1" },
  { id: 22, title: "Porta tempero giratório", price: "R$ 69,90", image: portatempero, amazonLink: "https://www.amazon.com.br/Porta-Temperos-Girat%C3%B3rio-Potes-Dosadora/dp/B0FQPB1HMG/ref=sr_1_1_sspa?crid=19TKUNQH35FER&dib=eyJ2IjoiMSJ9.63RHFyYsbk_nQ0YrgxM1xj811h-EqpsxrRZJw2EZMvNASlnstnd-X4o6f-0Ar9O8n6dDE3UGnh6GFlwt34d2Tloq0MxQzdFR4qRtSI9-ro0C2EOJAhXPLmaHHB9FIRBFOs5r5EfhX9ckty-ueRs7k-5R7iqGGl3qB4ur3REuQz4FGv9ioOPfoG7fvzGspgZmeCezlUsZEAt-N7BIlqTvMATrLFP-OfOxcXzcRI69__wwgWnigh-Re0AayML092TtqeLnUqWact_Q3kmBjWABVToXVwxO7Nf9k72KI6Ab-40.deGJZV1sLD2vX7N9yPfHNyRQJDt_4e1TmutxRRx0l_8&dib_tag=se&keywords=porta+temperos+girat%C3%B3rio&qid=1767893132&sprefix=porta+temper%2Caps%2C309&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { id: 23, title: "Conjunto de toalhas teka", price: "R$ 149,90", image: toalhasteka, amazonLink: "https://www.amazon.com.br/Jogo-Toalhas-Teka-Comfort-Pe%C3%A7as/dp/B0F6KN3JNZ/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BHKD3V1XF13F&dib=eyJ2IjoiMSJ9.5vxRzyIJjvriMKGQy0BiL1RJUGY0rDBOwQpKJlzVJyGdNA_RaFrOP5czZqhpSPv930dFZJZpymjREctj-DysKXYQwwFbxoQgHNdmAftAJObyAnOmEUyVVXeJ2jOEEIMhJoQ2-Wf8SlVapWti-ev0_VmMXelnbxPmgXuynOUWXq540NVe10Sts3inuna3ts8kZk_SV5664s4eBhKtKMXh5I2mtyF8Rk8UFIVvTQyDeT_-3fk6khquZZ2pmR_2OCuf0BZWUAZNf0wHQDnxZBwwx6QogJYJQasFiFanzvYPLMU.5OWDQsm83c_fCgRa0LiiyyBZ2EWL1o04Jb9CxupfJw0&dib_tag=se&keywords=conjunto%2Bde%2Btoalha%2Bteca&qid=1767893612&sprefix=conjunto%2Bde%2Btoalhas%2Bteca%2Caps%2C391&sr=8-5&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1" },
  { id: 24, title: "Conjunto de toalhas teka", price: "R$ 149,90", image: toalhasteka, amazonLink: "https://www.amazon.com.br/Jogo-Toalhas-Teka-Comfort-Pe%C3%A7as/dp/B0F6KN3JNZ/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BHKD3V1XF13F&dib=eyJ2IjoiMSJ9.5vxRzyIJjvriMKGQy0BiL1RJUGY0rDBOwQpKJlzVJyGdNA_RaFrOP5czZqhpSPv930dFZJZpymjREctj-DysKXYQwwFbxoQgHNdmAftAJObyAnOmEUyVVXeJ2jOEEIMhJoQ2-Wf8SlVapWti-ev0_VmMXelnbxPmgXuynOUWXq540NVe10Sts3inuna3ts8kZk_SV5664s4eBhKtKMXh5I2mtyF8Rk8UFIVvTQyDeT_-3fk6khquZZ2pmR_2OCuf0BZWUAZNf0wHQDnxZBwwx6QogJYJQasFiFanzvYPLMU.5OWDQsm83c_fCgRa0LiiyyBZ2EWL1o04Jb9CxupfJw0&dib_tag=se&keywords=conjunto%2Bde%2Btoalha%2Bteca&qid=1767893612&sprefix=conjunto%2Bde%2Btoalhas%2Bteca%2Caps%2C391&sr=8-5&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1" },
  { id: 25, title: "Conjunto de toalhas karsten", price: "R$ 144,00", image: toalhaskarsten, amazonLink: "https://www.amazon.com.br/PE%C3%87AS-BANHO-EMPIRE-URBANO-MEDIDAS/dp/B08X1XC23L/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZNDSXGA7S3UC&dib=eyJ2IjoiMSJ9.wtGHs2VDmOCddnG4nnH8hmii07LPzm3K5O0_TJxllwo2ySsiIIIR3oLVMgJU-KgUEjK75nU5fn2Xm5_VxgY3fB_ndM_kmloAQy7WQvcP37zSoubWjsfRmt3byuTnmAQfqJbrPfmVP9xMQZKI27N1ddyFdywqIKg8RqxS5_D3N2-2hKy4o1FX7NeYufanDsVkmFotHkv8i5Nz-xhQSxfJotrhctJb5u7WRDLDYErjaNLxDPG6uS1uCQtL392JwUDjcKyOKCpqGRa9Rl_H07_L-sPL3wlq_J5FJ1yYQKxaVpw.CpZAVviqp8kd4abCC0XRLR9LZRc7dQpr8zUIEW3IbNc&dib_tag=se&keywords=conjunto%2Bde%2Btoalha%2Bkarsten&qid=1767894012&sprefix=conjunto%2Bde%2Btoalha%2Bcastem%2Caps%2C243&sr=8-7&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1" },
  { id: 26, title: "Conjunto de toalhas karsten", price: "R$ 144,00", image: toalhaskarsten, amazonLink: "https://www.amazon.com.br/PE%C3%87AS-BANHO-EMPIRE-URBANO-MEDIDAS/dp/B08X1XC23L/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZNDSXGA7S3UC&dib=eyJ2IjoiMSJ9.wtGHs2VDmOCddnG4nnH8hmii07LPzm3K5O0_TJxllwo2ySsiIIIR3oLVMgJU-KgUEjK75nU5fn2Xm5_VxgY3fB_ndM_kmloAQy7WQvcP37zSoubWjsfRmt3byuTnmAQfqJbrPfmVP9xMQZKI27N1ddyFdywqIKg8RqxS5_D3N2-2hKy4o1FX7NeYufanDsVkmFotHkv8i5Nz-xhQSxfJotrhctJb5u7WRDLDYErjaNLxDPG6uS1uCQtL392JwUDjcKyOKCpqGRa9Rl_H07_L-sPL3wlq_J5FJ1yYQKxaVpw.CpZAVviqp8kd4abCC0XRLR9LZRc7dQpr8zUIEW3IbNc&dib_tag=se&keywords=conjunto%2Bde%2Btoalha%2Bkarsten&qid=1767894012&sprefix=conjunto%2Bde%2Btoalha%2Bcastem%2Caps%2C243&sr=8-7&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1" },
  { id: 27, title: "Jogo de jantar", price: "R$ 268,90", image: jogodejantar, amazonLink: "https://www.amazon.com.br/Aparelho-Jantar-Tramontina-Ingrid-Porcelana/dp/B0BV8PGF8P/ref=sr_1_19?crid=M91PD7VYLSYX&dib=eyJ2IjoiMSJ9.Avumr2T5mXNRFk438x0_7q115zmbipF12WoyWf0ALTJEmNmfC1hasAysCtG64AWs_RjM0GLX4DGyGXK-u-FC5gGoOZa1D_8FR9ETcr9xPLKM6p8gURplQAwv93SLQM3q8IhZesr_u22pwhLOP3EtUScqyedYpSg-y5yTmWJMvvl8IzZUKExQAdj03pq1mTjp36kxvB78MGMtJykmY8uGQodkFVME5QYuG41jzkYuztDbpEXOsQc33vslKCmAmFZ17yGIAfb8OD4JHbGTYVYr3vj8zZaUjcWPEX514D9V4m8.truhc9NnEOB4Nf61aEpY6_2T6uXewiG8h3IdjX9a5dY&dib_tag=se&keywords=jogo+de+jantar&qid=1767899736&sprefix=jogo+de+jantar%2Caps%2C287&sr=8-19&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678" },
  { id: 28, title: "Lixeira inox", price: "R$ 53,90", image: lixeira, amazonLink: "https://www.amazon.com.br/Antiderrapante-Remov%C3%ADvel-Transporte-Banheiro-Escrit%C3%B3rio/dp/B0F8R6DP31/ref=sr_1_7?crid=SDC46BWIN7R5&dib=eyJ2IjoiMSJ9.lQ7zfz_suE6A1ByCwxoh4l3Vt0oT03b3ieXnTSl7ACmssxSjx3pjkYnJhQkhXz6srC5nyyWCJBdr0Hq6Y5hcYPhHFRsx4eiW0fsz1zZVuO-TXeiRxmaTyEZz4SJT2w6RCSa-GqmUlroPjmBp6Ct02XOV8GimTYBbBIQCMUCc-WOZKyyssf2x-azV9GoxWbnB4fuIQFvCdwryQVo-x-c_NTCFkYQ2a7LIYEg0W0gcJQhcyPY3gdkOg2PWRygWVmogpjSDxGVUBM7HIdVPu-7zSO5vhqEyaPWEUkZBj0xtJOM.cu3IKjluvW0D0cwTeLSmeDnPzTKCQG3BQnj-5bY-Cw0&dib_tag=se&keywords=lixeira+inox&qid=1767881960&sprefix=lixeira+inox%2Caps%2C290&sr=8-7&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9" },
  { id: 29, title: "Smart TV 32 polegadas", price: "R$ 846,45", image: tv, amazonLink: "https://www.amazon.com.br/Samsung-Smart-Monitor-Plataforma-TizenTM/dp/B0FF6FZF9Y/ref=sr_1_6?crid=1HHYD5PMPKQE5&dib=eyJ2IjoiMSJ9.Yf5P_xb_DAmc5egnVZ3EuU7OEQ4Pp1Tf6PJ63_Fnh_qt1HSrWb1jXywhx1SSOREfnt8ayIGwQVegVis83__uiuO1smu-1OlU7eJXsRRnFrkTcXpnGGNIvzLHIwbRahHIoIKJZf6k_lI6r0k5KQxy6cPg5RODaV5Hhb8oNw7mSfp4KkXofnepSWCn6XjJkcFGCIpJ-9S4yYjL-SxNKqIfHpI_rOwYoYY9zskuEnt8V3LDxy5R0jvPI_cz3mZpyXMW7ihGlkA3eEmbZk8lO6hCke1t-4FD-OA8j5QWMn-9M-I.p71zty11UnkjyniOpvmxZ6X0Oi2Yf-pTGuwsR7X880I&dib_tag=se&keywords=smart+tv+32+polegadas+samsung&qid=1767900079&sprefix=smart+tv+32+polegadas%2Caps%2C294&sr=8-6" },
  { id: 30, title: "Conjunto sala de jantar - Mesa redonda", price: "R$ 749,99", image: mesa, amazonLink: "https://www.amazon.com.br/Conjunto-Jantar-Madesa-Redondo-Cadeiras/dp/B09S6LRVT6/ref=sr_1_3_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2MZ5FESR3489K&dib=eyJ2IjoiMSJ9.4MtgVRaobRdINLsM_ycZ3rZrwivPt2r95yd04BbACZkb2n6PmFvM-A3AP3WtPo3BlxgPXI5hJQOeo7oy4TAFjA2okK7_xw9Sk57Uj0mjlAPD2tJUdzCRgOLZK7D3LpB55OgtG2TcG7rekQoJml53Hrr9_l-YdPpQXkTWOH7-LYEtZHNIru1lr0zGRHj6xUaIjofPBRZ-wWy6vU_PeSQwilLCdQ7dbPVNvwR2-zBvTzqDtDbpw3cbFvrQ5T0-jwtaf0OCbULFSm6How3WLiauPNz8B_vZN1vtmisqbWugk-I.Pwd5T87QK9hgTmzg0CsmpP4MvK_VHWqcF8bX7WqD08c&dib_tag=se&keywords=conjunto%2Bde%2Bjantar%2Bmesa%2Bredonda&qid=1767900726&sprefix=conjunto%2Bde%2Bjantar%2Bmesa%2Bredond%2Caps%2C240&sr=8-3-spons&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
  { id: 31, title: "Cuscuzeira", price: "R$ 41,93", image: cuscuzeira, amazonLink: "https://www.amazon.com.br/Cuscuzeira-Cuscuzeiro-Craquelado-Resistente-Revestimento/dp/B0FXXVYG24/ref=sr_1_1_sspa?crid=K2FR7T0BDSCN&dib=eyJ2IjoiMSJ9.OQ6Y4I2fBOcRIW_UxxxiHqi-xLLC3GPB0eTaCp6n-DGfDm3TUGr1pKthcWSPBhKjp2ifYD-4WqaQ11lwW6J0wtuF3KPU4CSIxWhOjb2URcSESynqmq0PdzHe0XcjJypCqLwXsTLMwTyv2TRnExoCAyKNlNfZdmBVVHProg0c1DG_-wcTLEiNz3t0NZ3446dVs7MCHC90vvBhgPICHZs3Y6Ttdx4Phh2Z2KwkSFrlAtVTzwiKyFUjD6SOx5f8uQ7HiwH8MYYZzE8xOyStK2XiUF3tty2g5JRDPGGo0_5Q1J0.RC9qjErJXSBOe0AoDekvGBXLh6MTsJw4WoVMzOyrejs&dib_tag=se&keywords=cuscuzeira&qid=1767901014&sprefix=cuscu%2Caps%2C269&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { id: 32, title: "Kit 2 travesseiros ortobom", price: "R$ 78,90", image: travesseiros, amazonLink: "https://www.amazon.com.br/Kit-Travesseiro-Pe%C3%A7as-Percal-Fios/dp/B077KJ83PN/ref=sr_1_6?crid=R2VJ1LTYE2DN&dib=eyJ2IjoiMSJ9.jy5LaJPcMz6kTkkwRFqASQ5XL9WQ1Ns-I53ROpZBCcT8WV5iYnAbLwyNlZmYTki_5Hru-8ENYqxAg3QFfrRSsxAASuMwqZE1xAGZJ2R2Z1LS5iBTGa6mfF8c0bNBG8_iU9oK2T0BdntQ1kU3Q50IHTEait8r8kHJuaEIrllEr1QfC3J5bYkzKoS1h8LD_MveyC2Qnaee5ITpSb_e3UgrXWlbeMmrAv1V2L2MxisFDZaUeFexo-jhguAnUJVFZ03YFtMEjx7b1XQ68DN5arZ9Z4gMt6LtyK1MU1QlqdrGcVY.Q8DJvufM7uKFbejZe1nfvEQP1HgdgdHr1QEUHcuCtC8&dib_tag=se&keywords=kit+2+travesseiros+ortobom+-+twee&qid=1767901356&sprefix=2+travesseiros+ortobom%2Caps%2C231&sr=8-6&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9" },
  { id: 33, title: "Kit utensílios para cozinha 5 peças aço inox", price: "R$ 43,99", image: utensilioscasa, amazonLink: "https://www.amazon.com.br/Utens%C3%ADlios-Para-Cozinha-Pe%C3%A7as-Inox/dp/B0C9KDC4JG/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=24P8YCR1V8N3H&dib=eyJ2IjoiMSJ9.Pndp1GAJyzzYKAVBHb6E8l5Mz3t3IeKs4RpeTMoRzPLXpPosA-iJwmF_zuxKDT4OiH-pao7Dy3fjvJm5-F0mF9-pEFD9currpXa3-lV7mU-fKsx7Z8LnV8JL6UteYbyCJfhCEyxLvvwp6uR4xNBbqIML62FfUJWGMxI-lzAfAYnIUcbo8ST4ojTo68rhKj5aUE4qR9Rtspnu9Eal_obmBP4I555CvDZ_oX4aI2IOeuPVuCYWAez_Yo0yFfk8XxjsbdyOvr-Em19RmBDVre6hcOH2xzSACjLMG8b7ahaREuM.XZ87KOL_vH0LiWZs3-9A524H4NXRqejz_HAFhBqSTz0&dib_tag=se&keywords=utens%C3%ADlios+de+cozinha+inox&qid=1768228331&sprefix=utensilios+de+cozinha+ino%2Caps%2C263&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { id: 34, title: "Electrolux - Kit Potes de Plástico Hermético, 10 unidades", price: "R$ 79,90", image: potesplastico, amazonLink: "https://www.amazon.com.br/Kit-Potes-para-Alimentos-Electrolux/dp/B0784CLYGQ/ref=sr_1_6?crid=ZTDTW0ETYBYN&dib=eyJ2IjoiMSJ9.N8Zcava4PxdwDL53G3-ZnsOyG4AuyFYK4Wb8NJ8O7MmAh3B3DmWjTyAUJ1wvVO1ui7QJa0IAekExx1_cp_EWbUt6n2HUrU1YyuaCWWKQ7QomjZTCLCQrXvkiw25LnaVvQIjmLDcFDl3pbHpO5fQ1tUdC8cfSnxgTQt3Ramqse1b7KBZWLndn8vFzrdw9VuX8gHxdQwm7SA8lYhUb5loDvp4CzTTxnj3AcpieErgkFgATVbNsSWkSJQEZ1cL0rdPPwNQieZVodINIhlyQctzCywIXh5aifIYd_4ngFiH9ge0.0pa9Ub2s4sfKjgRCeLWP2woR-WMVpo06qZ-jf4Pe0GQ&dib_tag=se&keywords=conjunto%2Btupperware&qid=1768229009&sprefix=conjunto%2Btup%2Caps%2C311&sr=8-6&th=1" },
  { id: 35, title: "Kit 15 Potes Tampa Hermético Porta Alimentos Mantimentos Armário Cozinha", price: "R$ 123,89", image: potescozinha, amazonLink: "https://www.amazon.com.br/Herm%C3%A9tico-Alimentos-Mantimentos-Arm%C3%A1rio-Cozinha/dp/B0CL9NFQPT/ref=sr_1_8?crid=ZTDTW0ETYBYN&dib=eyJ2IjoiMSJ9.N8Zcava4PxdwDL53G3-ZnsOyG4AuyFYK4Wb8NJ8O7MmAh3B3DmWjTyAUJ1wvVO1ui7QJa0IAekExx1_cp_EWbUt6n2HUrU1YyuaCWWKQ7QomjZTCLCQrXvkiw25LnaVvQIjmLDcFDl3pbHpO5fQ1tUdC8cfSnxgTQt3Ramqse1b7KBZWLndn8vFzrdw9VuX8gHxdQwm7SA8lYhUb5loDvp4CzTTxnj3AcpieErgkFgATVbNsSWkSJQEZ1cL0rdPPwNQieZVodINIhlyQctzCywIXh5aifIYd_4ngFiH9ge0.0pa9Ub2s4sfKjgRCeLWP2woR-WMVpo06qZ-jf4Pe0GQ&dib_tag=se&keywords=conjunto%2Btupperware&qid=1768229009&sprefix=conjunto%2Btup%2Caps%2C311&sr=8-8&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1" },
  { id: 36, title: "Conjunto de travessas de vidro", price: "R$ 89,90", image: travessasvidro, amazonLink: "https://www.amazon.com.br/Kit-Travessas-Refrat%C3%A1rias-Herm%C3%A9ticas-Vidro/dp/B0FM9234N5/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5N3YZSIGH2VB&dib=eyJ2IjoiMSJ9.0dYuET23Y28gCmJTKrIaxoOrhZ7heAxo6QoRQp0pfsNB9h7fWE9-RzYQdbdyb7lHgIDTSliLenQrscmDYC61Ta3BhNG2yjRdIt2l6pp4YomcGDdeeJ-Urwz8b_DIegLt7BWRP4iklriGP5Xhty6h1Cq8CpinVydRUhi3THVa-2nttlgIK8l50jKy_BQqtTJJUiKOudFbFwQlkNsGrcKzx1DzuqVimPfuY_1THEJ-3YdQOUULI6bJWLZy4Dc4U-2K27aHlEuiTvGPdnplKEX09Lm9c9uLT84lV2x4xWEgmXQ.wStLGmnHvcfVIh7OSn8ugkqrblg0U_DOhp0j4doSYEg&dib_tag=se&keywords=conjunto+de+travessa+de+vidro&qid=1768229497&sprefix=conjunto+de+travessas+de+vidro%2Caps%2C314&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { id: 37, title: "Conjunto de assadeiras - Tramontina", price: "R$ 146,90", image: assadeiras, amazonLink: "https://www.amazon.com.br/Assadeiras-Tramontina-Antiaderente-Starflon-Mocaccino/dp/B0FL817P5G/ref=sr_1_9?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10VE9TTI7F9JU&dib=eyJ2IjoiMSJ9.UlRVe5cn1xJV-EUNqagE4E_M11hHNAKCtf-pDRqjfmfM31N97OGEVtK4U_XOxaTEk4wEHsS7yxdUb9T1VyAAHDWrtiP5860WruYFxHo7Jxyq0DpHa8MWUkK_ztkaSzymWsNFnoTolG4CCPhEPv845pbibnRxvhxBAorIMHgmwWnzZt9KQH9KnWHVTNthv0JF5bWtrrD7PM2x4jXRJrV4ChASQcyGl6Y8iwnNmwpwNBKwICrG2abCQ-TIbFbx_uBx3W6V7H2isI7jcoYRq__iio0Y6-eq4s5ovoXOfd-D5NM.rfOWNbMpZGu2tgBM8ezcIi5iL0e9Mn1Ca4SzM_wYi9E&dib_tag=se&keywords=conjunto+de+forma&qid=1768229903&sprefix=conjunto+de+forma+%2Caps%2C347&sr=8-9&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74" },
  { id: 38, title: "Kit churrasco", price: "R$ 74,90", image: kitchurrasco, amazonLink: "https://www.amazon.com.br/Churrasco-Madeirado-Conjunto-Gourmet-Antiaderente/dp/B0G6VC88BL/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PCLZ74JELF7A&dib=eyJ2IjoiMSJ9.VDUpcU6iuhuHltwQO8wzdfLStS4f3TtZzrlCgMnz-yMPGMq0K4HvMQmG70HwAsWb2S-Zrx1w9fJgmNwAgewOOS-GMVsD8LrC2lH2tSQXTecIifnsU8Axtyp7JmEccTcLxz-FsQTn200XxXU7ee96xTxmU_jZIa0XIg0wsGB9Yw8iJMaARvX-HWu8CEWUH1Eq9ylj6ce9CG0DgxRlX9Y_1E4XIuTxFqfVS7s8_eK767i0J4o8CUKdiGpqvzxQm78jqqd7Gxb-rNmLV33ZsmFCbVLgcUDu4GtV-pEs7TJY2Ok.-RsY8a3NF_YNfma_4WTVXrM3uAR4D_oVgCzWcnLFB64&dib_tag=se&keywords=kit%2Bchurrasco%2Bcom%2Btabua&qid=1768230448&sprefix=kit%2Bchurrasco%2Bcom%2Btabua%2Caps%2C275&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
  { id: 39, title: "Cafeteira elétrica", price: "R$ 99,90", image: cafeteira, amazonLink: "https://www.amazon.com.br/Electrolux-ECM10-Cafeteira/dp/B09CC72K1X/ref=sr_1_5?crid=1RVM1BM53HOP4&dib=eyJ2IjoiMSJ9.O-O2yiNuzvjPDQvDRfK03fIBCqrJjwjKp2uYDVFp2AaZi69PF0zXGM9IKgAuGf91YWTmvSFACVOvVFLZbTLR3_3ZGx_4m6pG8QjsbRj-eJlJZb1VescXHJkKBHnPpfGI7GfPL5j5bdWZLM16AwkSMsBkeU6__mFmfdcnHIt9bBM97lGDdAKiXsMz3IZRxn-GLjlrQAaL3FH5JJHNUwprkzg8w3EFNfkApkiIB-9qqDG2NEg9y1M98hAsU87HFmKqLb3Zi6o-njhX8d92lzo86iXTQP8EoFqRIvhmAo6fPho.XiSHQxiTZtCEkrUHFDaAku3NOl93nNrjTPvGMxj1U58&dib_tag=se&keywords=cafeteira%2Beletrica&qid=1768240230&sprefix=cafeter%2Caps%2C314&sr=8-5&th=1" },
  { id: 40, title: "Espelho de banheiro", price: "R$ 88,86", image: espelhobanheiro, amazonLink: "https://www.amazon.com.br/Espelho-Banheiro-Decorativo-Redondo-Couro/dp/B09HSRS34L/ref=sr_1_7?crid=EYKOC0XVLBXM&dib=eyJ2IjoiMSJ9.5GfD1JXckKGiCOv76aVrqgPSHcLov-KuaCrSwOEBG8ViwEuTKHmQMLIWsdTUp95CUP7cschJjguDAXdnGR0QCwTt7vG5Ah1Wouf9oOEeBhkj5h7KIVRtGwWxJSzcRzcRD6ZzjFerWdKU7mQ0N4uRw07eezNr-m2IAeyqTqSgvk1j-vd1Wc4p00UZv1WI1qzLRcDH4anZuPrhbEZDFnH-THT3KJkOYt8icXE2MPRSR0z_2KSdwStHFTgksMgGnBaG0JhPrFzW02kFpPDpAUS2mCNj-9SHf0ZnyZZG-jVhJP4.hApnziE9_xK1Opr_PBT9nmYc4joy_FoVRNPFBV1x1G0&dib_tag=se&keywords=espelho+para+banheiro&qid=1768240587&sprefix=espelho+pra+banheiro%2Caps%2C887&sr=8-7" },
  { id: 41, title: "Ventilador", price: "R$ 115,00", image: ventilador, amazonLink: "https://www.amazon.com.br/HEPTA-WORLD-Ventilador-Coluna-Bivolt/dp/B0FFHLXXDN/ref=sr_1_1_sspa?crid=Q9TDORXHORTG&dib=eyJ2IjoiMSJ9.Q78ZTCKTepLrywz4yr-LJiyngn3Vbz7urlqOBG5SXzBooZaV18FDOY5TUalYqHgZpSoXjWjvtdtf9jelsqPuN-KTmJ6K9tnJJuaK7XJ8PbMO468Tumah7TTiLjMojyLqYnp3G2vlUrRpSyQLRFrb8pkMCoMQ3D4yckRIdsdiM7da615ZiI-n079npjq631-THppafeUxXc1pHaNig31jY164I5_8ZN_cq7zoSyrmGTbQoj9iAYgKiTnGkaC4XZxnDrfSRvx3-A6r10YWcRiush87ISpmhgv9eky866CsgVI.uG-Izq7N0YFP37vViLTVD0oEJTHxfd9nej0fjr0z5GI&dib_tag=se&keywords=ventilador%2Bde%2Bcoluna&qid=1768241114&sprefix=ventilador%2Caps%2C262&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
  { id: 42, title: "Painel para TV", price: "R$ 149,99", image: paineltv, amazonLink: "https://www.amazon.com.br/Painel-Quarto-Ripado-Prateleira-Suspenso/dp/B0F6DCB87Z/ref=sr_1_8?crid=2613D8ALYGKFP&dib=eyJ2IjoiMSJ9.mm6rCOVBc5rUBUwNV0oOfzT7bO4rEe-HWiDdUqiEQ1Ixb7GuyrHDQffPllCHvyQZFrYr7g4lSSbNzSMO91ettCXnZqxgktUbS-a2jr3N7LLYq7N_dWkARJDUVnxqBgZxAt7TUq1HB8QPITO4aE7IHM7s8cny-MdcYJ1kzCHDDGdtM0t49yuJ6eOj1HTElacU_Qkg30nGBRNr4gGCcUqFbu0w2438Dc69QmAf0D6Cko5xkQO-V9XQjc-Zf8KfU4WrsQEUPaQyd0Rn1xN6U6Vfd5rnqrOTLWO65AIkh4Y9upc.HaaH8NxvD54ncI5WikRD6RMPkJlSzkchkYnCPOWEQJM&dib_tag=se&keywords=rack%2Bpara%2Btv%2B32%2Bpolegadas&qid=1768241550&sprefix=rack%2Bpara%2Btv%2Caps%2C362&sr=8-8&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1"},
  { id: 43, title: "Puffs para sala", price: "R$ 199,99", image: puff, amazonLink: "https://www.amazon.com.br/Banquetas-Decorativo-Escrit%C3%B3rio-Apartamento-Caramelo/dp/B0FJ2Z1VKY/ref=sr_1_3_sspa?crid=1N1ELUZ0ILMXO&dib=eyJ2IjoiMSJ9.jHH1qbltA8WTuuw_StGmt-5wLctdKpewiv1Tjj33_SYrYeE4Bv9SB8suCipsCq-xdFmye1v24IaG8BXsF0ISaalVs7i2NKQ4Xzsr18CBXmXrtHH3XKkyroQ-YTR9JCxaPecd1w9V41pulwg0P6jFOcZ18GuL-sdMqDyTthwF55Y-d0U5XKZ6kGu7B9y8XUu5vcjr-cepdT3rkNpzWynR63_S8HFLkXn5Xp3pFx25bnpxUojKsLWjfONn8O08cHExzsQPBXUYN2iXEmnGZ0WKFLAi9WeCqVtNYPRDByaBAFs.TFLKqxuLx_GLtf82oFKGouZmJ-Qr2wANufi2jWiEbg4&dib_tag=se&keywords=puffs%2Bquadrado&qid=1768242650&sprefix=puffs%2Bq%2Caps%2C278&sr=8-3-spons&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"},
  { id: 44, title: "Jogo de talheres inox", price: "R$ 74,99", image: talheres, amazonLink: "https://www.amazon.com.br/Faqueiro-Inox-Buzios-Tramontina-23799/dp/B0789M146B/ref=sr_1_4?crid=2FIYUG4BB41LD&dib=eyJ2IjoiMSJ9.cLCbmUFZ4ggUIUS85LIGoHP-OyxjxJVtu3OPiJ3pdLdRNCk0hBrY6lG3kVRa10Ja7GubdUcx6PY5xVJYJabFxu6dcwiSVkTAWwp3WB9tmwuGaPp76FeamMlezfD16hloJvJwNCcF3EObgMiSJX1QFMZZgivgJ_5unsyAbKKbjmnJo78F3wzdR3BwhRmECPbSzpuvsgXtmj1Ayx6GMTvjducg2Yt09dYFQ69-Lii3-EoK_GC8gGOqHX_rqjsNYCrhcYPpJWfjb0Na-QMgogWOfJdcHxBjoLUz3kHi-b37XzM._Q_N8anCGqr-2Kp5vqUtIQzvPpmC1-pCTCgOAIHvJRU&dib_tag=se&keywords=jogo+de+talheres+tramontina&qid=1768244098&sprefix=jogo+de+tal%2Caps%2C290&sr=8-4"},
  { id: 45, title: "Conjunto jarra com 6 copos", price: "R$ 69,90", image: jarracopos, amazonLink: "https://www.amazon.com.br/Conjunto-Jarra-Copos-Vidro-250ml/dp/B0FDX3F1XG/ref=sr_1_10?crid=3VKI2T8RR4LWX&dib=eyJ2IjoiMSJ9.MyzYHChqRmWJZkGEuGhReZQrsfaNG9Ml0P-FwTEGTfOJDYABCk2Jz462SzcgoiIZVnfw5J9OtHBQlWgwmT6N68GpZL-PU4DxQt6BG78aih1vnJGinORVeBIZgZ6LzbAsYxq6HrfLzR_8IbsoCDk4drlpsNIUjjvY3d3FuocXn75ZyohVjCQFxMgACLH93sXHdSI4EFOX-F-iW-rntK4ic9cbY7igUDhls_LSqhlOXdFuH9zP2xpDWU-O2aSQpET6AfNQOyFrP8OJJuia0n-YavbJLDbXOjR7iu91vbRgZgo.eZr5-p_Y0T5orpdpitFSPyrgSr244-_nHs7GaMtE8BY&dib_tag=se&keywords=conjunto+de+jarras+e+copos&qid=1768244796&sprefix=conjunto+de+jarras+e+co%2Caps%2C283&sr=8-10&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9"},
  { id: 46, title: "Jogo de assadeiras forma para bolo", price: "R$ 52,90", image: formabolo, amazonLink: "https://www.amazon.com.br/Assadeiras-Forma-Pudim-Sobrema-14-16-18-20-22/dp/B0CY3K2NV1/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1GMN5XB6M15L&dib=eyJ2IjoiMSJ9.ayEnlBkpgtOtlkE7wo-LnmhA4arpWq7HxOaIKR5EBFGv3tvZaaOurgDt2ioKGHGXuTuaznP0t3Jm5UNpll5zq9pYtUIHU1hMNHbOhPJ9DuPG4bAzfyWGjS2l7IAs99gJXssh5mKGhzhf5Df3L3uDXVywZVia57oIH04KhcdZ1ALKvBRTLaQc0g3pYACGCH6erm_Y64DR_SRiSmyurkRwa2-bXblZFOgXsSxIObbZOB5XjD9uU5l2ys_xV2iuMJA1aWQV1L5fPT_UyPc55m5ZwV7Ouy8K_aN_yCOYF4m54EA.iMUrxTn_eoHAP7_W44He1zg7M5NwOyGXjB33GayK_Os&dib_tag=se&keywords=formas+de+bolo&qid=1768245134&sprefix=formas+de+bolo%2Caps%2C318&sr=8-8&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9"},
  { id: 47, title: "Porta condimentos - Saleiro, pimenteiro e paliteiro", price: "R$ 37,80", image: portacondimentos, amazonLink: "https://www.amazon.com.br/Condimentos-Saleiro-Pimenteiro-Paliteiro-Girat%C3%B3ria/dp/B0FW9CZCRT/ref=sr_1_4_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=22LWBNP7W7CO6&dib=eyJ2IjoiMSJ9.DkicZh2bnPI2aPoJGGvkwLYcAty-g8szRsg2P8H7gUNee_sm6U1qVfP0tUDCpMtX-XfTyXcdI00i9fo0xFSPH1CBy2r2CnACpQFgW8SiEdmaFX3k_JCBrAHjH23gptdjFLgcXcIQgnUtwWYYaX16XPlzMsk-6z1tK7vczE50SHfDTEoH1U4hKygs5SFPO5_UVutLZmaGRkVx2C8Fa6aIe4-hPcWaV0PqNHray6WWnfP4f3zH8sPWwnSFNOo9HtK0mrXYoK8t59xF3-9bUHee2nXXeN0sTUhtCkdzlZKd1dI.RWRbRnssh8M6Jwx-NPF3KHmr6lY0UyDXPCJU1TjBhQw&dib_tag=se&keywords=saleiro&qid=1768245536&sprefix=saleiro%2Caps%2C298&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"},
  { id: 48, title: "Jogo de cama queen", price: "R$ 107,34", image: jogodecama, amazonLink: "https://www.amazon.com.br/Padr%C3%A3o-Percal-Anti%C3%A1caro-N%C3%A3o-bolinha/dp/B0CL7VDNRG/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=FFAGIVF1FOLT&dib=eyJ2IjoiMSJ9.N3pn-IwpETN6tBf32wZzGVkAfIljHarKrV4HaFlwcFMa_VwTaNvDMnVa8llb-OYUXbf9qLFDQj5yIX8pfTliKB8l43bPFPB90rmITpsf9nwv7sJchGItZm6sXEKIr9z53JyhzD_01LLIY0b9K-6qT-fy8F9Bi6obzipFzff1wkdjmx46GSQArtnZBRVPJ2-1wZvnGos2eAO-20vNaMFEYgEoYgaDIK-BX_GdpXwR2vYYm7z2fOBA2aBPVDxJcbhce9Ue-jTxQiXkBtrIvd8EDP2Bjrpt3aeDOW4hznFPCVg.ashbE9BQaWW_yMCQw7ZWxYTatwXDckKdPV8oQTCjB48&dib_tag=se&keywords=jogo%2Bde%2Bcama%2Bcasal%2Bking&qid=1767891683&sprefix=jogo%2Bde%2Bcama%2Bcasal%2Bking%2Caps%2C1668&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
  { id: 49, title: "Fruteira", price: "R$ 36,90", image: fruteira, amazonLink: "https://www.amazon.com.br/Fruteira-S%C3%A3o-Bernardo-Pl%C3%A1stico-Bandejas/dp/B0C6958LDD/ref=sr_1_20?crid=1AMF2YW1604OM&dib=eyJ2IjoiMSJ9.Qi3xhzCPE78qA01b7soZNT_iKqv1JrmirPz6QqCY07GpOJr-1OMrM787ISu9mYdH9Fm_tsIA0a_8VCCVMHZIDkGhSCiVziwjphqczPTMoWpGzGj43AEzUh5Eoub3-RJAyPAH_I0Ee9HmFAp2h96m9EaKNdGyW9ZRvlpZfKzQnFTHlkR3BUZXx_bScsIwvdo5pF5DfwANy2a27oOXX1POplVm7kyFfJ-3fiT2KHqHW4RM5X1J3YOD1FrN47sRS3ko6p4hS7Ex6X6mR0zsJxWCgRdSKYsQ2YTpiqs2Mvo1zrk.1mYPPreX5lHqnrZLh11sU7tlGZhFntnG1zkkd2WgzEc&dib_tag=se&keywords=fruteira&qid=1768479485&sprefix=fruteira%2Caps%2C281&sr=8-20&th=1" },
  { id: 50, title: "Pipoqueira", price: "R$ 189,90", image: pipoqueira, amazonLink: "https://www.amazon.com.br/Pipoqueira-Time-Branco-220v-Brit%C3%A2nia/dp/B076X6RBGG/ref=sr_1_18?crid=MYIOW5MAKZQ7&dib=eyJ2IjoiMSJ9.tB-5CG6uFKYYvvcsITuLTrxQJZxSDcEAWwIGt88svzkHR0sIvepMnc-hp9y51yx6chY9TwUvYcMrV2xc25Z5Yt4oApZrtr1ubWFnDUvVDOg5ggrZUBH4ye3H08e6WQbK-2eOir35TxhzbMoeJK-1yu6qZuqk_PUrI_7TW7x7TEB_LpHXfKLyIMYwL4GQQEfJUrzTTR6fpjcUvUdSft_yOYbYyVv_yK3mHuFJ9KWZMS1cQ7WFisuM0_pO1RSyOmIZt-IoRX54Cm9BN30ZJYOfS_arGwBvVANEr6ngNm_mc_o.SKMIt6FbJU2j-cpkM8RSoNkS7U4p2W5QkDUA7FhCqrA&dib_tag=se&keywords=pipoqueira&qid=1768481459&sprefix=pipoqueira%2Caps%2C356&sr=8-18&th=1" },
  { id: 51, title: "Jogo De Assadeiras Opaline Marinex Nadir", price: "R$ 63,80", image: marinex, amazonLink: "https://www.amazon.com.br/Jogo-Assadeiras-Opaline-Marinex-Nadir/dp/B08G8WD9MF/ref=sr_1_2?crid=BSPRNJGSWXO0&dib=eyJ2IjoiMSJ9.JfiVAC_wQviBixHsmPjyhEdoaFwe-CltyOZh5x80o_3wFSugzkuK-Oq5CW7lBfEy1o6m5E9MimAjwvKweCUOMYKaxbti_qftbp_ThjTE4IPOtNttLtiFSUxNJiy2RheggptFa44lEcQJDzc77zwUmhNgteSFpGaoxt6O3YVRFkHbADEsOLKoXyCH0VxhDB4HUutsQ3l37aXaytVVrrxXnuk6kJIAuyCBkGUqus5GD1sjzd_84qqwrW7vknRIjXTJz-_Xyx_Lt0eo9g-DchDJi7ySLqH-sx00VxZVwoRwZsI.9wv9F_D7lxNVgD8yhB88C-4QnjOo423ew6Jcp4YeT6g&dib_tag=se&keywords=conjunto+marinex+branco&qid=1768481865&sprefix=conjunto+marinex%2Caps%2C303&sr=8-2&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9" },
  { id: 52, title: "Kit duas mesas de canto", price: "R$ 129,90", image: mesasdecanto, amazonLink: "https://www.amazon.com.br/dp/B0F1DSM2XN/ref=nosim?tag=listaideal0c-20&th=1" },
  { id: 53, title: "Jogo de facas", price: "R$ 185,90", image: conjuntosDeFaca, amazonLink: "https://www.amazon.com.br/Facas-Pe%C3%A7as-Tramontina-Plenus-23498015/dp/B0772XQ7XQ/ref=sr_1_15_mod_primary_new?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2U94QEWSUWUQB&dib=eyJ2IjoiMSJ9.azJmO6ZzooTNGuiwtGzzxn-sYia7Ln5FnWqsGCpEyMICNrW3VFfBtWmIUkfngnGpDkmTao6Ldz0HmPqLBBJEwKFtQIUxDkf8Y0qxZV2aYTZEXVrfy7Ms_fF8QK-vcWvNs30oyKh5FmJq8d5rMrf1Qo_uiiuRxxs5fRtNWMg5H3i9V8UZFIiaaJCp4fMWerB5rgnAv0zE22eCuBBPtgk-d74CIA3LOnvkuKqZvzutN_QyPB-_kwBAmxOrV9EXzOt5Cqti6QMsPPmxZZ_C9oh-VI-hafZfEN4ZnvqeMnfdxnI.d9sqsmRZu_3Muqqe4KC_0ML2kWrlU-K7zJZQ3kxuhQA&dib_tag=se&keywords=conjunto%2Bde%2Bfacas&qid=1768482794&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=conjunto%2Bde%2Bfaca%2Caps%2C283&sr=8-15&th=1" },
  { id: 54, title: "Purificador de água", price: "R$ 109,43", image: purificador, amazonLink: "https://www.amazon.com.br/Purificador-Facile-Elimina-Sabores-Hidrofiltros/dp/B087SYKX14/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JE99ITDCOJT5&dib=eyJ2IjoiMSJ9.Bh0_OO8ltogLd4yXomoLWF4xJdMunyR5WEfnSvq_CMcUoHdK3jHiiZTaihtxSxxHpr-k-n3icB8ApDLhNJW0gCg7c7oWSAm3CI-vbTjcaJFpj5rj_wHrc8GFvfXZ_ln3oG8gYbhwKjxzy_lQOTOvEZalg0NWi0ZuMKPPSOsgJThwuKmiLl74mjfaFdEBKaQpv9b4mdiOxjEy2lk8ppGyIgfvCjqxMCyBH0o8QoryMdatXdcMbFpoTrN5vbxuG4ft6UZR5o1UVgrMrXnVhvWGbNnpT4j_NyIwvKQVJMzvv24.glnol6XXJmHJUBCm2vSGmXL5v4I0Ma_J8-BZtErj-8Y&dib_tag=se&keywords=purificador%2Bde%2Bagua%2Bfacile%2Bcom%2Brefil%2Bc3&qid=1768483138&sprefix=purificador%2Bde%2B%C3%A1gua%2Bfacile%2Bcom%2Brefil%2Bc3%2Caps%2C397&sr=8-2&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&th=1" },
  { id: 55, title: "Jogo de cama queen", price: "R$ 107,34", image: jogodecama, amazonLink: "https://www.amazon.com.br/Padr%C3%A3o-Percal-Anti%C3%A1caro-N%C3%A3o-bolinha/dp/B0CL7VDNRG/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=FFAGIVF1FOLT&dib=eyJ2IjoiMSJ9.N3pn-IwpETN6tBf32wZzGVkAfIljHarKrV4HaFlwcFMa_VwTaNvDMnVa8llb-OYUXbf9qLFDQj5yIX8pfTliKB8l43bPFPB90rmITpsf9nwv7sJchGItZm6sXEKIr9z53JyhzD_01LLIY0b9K-6qT-fy8F9Bi6obzipFzff1wkdjmx46GSQArtnZBRVPJ2-1wZvnGos2eAO-20vNaMFEYgEoYgaDIK-BX_GdpXwR2vYYm7z2fOBA2aBPVDxJcbhce9Ue-jTxQiXkBtrIvd8EDP2Bjrpt3aeDOW4hznFPCVg.ashbE9BQaWW_yMCQw7ZWxYTatwXDckKdPV8oQTCjB48&dib_tag=se&keywords=jogo%2Bde%2Bcama%2Bcasal%2Bking&qid=1767891683&sprefix=jogo%2Bde%2Bcama%2Bcasal%2Bking%2Caps%2C1668&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
  { id: 56, title: "Almofadas", price: "R$ 179,55", image: almofadas, amazonLink: "https://www.amazon.com.br/Almofadas-Linho-45x45cm-Z%C3%ADper-Enchimento/dp/B0DQ5W9QKY/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WPIQSWYJ5RR&dib=eyJ2IjoiMSJ9.h4YY4GIuHt8QzxjFRy_SNKCeKuJBEZqdW_M6IM0W9aEC9QLHW601dOYzD7E3p4tWSKMuyycDTRcJb3hVLtntIIoU1hYKu2aqWolTeXv_X_HI9LS50M_onoc3A03PJdRvwZsCekVxN6uBCoYxEI3oYmS3_tbRR2y4KeYnzy7jVnF9hhFHkualBDBJxgR7FTSlyux8l7_YfVEKd3D7bMCB_21mgHblqMCr11V4SuK-idA7V7pNzdWKRwWU7H6ses8hY2neoE0CHstlG3aKjmjyOFxBQN4NA6_REd2LuG3CH98.Ljai28YvPNpnxd-BabVTtHAOgE0XHIehkFGnLYRYagg&dib_tag=se&keywords=almofadas&qid=1768483837&sprefix=almofad%2Caps%2C290&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
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
      <Container id="presentes">
        <FirstPart>
          <StyledH1>Lista de Presentes</StyledH1>
          <Styledp>
            Preparamos esta lista com muito carinho para quem desejar nos presentear. <br></br>
            Cada item é simbólico e pode ser adquirido no local de sua preferência. <br></br>
            Fique à vontade — e saiba que a sua presença, para nós, já é um presente muito especial. 🧡
          </Styledp>
          
        </FirstPart>

        <SecondPart>
          {!loading ? (
            gifts.map((gift) => (
              <Card key={gift.id} selected={selectedGifts.includes(gift.id)}>
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
