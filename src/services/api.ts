import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     const message = error.response?.data?.message || error.message;
//     useNotificationStore.getState().addNotification({
//       type: "error",
//       title: "Error",
//       message
//     });

//     return Promise.reject(error);
//   }
// );
