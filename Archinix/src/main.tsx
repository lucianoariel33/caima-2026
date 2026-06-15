import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@/index.scss";

import App from "@/App.tsx";
import { ThemeProvider } from "@/context/ThemeContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error(
    "Root element not found. Make sure you have <div id='root'></div> in index.html"
  );
}