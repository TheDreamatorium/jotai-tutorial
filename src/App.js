import './App.css';
import { Provider } from 'jotai';
import Count from './Count';
import { countAtom } from './atoms';

function App() {

  return (
    <Provider initialValues={[[countAtom, 5]]}>
      <Count />
    </Provider>
  );
}

export default App;
