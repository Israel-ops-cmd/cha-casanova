import { Container, Image, StyledH1 } from "./style"
import imagemIH from "../../assets/imagemIH.webp"

export const Header: React.FC = () => {
    return (
        <Container>
            <StyledH1>Bem vindos ao nosso chá de panela!</StyledH1>
            <Image><img src={imagemIH} alt="" /></Image>
        </Container>
    )
}