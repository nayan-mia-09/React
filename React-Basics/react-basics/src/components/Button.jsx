

const Button = ({text, color = "blue",onClick }) => {
  return (
    <div className="border p-4 m-2 bg-blue-300 w-1/2 mx-auto">
        <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded cursor-pointer" style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginRight: "8px"
      }} onClick={onClick}>{text}</button>
      
    </div>
  )
}

export default Button
