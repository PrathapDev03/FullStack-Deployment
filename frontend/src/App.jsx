import "./App.css";
import { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {
  NotificationProvider
}
from "./context/NotificationContext";

import ProtectedRoute
from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

import Visitors from "./pages/Visitors";
import Visitor from "./pages/Visitor";

import Insights from "./pages/Insights";
import Administration from "./pages/Administration";

function App() {

  useEffect(() => {

    const darkMode =
      localStorage.getItem(
        "darkMode"
      );

    if (
      darkMode === "true"
    ) {

      document.body.classList.add(
        "dark-theme"
      );

    }

  }, []);

  return (

    <NotificationProvider>

      <BrowserRouter>

        <Routes>

          {/* Public Routes */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* Protected Routes */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <Employee />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees/add"
            element={
              <ProtectedRoute>
                <AddEmployee />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees/edit/:id"
            element={
              <ProtectedRoute>
                <EditEmployee />
              </ProtectedRoute>
            }
          />

          <Route
            path="/visitor"
            element={
              <ProtectedRoute>
                <Visitor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/visitors"
            element={
              <ProtectedRoute>
                <Visitors />
              </ProtectedRoute>
            }
          />

          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Insights />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Administration />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
              />
            }
          />

        </Routes>

      </BrowserRouter>

    </NotificationProvider>

  );

}

export default App;