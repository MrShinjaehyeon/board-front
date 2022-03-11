import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      {/* <Route path="/:username" element={<PostListPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/:username/:postid" element={<PostPage />} />
    </Routes>
  );
}

export default App;
