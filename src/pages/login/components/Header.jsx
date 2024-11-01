import {HeaderStyle, Logo} from "../styled.jsx";
import logo from "../../../assets/LI-Logo.png";
import {Link} from "react-router-dom";

function Header() {
    return (
        <HeaderStyle>
            <Link to={'/home'}><Logo src={logo} alt={"Logo Linkedin"}/></Link>
        </HeaderStyle>
    )
}
export default Header