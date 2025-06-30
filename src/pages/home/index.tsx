import "./index.scss";
import { useState } from "react";

//components
import AllProducts from "../../components/allProducts";
import LoadingComponent from "../../components/loading";
import ErrorComponent from "../../components/error";
import Popup from "../../components/popup";
import Parceiros from "../../components/parceiros";

//interface do produto
import type { Product } from "../../interfaces/Product";

//hook do produto
import useProducts from "../../hooks/useProduct";

//imagens
import imgTecnologia from "../../assets/img/home/tecnologia.png";
import imgMercado from "../../assets/img/home/mercado.png";
import imgBebidas from "../../assets/img/home/bebidas.png";
import imgFerramentas from "../../assets/img/home/ferramentas.png";
import imgSaude from "../../assets/img/home/cuidado.png";
import imgEsportes from "../../assets/img/home/caminhada.png";
import imgModa from "../../assets/img/home/moda.png";
import imgLogo from "../../assets/img/Logo.png";

import imgGroupLeft from "../../assets/img/carousel/Group 2411.png";
import imgGroupRight from "../../assets/img/carousel/Group 2412.png";

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const moveSlide = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) {
      setCurrentIndex(products.length - 1); 
    } else if (newIndex >= products.length) {
      setCurrentIndex(0); 
    } else {
      setCurrentIndex(newIndex);
    }
  };

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error} />;

  // Calcular os produtos a serem exibidos
  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <section className="container-home">
      <article className="container-promocao">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>
          <span>50% Off</span> nos produtos
        </h2>
        <button>Ver Produto</button>
      </article>

      <article className="container-categorias">
        <ul>
          <li key="tecnologia" className="active-categoria">
            <div className="item-categoria">
              <img src={imgTecnologia} alt="imagem da categoria" />
            </div>
            <p>Tecnologia</p>
          </li>
          <li key="supermercado">
            <div className="item-categoria">
              <img src={imgMercado} alt="imagem da categoria" />
            </div>
            <p>Supermercado</p>
          </li>
          <li key="bebidas">
            <div className="item-categoria">
              <img src={imgBebidas} alt="imagem da categoria" />
            </div>
            <p>Bebidas</p>
          </li>
          <li key="ferramentas">
            <div className="item-categoria">
              <img src={imgFerramentas} alt="imagem da categoria" />
            </div>
            <p>Ferramentas</p>
          </li>
          <li key="saude">
            <div className="item-categoria">
              <img src={imgSaude} alt="imagem da categoria" />
            </div>
            <p>Saúde</p>
          </li>
          <li key="esportes">
            <div className="item-categoria">
              <img src={imgEsportes} alt="imagem da categoria" />
            </div>
            <p>Esportes e Fitness</p>
          </li>
          <li key="moda">
            <div className="item-categoria">
              <img src={imgModa} alt="imagem da categoria" />
            </div>
            <p>Moda</p>
          </li>
        </ul>
      </article>

      <article className="container-produtos">
        <div className="layout-products">
          <span></span>
          <h1>Produtos relacionados</h1>
          <span></span>
        </div>
        <ul>
          <li className="products-active">CELULAR</li>
          <li key="acessórios">ACESSÓRIOS</li>
          <li key="tablets">TABLETS</li>
          <li key="notebooks">NOTEBOOKS</li>
          <li key="tvs">TVS</li>
          <li key="all">VER TODOS</li>
        </ul>

        <div className="container-carousel">
          <div className="produtos-main">
            <button className="pass-left" onClick={() => moveSlide(-1)}>
              <img src={imgGroupLeft} alt="imagem group left" />
            </button>
            <div className="product-list">
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-item"
                  onClick={() => openPopup(product)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === "Enter" && openPopup(product)}
                >
                  <img src={product.photo} alt={product.productName} />
                  <h2>{product.productName}</h2>
                  <h3>R${product.price}</h3>
                  <p>frete gratis</p>
                  <button>COMPRAR</button>
                </div>
              ))}
            </div>
            <button className="pass-right" onClick={() => moveSlide(1)}>
              <img src={imgGroupRight} alt="imagem group right" />
            </button>
          </div>

          {isOpen && selectedProduct && (
            <div className="layout-popup">
              <Popup product={selectedProduct} onClose={closePopup} />
            </div>
          )}
        </div>
      </article>

      <Parceiros />

      <AllProducts />

      <Parceiros />

      <article className="container-marcas">
        <h1>Navegue por marcas</h1>

        <div className="marcas-main">
          <ul>
            <li>
              <img src={imgLogo} alt="imagem da marca" />
            </li>
            <li>
              <img src={imgLogo} alt="imagem da marca" />
            </li>
            <li>
              <img src={imgLogo} alt="imagem da marca" />
            </li>
            <li>
              <img src={imgLogo} alt="imagem da marca" />
            </li>
            <li>
              <img src={imgLogo} alt="imagem da marca" />
            </li>
          </ul>
        </div>
      </article>

      <AllProducts />
    </section>
  );
};

export default Home;
