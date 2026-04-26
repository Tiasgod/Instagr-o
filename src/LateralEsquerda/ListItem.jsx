export default function ListItem(props) {
    return (
        <li>
            <div className="menu-item">
                {props.icone}
                <span>{props.texto}</span>
            </div>
        </li>
    )
}
