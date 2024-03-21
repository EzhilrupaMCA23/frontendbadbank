
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container'; 


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Axis Bank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/home">Home</Nav.Link>
            <Nav.Link href="#/create">Create</Nav.Link>
            <Nav.Link href="#/deposit">Deposit</Nav.Link>
            <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
            <Nav.Link href="#/alldata">All Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;


// export default function Navbar() {
//   // let style={color:"#fff"};
  
//   return (<>

//      <Nav variant="pills" defaultActiveKey="/home" className='clo' >
      
//      {/* <Navbar.Brand href="#"><h3>Axis Bank</h3></Navbar.Brand>  */}
//     <Nav.Item>
//         <Nav.Link href="#/home">Home</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="#/create">Create</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="#/deposit">Deposit</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//       <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
//       </Nav.Item>  
//       <Nav.Item>
//       <Nav.Link href="#/alldata">Alldata</Nav.Link>
//       </Nav.Item>
  
//     </Nav> 
//     </>
//   );
// }
