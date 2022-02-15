import '../App.css';
import { AuthProvider } from "../contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute"
import { Landing } from './Landing';
import { Dashboard } from './Dashboard';
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route exact path="/dashboard"
            element={
              <PrivateRoute component={Dashboard} />
            }
          />
        </Routes>
      </AuthProvider>
    </div>

  );
}

export default App;
