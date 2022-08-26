import Todo from './components/Todo';
import TaskModal from './components/TaskModal';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/todo/:id" element={<TaskModal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
