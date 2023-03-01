import './InputField.css'
const InputField =({text,handleInput,handleSubmit,description,handleDescription})=>{

    return(
        <label htmlFor="">
            <input type="text" value={text} onChange={(e)=>handleInput(e.target.value)}/>
            <textarea
                placeholder='Task description'
                value={description}
                onChange={(e)=>handleDescription(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default InputField;