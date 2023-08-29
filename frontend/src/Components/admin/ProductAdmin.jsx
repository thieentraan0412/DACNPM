// import "./admin.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apigetbook, changprice, deletebookadmin } from "../api/api";
import TextInput from "./TextIput";
import { changediscount, changepriceaa } from "../../redux/apiRequest";

const ProductAdmin = () => {
  const { id , name } = useParams();
  const [book, setbook] = useState(null);
  const [price, setprice] = useState(null);
  const [discount, setdiscount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fecthaa = async () => {
      const res = await apigetbook();
      const filteredObjects = res.filter((obj) => obj._id == id);
      setbook(filteredObjects);
    };
    fecthaa();
  }, []);

  const handleNameChange = (event) => {
    setprice(event.target.value);
  };
  const handledisocunt = (event) => {
    setdiscount(event.target.value);
  };
  const handesubmitprice = () => {
    var body = {
      "_id": id,
      "newprice": price,
    };
    changepriceaa(body)
    navigate("/admin")
  };
  const handesubmitdisocunt = () => {
    var body = {
      "_id": id,
      "newdiscount": discount,
    };
    changediscount(body)    
    navigate("/admin")

  };
  const handledelete = async () =>
  {
    await deletebookadmin(id)
    navigate("/admin")
  }
  return (
    <div className="edit_container">
      <h2 className="editheader"> Tên sản phẩm: {name}</h2>
      <div className="editprice">
        <TextInput
          label="edit Price"
          value={price}
          onChange={handleNameChange}
        />
          <button onClick={() => handesubmitprice()} className="admin_edit"> Edit </button>
      </div>
      <div className="editdiscount">
        <TextInput
          label="edit Discount"
          value={discount}
          onChange={handledisocunt}
        />
          <button onClick={() => handesubmitdisocunt()} className="admin_edit"> Edit </button>
      </div>
      <div className="editdelete">
          <button onClick={() => handledelete()} className="admin_edit"> xóa sản phẩm </button>
      </div>
    </div>
  );
};

export default ProductAdmin;
