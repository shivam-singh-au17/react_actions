import LogoComponent from "./Logo";

const HeaderComponent = () => {
    return (
        <>
            <div className="header">
                <LogoComponent />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent;
