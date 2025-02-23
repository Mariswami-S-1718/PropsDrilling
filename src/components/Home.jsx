import { useState } from "react"
import Login from "./Login"

export default function Home() {

    let [click, setClick] = useState(false);
    let user = {
        username: "Ronaldo",
        balance: 2500000
    }
    const handleClick = () => {
        setClick(true);
    }
    if (click) {
        return <Login user={user} />
    }

    return (
        <>
            <h1>Home Component</h1>
            <button onClick={handleClick}>Login</button>
        </>
    )
}