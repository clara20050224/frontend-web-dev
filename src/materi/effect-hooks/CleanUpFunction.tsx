import { useEffect } from "react"

const CleanUpFunction = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second');
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('Clean up: Interval cleared');
        }
    }, [])
    return (
        <div>CleanUpFunction</div>
    )
}

export default CleanUpFunction