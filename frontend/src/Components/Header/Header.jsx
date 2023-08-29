import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";


const Header = () => {
  const user = useSelector((state) => state.auth?.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () =>
  {
    dispatch(loginSuccess(null))
  }
  return (
    <header id="header">
      <div class="header__top">
        <div class="header__top_container">
          <div class="header__top-left">
            <span>EduBook - Cội nguồn của tri thức</span>
          </div>

          <nav class="header__top-right">
            <div class="header__top-item">
              <Link to="/hoi-dap" className="header__top-link">
                Hỏi đáp
              </Link>
            </div>
            <div class="header__top-item">
              <Link to="/hoi-dap" className="header__top-link">
                Hướng dẫn
              </Link>
            </div>
            <div class="header__top-item">
              <Link to="/register" className="header__top-link">
              { user ? `${user.username}` : "Đăng kí"}
              </Link>
            </div>
            <div class="header__top-item">
              <Link to="/login" className="header__top-link" onClick={logout}>
               { user ? "Đăng xuất" : "Đăng nhập"}
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div class="header__bottom">
        <div class="header__logo">
        <Link to="/" className="underscore">
        <h1 class="header__heading">EBOOK-STORE</h1>
              </Link>
        </div>

        <div class="header__search">
          <input
            type="text"
            class="header__search-input"
            placeholder="Tìm kiếm tại đây..."
          />
        </div>

        <div class="header__call">
          <div class="header__call-icon-wrap">
            <i class="fas fa-phone-alt header__call-icon"></i>
          </div>
          <div class="header__call-info">
            <div class="header__call-text">Gọi điện tư vấn</div>
            <div class="header__call-number">0123456789</div>
          </div>
        </div>

        { user ? <Link to="/order" class="header__cart">
          <div class="header__cart-icon-wrap">
            <span class="header__notice">{ user ? `${user.orders.length}` : 0}</span>
            <i class="header__nav-cart-icon">
              <FiShoppingCart size={30} />
            </i>
          </div>
        </Link>:<Link to="/login" class="header__cart">
          <div class="header__cart-icon-wrap">
            <span class="header__notice">{ user ? `${user.orders.length}` : 0}</span>
            <i class="header__nav-cart-icon">
              <FiShoppingCart size={30} />
            </i>
          </div>
        </Link>

        }
      </div>

      <div class="header__nav">
        <div class="header__nav-menu">
          <i class="header__nav-menu-icon"></i>
          <div class="header__nav-menu-title">Danh mục sản phẩm</div>
        </div>

        <div class="header__nav-list">
          <div class="header__nav-item">
            <Link to="/" class="header__nav-link">
              Trang chủ
            </Link>
          </div>
          <div class="header__nav-item">
            <Link to="/home1" class="header__nav-link">
              Danh mục sản phẩm
            </Link>
          </div>
          <div class="header__nav-item">
            <Link to="/home1" class="header__nav-link">
              Sản phẩm
            </Link>
          </div>
          <div class="header__nav-item">
            <Link to="/" class="header__nav-link">
              Bài viết
            </Link>
          </div>
          <div class="header__nav-item">
            <Link to="/admin" class="header__nav-link">
              Tuyển cộng tác viên
            </Link>
          </div>
          <div class="header__nav-item">
            <Link to="#" class="header__nav-link">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
