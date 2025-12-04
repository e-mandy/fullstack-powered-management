import { createBrowserRouter, RouterProvider } from 'react-router';
import { 
  NotFoundPage, 
  LoginPage,
  Dashboard, 
  FlashcardPage, 
  FlashcardList, 
  QuizTakePage,
  QuizResultPage
} from './pages';

import { ProtectedRoutes } from './components';

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/flashcards",
        element: <FlashcardList />
      },
      {
        path: "/documents/:id/flashcards",
        element: <FlashcardPage />
      },
      {
        path: "/quizzes/:quizeId",
        element: <QuizTakePage />
      },
      {
        path: "/quizzes/:quizId/results",
        element: <QuizResultPage />
      }
    ]
  }
  
]);

const App = () => {

  const loading = false;

  if(loading){
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <p>...Loading</p>
      </div>
    )
  }

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
