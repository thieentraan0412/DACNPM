import { useState } from "react";
import "./admin.css";
import TextInput from "./TextIput";
import { adminaddbook } from "../../redux/apiRequest";

const Addbook = () => {

  const [name, setname] = useState(null);
  const [author, setauthor] = useState(null);
  const [img, setimg] = useState(null);
  const [description, setdescription] = useState(null);
  const [bookstatus, setbookstatus] = useState(null);
  const [numofpage, setnumofpage] = useState(null);
  const [rating, setrating] = useState(null);
  const [price, setprice] = useState(null);
  const [discount, setdiscount] = useState(null);

  const handleNameChange = (e) => {setname(e.target.value)}
  const handleauthor = (e) => {setauthor(e.target.value)}
  const handleimg = (e) => {setimg(e.target.value)}
  const handledes = (e) => {setdescription(e.target.value)}
  const handlestatus = (e) => {setbookstatus(e.target.value)}
  const handlenum = (e) => {setnumofpage(e.target.value)}
  const handlerating = (e) => {setrating(e.target.value)}
  const handleprice = (e) => {setprice(e.target.value)}
  const handledisocunt = (e) => {setdiscount(e.target.value)}
  const handlesubmit = () => {
        var bien = {
            "namebook": name, 
            "author": author, 
            "img": img, 
            "description": description, 
            "bookstatus": bookstatus, 
            "numofpage":  numofpage, 
            "rating":  rating, 
            "price":  price, 
            "discount":  discount 
           }
    adminaddbook(bien)
}


  return (
    <div className="addbook_container">
      <div className="bbbbbbb">
      <h1> Thêm sách vào cửa hàng</h1>
      <TextInput label="nambook" value={name} onChange={handleNameChange} />
      <TextInput label="author" value={author} onChange={handleauthor} />
      <TextInput label="img" value={img} onChange={handleimg} />
      <TextInput label="description" value={description} onChange={handledes} />
      <TextInput label="bookstatus" value={bookstatus} onChange={handlestatus} />
      <TextInput label="numofpage" value={numofpage} onChange={handlenum} />
      <TextInput label="rating" value={rating} onChange={handlerating} />
      <TextInput label="price" value={price} onChange={handleprice} />
      <TextInput label="discount" value={discount} onChange={handledisocunt} />
      <button onClick={() => handlesubmit()} className="admin_edit"> submit </button>
      </div>
    </div>
  );
};

export default Addbook;
