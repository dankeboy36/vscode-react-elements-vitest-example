// @ts-check
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const elementId = "root";
const rootElement = document.getElementById(elementId);
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  throw new Error(`No element with id '${elementId}' found in the document.`);
}
