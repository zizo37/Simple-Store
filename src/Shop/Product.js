// import React from 'react';

// import './style.css'; 

// export default function Product(props) {
//   return (
//     <tr key={props.product.id}>
//       <td>{props.product.id}</td>
//       <td>{props.product.title}</td>
//       <td>{props.product.price}</td>
//       <td>{props.product.description.slice(0, 100)}....</td>
//       <td>{props.product.category}</td>
//       <td style={{ maxWidth: '75px', maxHeight: '75px' }}>
//         <img
//           src={props.product.image}
//           alt={props.product.title}
//           style={{ maxWidth: '100%', maxHeight: '100%' }}
//         />
//       </td>
//       <td>{props.product.rating.rate}</td>
//       <td>
//         <button>supprimer</button>
//       </td>
//     </tr>
//   );
// }


import React from 'react';
import './style.css'; 

export default function Product(props) {
  return (
    <tr key={props.product.id} className="product-row"> 
      <td>{props.product.id}</td>
      <td>{props.product.title}</td>
      <td>${props.product.price}</td>
      <td>{props.product.description.slice(0, 100)}....</td>
      <td>{props.product.category}</td>
      <td style={{ maxWidth: '75px', maxHeight: '75px' }} > 
        <img   
          src={props.product.image}
          alt={props.product.title}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </td>
      <td>{props.product.rating.rate}</td>
      <td>
        <button className="delete-button">Delete</button> 
      </td>
    </tr>
  );
}