import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <AuthProvider>
      <JobProvider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </JobProvider>
    </AuthProvider>
  );
};

export default App;
