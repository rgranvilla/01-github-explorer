import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
    login: string;
  }
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  function handleRemoveRepositoryItem(key: string) {
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
