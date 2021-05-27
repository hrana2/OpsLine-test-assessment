import './App.css';
import { Alerts } from './components/Alerts'; 
import HomeBanner from './components/Banner';


function App() {
  return (
    <div>
      {/* calling alert and banner components */}
      <HomeBanner />
      <Alerts />
    </div>
  );
}

export default App;
