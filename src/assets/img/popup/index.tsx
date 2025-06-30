import React from "react";
import type { Product } from "../../../interfaces/Product";
import "./index.scss";

import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

//imagens
import imgMais from "../../assets/img/popup/Vector.png";
import imgMenos from "../../assets/img/popup/plus.png";

interface PopupProps {
  product: Product;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ product, onClose }) => {
  return (
    <section className="container-popup">
      <article className="popup">
        <div className="popup-head">
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className="popup-main">
          <h1>{product.productName}</h1>
          <h2>R${product.price}</h2>
          <h3>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </h3>
          <h4>
            Veja mais detalhes do produto
            <IoIosArrowForward />
          </h4>
          <div className="container-quantidade">
            <div className="quantidade-left">
              <article>
                <button className="btn-mais">
                  <img src={imgMais} alt="icon mais" />
                </button>
                01
                <button className="btn-menos">
                  <img src={imgMenos} alt="icon menos" />
                </button>
              </article>
            </div>
            <button className="btn-buy">COMPRAR</button>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar popup"
            className="container-close"
          >
            <IoCloseOutline className="icon-close" />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Popup;
