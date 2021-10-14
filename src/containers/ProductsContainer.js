import React, { Component } from 'react'
import {connect} from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage} from './../actions/index';

class ProductsContainer extends Component {
  render() {
    var {products} = this.props // lấy trên store 
    return(
        <Products >
            {this.showProduct(products)}
        </Products>
    )
  }
  showProduct(products) {
    var result = null;
    var {onAddToCart, onChangeMessage} = this.props;// nhận props từ cái mapDispatchToProps ra
    result = products.map((product, index) => {
      return <Product key={index}
                      product={product}
                      onAddToCart={onAddToCart} // cái này thực chất là nó sẽ truyền onAddToCart ở trong mapDispatchToProps vào Products để mà trong Product nó sẽ trả về cái product con sau đó truyền lại vào mapDispatchToProps để trả về store 
                      onChangeMessage={onChangeMessage} // cái này thực chất là nó sẽ truyền onAddToCart ở trong mapDispatchToProps vào Products để mà trong Product nó sẽ trả về cái product con sau đó truyền lại vào mapDispatchToProps để trả về store 
              />
    })
    return result;
  } 
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(   // phải nhận vào array
    PropTypes.shape({   // kiểm tra có phải là object hay ko
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,  // yêu cầu bắt buộc phải có product
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}
const mapDispatchToProps = (dispatch, props) => {  // truyền lên store và trả về một cái props
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }
   
  }

}
  
export default connect(mapStateToProps,mapDispatchToProps) (ProductsContainer);