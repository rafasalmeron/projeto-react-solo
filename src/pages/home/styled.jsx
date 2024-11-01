import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    row-gap: 50px;
    height: 53px;
    border: 1px solid #e1e9ee;
    
`;
export const Logo = styled.img`
    width: 34px;
    height: 34px;
    margin-left: 200px;
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
`;
export const DivModal = styled.div`
    margin-left: 20px;
    display: flex;
`
export const DivModal2 = styled.div`
    margin-top: 200px;
    width: 200px;
    height: 200px;
`
export const A1 = styled.a`
    text-decoration: none;
    
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
    display: grid;
    grid-template-columns: 1fr  2fr 1fr;
    gap: 0 20px;
    grid-template-areas: "sidebar1 postagem sidebar2";
    width: 80%;
    overflow: auto;
`
export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    border-radius: 8px;
    max-height: max-content;
`
export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
`
export const SideBar2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: blue;
    padding: 10px;
    border-radius: 8px;
    max-height: max-content;
`
export const ImgFeed = styled.img`
    width: 100%;
    height: 100%;
`
export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
`;
export const IMG = styled.img`
  width: 120px;
  height: 120px;
`;