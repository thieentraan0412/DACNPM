import "./thumnail.css";
import { BsStar } from "react-icons/bs";
const Allthumnail = ({ img, namebook, price, discount }) => {
  return (
    <div className="allthumnail_container">
      <div className="allthumnail_img">
        <img className="allthumnail_img_img" src={img} alt="" />
      </div>
      <div className="allthumnail_content">
            <div className="allthumnail_content_namebook">
                {namebook}
            </div>
            <div className="allthumnail_content_price">
                <div className="price_new">{Math.round(price* ( 1 - discount/100))}đ</div>
                <div className="allthumnail_content_price_discount" > -{discount}%</div>
            </div>
            <div className="allthumnail_content_priceown">
                <span className="price_own">{price}</span>đ
            </div>
            <div className="allthumnail_content_rate">
                     <BsStar/>
                    <BsStar/>
                    <BsStar/>
                    <BsStar/>
                    <BsStar/>
                    <span>({Math.ceil(Math.random() * (100 - 1)) + 1})</span>
            </div>
      </div>
    </div>
  );
};

export default Allthumnail;
