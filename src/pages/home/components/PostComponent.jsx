import {Logo} from "../styled.jsx";
import Foto from "../../../assets/foto.jpeg";
import FeedComponent from "./FeedComponent.jsx";

const PostComponent = ({ pokemons }) => {
    return (
        <div>
            <div>
                <Logo src={Foto}/>
                <input/>
            </div>
            <div>
                <div>midia</div>
                <div>evento</div>
                <div>escrever algo</div>
            </div>
            <FeedComponent
                pokemons={pokemons}
            />
        </div>
    );
}
export default PostComponent