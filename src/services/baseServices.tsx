import axios from "axios";
import { DOMAIN, TOKEN } from "../util/config";
export class BaseServices {
  put = (url: string, model: any) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  post = (url: string, model: any) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  get = (url: string) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  delete = (url: string) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
}
