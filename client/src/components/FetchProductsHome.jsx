import React,{useEffect, useState} from 'react'
import '../css/HomePageProducts.css'

const FetchProductsHome = () => {
const [products ,setProducts]=useState([]);
const [pages ,setPages]=useState(1);
const fetchProducts=async()=>{
    try{
        const res=await fetch("https://dummyjson.com/products?limit=66");
        const data=await res.json();
        console.log(data);

       if(data && data.products){
        setProducts(data.products);
       }
    }
    catch(err){
        console.log(err);
    }
}
useEffect(() => {
    fetchProducts();
}, [])

const selectPageHandler=(selectedPage)=>{
if(selectedPage>=1 && selectedPage<=products.length%10 && selectedPage!==pages){
    setPages(selectedPage);
}
}


  return (
    <>
    <div>
        {
            products.length>0 &&(
                <div className='products'>
                {
                    products.slice(pages*10-10,pages*10).map((prod)=>{
                        //BEM CSS Convention
                        return <span className='products__single' key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title}/>
                            <span>{prod.title}</span>
                        </span>
                    })
                }
            </div>
            )
        }
        {
            products.length>0 &&(<div className='pagination'>
                <span onClick={()=>selectPageHandler(pages-1)}>◀</span>
               {
                [...Array(products.length%10)].map((_,i)=>{
                    return <span key={i} className={pages===i+1?"pagination__active":""} onClick={()=>selectPageHandler(i+1)}>{i+1}</span>
                })
               } 
                <span onClick={()=>selectPageHandler(pages+1)}>▶</span>

            </div>)
        }

    </div>
    </>
  )
}

export default FetchProductsHome