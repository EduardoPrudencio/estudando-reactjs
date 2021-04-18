export function RepositoryItem(props){
    return (
        <li>
        <strong>{props.repository?.name ?? "Default2"}</strong>
        <p>Forms em React in Item</p>
        <a href="">
            Acessar Repositorio
        </a>
    </li>

    );
}