import BlueButton from 'core/components/Button';
import React from 'react';
import './styles.scss';

const Search = () => {

    return (
        <div className="search-container">
            <div className="search-content">
                <div className="search-perfil">
                    <h2>Encontre um perfil Gitbub</h2>
                    <form action="">
                        <input type="text" name="perfil" placeholder="Usuário Github"/>
                    </form>
                    <BlueButton text="Encontrar"/>
                </div>
            </div>

        </div>


    )



}

export default Search;

