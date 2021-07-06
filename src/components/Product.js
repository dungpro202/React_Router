
function Product(props) {

  var { match } = props;
  var name = match.params.name;
  console.log(name);
  return (
    <div>
      <h2>Đây là chi tiết sản phẩm:{name}</h2>
    </div>
  );
}

export default Product;
