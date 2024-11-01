import {A, FooterStyle, LogoFooter} from "../styled.jsx";
import logoFooter from "../../../assets/logoFooterLinkedin.png";

function Footer() {
    return (
        <FooterStyle>
            <div>
                <LogoFooter src={logoFooter} alt={"logoLinkedin"}/>
                <span>© 2024</span>
                <A href={'facebook.com'}>Contrato do Usuário</A>
                <A>Política de Privacidade do LinkedIn</A>
                <A>Diretrizes da Comunidade</A>
                <A>Política de Cookies</A>
                <A>Política de Direitos Autorais</A>
                <A>Enviar feedback</A>
                <A>Idioma</A>
            </div>
        </FooterStyle>
    )
}
export default Footer