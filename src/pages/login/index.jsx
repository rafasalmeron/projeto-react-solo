import { A1, Container, Div2, Main, P3 } from "./styled.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function Login() {
    return (
        <Container>
            <Header />
            <Main>
                <Card />
                <Div2>
                    <P3>
                        Ainda não faz parte do Linkedin?
                        <A1>Cadastre-se agora</A1>
                    </P3>
                </Div2>
            </Main>
            <Footer />
        </Container>
    )
}
export default Login