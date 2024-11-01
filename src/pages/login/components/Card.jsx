import {A2, Button2, CardStyle, Div, H1, LogoSocial, P, P2, Span2} from "../styled.jsx";
import Form from "./Form.jsx";
import google from "../../../assets/google.png";
import apple from "../../../assets/apple-logo.png";
import {Divider} from "@mui/material";

function Card() {
    return (
        <CardStyle>
            <Div>
                <H1>Entrar</H1>
                <P>Acompanhe as novidades do seu mundo profissional.</P>
            </Div>
            <Form />
            <div>
                <Divider>
                    <P2>ou</P2>
                </Divider>
                <Span2>Ao clicar em Continuar, você aceita o
                    <A2>Contrato do Usuário</A2>,
                    a <A2>Política de Privacidade</A2> e a
                    <A2>Política de Cookies</A2> do LinkedIn.
                </Span2>
                <div>
                    <Button2><LogoSocial src={google}/> Continue with Google</Button2>
                    {/* <Button2><LogoSocial src={microsoft}/> Entrar com a conta da Microsoft</Button2> */}
                    <Button2><LogoSocial src={apple}/> Entrar com a Apple</Button2>
                </div>
            </div>
        </CardStyle>
    )
}
export default Card