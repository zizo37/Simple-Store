// import React, { useEffect, useState } from 'react';
// import dislike from "./dislike.png";
// import like from "./like.png";
// import Product from './Product';
// import Nav from './Nav';

// export default function ProductList() {
//     const [products, setProducts] = useState([]);
//     const [add, setAdd] = useState([]);
//     const [productLikes, setProductLikes] = useState({});


//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then((res) => res.json())
//             .then((prod) => {
//                 setProducts(prod);
//             });
//     }, []);


//     // function ADDProduit(){

//     //     { add.map((p,id)=>{

//     //         <Product list={key}/>
//     //     }
//     // )
//     // }
//     // }


//     return (
//         <div>
//             <Nav/>
//             <table style={{ border: '1px solid black' }}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Title</th>
//                         <th>Price</th>
//                         <th>Description</th>
//                         <th>Category</th>
//                         <th>Image</th>
//                         <th>Rating</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id}>
//                             <td>{product.id}</td>
//                             <td>{product.title}</td>
//                             <td>{product.price}</td>
//                             <td>{product.description.slice(0,100)}....</td>
//                             <td>{product.category}</td>
//                             <td style={{ maxWidth: '75px', maxHeight: '75px' }}>
//                                 <img
//                                     src={product.image}
//                                     alt={product.title}
//                                     style={{ maxWidth: '100%', maxHeight: '100%' }}
//                                 />
//                             </td>
//                             <td>{product.rating.rate}</td>
//                             <td><button>supprimer</button></td>
//                             <td><button onClick={() => setAdd((prevAdd) => [...prevAdd, product])}>Ajouter</button></td>
//                             <td>
//                             <button onClick={() => setProductLikes({ ...productLikes, [product.id]: !productLikes[product.id] })}>
//                                 <img
//                                     src={productLikes[product.id] ?? false ? like : dislike} 
//                                     alt={productLikes[product.id] ?? false ? 'like' : 'dislike'}
//                                     width={'35px'}
//                                 />
//                             </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <h1>Products added :</h1>
//             {add.map((product) => (
//                 <Product key={product.id} product={product} />
//             ))}
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import dislike from "./dislike.png";
import like from "./like.png";
import Product from './Product';
import Nav from './Nav';
import './style.css'; 

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [add, setAdd] = useState([]);
  const [productLikes, setProductLikes] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((prod) => {
        setProducts(prod);
      });
  }, []);

  return (
    <div>
      <Nav />
      <table className="product-list-table"> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.description.slice(0, 100)}....</td>
              <td>{product.category}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image" 
                />
              </td>
              <td>{product.rating.rate}</td>
              <td>
                <button className="delete-button">Delete</button> 
              </td>
              <td>
                <button
                  onClick={() => setAdd((prevAdd) => [...prevAdd, product])}
                  className="add-button" 
                >
                  Add
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    setProductLikes({ ...productLikes, [product.id]: !productLikes[product.id] })
                  }
                  className="like-dislike-button"
                >
                  <img
                    src={productLikes[product.id] ?? false ? like : dislike}
                    alt={productLikes[product.id] ?? false ? 'like' : 'dislike'}
                    width={'35px'}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Products added :</h1>
      {add.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}