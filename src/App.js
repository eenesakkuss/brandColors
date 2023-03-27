import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import MainContex from './Components/MainContext';
import BrandsData from './brands.json'
import { useEffect, useState } from 'react';
import Copied from './Components/Copied';
function App() {

  const brandsArray = []

    Object.keys(BrandsData).map(key =>{
        brandsArray.push(BrandsData[key])
        return brandsArray
    })

    const [brands , setBrands] = useState(brandsArray)
    const [selectedBrands,setSelectedBrands] = useState([])
    const [copied, setCopied] = useState(false)
    const [search,setSearch] = useState('')

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
        setCopied(false);
    },500)
    return () => {
      clearTimeout(timeOut)
    }
  },[copied])

  useEffect(()=>{
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  },[search])

  return (
    
     <>
     <MainContex.Provider value={data}>
      <Sidebar/>
     <Content/>
     {copied && <Copied color={copied}/> }
     </MainContex.Provider>
     </>
    
  );
}

export default App;
