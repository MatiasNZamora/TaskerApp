import AppRouters from "./routers/AppRouters";
import AuthProvider from "./Auth/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/layouts/Layout';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouters />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;