import React, { createContext, useState } from 'react'
import Jumbutron from './components/Jumbutron'
import SearchField from './components/SearchField'
import Images from './components/Images'
import useAxios from './hooks/useAxios'
export const ImageContext =createContext();

const App = () => {
  const[searchImage, setSearchImage] = useState('');

  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cars&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  const value={
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  console.log(response)
  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField></SearchField>
      </Jumbutron>
      <Images></Images>
    </ImageContext.Provider>
  )
}

export default App
