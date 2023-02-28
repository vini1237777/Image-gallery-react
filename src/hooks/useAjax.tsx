import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const access_key = "7mvLD8H1fIPsZIXp7ysul1klXEnSCa-Vzs_Fp2gaLWc";
const baseUrl = "https://api.unsplash.com/";

const useAjax = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const { request } = useFetch();

  return { data, loading, error, setData, setLoading,request ,setError};
};
export default useAjax;
