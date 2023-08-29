import { useEffect, useState } from "react";
import "./home.css";
import Slider from "./silder/silder";
import { apigetbook } from "./api/api";
import Products from "./thumnail/Thumnail";
import Allthumnail from "./thumnail/Allthumnail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInfoSuccess } from "../redux/MusicInfoSlice";
const Home = () => {
  const [book, setbook] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info = useSelector((state) => state.Info.Info?.data);
const detailbook = (data) =>
{
  dispatch(getInfoSuccess(data));
  navigate('/home1')
} 
  useEffect(() => {
    const fecthaa = async () => {
      const res = await apigetbook();
      setbook(res);
    };
    fecthaa();
  }, []);
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var inital = getRandomInt(1, 10);
  return (
    <div className="container_home">
      <div className="header_home">
        <div className="list_home">
          <div className="list_home_title">Thể loại sách: </div>
          <div className="list_home_items">Khoa học</div>
          <div className="list_home_items">viễn tưởng</div>
          <div className="list_home_items">nhân tạo</div>
          <div className="list_home_items">lãng mạng</div>
          <div className="list_home_items">nhân tạo</div>
        </div>
        <div className="slider_home">
          <Slider />
        </div>
      </div>
      <div className="role">
        <p> Bán chạy nhất tuần</p>
      </div>

      <div className="item_display_home">
        {book?.slice(inital, inital + 6)?.map((data, index) => (
          <div className="product_home" onClick={() => detailbook(data)}>
            <Products
              img={data.img}
              namebook={data.namebook}
              price={data.price}
              discount={data.discount}
            />
          </div>
        ))}
      </div>

      <div className="home_title">
        <div className="home_title1">
          <img
            className="home_title1_img"
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2023/392x156-423_FAHASAzalo.jpg"
            alt=""
          />
        </div>
        <div className="home_title1">
          <img
            className="home_title1_img"
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2023/poticoAHASA392x156.png"
            alt=""
          />
        </div>
      </div>
      <div className="home_all">
        {book?.map((data, index) => (
          <div className="product_home" onClick={() => detailbook(data)}>
            <Allthumnail
              img={data.img}
              namebook={data.namebook}
              price={data.price}
              discount={data.discount}
            />
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
