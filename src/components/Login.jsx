import { useState } from "react"
import Shopping from "./Shopping"

export default function Login({ user }) {

    let [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }
    if (click) {
        return <Shopping user={user} />
    }
    return (
        <>
            <h1>Login Component</h1>
            <h3>Username : {user.username}</h3>
            <h3>Username : {user.balance}</h3>
            <button onClick={handleClick}>Shopping</button>
        </>
    )
}