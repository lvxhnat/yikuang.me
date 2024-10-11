import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

function ThemedApp() {
  return <App />;
}

root.render(<ThemedApp />);
