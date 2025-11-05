
type Props = {
    isLoggedIn: boolean;
}

const TernaryOperator = ({ isLoggedIn }: Props) => {
    return (
        <div className={`${isLoggedIn ? 'blue-text' : 'red-text'}`}>
            <h1>Ternary Operator Example</h1>
            {isLoggedIn ?
                <h1>Welcome back, user!</h1> :
                <h1>Please login</h1>
            }</div>
    )
}

export default TernaryOperator