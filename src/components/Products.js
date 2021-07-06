
import { Route,NavLink } from 'react-router-dom';
import Product from './Product';



function Products(props) {

  var products = [
    {
      id: 1,
      slug: 'iphone',
      name: 'Iphone X',
      price: 3500000
    },
    {
      id: 2,
      slug: 'samsung',
      name: 'SamSung Galaxy S7',
      price: 12000000
    },
    {
      id: 3,
      slug: 'realme',
      name: 'Realme X7',
      price: 3500000
    },
  ]

  var { match } = props;
  var url = match.url;

  var result = products.map((products, index) => {
    return (
      <NavLink to={`${url}/${products.slug}`} key={index}>
        <li className="list-group-item">
          {products.id} - {products.name} -{products.price}
        </li>
      </NavLink>
    );
  });


  return (
    <div className="container">
      <h1>Danh Sách Sản Phẩm</h1>
      <div className="row">
        <ul className="list-group">
          {result}
        </ul>
      </div>
      <div className="row">
        <Route path="/products/:name" component={Product}/>
      </div>

    </div>
  );
}

export default Products;
