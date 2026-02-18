import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function SubmitComplaint() {

    const navigate = useNavigate();

    const [text, setText] = useState("");
    const [category, setCtegory] = useState("אוכל")
    const [message, setMessage] = useState("")

    function handkeCancheT(e) {
        setText(e.target.value)
    }

    function handkeCancheS(e) {
    setCtegory(e.target.value)
    }

   async function sendText(){
        setMessage("")
        const res = await fetch(`http://localhost:3000/api/complaints`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({category, message: text})
        });


        const messageFromApi = await res.json()

        if (messageFromApi.message){
            setMessage(messageFromApi.message)
            setTimeout(() => {
                navigate('/')
            },1500)
        } 
        else
            {
            setMessage("ההודעה לא נשלחה, נסה שנית מאוחר יותר")
        }

        setCtegory("")
        setText("")
    }

  return (

    <div className="complaints">
        <div className="table-complaints">
      <h2 className="title-complaints">שליחת תלונה אנונימית</h2>
      <br />
      <div>
        <select name="קטגוריה" id="" onChange={handkeCancheS} >
            <option value="אוכל">אוכל</option>
            <option value="ציוד">ציוד</option>
            <option value="פקודות">פקודות</option>
            <option value="אחר">אחר</option>
        </select> 
        <label> :תחום התלונה</label>
      </div>
      <div>
        <p className="p-text"><label>:התלונה היא </label></p>
        <textarea type="text"
        name="complaint"
        id="complaint"
        rows="6"
        cols='60'
        onChange={handkeCancheT}/>
      </div>
      <button onClick={sendText}>שליחה</button>
      { message && <div ><p className="textMessage">{message}</p> </div>}
      </div>
    </div>
  )
}
