import { useContext } from 'react'
import {getContrastYIQ} from '../helpers'
import MainContex from './MainContext'
import ClipboardButton from 'react-clipboard.js'

export default function Brand ({brand}) {

    const {selectedBrands,setSelectedBrands,setCopied} = useContext(MainContex)

    const toggleSelected = () =>{
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        }else{
            setSelectedBrands([...selectedBrands,brand.slug])
        }
    }

    const setColor =(color)=>{
        setCopied(color)
    }

    return ( 
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}> 
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {
                    brand.colors.map((color,index) =>(
                        <ClipboardButton component="span" onSuccess={()=>setColor(color)} data-clipboard-text={color} style={{"--bgColor": `#${color}`, "--textColor" : `${getContrastYIQ(color)}`}} key={index}>
                            {color}
                        </ClipboardButton>
                       
                    ))
                }
            </div>
        </div>
    )
}