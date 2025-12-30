import { Routes, Route } from "react-router-dom";
import ArticlesList from "./pages/ArticlesList";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlesList />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
