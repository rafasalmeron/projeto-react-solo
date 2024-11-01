import {
    ConteinerPost,
    ContentPost,
    ContentPost2,
    ContentPost3, ContentPost4,
    IconImg,
    InputPost, P,
    PostImg
} from "../styled.jsx";
import Foto from "../../../assets/foto.jpeg";
import FeedComponent from "./FeedComponent.jsx";
import img1 from "../../../assets/image.svg";
import img2 from "../../../assets/calendar.svg";
import img3 from "../../../assets/script.svg";

const PostComponent = ({ pokemons }) => {
    return (
        <ConteinerPost>
            <ContentPost>
                <ContentPost2>
                    <PostImg src={Foto}/>
                    <InputPost placeholder={'Comece uma publicação'}/>
                </ContentPost2>
                <ContentPost3>
                    <div>
                        <ContentPost4>
                            <IconImg src={img1} alt="foto"/>
                            <span> Mídia</span>
                        </ContentPost4>
                    </div>
                    <div>
                        <ContentPost4>
                            <IconImg src={img2} alt="foto"/>
                            <span> Evento</span>
                        </ContentPost4>
                    </div>
                    <div>
                        <ContentPost4>
                            <IconImg src={img3} alt="foto"/>
                            <P> Escrever artigo</P>
                        </ContentPost4>
                    </div>
                </ContentPost3>
            </ContentPost>
            <FeedComponent
                pokemons={pokemons}
            />
        </ConteinerPost>
    );
}
export default PostComponent