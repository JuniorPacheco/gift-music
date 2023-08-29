import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../store/user";
import PrincipalLayout from "../layout/PrincipalLayout";

const PrivateRoutes = () => {
  const { token } = useUserStore((state) => state.user);
  if (token)
    return (
      <PrincipalLayout>
        <Outlet />
      </PrincipalLayout>
    );
  return <Navigate to="/auth/login" />;
};
export default PrivateRoutes;
