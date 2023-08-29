import { useSelector } from "react-redux";
import "./home1.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { addbook, apigetbook } from "./api/api";
import { useEffect, useState } from "react";
import Allthumnail from "./thumnail/Allthumnail";
import { getInfoSuccess } from "../redux/MusicInfoSlice";
import { refreshuser } from "../redux/apiRequest";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.login?.currentUser);
  const info = useSelector((state) => state.Info.Info?.data);
  const [book, setbook] = useState(null);
  const detailbook = (data) => {
    dispatch(getInfoSuccess(data));
    navigate("/home1");
  };
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

  const handleadd = (idbook) => {
    if (!user) {
      alert("ban chua dang nhap");
      navigate("/home1");
    } else {
      const fecthaa = async () => {
        const res = await addbook(user?._id, idbook);
        console.log(res)
        refreshuser(user, dispatch, navigate)
      };
      fecthaa();
    }
  };
  return (
    <div className="container_home1">
      <div className="home1_main">
        <div className="main_img">
          <img className="main_img_img" src={info.img} alt="" />
        </div>
        <div className="main_info">
          <div classs="main_info_head">
            <p className="main_info_head"> Thông tin sản phẩm: </p>
          </div>
          <div classs="main_info_name">
            <p className="main_info_name">{info.namebook}</p>
          </div>
          <div className="main_info_rate">
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
          <div classs="main_info_price">
            <p className="main_info_price">{info.price} vnđ</p>
          </div>
          <div className="main_descripts">
            <p className="main_descripts">
              Hai tác giả Hoàng Anh Đức và Tô Thụy Diễm Quyên muốn đưa ra cách
              tiếp cận nhẹ nhàng và trực quan cho cả các giáo viên lẫn học sinh
              đối với Học tập qua dự án; sử dụng các dự án để làm những ví dụ đa
              dạng, đa chiều và gắn liền với thực tế nhất, qua đó giúp người đọc
              tự xây dựng nên kho tàng kiến thức và kỹ năng của chính bản thân
              mình.
            </p>
          </div>
          <div classs="main_info_add">
            <button
              className="main_info_adddetail"
              onClick={() => handleadd(info._id)}
            >
              {" "}
              Thêm vào giỏ hàng{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="info_description">
        <p className="info_description_header">Sơ lược về sách</p>
        <div className="info_description_detail">
          <p className="info_description_detail">
            Trong gần một thế kỷ qua , nhiều nhà giáo dục đã tiến hành nghiên
            cứu và ghi nhận về những lợi ích của việc học tập qua trải nghiệm,
            thực hành, và lấy người học làm trung tâm. Nhà bác học Albert
            Einstein đã từng nói: “Ví dụ không phải là một cách khác để dạy học;
            ví dụ là cách duy nhất để dạy học”. Hầu như giáo viên nào cũng hiểu
            về sự hấp dẫn của việc học tập gắn liền với thực tế so với lớp học
            thuần lý thuyết. Hai tác giả Hoàng Anh Đức và Tô Thụy Diễm Quyên
            muốn đưa ra cách tiếp cận nhẹ nhàng và trực quan cho cả các giáo
            viên lẫn học sinh đối với Học tập qua dự án; sử dụng các dự án để
            làm những ví dụ đa dạng, đa chiều và gắn liền với thực tế nhất, qua
            đó giúp người đọc tự xây dựng nên kho tàng kiến thức và kỹ năng của
            chính bản thân mình. Học tập qua dự án (PBL) là một mô hình tổ chức
            lớp học nhằm làm năng động hoá lớp học truyền thống vốn lấy bài học
            làm trung tâm và giáo viên là trọng tâm. Học tập qua dự án hướng tới
            mục tiêu lâu dài, lấy người học làm trung tâm, liên nội dung và tích
            hợp các vấn đề thực hành thực tế. Bằng việc giáo viên lùi lại, đảm
            nhận vai trò dẫn dắt và trao quyền cho học sinh làm chủ quá trình
            học tập, học sinh hình thành tinh thần trách nhiệm đối với việc học,
            từ đó tạo dựng môi trường học tập chủ động hơn Sách gồm 4 phần
            chính: Phần I: Giới thiệu về học tập qua dự án Phần này gồm 3
            chương, giới thiệu tổng quan về học tập qua dự án, 6 tính chất học
            tập của dự án học tập, và 8 bước triển khai học tập qua dự án trong
            trường phổ thông Phần II: Triển khai dự án Phần này gồm 8 chương
            giúp giáo viên và học sinh biết cách đặt dự án vào một không gian
            phù hợp, biết cách triển khai dự án từ một không gian có sẵn. Phần
            III: Giới thiệu về học tập qua dự án Phần này cung cấp kiến thức cơ
            bản về các biện pháp khác nhau để đánh giá Dự án học tập, cũng như
            các cấp độ khác nhau để đánh giá các hoạt động học tập. Phần IV: Phụ
            lục Phần này mở rộng một số vấn đề như: Tư duy STEM trong học tập
            qua dự án, các vấn đề thường gặp và gợi ý hướng xử lí…. Cuốn sách
            tích hợp với các mã QR code để giáo viên, học sinh có thể xem minh
            hoạ các dự án đã được thực hiện và đạt giải ở các cuộc thi Giáo viên
            sáng tạo. Trân trọng giới thiệu cùng bạn đọc.
          </p>
        </div>
      </div>
      <div className="product_same_main">
        <h1 className="product_same">CÁC SẢN PHẨM TƯƠNG TỰ</h1>
      </div>
      <div className="main_productaaaa">
        {book?.slice(inital, inital + 5).map((data, index) => (
          <div className="main_product1aaaa" onClick={() => detailbook(data)}>
            <Allthumnail
              img={data.img}
              namebook={data.namebook}
              price={data.price}
              discount={data.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
