import { useState} from "react";
import useFetch from "./useFetch";

const useAjax = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const { request } = useFetch();

  return { data, loading, error, setData, setLoading,request ,setError};
};
export default useAjax;
