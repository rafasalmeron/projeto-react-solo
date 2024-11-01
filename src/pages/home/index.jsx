import {Container, Conteiner2, HeaderStyle, Logo, Main} from "./styled.jsx";
import logoHome from "../../assets/LI-In-Bug.png";
import {useEffect, useState} from "react";
import NavBar from "./components/NavBar.jsx";
import {BASE_URL} from "../../constants/urls.jsx";
import axios from "axios";
import SideBarLeft from "./components/SideBarLeft.jsx";
import SideBarRight from "./components/SideBarRight.jsx";
import PostComponent from "./components/PostComponent.jsx";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const openModal = () => setIsModalOpen(prevState => !prevState);
    let offset = 0;

    const pegarPokemon = () => {
        axios
            .get(`${BASE_URL}/pokemon?limit=20&offset=${offset}`)
            .then(({ data }) => {
                const newPokemon = [];
                data.results.forEach((p) => newPokemon.push(p.name));
                setPokemons((oldPokemon) => [...oldPokemon, ...newPokemon]);
            });
        offset += 20;
    };

    const handleScroll = (e) => {
        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            pegarPokemon();
        }
    };
    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest(".modal-content") && isModalOpen) {
                setIsModalOpen(false);
            }
        }
        if (isModalOpen) {
            setTimeout(() => {
                document.addEventListener("click", handleClickOutside);
            }, 0);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isModalOpen]);

    useEffect(() => {
        pegarPokemon();
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <Container>
            <HeaderStyle>
                <Logo src={logoHome} alt={"Logo"}/>
                <NavBar
                    openModal={openModal}
                    isModalOpen={isModalOpen}
                />
            </HeaderStyle>
            <Conteiner2>
                <Main>
                    <SideBarLeft />
                    <PostComponent pokemons={pokemons}/>
                    <SideBarRight />
                </Main>
            </Conteiner2>
        </Container>
    )
}
export default Home