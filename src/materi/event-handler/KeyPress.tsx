
const KeyPress = () => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(`Key pressed: ${event.key}`);
    }

  return (
    <><input type="text" onKeyDown={handleKeyDown} /></>
  )
}

export default KeyPress