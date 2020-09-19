import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import './App2.css';
import { MDBCard, MDBCardBody,MDBBtn, MDBCardImage, MDBCardUp,MDBCol, MDBCardTitle, MDBCardText, MDBAvatar, MDBFlippingCard  } from "mdbreact";
import {Card,Button,CardColumns} from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

return(
     <div class="column">
     {docs && docs.map((doc,index) =>(
            <div class="column">

    <Card className="bg-dark text-white">
  <Card.Img variant="top" style = {{height:'200px',width:'250px'} }src = {doc.url}/>
  <Card.Body>
   <Card.Title style = {{color:'#2c5282'}}> image {index +1}</Card.Title>
  </Card.Body>  
</Card>


</div>

     ))}
     
 </div>
)

//   return (
//     <div className="img-grid">
//       {docs && docs.map(doc => (
//         <motion.div className="img-wrap" key={doc.id} 
//           layout
//           whileHover={{ opacity: 1 }}s
//           onClick={() => setSelectedImg(doc.url)}
//         >
//           <motion.img src={doc.url} alt="uploaded pic"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           />
//         </motion.div>
//       ))}
//     </div>
//   )
}

export default ImageGrid;