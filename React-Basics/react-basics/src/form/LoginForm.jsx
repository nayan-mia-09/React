import { useState } from "react"


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
        alert(`Email: ${email} || Password: ${password}`)
    }

  return (
    <div  className="w-1/3 mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email Input */}
        <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required/>
        {/* Password Input */}
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required/>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
