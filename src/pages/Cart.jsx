import React, { useEffect, useReducer, useState } from 'react'

const products = [
    { id: 1, name: 'Laptop', price: 999.99, image: '/api/placeholder/200/150' },
    { id: 2, name: 'Smartphone', price: 699.99, image: '/api/placeholder/200/150' },
    { id: 3, name: 'Headphones', price: 149.99, image: '/api/placeholder/200/150' },
    { id: 4, name: 'Tablet', price: 349.99, image: '/api/placeholder/200/150' }
  ];



  const cartReducer = (state,action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const existingItem = state.find(item => item.id === action.payload.id)

            if(existingItem){
                return state.map(item => 
                    item.id === action.payload.id ? { ...item,quantity:item.quantity + action.payload.quantity } : item
                )
            } else {
                return [...state, {...action.payload}]
            }


            case 'REMOVE_ITEM' : 
            return state.filter(item => item.id !== action.payload);

            case 'UPDATE_QUANTITY':
                return state.map(item => item.id === action.payload.id ? {...item,quantity: action.payload.quantity} : item) ;

            case 'CLEAR_CART':
                return [];

            default:
                return state;


    }
  }

const Cart = () => {
    const [cart,dispatch] = useReducer(cartReducer,[])
    const [productQuantites,setProductQuantities] = useState(
        products.reduce((acc,product) => {
            acc[product.id] = 1;
            return acc
        }, {})
    );

    const addToCart = (product) => {
        dispatch({
            type : 'ADD_ITEM',
            payload : {...product, quantity: productQuantites[product.id]}
        });
        setProductQuantities({...productQuantites,[product.id]:1}
            // prevQuantities => {
            // const updateQuantities = {prevQuantities};
            // delete updateQuantities[product.id];
            // return updateQuantities;

            
        )
    }


    const RemoveFromCart = (prodctId) => {
        dispatch({type : "REMOVE_ITEM", payload : prodctId})
    };

    const updataCartQuantity = (productId,quantity) => {
        if (quantity <1) return;
        dispatch({
            type : "UPDATE_QUANTITY",
            payload: {id : productId, quantity: parseInt(quantity)}
        });
    };


    const updateProductQuantity = (productId,change) => {
        const newQuantity = Math.max(1, productQuantites[productId] + change);
        setProductQuantities({
            ...productQuantites, 
            [productId] : newQuantity
        })
    }


    const clearCart = () => {
        dispatch({type : 'CLEAR_CART'});
    };

    useEffect(() => {
        console.log(productQuantites);
        
    },[productQuantites])


    //-----------------------------------------Total price ra quantity
    const totalPrice = cart.reduce((total,item) => total + (item.price * item.quantity), 0)


  return (
    <div className='container'>
        <header>
            <h1>React Shopping Cart</h1>
        </header>

        <main>
            <div className="products container">
                <h2>Prdocuts</h2>
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className='product-card'>
                            <img src={product.image} alt=""  />
                            <h3>{product.name}</h3>
                            <p className='price'>
                                ${product.price.toFixed(2)}
                            </p>

                            <div className="quantity-controls">
                                <button className='quantity-btn' onClick={() => updateProductQuantity(product.id, -1)}>-</button>
                                <span className='quantity'>{productQuantites[product.id]}</span>
                                <button className='quantity-btn' onClick={() => updateProductQuantity(product.id,1)}>+</button>


                            </div>

                            <button className='add-to-cart-btn' onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cart-sidebar">
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    {
                        cart.length > 0 && (
                            <button className='clear-cart-btn' onClick={clearCart}>
                                Clear Cart
                            </button>
                        )
                    }
                </div>

                {
                    cart.length === 0 ? (
                        <p className='empty-cart'>Your cart is Empty</p>
                    ) : (
                        <>
                        <div className='cart-items'>
                            {
                                cart.map(item => (
                                    <div key={item.id} className='cart-item'>
                                        <div className="item-info">
                                            <img src={item.image}  alt="" />
                                            <div>
                                                <h3>item.name</h3>
                                                <p>${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>

                                        <div className="item-actions">
                                            <div className="quantity-controls">
                                                <button className='quantity-btn' onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>

                                                <input type="number" min="1" value={item.quantity} onChange={(e) => updateCartQuantity(item.id,e.target.value)}   />

                                                <button className='quantity-btn' onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <button className="remove-btn" onClick={() => RemoveFromCart(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                            <div className="cart-summary">
                                 <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                                <button className="checkout-btn">Checkout</button>
                            </div>
                        </>
                    )
                }
            </div>
        </main>
    </div>
  )
}

export default Cart