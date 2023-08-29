import { useDispatch, useSelector } from "react-redux";
import "./order.css";
import { addbook, apigetbook, deletebook } from "./api/api";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { refreshuser } from "../redux/apiRequest";

const Order = () => {
  const user = useSelector((state) => state.auth?.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setbook] = useState(null);

  useEffect(() => {
    const fecthaa = async () => {
      const res = await apigetbook();
      setbook(res);
    };
    fecthaa();
  }, []);
  const handeadd = async (id) => {
    const fecthaa = async () => {
      const res = await addbook(user?._id, id);
      await refreshuser(res, dispatch, navigate);
    };
    fecthaa();
  };
  const handesub = async (id) => {
    const fecthaa = async () => {
      const res = await deletebook(user?._id, id);
      await refreshuser(res, dispatch, navigate);
    };
    fecthaa();
  };

  function findObjectByKey(obj, value) {
    console.log(value);

    for (var key in obj) {
      if (obj[key]._id == value) return obj[key].img;
    }
    return "https://th.bing.com/th/id/OIP.NZvg4XYMMIvkhOyMyGjz9gHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"; // Trả về null nếu không tìm thấy
  }
  return (
    <div className="order_container">
      <div className="order_list">
        <div className="order_name">
          <p>Sản phẩm</p>
        </div>
        <div className="order_quantity">
          <p> Số Lượng </p>
        </div>
        <div className="order_price">
          <p>Giá tiền ( vnđ)</p>
        </div>
      </div>
      {user.orders?.map((data, index) => (
        <div className="detail_order">
          <div className="detail_name">
            <img
              className="detail_name_img"
              src={findObjectByKey(book, data.id_book)}
              alt=""
            />
            <p>
              {" "}
              {data.namebook} <p className="aaa">-{data.discount}% </p>
            </p>
          </div>
          <div className="detail_quantity">
            <div className="icon_order1" onClick={() => handesub(data.id_book)}>
              {" "}
              <GrFormSubtract />{" "}
            </div>
            <div className="middle">{data.quantity}</div>
            <div className="icon_order2" onClick={() => handeadd(data.id_book)}>
              {" "}
              <IoIosAdd />{" "}
            </div>
          </div>
          <div className="detail_price">
            <p>{Math.ceil(data.total)}</p>
          </div>
        </div>
      ))}

      <div className="order_total">
        <div className="order_bill">
          <p>Tổng cộng: </p>
          <p>{Math.ceil(user?.totalprice)} vnđ</p>
        </div>
        <div className="order_pay">
          <button className="order_pay_detail"> Thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
