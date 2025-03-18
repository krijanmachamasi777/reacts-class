import './contactus.css';

export const Input=({label,type,id,value,placeholder,onChange})=>{
    return (
        <>
        <label htmlFor={id}>
            {label}
        </label>
        <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}/>
        </>
    )
}
export default Input