import "./index.scss";
import { useState } from "react";

import useProducts from "../../hooks/useProduct";
import type { Product } from "../../interfaces/Product";
import Popup from "../popup";

const AllProducts: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const displayedProducts: Product[] = showAll
    ? products
    : products.slice(0, 4);

  const openPopup = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="container-all-products">
      <div className="title-container-all">
        <div className="layout-products">
          <span></span>
          <h1>Produtos relacionados</h1>
          <span></span>
        </div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Ver menos" : "Ver todos"}
        </button>
      </div>
      <article className="all-products-main">
        {displayedProducts.map((product) => (
          <div key={product.id} className="item-all" onClick={() => openPopup(product)}>
            <img src={product.photo} alt={product.productName} />
            <h2>{product.productName}</h2>
            <h3>R$ {product.price.toFixed(2)}</h3>
            <p>frete grátis</p>
            <button>COMPRAR</button>
          </div>
        ))}
      </article>

      {isOpen && selectedProduct && (
        <div className="layout-popup">
          <Popup product={selectedProduct} onClose={closePopup} />
        </div>
      )}
    </section>
  );
};

export default AllProducts;