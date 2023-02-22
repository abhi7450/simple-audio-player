import { useEffect, useState } from "react";
function Product() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
    return data;
  };
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);
  const limit = 5;
  let start = (page - 1) * limit;
  let end = (page - 1) * limit + limit;
  return (
    <>
      {products.length > 0 && (
        <div className="products">
          {products.slice(start, end).map((product) => {
            return (
              <span key={product.id} className="product__single">
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}
export default Product;
