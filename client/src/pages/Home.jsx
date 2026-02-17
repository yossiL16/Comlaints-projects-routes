import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();

    function handleSubmit(){
        navigate('/submit')
    }
        function handleAdmin(){
        navigate('/admin')
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
            <input type="text" />
            <label> :סיסמה</label>
            <br />
            <button onClick={handleAdmin}>כניסה</button>
        </div>
    </div>
  )
}
