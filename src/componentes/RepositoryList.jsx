import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {name: 'Repository Name', description: 'Texto da descricao', link: 'http://teste.com'}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
               <RepositoryItem repository={repository}/>
               <RepositoryItem />
            </ul>

        </section>
    )
}
  