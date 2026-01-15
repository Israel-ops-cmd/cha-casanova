import { Container, Container_2, Container_3, Image, ReferenceVerse, StyledH1, Verse } from "./style"
import imagemIH from "../../assets/imagemIH.webp"

export const Header: React.FC = () => {
    return (
        <Container>
            <StyledH1>Bem vindos ao nosso chá de panela!</StyledH1>
            <Container_2>
                <Image><img src={imagemIH} alt="" /></Image>
                <Container_3>
                    <Verse>"Para que todos vejam, e saibam, e considerem, e juntamente entendam que a mão do senhor fez isso"</Verse>
                    <ReferenceVerse>Isaías 41.21</ReferenceVerse>
                </Container_3>
            </Container_2>
        </Container>
    )
}