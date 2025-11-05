/* eslint-disable react-hooks/rules-of-hooks */

type Props = {
    isLoggedIn: boolean;
}



const LogicalOperator = ({isLoggedIn}: Props) => {
  return (
    <div>
        {isLoggedIn && <h1>Welcome back, user!</h1>}
        {isLoggedIn || <h1>Please log in</h1>}
    </div>
  )
}

export default LogicalOperator