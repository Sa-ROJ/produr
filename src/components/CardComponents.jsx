import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import { RotatingLines } from 'react-loader-spinner'


const CardComponents = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])
    useEffect(()=>{
        const fetchProduct = async()=>{
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                // console.log(response.data)
                setProducts(response.data)
                setLoading(false)
            } 
            catch (err) {
                console.log(err)
            }
        }
        setTimeout(()=>{
            fetchProduct()
        },2000)
    },[])
  return (
    <>
        <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {/* {apply effect} */}
                {
                    loading ?
                    (
                        <div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center w-100'>
                           <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                                />

                        </div>
                    )
                    :
                    (
                        products.slice(0,8).map((product,i)=>{
                            return <Card key={i} item={product}/>
                        })
                        
                    )
                }



                
            </div>
        </div>
    </>
  )
}

export default CardComponents