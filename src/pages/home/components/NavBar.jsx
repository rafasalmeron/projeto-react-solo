import {A1, DivModal, FotoPerfil, IconNav, Navi, Span, SpanContainer} from "../styled.jsx";
import {Divider, IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import homeImg from "../../../assets/home.svg";
import person from "../../../assets/person.svg";
import briefcase from "../../../assets/briefcase.svg";
import messages from "../../../assets/messages.svg";
import bell from "../../../assets/bell.svg";
import Modal from "./Modal.jsx";
import Foto from "../../../assets/foto.jpeg";

const NavBar = ({openModal, isModalOpen}) => {
    return (
        <Navi>
            <Span>
                <A1>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            height: 34,
                            width: 300
                        }}
                    >
                        <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Pesquisar"
                            inputProps={{'aria-label': 'pesquisar'}}
                        />
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
                <IconNav src={bell} alt="Notificações" />
                Notificações
            </Span>
            <SpanContainer>
                <FotoPerfil onClick={openModal} src={Foto} alt={'fotoPerfil'}/>
                {isModalOpen && (
                    <Modal>
                        <h2>Modal Title</h2>
                        <p>This is the content of the modal.</p>
                    </Modal>
                )}
            </SpanContainer>
            <Divider variant="middle" orientation="vertical" flexItem/>
            <DivModal>
                <div>modalNegocios</div>
                <div>Experimente o Premium</div>
            </DivModal>
        </Navi>
    )
}
export default NavBar