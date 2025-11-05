import { useEffect, useState } from "react"

const Effect = () => {
    // hook tidak disarankan ditempatkan dalam function, if, atau loop

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    useEffect(() => {
        console.log(`dijalankan setiap kali 'count' berubah: ${count}`);
    }, ); // efek ini akan dijalankan setiap kali 'count' berubah

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <p>Text: {text}</p>
        <button onClick={() => {
            if(text){
                setText(''); // Reset text if it has a value
            }
            else{
                setText('Hello, World!'); // Set text to a greeting
            }
        }}>Change Text</button>
    </div>
  )
}

export default Effect