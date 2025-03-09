import './App.css'
import FetchComponent from './components/FetchComponent';

const App = () => {
  return (
    <div>
      <h1>useJsonFetch Example</h1>
      <FetchComponent
        url="http://localhost:7070/data"
        label="Data Component"
      />
      <FetchComponent
        url="http://localhost:7070/error"
        label="Error Component"
      />
      <FetchComponent
        url="http://localhost:7070/loading"
        label="Loading Component"
      />
    </div>
  );
};

export default App;
