import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./db/firebase";

function App() {
  const [user, setUser] = useState(null);
  const [isFetch, setIsFetch] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetch(false);
        return;
      }
      setUser(null);
      setIsFetch(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetch) {
    return <h2>En cours de connexion..</h2>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
