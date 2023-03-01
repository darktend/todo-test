import './Description.css';
const Description = ({description,handleDescription,handleSubmit})=>{
return (
    <label htmlFor="">
        <textarea
            placeholder='Task description'
            value={description}
            onChange={(e)=>handleDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Todo</button>
    </label>
)
}

export default Description;

