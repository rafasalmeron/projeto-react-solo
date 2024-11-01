import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    @media (min-width: 768px) {
        align-items: center;
        justify-content: space-between;
    }
`
export const Logo = styled.img`
    margin: 32px 32px 16px;
    width: 110px;
    height: 28px;
`
export const HeaderStyle = styled.header`
    display: flex;
    width: 100%;
    height: 80px;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        justify-content: flex-start;
    }
    align-items: center;
    @media (min-width: 768px) {
        justify-content: center;
    }
`
export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 304px;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 118px 50px 118px;
    @media (min-width: 768px) {
        padding: 24px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
    }
`
export const H1 = styled.h1`
    font-family: 'open sans', sans-serif;
    font-weight: 550;
    color: rgba(0, 0, 0, 0.9);
    padding: 0 0 4px 0;
`
export const P = styled.p`
    font-size: 14px;
    font-weight: 100;
    font-family: 'open sans', sans-serif;
    line-height: 1.5;
`
export const FormStyle = styled.form`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
export const Span = styled.span`
    padding: 0;
    align-self: flex-start;
    font-size: 18px;
`
export const Button = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 24px;
    background-color: #0073b1;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 0;
    cursor: pointer; 
`
export const Div = styled.div`
    padding-bottom: 0 20px;
`
export const Div2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const P3 = styled.p`
    font-size: 16px;
    padding: 0 8px;
    font-family: 'open sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const A1 = styled.a`
    margin: 8px 0 0;
    align-self: flex-start;
    color: #0073b1;
    text-decoration: none;
    font-size: 18px;
    padding: 5px 8px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
        background-color: rgba(173, 216, 230, 0.5);
        border-radius: 100px;
    }
`
export const A2 = styled.a`
    align-self: flex-start;
    color: #0073b1;
    text-decoration: none;
    padding: 0 8px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`
export const Span2 = styled.span`
    padding: 8px 0 8px 0;
    font-size: 12px;
    font-family: 'open sans', sans-serif;
`
export const Button2 = styled.button`
    width: 100%;
    height: 42px;
    border: 2px solid gray;
    border-radius: 24px;
    background-color: white;
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin: 10px 0 5px 0;
    cursor: pointer;
    &:hover {
        background: rgba(240, 240, 240);
    }
`
export const LogoSocial = styled.img`
    justify-content: center;
    align-items: center;
    width: 17px;
    height: 17px;
`
export const P2 = styled.p`
    color: gray;
    padding-bottom: 20px;
    padding-top: 10px;
`
export const FooterStyle = styled.footer`
    height: 72px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`
export const LogoFooter = styled.img`
    width: 56px;
    height: 14px;
`
export const A = styled.a`
    padding: 8px;
    color: gray;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`