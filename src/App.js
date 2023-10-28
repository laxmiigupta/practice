import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar_com from './component/NavbarCom';
import Blogs from './component/Blogs';
import Banner from './component/Banner';

function App() {
  return (
    <div>
     <Navbar_com/>
     <Banner/>
    <Blogs />
    </div>
  );
}

export default App;
