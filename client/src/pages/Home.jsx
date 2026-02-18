import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Home() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")

    function handleText(e){
        setPassword(e.target.value)    
    }

    function handleSubmit(){
        navigate('/submit')
    }


   async function enterAdmin(){
        const res = await fetch(`http://localhost:3000/api/admin/login`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({password})
        });
        const messageFromApi = await res.json()
        if (['message'] in messageFromApi) {
            localStorage.setItem("token", messageFromApi.token)
            navigate('/admin')

        }
        else if(['error'] in messageFromApi) {
            setErr(messageFromApi.error)
            alert(err)
        }
        
        
    }

  return (
    <div>
        <div>
            <h2>תיבת תלונות אנונימיות בבסיס צבאי</h2>
            <p>שלחו תלונה בצורה אנונימית ובטוחה</p>
            <button onClick={handleSubmit}>שליחת תלונה</button>
        </div>

        <div>
            <h2>מפקדים בלבד</h2>
            <input
            type="password"
            placeholder="password" 
            onChange={handleText}/>
            <label> :סיסמה</label>
            <br />
            <button onClick={enterAdmin}>כניסה</button>
            {err && <p>{err}</p>}
        </div>
    </div>
  )
}
