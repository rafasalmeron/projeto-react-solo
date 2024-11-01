import {SideBar} from "../styled.jsx";

const SideBarLeft = () => {
    return (
        <SideBar>
            <div>
                <div>1.1</div>
                <div>1.2</div>
                <div>1.3</div>
                <div>1.4</div>
            </div>
            <div>
                <div>2.1</div>
                <div>2.2</div>
            </div>
            <div>
                <span>Aproveite o Premium</span>
            </div>
            <div>
                <span>Itens salvos</span>
            </div>
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