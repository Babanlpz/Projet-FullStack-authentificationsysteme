import { Navigate } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function ProtectedRoute({ children, user }) {
  return user ? children : <Navigate to="/"></Navigate>;
}
