import Search from "./Search";
import Brand from "./Brand";
import MainContex from "./MainContext";
import { useContext } from "react";


export default function Content () {
    
    const {brands} = useContext(MainContex)

    return(
        <main className="content">
            <header className="header">
                <Search/>
            </header>
            <section className="brands">
                {
                    brands.map((brand,index) => (
                        
                            <Brand key={index} brand={brand}/>
                        
                    ))
                }
            </section>
        </main>
    )
}