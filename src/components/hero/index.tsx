import { Container, Elements, NamesContainer } from "./style"

export const Hero: React.FC = () => {
    return (
        <Container>
            <NamesContainer>
                Heloyza e Israel
            </NamesContainer>
            <Elements>
                <ul>
                    <li><a href="#presentes">Presentes</a></li>
                    <li><a href="#presentes">Confirmação</a></li>
                    <li>Contatos</li>
                </ul>
            </Elements>
        </Container>
    )
}