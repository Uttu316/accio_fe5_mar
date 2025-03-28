import "./App.css";
import MenuPage from "./pages/MenuPage";
import ChatPage from "./pages/ChatPage";
import ErrorBoundary from "./components/errorBoundary";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import SignUpPage from "./pages/Signup";
import PrivateRoute from "./routes/privateRoute";
import ProtectedRoute from "./routes/protectedRoute";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/chat" element={<ChatPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
