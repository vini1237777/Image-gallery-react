// @ts-nocheck
import  { useEffect, useRef, useState } from 'react'
import useAjax from './useAjax';

const baseUrl = "https://api.unsplash.com/";
const access_key = "7mvLD8H1fIPsZIXp7ysul1klXEnSCa-Vzs_Fp2gaLWc";
const useFetchGallery = () => {

const [search,setSearch]=useState<any>('');
const [page, setPage] = useState<number>(1);
const [totalPages,setTotalPages] = useState(0);
const [tags,setTags] = useState<string[]>([]);
const { data, loading, error, setData, setLoading,request,setError } = useAjax();

const inputRef=useRef();


 useEffect(() => {
     if (search){
      const timer = setTimeout(() => {
        if (search === inputRef?.current?.value) {
          request(
            `${baseUrl}search/photos?client_id=${access_key}&page=${page}&query=${search}`
          )
            .then((res) => {
              const newData: any[] = res.results;
              if (page>1){
                // setData([...data, ...newData]);
                setData((prev)=>{return [...prev,...newData]});
              } else {
                setData(newData);
              }
              const titles=newData.reduce((acc,item)=>{
                return [...new Set([...acc,...item.tags])]
              },[]).filter((tag)=>{
                return tag.title !== undefined
              }).map((tag)=>{
                return tag.title
              });
              // setTags([...new Set([...tags, ...titles])]);
              setTags((prev)=>{return [...new Set([...prev, ...titles])];});
              
              setTotalPages(res?.total_pages);
            })
            .catch(() => {
              setError(true);
            })
            .finally(() => setLoading(false));
        }
      }, 500);
      return () => {
        clearTimeout(timer);
      };
      
     } else {
      setLoading(true);
      request(`${baseUrl}photos?client_id=${access_key}&page=4`)
        .then((res) => {
          setData(res);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
     }
   
 }, [page,search,setData,setError,setLoading,request]);



  return {data, loading, error, setData, setLoading, page, setPage,search,setSearch,hasMore:totalPages>page,tags,inputRef}
}

export default useFetchGallery;
