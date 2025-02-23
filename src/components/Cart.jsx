import { useState } from "react"
import Payment from "./Payment"

export default function Cart({ user }) {

    let [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }
    if (click) {
        return <Payment user={user} />
    }
    return (
        <>
            <h1>Cart Content</h1>
            <button onClick={handleClick}>Payment</button>
        </>
    )
}