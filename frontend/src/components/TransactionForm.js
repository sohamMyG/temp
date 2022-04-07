import React, {useState} from "react"
import Notification from "./Notification"


const TransactionForm = () => {

  const [errorMessage, setErrorMessage] = useState(null)
  const [trans, setTrans] = useState({
    from: "",
    to: "",
    amount: ""
  })
  // const [receiver, setReceiver ] = useState('')

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)

    setTrans({ ...trans, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("msg")
    displayMsg("Transaction Completed")
  }

  const displayMsg = (msg) => {
    setErrorMessage(msg)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  return (
    <div>
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                From:
                <input type="text" name="fromaccno" id="fromaccno" value={trans.fromaccno}
                onChange={handleInput}
                />
            </label>
            </div>
            <div>
                <label>
                To:
                <input type="text" name="toaccno" id="toaccno" value={trans.toaccno} 
                onChange={handleInput}  
                />
            </label>
            </div>

            <div>
                <label>
                Amount:
                <input type="number" name="amount" id="amount" value={trans.amount}
                onChange={handleInput}
                />
            </label>
            </div>
            
            <input type="submit" value="Submit" />
            </form>
        </div>
        <div>
            <Notification message={errorMessage}/>
        </div>
        
        
    </div>
  )
}


  
export default TransactionForm