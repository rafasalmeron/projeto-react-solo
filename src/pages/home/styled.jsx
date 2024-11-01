import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    position: fixed; 
    top: 0; 
    left: 0;
    row-gap: 50px;
    height: 53px;
    border: 1px solid #e1e9ee;
    background-color: #f3f2ef;
    z-index: 10000;
    
`;
export const Logo = styled.img`
    width: 34px;
    height: 34px;
    margin-left: 20px;
    @media (min-width: 980px) {
        margin-left: 200px;
        
    }
`;
export const IconNav = styled.img`
    width: 24px;
    height: 24px;
    padding: 0 20px;
`
export const Navi = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    width: 30%;
    //margin: 0 50px 0 50px;
    //@media (max-width: 768px) {
    //    display: none;
    //}
`;
export const DivModal = styled.div`
    margin-left: 20px;
    display: flex;
@media (max-width: 768px) {
    display: none;
}
`
export const A1 = styled.a`
    text-decoration: none;
    @media (max-width: 980px) {
        display: none;
    }
    
`;
export const Span = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    font-size: 13px;
`
export const SpanContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%); 
    background: white;
    border: 1px solid #e1e9ee;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 16px;
    z-index: 1000;
    min-width: 200px;
    margin-top: 8px;
`;
export const FotoPerfil = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
`
export const Conteiner2 = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    width: 100%;
    background-color: #f3f2ef;
    border-radius: 8px;
`
export const Main = styled.main`
    padding-top: 80px;
    display: flex;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr  3fr 1fr;
        gap: 0 20px;
        grid-template-areas: "sidebar1 postagem sidebar2";
        width: 80%;
    }
    
`
export const SideBar2 = styled.div`
    display: none;
    flex-direction: column;
    gap: 20px;
    background-color: blue;
    padding: 10px;
    border-radius: 8px;
    max-height: max-content;
`
export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  background-color: white;
  width: 100%;
  padding: 10px;
    max-width: 555px;
`;
export const IMG = styled.img`
  width: 100%;
  height: 100%;
`;
export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 8px;
    width: 100%;
    background-color: #f3f2ef;
    
`
export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    border-radius: 8px;
    max-height: max-content;
    width: 225px;
    @media (max-width: 768px) {
        display: none;
    }
`
export const Step1 = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 201px;
    min-width: 172px;
    min-height: 201px;
    text-align: center; 
    border-bottom: 1px solid #e1e9ee;
`;
export const Step2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 160px;
    border-bottom: 1px solid #e1e9ee;
`;
export const Step3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    text-align: center; 
    border-bottom: 1px solid #e1e9ee;
`;
export const Step4 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    text-align: center; 
    border-bottom: 1px solid #e1e9ee;
`;
export const Content1 = styled.div`
    background-color: white;
    border-radius: 8px;
    width: 100%;
    border: 1px solid #e1e9ee;
`
export const BackImg = styled.img`
    width: 100%;
    height: 56px;
    border-radius: 8px 8px 0 0;
`
export const PessoalImg = styled.img`
    position: absolute;
    bottom: 65%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 68px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 2px solid white;
`
export const Spacer = styled.div`
    height: 55px;
`;
export const P_skills = styled.div`
    margin: 10px 10px 10px 10px;
    color: #666;
    font-size: 13px;
`
export const P_Step2 = styled.p`
    color: #666;
    font-size: 13px;
    padding: 3px;
`
export const Content_Step2 = styled.div`
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const ConteinerPost = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    border-radius: 8px;
    background-color: white;
    height: 116px;
    width: 95%;
    max-width: 580px;
`
export const ContentPost = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const ContentPost2 = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    
`
export const ContentPost3 = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    max-width: 555px;
`
export const PostImg = styled.img`
    width: 54px;
    height: 54px;
    border-radius: 50%;
`
export const InputPost = styled.input`
    border-radius: 50px;
    border: 1px solid #666;
    width: 80%;
    height: 40px;
    padding-left: 20px;
    font-weight: bold;
`
export const IconImg = styled.img`
    width: 24px;
    height: 24px;
`
export const ContentPost4 = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    padding: 7px;
    &:hover {
        background-color: #f3f2ef;
        border-radius: 8px;
    }
`
export const P = styled.p`
    white-space: nowrap;
`
export const ContentThumbnail = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    border-radius: 8px;
    background-color: white;
    width: 100%;
    justify-content: flex-start;
`
export const ContentThumbnail2 = styled.div`
    display: flex;
    width: 80%;
    gap: 20px;
    align-items: center;
`
export const ContentThumbnail3 = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 5px;
`

export const ContentPost5 = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    padding: 7px;
    &:hover {
        background-color: #f3f2ef;
        border-radius: 8px;
    }
    position: relative;
`
export const ReactionModal = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  bottom: 50px;
  left: 120%;
  transform: translateX(-50%);
  width: 200px;
  padding: 10px;
  border-radius: 8px;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  overflow: visible;
`;

export const ReactionIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
    border-radius: 50%;
  &:hover {
      transform: scale(2.0);
    translateX(-5px)
  }
`;