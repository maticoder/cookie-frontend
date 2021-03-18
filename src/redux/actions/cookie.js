import axios from "axios";

export const getCookie = () => async (dispatch) => {
  const result = await axios.get("/api/cookie/hello");
  console.log(result);
};
