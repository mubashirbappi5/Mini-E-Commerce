import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1 className="text-3xl text-amber-300 font-bold">Welcome to the Mini E-Commerce App</h1>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;