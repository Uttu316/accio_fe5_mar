import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

const MenuPage = React.lazy(() => import("./pages/MenuPage"));
const ChatPage = React.lazy(() => import("./pages/ChatPage"));
const ErrorBoundary = React.lazy(() => import("./components/errorBoundary"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SignUpPage = React.lazy(() => import("./pages/Signup"));
const PrivateRoute = React.lazy(() => import("./routes/privateRoute"));
const ProtectedRoute = React.lazy(() => import("./routes/protectedRoute"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route element={<PrivateRoute />}>
            <Route
              path="/chat"
              element={
                <Suspense fallback={<h1>Loading Chat...</h1>}>
                  <ChatPage />
                </Suspense>
              }
            />
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
