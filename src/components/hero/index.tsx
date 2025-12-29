import { Container, Elements, NamesContainer } from "./style"

export const Hero: React.FC = () => {
    return (
        <Container>
            <NamesContainer>
                Heloyza e Israel
            </NamesContainer>
            <Elements>
                <ul>
                    <li>Presentes</li>
                    <li>Confirmação</li>
                    <li>Contatos</li>
                </ul>
            </Elements>
        </Container>
    )
}