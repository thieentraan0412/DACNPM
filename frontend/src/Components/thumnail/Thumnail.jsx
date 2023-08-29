import "./thumnail.css"
import { BsStar } from "react-icons/bs";
const Products = ({img,namebook,price,discount}) => {
    return(
       <div className="product_container">
            <div className="product_img">
                <img className="product_img_img" src={img} alt="" />
            </div>
            <div className="product_contents">
                <div className="product_contents_name">
                    {namebook}
                </div>
                <div className="product_contents_rate">
                    <BsStar/>
                    <BsStar/>
                    <BsStar/>
                    <BsStar/>
                    <BsStar/>
                </div>
                <div className="product_contents_price">
                        {Math.round(price* ( 1 - discount/100))}đ
                </div>
                <div className="product_contents_buttion">
                    <button className="product_contents_buttiona" type="button">Xem hàng</button>
                </div>
            </div>
       </div>
    )
}
 
export default Products;
