import { useState } from "react"

const GreetingComponent = () => {
    const [name, setName] = useState<string>('John Doe');
    
    const handleClick = () => {
        setName('Jane Doe');
    }

    return (
        <>
        <p>{name}</p>
        <button onClick={handleClick}>Update Greeting</button>
        </>
    )
}

export default GreetingComponent