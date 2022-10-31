import Header from "./component/Header";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import data from "./helper/data";


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="main">
      {data.map((item) => {
        return (<Main item={item} />)
        } 
      )
    }
    </div>
    </div>
  );
}

export default App;
