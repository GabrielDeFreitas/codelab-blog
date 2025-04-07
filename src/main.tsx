import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { RoutesUrls } from './utils/enums/index.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: RoutesUrls.BASE_URL,
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
