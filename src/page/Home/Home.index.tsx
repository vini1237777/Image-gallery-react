import React from 'react'
import Loader from '../../component/Loader/Loader';
import { themeEnum } from '../../component/ThemeProvider/ThemeProvider';
import useThemeConsumer from '../../component/ThemeProvider/useThemeConsumer';
import TopBar from '../../component/TopBar/TopBar.index';
import useFetchGallery from '../../hooks/useFetchGallery';
import BannerIndex from './Banner/Banner.index';
import ImageGallery from './ImageGallery/ImageGallery';

const HomeIndex = () => {


  const {theme}=useThemeConsumer();
  const {data, loading, error, setData, setLoading, page, setPage,search,setSearch,hasMore,tags}=useFetchGallery();

  return (
      <div className={theme===themeEnum.light ? themeEnum.light : themeEnum.dark}>
        <TopBar search={search} setSearch={setSearch}/>
        {loading===true && <Loader/>}
        { !search && <BannerIndex />}
       {loading ===false && <ImageGallery
          data={data}
          loading={loading}
          page={page}
          setPage={setPage}
          hasMore={hasMore}
          search={search}
          tags={tags}
        />}
      </div>
  );
}

export default HomeIndex
