import { useState } from "react"

export default function Payment({ user }) {

    let [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(true);
    }
    if (click) {
        return (
            <>
            <h1><u>User Details:-</u></h1>
                <h2>UserName: {user.username}</h2>
                <h2>Balance: {user.balance}</h2>
                <button>Pay</button>
                <h5>Payment Done!</h5>
                <h4>Updated Balance : 2400000</h4>
            </>
        )
    }
    return (
        <>
            <h1>Payment Process</h1>
            <h2>{user.username}</h2>
            <h2>{user.balance}</h2>
            <button onClick={handleClick}>Pay</button>
        </>
    )
}