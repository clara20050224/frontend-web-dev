
const FormSubmit = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault(); // Prevent the default form submission behavior
        console.log('Form submitted!');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type Your Name" />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default FormSubmit