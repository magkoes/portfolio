import React from 'react';
import Button from '../common/Button';

const Header = () => {
    return ( 
        <header>
            <Button className="btn-burger"><span></span></Button>
            <h1 class="brand">
                Magalie Koessler 
                <strong>Photographe</strong>
            </h1>
            <a href="/series">Séries</a>
        </header>  
    );
}
 
export default Header;