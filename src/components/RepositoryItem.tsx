interface RepositoryItemProps {
  repository: {
    name: string;
    id: number;
    description: string;
    html_url: string;
    owner: {
      avatar_url: string;
      login: string;
    }
  }

}


export function RepositoryItem(props: RepositoryItemProps) {
  {
    /*o parâmetro props é utilizado para buscar uma propriedade que esteja sendo
    passada do componente pai para o componente filho */
  }
  
  return (
    <div className="repositoryItem">
      <section className="avatarImg">
        <img src={props.repository.owner.avatar_url} alt={props.repository.owner.login}/>
      </section>
      <section className="content">
      <li>
        <strong>{props.repository.name}</strong>

        <p>{props.repository.description}</p>
      </li>
      </section>
    </div>
  );
}
