import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Visitors from "./pages/Visitors";
import Visitor from "./pages/Visitor";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Visitor />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Employee Routes */}

        <Route
          path="/employees"
          element={<Employee />}
        />

        <Route
          path="/employees/add"
          element={<AddEmployee />}
        />

        <Route
          path="/employees/edit/:id"
          element={<EditEmployee />}
        />

        {/* Visitor Routes */}

        <Route
          path="/visitors"
          element={<Visitors />}
        />

        {/* Future Analytics Page */}

        <Route
          path="/analytics"
          element={
            <div
              style={{
                padding: "50px",
                fontSize: "24px"
              }}
            >
              Analytics Coming Soon
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;