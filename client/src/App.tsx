import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Conversations from "./pages/Conversations";
import Tickets from "./pages/Tickets";
import Settings from "./pages/Settings";
import Customers from "./pages/Customers";
import CustomerProfile from "./pages/CustomerProfile";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomerProfile />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
