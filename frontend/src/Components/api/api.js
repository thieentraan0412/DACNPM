import axios from "axios";


export const apigetbook = () =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/v1/user/getbook",
      method: "get",
    });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});

export const addbook = (id , idbook ) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/v1/user/addorder",
      method: "post",
      params: { id: id , id_book: idbook  },
    });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});

export const deletebook = (id , idbook ) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/v1/user/deleteorder",
      method: "post",
      params: { id: id , id_book: idbook  },
    });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});


export const getuserall = () =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/v1/admin/getuser",
      method: "post",
    });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});


export const deleteuser = (sid) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/v1/admin/deleteuser",
      method: "delete",
      params: { id: sid },
    });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});
export const deletebookadmin = (sid) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/v1/admin/deletebook",
      method: "delete",
      params: { id: sid },
    });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});


export const changprice = (term) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/v1/admin/changeprice",
      method: "post",
      term,
    });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});
