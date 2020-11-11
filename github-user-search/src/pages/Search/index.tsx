import BlueButton from 'core/components/Button';
import { UserGit } from 'core/types/users';
import { formatarData } from 'core/utils/formatarData';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import ProductDescriptionLoader from './components/Loaders/ProductDescriptionLoaders';
import ProductInfoLoader from './components/Loaders/ProductInfLoaders';
import './styles.scss';


const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [userResponse, setUserResponse] = useState<UserGit>()

    const [name, setName] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true);
        setIsSearch(true);
        makeRequest({url:`${name}`}).then(response => setUserResponse(response.data))
        .finally(()=> {
            setIsLoading(false)
        })
       
    }


    return (
        <div className="search-container">
            <div className="search-content">
                <div className="search-perfil">
                    <h2>Encontre um perfil Gitbub</h2>
                    <form onSubmit={handleSubmit} className="form-submit">
                        <input type="text" name="perfil"  onChange={handleOnChange}   placeholder="Usuário Github"/>
                        <div className="button-submit-form">
                            <BlueButton text="Encontrar"/>
                        </div>
                    </form>                  
                </div>
                {!isSearch? "": 
                (<>
                <div className="user-container">
                    <div className="user-content">
                            {isLoading ? <ProductInfoLoader/> : <img src={userResponse?.avatar_url} alt="Avatar do usuário github"/>}
                                
                        
                        <div className="user-info">
                            {isLoading ? <ProductDescriptionLoader/> : (<>
                            <div className="mini-info">
                            <p>{`Repositórios públicos: ${userResponse?.public_repos}`}</p>
                                <p>{`seguidores: ${userResponse?.followers}`}</p>
                                <p>{`seguindo: ${userResponse?.following}`}</p>
                            </div>
                            <div className="more-info">
                                <h3>Informações</h3>
                                <p><strong>Empresa: </strong>{`${userResponse?.company}`}</p>
                            <p><strong>Website/Blog: </strong> {`${userResponse?.blog}`}</p>
                            <p><strong>Localidade: </strong> {`${userResponse?.location}`}</p>
                            <p><strong>Membro desde: </strong> {formatarData(`${userResponse?.created_at}`)}</p>

                            </div>
                            
                            </>)}

                        </div>
                        
                    </div>
                    {isLoading ? "" : (<>
                        <a href={`https://github.com/${name}`} target="_blank">
                            <BlueButton text="Ver Perfil"/>          
                        </a>
                    
                    </>)}
                   
                            
                  
                    

                </div>
                    
                
                
                </>)}

            </div>



        </div>


    )



}

export default Search;

