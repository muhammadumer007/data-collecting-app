// import logo from './logo.svg';
import './App.css';
import AppRouter from './config/appRouter';
import cors from 'connect'

function App() {
  return (
<>
<cors>

<AppRouter/>
</cors>
</>
  );
}

export default App;
