import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { types } from "../../types"

export const LoginScreen = () => {

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)
  
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'  
    dispatch({ type: types.login , payload: { name: 'usuario' } })
    navigate(lastPath, { replace: true })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button 
          className='btn btn-primary'
          onClick={handleLogin}
        >
        login
      </button>
    </div>
  )
}
