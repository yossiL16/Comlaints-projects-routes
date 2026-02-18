export default function Card(props) {
  return (
    <tr className="card">
        <td>{props.item.category}</td>
        <td>{props.item.message}</td>
        <td>{props.item.createdAt}</td>
    </tr>
  )
}
