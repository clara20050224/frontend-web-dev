
const ClickButton = () => {
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        alert('Button clicked!');
        console.log(event.target);
    }
  return (
    <>
        <button onClick={handleClick}>Click Me!</button>
        <p>Click the button to see an alert.</p>
    </>
  )
}

export default ClickButton