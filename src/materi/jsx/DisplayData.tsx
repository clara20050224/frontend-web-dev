

const DisplayData = () => {
    const user = {
        name: "John Doe",
        age: 30,
        job: "Engineer"
    };
    return (
    <>
      <h1>Hello {user.name}</h1>
      <p>Umur: {user.age}</p>
      <p>Pekerjaan: {user.job}</p>
    </>
  );
}

export default DisplayData