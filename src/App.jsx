import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/unAuthPages/Home';
import BookNow from './pages/unAuthPages/BookNow';
import PatientInfo from './pages/unAuthPages/PatientInfo';
import Navbar from './components/Navbar';


export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-now' element={<BookNow />} />
          <Route path='/patient-info' element={<PatientInfo />} />
        </Routes>
      </Router>
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '0.8rem' }}
        toastOptions={{
          success: {
            duration: 3000,
            style: { color: '#00C75B' },
          },
          error: {
            duration: 5000,
            style: { color: '#CB3232' },
          },
          style: {
            fontSize: '1.6rem',
            maxWidth: '50rem',
            padding: '1.6rem 2.4rem',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
