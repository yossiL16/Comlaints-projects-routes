import { useEffect, useState } from "react"
import Card from "../components/Card"


export default function AdminComplaints() {

    const [data, setData] = useState([])

    async function resData() {
        const res = await fetch("http://localhost:3000/api/complaints")
        const newData = await res.json()
        setData(newData)
    }

    useEffect(() => {
        resData()
    }, [])
    return (
        <div>

            <table className="table">
                <tr>
                    <th>קטגוריה</th>
                    <th>התלונה</th>
                    <th>:נכתב ב</th>
                </tr>
                { data.map((item, i) => (
                    <Card key={i} item={item} />
                ))}
            </table>
        </div>
    )
}
