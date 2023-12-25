import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const ProductDetails = () => {
    const [product, setProducts]=useState({})
    const params= useParams()

    useEffect(()=>{

        const id=params.product_id
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    },[params.product_id])

    // handling addToCard
    const addToCart=()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const productItems={
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            rating: product.rating,
            image: product.image,
            quantity: 1

        }
        // items is exist or not
        const existingItems = cartItems.find((item)=>item.id===product.id)

        if(existingItems){
            toast.error('Product is already in cart')

        }
        else{
            cartItems.push(productItems)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            toast.success(`${productItems.title} is succesfully added to cart`)
        }
    }
  return (
     <>
     <ToastContainer position='top-right' them='colored'/>
        <div className="container my-5">
            <div className="row d-flex justify-content-evenly shadow">
            <div className="col-md-5">
                <img src={product.image} alt={product.image} width={'450'} />
            </div>
            <div className="col-md-6">
                <h1>{product.title}</h1>
                <h2 className='text-secondary'>${product.price}</h2>
                <p>Description: {product.description}</p>
                <h3>{product.rating && product.rating.rate}</h3>
                {/* <p1>Catgeories: {product.category}</p1> */}

                <div className="btn btn-warning" onClick={addToCart}>Add to Cart</div>

            

                

                
               

            </div>
            

            </div>
        </div>

     </>
  )
}

export default ProductDetails