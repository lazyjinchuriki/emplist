import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UserList from './Components/UserList/UserList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;