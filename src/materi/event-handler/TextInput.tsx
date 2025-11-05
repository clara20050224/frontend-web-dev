
const TextInput = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input : ', event.target.value);
    };

    return (
        <>
            <input type="text" onChange={handleChange}/>
        </>
    )
}

export default TextInput