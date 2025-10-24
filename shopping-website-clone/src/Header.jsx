

function Header() {
 return(
    <>
        <div className="header-main-container">
            <div className="header-sub-container">
                <div className="logo-contnainer">
                    <div className="logo"></div>
                </div>
                    <div className="icons">
                        <div className="home">Home</div>
                        <div className="products">Products</div>
                        <div className="about">About</div>
                    </div>
                <div className="interactibles">
                    <div className="fav-icon"></div>
                    <div className="cart"></div>
                </div>
            </div>
        </div>
    </>
 );
}

export default Header