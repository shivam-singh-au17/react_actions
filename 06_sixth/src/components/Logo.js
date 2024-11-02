import { logoUrl } from "../config";

const LogoComponent = () => (
    <a href="/">
        <img className='logo' src={logoUrl} alt="logo" />
    </a>
)

export default LogoComponent;
