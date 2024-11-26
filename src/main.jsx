import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./context/UserContext.jsx";
import { AdminContextProvider } from "./context/AdminContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

export const App = React.lazy(() => import("./App"));

const queryClient = new QueryClient();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service worker registreret"))
    .catch((error) =>
      console.log("Fejl ved registrering af service worker:", error)
    );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <UserContextProvider>
          <AdminContextProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
          </AdminContextProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
