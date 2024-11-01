import {
    BackImg,
    Content1, Content_Step2,
    P_skills,
    P_Step2,
    PessoalImg,
    SideBar,
    Spacer,
    Step1,
    Step2,
    Step3,
    Step4
} from "../styled.jsx";
import fotoPerfil from "../../../assets/fotoSidebard.jpeg";
import back  from "../../../assets/backGroundSide.jpeg";

const SideBarLeft = () => {
    return (
        <SideBar>
                <Content1>
                    <Step1>
                        <BackImg src={back}/>
                        <PessoalImg src={fotoPerfil}/>
                        <Spacer></Spacer>
                        <p><strong>Rafael Salmeron</strong></p>
                        <P_skills>Residente em TIC/Software |
                            Full Stack Developer |
                            Java| React | NodeJs | JS</P_skills>
                    </Step1>
                    <Step2>
                        <Content_Step2>
                            <P_Step2>Visualizações</P_Step2>
                            <P_Step2>Conexões</P_Step2>
                            <P_Step2>Amplie sua Rede</P_Step2>
                        </Content_Step2>
                    </Step2>
                    <Step3>
                        <span>Aproveite o Premium</span>
                    </Step3>
                    <Step4>
                        <span>Itens salvos</span>
                    </Step4>
                </Content1>
                <div>
                    <span>Recentes</span>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
        </SideBar>
    );
}
export default SideBarLeft