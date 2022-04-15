import React, {useState} from "react"
import Notification from "./Notification"
import transService from "../services/bank"

const TransactionForm = () => {

  const [errorMessage, setErrorMessage] = useState(null)
  const [trans, setTrans] = useState({
    sender: "",
    receiver: "",
    amount: ""
  })
  // const [receiver, setReceiver ] = useState('')

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTrans({ ...trans, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    transService
      .create(trans)
      .then(res => {
        console.log(res)
      })
      .catch(e =>
        console.log(e)
      )

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
                <input type="text" name="sender" id="sender" value={trans.sender}
                onChange={handleInput} placeholder="Enter Account No."
                />
            </label>
            </div>
            <div>
                <label>
                To:
                <input type="text" name="receiver" id="receiver" value={trans.receiver} 
                onChange={handleInput} placeholder="Enter Account No."
                />
            </label>
            </div>

            <div>
                <label>
                Amount:
                <input type="number" name="amount" id="amount" value={trans.amount}
                onChange={handleInput} placeholder="Enter the Amount"
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