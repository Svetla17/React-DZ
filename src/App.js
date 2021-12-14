// import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import CreatImput from './Components/CreatImput';
import Header from './Components/Header';
import Content from './Components/Content';
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import MouseMoove from './Components/MouseMoove';
import Figure from './Components/Figure'
import Accordion from './Components/Accordion';

 


function App() {
  return (
    <>

      {/* <div className="App">
        <UserList></UserList>
      </div>

      <div>
       <CreatImput></CreatImput>
      </div> */}

      {/* <div className="Wrapper">
          <Header></Header>
          <div className= "container">
            <div className= "content">
              <Content></Content>
            </div>
            <Aside></Aside>
            <Footer></Footer>
          </div>
            
      </div> */}
       {/* <MouseMoove></MouseMoove> */}
       <Figure></Figure>
       <Accordion></Accordion>

    </>
  );
}

export default App;
