import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  function handleRemoveRepositoryItem(key) {
    const newRepositories = repositories.filter(
      (repository) => repository.name !== key
    );

    setRepositories(newRepositories);
  }
  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <div key={repository.name}>
              <RepositoryItem repository={repository} />
              <div className="controls">
                <a
                  className="controlButton"
                  href={repository.html_url}
                  target="_blank"
                >
                  <p>Acessar</p>
                </a>
                <button
                  className="controlButton"
                  type="button"
                  onClick={() => handleRemoveRepositoryItem(repository.name)}
                >
                  <p>Remover</p>
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
