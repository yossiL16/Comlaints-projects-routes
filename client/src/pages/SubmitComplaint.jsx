import React from 'react'

export default function SubmitComplaint() {
  return (
    <div>
      <h2>שליחת תלונה אנונימית</h2>
      <br />
      <div>
        <select name="category" id="">
            <option value="food">אוכל</option>
            <option value="equipment">ציוד</option>
            <option value="commands">פקודות</option>
            <option value="other">אחר</option>
        </select> 
        <label> :תחום התלונה</label>
      </div>
      <div>
        <p><label>:התלונה היא </label></p>
        <textarea type="text" name="" id="" rows="6" cols='60'/>
      </div>
    </div>
  )
}
