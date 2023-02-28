import React, { useEffect, useState } from 'react'
import useAjax from './useAjax';


;
const baseUrl = "https://api.unsplash.com/";

const useFetchGallery = () => {

const [search,setSearch]=useState<any>();
const [page, setPage] = useState<number>(1);
const [totalPages,setTotalPages] = useState(0);
const [tags,setTags] = useState<string[]>([]);
const { data, loading, error, setData, setLoading,request,setError } = useAjax();
 useEffect(() => {
     if (search !==undefined){
      setLoading(true);
      request(
        `${baseUrl}search/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}&query=${search}`
      )
        .then((res) => {
          const newData: any[] = res.results;
          setData([...data, ...newData]);
          setTotalPages(res?.total_pages);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
     } else if (search===undefined || search=== ''){
      setLoading(true);
      request(`${baseUrl}photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=4`)
        .then((res) => {
          setData(res);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
     }
   
 }, [page,search]);

 useEffect(()=>{
  const tagsConcatenated =data?.map((items)=>{
    let result;
   if (items.tags !==undefined){
    result= items?.tags?.map((tag:any)=>{
      return tag.title;
    });
    return result;
   }

  })

  const output = tagsConcatenated
    .filter((item) => {
      return item !== undefined;
    })
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)
    
  setTags(output);
 },[data])



  return {data, loading, error, setData, setLoading, page, setPage,search,setSearch,hasMore:totalPages>page,tags}
}

export default useFetchGallery;
