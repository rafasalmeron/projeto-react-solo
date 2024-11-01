import {A1, Container, HeaderStyle, IconNav, Logo, Navi, Span} from "./styled.jsx";
import logoHome from "../../assets/LI-In-Bug.png";
import search from "../../assets/search.svg";
import homeImg from "../../assets/home.svg";
import person from "../../assets/person.svg";
import briefcase from "../../assets/briefcase.svg";
import bell from "../../assets/bell.svg";
import messages from "../../assets/messages.svg";
import {Box, TextField} from "@mui/material";

function Home() {
    return (
        <Container>
            <HeaderStyle>
                <Logo src={logoHome} alt={"Logo"}/>
                <Navi>
                    <Span>
                        <A1>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                            >
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                    <DirectionsIcon />
                                </IconButton>
                            </Paper>
                        </A1>
                    </Span>
                    <Span>
                        <IconNav src={homeImg} alt={"Logo"}/>
                        Início
                    </Span>
                    <Span>
                        <IconNav src={person} alt={"Logo"}/>
                        Minha rede
                    </Span>
                    <Span>
                        <IconNav src={briefcase} alt={"Logo"}/>
                        Vagas
                    </Span>
                    <Span>
                        <IconNav src={messages} alt={"Logo"}/>
                        Mensagens
                    </Span>
                    <Span>
                        <IconNav src={bell} alt={"Logo"}/>
                        Notificações
                    </Span>
                </Navi>
                <div>
                    <div>modalNegocios</div>
                    <div>Experimente o Premium</div>
                </div>
            </HeaderStyle>
            <main>
                <div>sidebar1</div>
                <div>sidebar2</div>
                <div>
                    <div>postagem</div>
                    <div>feed</div>
                </div>
                <div>
                    <div>sidebar1</div>
                    <div>sidebar2</div>
                    <div>sidebar3</div>
                    <div>footer</div>
                </div>
            </main>
        </Container>
    )
}
export default Home