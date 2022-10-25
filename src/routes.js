import {
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";

import Home from './pages/Home'
import NameList from './pages/NameList'
import Todo from "./pages/Todo";
import TodoCreate from "./pages/TodoCreate";
import TodoDetails from "./pages/TodoDetails";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<NameList />} />
      </Route>
      <Route path="/todo" element={<Todo />} />
      <Route path="/todo/:id" element={<TodoDetails />} />
      <Route path="/todo/create" element={<TodoCreate />} />
      <Route path="/todo/update" />
    </Routes>
  );
}

export default ApplicationRoutes;