import { Container } from "./style"
import localization from '../../assets/localizacao.webp'

export const Contacts: React.FC = () => {
    return (
        <Container>
            <p id="contatos">Contato: (84) 991814786</p>
            <a
                href="https://maps.app.goo.gl/mv4weKwkWPcYuhGv6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={localization} alt="Localização" />
            </a>
            <a
                href="https://wa.me/5584991814786?text=Ol%C3%A1%2C%20gostaria%20de%20confirmar%20minha%20presen%C3%A7a."
                target="_blank"
                rel="noopener noreferrer"
                id="confirmação"
            >
                Confirmação
            </a>
        </Container>
    )
}