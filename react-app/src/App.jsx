import "./App.css";
import MenuPage from "./pages/MenuPage";
import ChatPage from "./pages/ChatPage";
import ErrorBoundary from "./components/errorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <ChatPage />
        {/* <MenuPage /> */}
      </div>
    </ErrorBoundary>
  );
};

export default App;
