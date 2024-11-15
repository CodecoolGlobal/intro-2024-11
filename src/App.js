import './App.css';

import CatList from "./CatList";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CatDetails from './CatDetails';
import { ThemeProvider } from './ThemeContext';

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
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>

  );
}

export default App;
