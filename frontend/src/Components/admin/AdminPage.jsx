import "./admin.css";
import { Link, Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="admin_container">
      <div className="admin_header">
        <p className="admin_header_detail">Quản lí của hàng ebook</p>
      </div>
      <div className="admin_container_content">
        <div className="admin_list">
          <div className="admin_list1">
            <p>Danh Mục: </p>
          </div>
          <div className="admin_list2">
            <Link to="/admin" className="underscore">
              <p>Quản lí sản phẩm </p>
            </Link>
          </div>
          <div className="admin_list3">
            <Link to="/admin/adminpage2" className="underscore">
              <p>quản lí đơn hàng </p>
            </Link>
          </div>
          <div className="admin_list4">
            <Link to="/admin/adminpage2" className="underscore">
              <p>quản lí tài khoản </p>
            </Link>
          </div>
          <div className="admin_list5">
            <Link to="/admin/adminpage2" className="underscore">
              <p>Thống kê doanh thu </p>
            </Link>
          </div>
          <div className="admin_list5">
            <Link to="/admin/addbook" className="underscore">
              <p>Thêm sản phẩm </p>
            </Link>
          </div>  
        </div>
        <div className="admin_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
