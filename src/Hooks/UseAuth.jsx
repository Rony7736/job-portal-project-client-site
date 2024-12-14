import { useContext } from "react"
import authContext from "../Context/AuthContext/AuthContext"


const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export default useAuth