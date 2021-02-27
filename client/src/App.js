import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Starwars } from './starwars'

const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Starwars />
    </QueryClientProvider >
  );
}

export default App;
