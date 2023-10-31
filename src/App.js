import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar_com from './component/Home/NavbarCom';
import Blogs from './component/Home/Blogs';
import Banner from './component/Home/Banner';
import UseReducer from './component/Home/UseReducer';

function App() {
  return (
    <div>
     <Navbar_com/>
     <Banner/>
    <Blogs />
    < UseReducer/>
    </div>
  );
}

export default App;
