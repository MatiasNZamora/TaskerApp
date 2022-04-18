import AppRouters from "./routers/AppRouters";
import AuthProvider from "./Auth/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouters />
      </AuthProvider>
    </div>
  );
}

export default App;
