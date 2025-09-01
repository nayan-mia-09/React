
import "../pages/Button.css"
const Button = ({text = "Click Me", color = "blue" , onClick}) => {
  return (
    <div>
      <button className="btn"
      style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
