import React from 'react'
import  {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { RotatingLines } from 'react-loader-spinner'


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(8)

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
                        // change fixes values to limit value
                        products.slice(0,limit).map((product,i)=>{
                            return <Card key={i} item={product}/>
                        })
                        
                    )
                }

                <div className='d-flex justify-content-center align-items-center w-100'>
                    {
                        limit<products.length &&
                        <button className='btn btn-warning' onClick={()=>setLimit(limit+4)}>Load More</button>
                    }

                </div>


            </div>
        </div>
    </>
  )
}

export default Products