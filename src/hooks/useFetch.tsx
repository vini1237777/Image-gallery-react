import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-hot-toast";

const useFetch = () => {
 const request=useCallback(
  
  async (url:string)=>{
  try{
     const response = await axios(url);
     return response.data;
  } catch(err){
    toast.error('Failed to Fetch Data')
    throw err;
  }
 
 },[])

  return { request };
};
export default useFetch;