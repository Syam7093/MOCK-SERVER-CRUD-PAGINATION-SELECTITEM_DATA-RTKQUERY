import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Crud from './components/Crud';
import SelectedItem from './components/SelectedItem';
import CrudOprations from './components/CrudOprations';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
     {/* <Search></Search> */}
     {/* <Crud></Crud> */}
     {/* <SelectedItem></SelectedItem> */}
     {/* <CrudOprations></CrudOprations> */}
     <Pagination></Pagination>

    </div>
  );
}

export default App;
