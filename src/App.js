import './App.css';
import Bodybottom from './Component/Bodybottom';
import Bodyheading from './Component/Bodyheading';
import Bodynav from './Component/Bodynav';
import Bottom from './Component/Bottom';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Bodyheading />
        <Bodynav />
        <Bodybottom />
        <Bottom />
      </div>
    </>
  );
}

export default App;
