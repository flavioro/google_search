import Axios from "axios";
import { ITEM_PER_PAGE } from "./../constants";

export const searchBing = async (value, page) => {
  const key = "bba8d59fa5e8464f85ae04bfc31064f5";
  const cid = "2447038c-bd15-43f4-8a24-011c1a26b170";

  const offset = (page - 1) * ITEM_PER_PAGE;
  const bingAPIUrl = `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?customconfig=${cid}&q=${value}&offset=${offset}`;
  const bingAPIParams = { headers: { "Ocp-Apim-Subscription-Key": key } };
  try {
    return await Axios.get(bingAPIUrl, bingAPIParams);
  } catch (error) {
    return "error";
  }
};

export const searchGoogle = async (value, page) => {
  const key = "AIzaSyC7k8WuChqMLePRwRyCyOBJ_w2PPChZ8sM";
  const cid = "63bac932c3385993f";

  const start = (page - 1) * ITEM_PER_PAGE;
  const googleAPIUrl = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cid}&start=${start}&q=${value}`;
  const googleAPIParams = {};
  try {
    return await Axios.get(googleAPIUrl, googleAPIParams);
  } catch (error) {
    return "error";
  }
};
