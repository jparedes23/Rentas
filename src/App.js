import { AuthProvider } from "./context/AuthContext";
import Router from "./routers";

function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;
