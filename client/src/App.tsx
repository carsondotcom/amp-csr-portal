import { Routes, Route } from 'react-router-dom';
import { UserListPage } from './features/users/UserListPage';
import { UserDetailPage } from './features/users/UserDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
    </Routes>
  );
}

export default App;
