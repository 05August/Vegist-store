import { Rate } from "antd";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/Constants";
import { convertPriceToVnd } from "../../until/convertPrice";
import "./ProductItem.scss";

const discount = (newPrice, oldPrice) => {
  return 100 - Math.round((parseInt(newPrice) / parseInt(oldPrice)) * 100);
};

const ProductItem = ({ data }) => {
  return data ? (
    <>
      <div className="product--item__img">
        <Link className="product--img" to={`${ROUTE.PRODUCT}/${data.productId}`}>
          <img className="img--fruit img--before" src={data.img[0]} alt="Ảnh trái cây" />
          <img className="img--fruit img--after" src={data.img[1]} alt="Ảnh trái cây" />
        </Link>
        {data.oldPrice ? (
          <div className="product--discount">
            -{discount(data.newPrice, data.oldPrice)}%
          </div>
        ) : (
          <></>
        )}
        <div className="product--action"></div>
      </div>
      <div className="product--item__content">
        <Link to={`${ROUTE.PRODUCT}/${data.productId}`} className="product-title">
          {data.name}
        </Link>
        <div className="product-rating">
          <Rate allowHalf disabled defaultValue={data.rate} />
        </div>
        <div className="product-price">
          <span className="new-price">{convertPriceToVnd(data.newPrice)}</span>
          {data.oldPrice ? (
            <span className="old-price">{convertPriceToVnd(data.oldPrice)}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ProductItem;
