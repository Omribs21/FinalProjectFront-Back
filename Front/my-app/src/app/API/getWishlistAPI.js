import axios from "axios";

const URL = "https://finalbackendrender.onrender.com/GetWishlist/";

export function GetWishlist(data) {
  return new Promise((resolve) =>
    axios.get(URL, {
        headers: {
            'Authorization': `Bearer ${data.Token}`
        }}).then((res) => resolve({ data: res.data }))
    );
}