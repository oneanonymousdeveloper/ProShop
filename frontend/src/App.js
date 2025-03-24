import {Container}  from 'react-bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
      <Container className='py-3'>
        Welcome
      </Container>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
