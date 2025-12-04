import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {
    const isAuthenticated = false;

  return (
    <div>
      {isAuthenticated ? (<Outlet />) : (<Navigate to="/login" replace />)}
    </div>
  )
}

export default ProtectedRoutes
