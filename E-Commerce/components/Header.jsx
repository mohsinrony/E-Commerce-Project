/* import React from "react"; */



/* npm run dev */

function Header() {
    return (
    <>
    <header>
        <div className="header">

            <div className="header_left">
                <img className="logo" src="./src/assets/Bluegency_White.svg" alt="bluegency" />
                <div className="headerMenu">
                    <button id="menu">Menu <img className="dropdown"src="./src/assets/dropdown_icon.png" alt="dropdown" /></button>
                    <div className="dropdown_header">
                        <a href="">Kitchen</a>
                        <a href="">Garden</a>
                        <a href="">Pets</a>
                        <a href="">Clothing</a>
                        <a href="">Kids</a>
                        <a href="">Office</a>
                        <a href="">Car</a>
                        <a href="">Seasonal</a>
                    </div>
                </div>
            </div>
       
            <div className="header_center">
                <input className="searchBar" type="search" placeholder="Search"/>
                <button className="searchButton" ><img className="search-icon" src="./src/assets/searchIcon.png" alt="search" /></button>
            </div>

            <div className="header_right">
                <img className="user" src="./src/assets/usericon.png" alt="user" />
                <div className="checkout"> 
                    <div className="cart-count"><img className="cart" src="./src/assets/shoppingCart.png" alt="cart" />
                    <div className="items-count">3</div>
                    </div>
                    <div className="price">€ 0.00</div> 
                </div>
            </div>

        </div>
        
    </header>
    </>
    )
}

export default Header;