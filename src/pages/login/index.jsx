import {
    A,
    A1, A2, Button, Button2,
    Card,
    Container,
    Div,
    Div2,
    Footer,
    Form,
    H1,
    Header,
    Logo,
    LogoFooter, LogoSocial,
    Main,
    P, P2, P3,
    Span, Span2
} from "./styled.jsx";
import apple from "../../assets/apple-logo.png"
import microsoft from "../../assets/microsoft.png"
import google from "../../assets/google.png"
import logo from "../../assets/LI-Logo.png";
import logoFooter from "../../assets/logoFooterLinkedin.png";
import {Box, Checkbox, Divider, TextField} from "@mui/material";

function Login() {

    return (
        <Container>
            <Header>
                <Logo src={logo} alt={"Logo Linkedin"}/>
            </Header>
            <Main>
                <Card>
                    <Div>
                        <H1>Entrar</H1>
                        <P>Acompanhe as novidades do seu mundo profissional.</P>
                    </Div>
                    <Form>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: 500, maxWidth: '100%'}}>
                            <TextField
                                fullWidth
                                label="E-mail ou telefone"
                                id="fullWidth"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Senha"
                                id="fullWidth"
                                margin="normal"
                            />
                        </Box>
                        <A1 href="#"><strong>Esqueceu a senha?</strong></A1>
                        {/*<Span><Checkbox defaultChecked size="small"/>Me mantenha na conta</Span>*/}
                        <Button>Entrar</Button>
                    </Form>
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
                            <Button2><LogoSocial src={google}/>  Continue with Google</Button2>
                            {/* <Button2><LogoSocial src={microsoft}/> Entrar com a conta da Microsoft</Button2> */}
                            <Button2><LogoSocial src={apple}/>  Entrar com a Apple</Button2>
                        </div>
                    </div>
                </Card>
                <Div2>
                    <P3>Ainda não faz parte do Linkedin? <A1>Cadastre-se agora</A1></P3>
                </Div2>
            </Main>
            <Footer>
                <div>
                    <LogoFooter src={logoFooter} alt={"logoLinkedin"}/>
                    <span>© 2024</span>
                    <A href={'facebook.com'} >Contrato do Usuário</A>
                    <A>Política de Privacidade do LinkedIn</A>
                    <A>Diretrizes da Comunidade</A>
                    <A>Política de Cookies</A>
                    <A>Política de Direitos Autorais</A>
                    <A>Enviar feedback</A>
                    <A>Idioma</A>
                </div>
            </Footer>
        </Container>
    )
}

export default Login