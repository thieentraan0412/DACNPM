import { useEffect, useState } from "react";
import "./admin.css";
import { apigetbook } from "../api/api";
import { Link } from "react-router-dom";

const AdminPage1 = () => {
  const [book, setbook] = useState(null);
  useEffect(() => {
    const fecthaa = async () => {
      const res = await apigetbook();
      setbook(res);
    };
    fecthaa();
  }, []);
  return (
    <div className="page1_container">
      <div className="order_list">
        <div className="admin_name">
          <p>Sản phẩm</p>
        </div>
        <div className="admin_quantity a">
          <p> Giá tiền </p>
        </div>
        <div className="admin_price">
          <p>Edit</p>
        </div>
      </div>
      {book?.map((data, index) => (
        <div className="detail_order">
          <div className="detail_name">
            <img className="detail_name_img" src={data.img} alt="" />
            <p>
              {data.namebook} <p className="aaa">-{data.discount}% </p>
            </p>
          </div>
          <div className="admin_quantity">
            <div className="middle">{Math.ceil(data.price)}</div>
          </div>
          <div className="admin_price">
            <Link to={`/admin/productadmin/${data._id}/${data.namebook}`} className="underscore">
              <button className="admin_edit"> Edit </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPage1;
