export function RepositoryItem(props) { 
    {/*o parâmetro props é utilizado para buscar uma propriedade que esteja sendo
    passada do componente pai para o componente filho */}

        return (
            <li>
                <strong>{props.repository.name ?? 'Default'}</strong>
           
                <p>{props.repository.description}</p>
    
                <a href={props.repository.link}>
                    Acessar repositório
                </a>
            </li>
        )
    }