/* eslint-disable react-hooks/exhaustive-deps */

import { useState , useEffect} from "react";
export default function App() {
const [repositories, setRepositories] = useState([]);
useEffect(  () => {
const response =  fetch('https://api.github.com/users/1pedr1n/repos').then(response => response.json());

setRepositories(response);
}, []) 
function handleFavorite(id) {
 const newRepositories = repositories.map(repo => {
    return repo.id === id ? { ...repo, favorite: true } : repo;
  }
  );
  setRepositories(newRepositories);
}
  return (
    <> 
      <h1>Repositories</h1>
      <ul>
        {repositories.map(repo => (
          <>           <li key={repo.id}>{repo.name}</li>
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button></>

        ))}
      </ul>
    
    </>
  );
}


