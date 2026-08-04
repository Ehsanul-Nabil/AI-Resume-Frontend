import AppRoutes from "./app.routes.jsx";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import Navbar from "./features/components/Navbar.jsx";
import { InterviewProvider } from "./features/interview/interview.context.jsx";

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <InterviewProvider>
        <AppRoutes />
      </InterviewProvider>
    </AuthProvider>
  );
}

export default App;