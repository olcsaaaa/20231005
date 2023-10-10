import {useState} from "react";

function FormFunction(props) {
    const [count, setCount] = useState(1)
    const [input, setInput] = useState("")

    const addCount = () => {
        setCount(count + 1)
    }
    const subtractCount = () => {
        setCount(count - 1)
    }
    const addImage = () => {
        props.addFunction({
            src:input
        })
    }
    return (
        <div className={"imageContainer"}>
            <h1>Stateless</h1>
            <p>Stateless count: {count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={subtractCount}>-</button>
            <input type={"text"}
                   onChange={(e) => setInput(e.target.value)}
            />
            <h3>input tartalma: {input}</h3>
            <button onClick={addImage}>add image</button>
        </div>
    )
}

export default FormFunction