import './App.css';

import CatList from "./CatList";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CatDetails from './CatDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CatList />
  },
  {
    path: '/cat/:id',
    element: <CatDetails />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
