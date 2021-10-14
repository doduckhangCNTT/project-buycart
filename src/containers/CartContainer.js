import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from "./../actions/index"

class CartContainer extends Component {
    render() {
        var {cart} = this.props;
        return(
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
    showCartItem = (cart) => { 
        var result = Message.MSG_CART_EMPTY
        var {onDeleteProductInCart, onChangeMessageDelete, onUpdateProductInCart} = this.props;
        result = cart.map((item, index) => {
            return (
                <CartItem key={index}
                          item={item}
                          index={index}
                          onDeleteProductInCart = {onDeleteProductInCart}
                          onChangeMessageDelete ={onChangeMessageDelete}
                          onUpdateProductInCart = {onUpdateProductInCart}
                />
            )
        })
        return result
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(   // phải nhận vào array
        PropTypes.shape({
            product: PropTypes.shape({   // kiểm tra có phải là object hay ko
                id: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,  // yêu cầu bắt buộc phải có product
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessageDelete: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
    
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch (actDeleteProductInCart(product))
        },
        onChangeMessageDelete: (message) => {
            dispatch (actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch (actUpdateProductInCart(product, quantity))

        }
    }
}

  
export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);