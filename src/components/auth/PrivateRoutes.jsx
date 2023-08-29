import { Navigate, Outlet } from "react-router-dom"
import { useUserStore } from "../../store/user"

const PrivateRoutes = () => {
  const {token} = useUserStore(state => state.user)
  if(token) return <Outlet />
  return <Navigate to='/auth/login' />
}
export default PrivateRoutes