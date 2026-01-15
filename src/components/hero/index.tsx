import { Container, Elements, NamesContainer } from "./style"

export const Hero: React.FC = () => {
    return (
        <Container>
            <NamesContainer>
                Israel e Heloyza
            </NamesContainer>
            <Elements>
                <ul>
                    <li><a href="#presentes">Presentes</a></li>
                    <li><a href="#confirmação">Confirmação</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </Elements>
        </Container>
    )
}