import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isHome = pathname === "/" || pathname === "/index.html";

  return <ThemeProvider>{isHome ? <Index /> : <NotFound pathname={pathname} />}</ThemeProvider>;
};

export default App;
