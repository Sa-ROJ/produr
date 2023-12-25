import React,{useState,useEffect} from 'react'

import { Fragment } from 'react'
import { FaTrash } from "react-icons/fa"
import { toast,ToastContainer } from 'react-toastify'


const Cart = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const cartData = JSON.parse(localStorage.getItem('cartItems'))||[]
        setProducts(cartData)
    },[])
    const updateQuantity=(index, action)=>{
        const updatedProduct = [...products]
        if(action === 'increase'){
            updatedProduct[index].quantity++
            setProducts(updatedProduct)
        }
        else if (action === 'decrease' && updatedProduct[index].quantity > 1){
            updatedProduct[index].quantity--
            setProducts(updatedProduct)
        }
        localStorage.setItem('cartItems',JSON.stringify(updatedProduct))

    }
    const deleteItem = (index,name) => {
        const confirm=window.confirm('Are you sure to delete the item from your cart?')
        if(confirm){
            const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        localStorage.setItem('cartItems',JSON.stringify(updatedProducts))
            toast.success(`${name} is removed from the cart`)
        }
        
        
  };
  return (
    <>
    <ToastContainer/> 
    <div className="container">
        <div className="row d-flex justify-content-evenly my-4">
            {
                products.length === 0
                ?
                (
                    <h2 className="my-5 danger text-center">Your Cart is empty</h2>

                )
                :
                (
                  <> 
                   <h2 className="text-center">Your Cart Items</h2>
                   <div className="col-md-8 shadow">
                    {
                        products.map((item,i)=>(
                            <Fragment key={i} >
                                <hr />
                                <div className="row d-flex-align-items-center">
                                <div className="col-2"><img src={item.image} alt={item.title} width={`100`}/></div>
                                <div className="col-3">{item.title}</div>
                                <div className="col-3 text-warning">${item.price}</div>
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                                        <i class="fa-solid fa-plus mx-3" onClick={()=>{updateQuantity(i,'increase')}}></i>
                                                        <p className="border border-dark p-1 m-0">{item.quantity}</p>
                                                        <i class="fa-solid fa-minus mx-3 " onClick={()=>{updateQuantity(i,'decrease')}}></i>
                                                    
                                                </div>
                                                <div className="col-2">
                                                    <button className="btn btn-danger" onClick={()=>deleteItem(i,item.title)}><FaTrash/></button>
                                    </div>
                                </div>

                            </Fragment>
                        ))
                    }
                                        
                   </div>
                   {/* Cart summary */}
                   <div className="col-md-3 shadow">
                        <h5>Cart Summary</h5> 
                        <hr />
                        <span><strong>Units:
                            </strong> {
                                products.reduce((total,item)=> total+Number(item.quantity),0)
                            } Units</span>
                            <br />
                            <span><strong>Price: </strong>${products.reduce((total,item)=> total+Number(item.quantity*item.price),0)}</span>
                            <hr />
                           <div className="btn btn-warning">Check Out</div>
                            </div>
                   </>
                    

                )
  
            }
        </div>
    </div>




    
    </>    
  )
}

export default Cart