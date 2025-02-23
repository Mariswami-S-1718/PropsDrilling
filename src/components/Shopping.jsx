import { useState } from "react"
import Cart from "./Cart";

export default function Shopping({ user }) {

    let [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }
    if (click) {
        return <Cart user={user} />
    }
    return (
        <>
            <h1>Shopping Content</h1>
            <button onClick={handleClick}>Cart</button>
        </>
    )
}