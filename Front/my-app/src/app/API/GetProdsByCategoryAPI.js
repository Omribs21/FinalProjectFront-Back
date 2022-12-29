import axios from "axios";

const URL = "https://finalbackendrender.onrender.com/getprodbycat/";

export function GetAllProdsByCategory(id) {
  return new Promise((resolve) =>
    axios.get(URL+ id +"/").then((res) => resolve({ data : res.data}))
  );
}
