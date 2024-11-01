import {
    Conteiner, ContentPost4, ContentPost5,
    ContentThumbnail,
    ContentThumbnail2,
    ContentThumbnail3,
    IconImg,
    IMG,
    P,
    PostImg, ReactionIcon, ReactionModal
} from "../styled.jsx";
import img1 from "../../../assets/like.svg";
import img2 from "../../../assets/comment.svg";
import img3 from "../../../assets/recycle.svg";
import img4 from "../../../assets/send.svg";
import {useState} from "react";

const ReactionOptions = ({ visible }) => (
    <ReactionModal visible={visible}>
        <ReactionIcon>👍</ReactionIcon>
        <ReactionIcon>❤️</ReactionIcon>
        <ReactionIcon>👏</ReactionIcon>
        <ReactionIcon>🎉</ReactionIcon>
    </ReactionModal>
);

const PokemonThumbnail = ({ id, name, image, type }) => {
    const [isReactionVisible, setReactionVisible] = useState(false);
    return (
            <Conteiner>
                <ContentThumbnail>
                    <ContentThumbnail2>
                        <PostImg src={image} alt="foto"/>
                        <strong>{name}</strong>
                    </ContentThumbnail2>
                </ContentThumbnail>
                <div>
                    <span>
                        {type}
                    </span>
                </div>
                <IMG src={image} alt={name}/>
                <ContentThumbnail3>
                    <ContentPost5
                        onMouseEnter={() => setReactionVisible(true)}
                        onMouseLeave={() => setReactionVisible(false)}
                    >
                        <IconImg src={img1} alt="foto"/>
                        <P>Gostei</P>
                        <ReactionOptions visible={isReactionVisible} />
                    </ContentPost5>
                    <ContentPost5>
                        <IconImg src={img2} alt="foto"/>
                        <P>Comentar</P>
                    </ContentPost5>
                    <ContentPost5>
                        <IconImg src={img3} alt="foto"/>
                        <P>Compartilhar</P>
                    </ContentPost5>
                    <ContentPost5>
                        <IconImg src={img4} alt="foto"/>
                        <P>Enviar</P>
                    </ContentPost5>
                </ContentThumbnail3>
            </Conteiner>
    );
};
export default PokemonThumbnail;