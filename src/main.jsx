
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";
import "../service-worker.js";
import { AdminContextProvider } from "./context/AdminContext.jsx";

const queryClient = new QueryClient();

// Registrer service worker, hvis browseren understøtter det
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
      <UserContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
