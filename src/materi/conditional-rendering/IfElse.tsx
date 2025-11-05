
type Props = {
    isLoggedIn: boolean;
}

export const IfElse = ({isLoggedIn}: Props) => {

    let message: React.ReactNode;

    if(isLoggedIn) {
        message = <h1>Welcome back!</h1>
    }
    else {
        message = <h1>Please log in.</h1>
    }
    return (
        <>
            {message}
            <h2>Ini Dashboard</h2>
        </>
    )
}
