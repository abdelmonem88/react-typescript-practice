import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AuthGuard from "./utility/AuthGuard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary
              fallback={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <h1>Something went wrong</h1>
                  <p>Try refreshing the page</p>
                </div>
              }
            >
              <AuthGuard>
                <Home />
              </AuthGuard>
            </ErrorBoundary>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
