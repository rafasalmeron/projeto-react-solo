import {ContainerPrincipal, Conteiner2, HeaderStyle, Logo, Main} from "./styled.jsx";
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

    const pegarPokemon = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon`);
            const newPokemon = [];
            response.data.results.forEach((p) => newPokemon.push(p.name));
            setPokemons((oldPokemon) => [...oldPokemon, ...newPokemon]);
        }catch (error) {
            console.log(error)
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
    }, []);

    return (
        <ContainerPrincipal>
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
        </ContainerPrincipal>
    )
}
export default Home