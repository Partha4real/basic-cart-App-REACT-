import './CartItem.css';


const CartItem = (props) => {
    // below comments here
        const {title, price, qty, img} = props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.image} />
                </div>
                <div className="right-block">
        <div style= { {fontSize: 25, color: 'lightblue'} }>{title}</div>
        <div className="cart-info">Price: {price}</div>
        <div className="cart-info">Quantity: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" onClick={() => onIncreaseQuantity(product)} src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg" className="action-icons" />
                        <img alt="decrease" onClick={() => onDecreaseQuantity(product)} src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg" className="action-icons" />
                        <img alt="delete" onClick={() => onDeleteProduct(product.id)} src="https://www.flaticon.com/svg/static/icons/svg/3096/3096687.svg" className="action-icons" />
                    </div>
                </div>
            </div>
        )
    }

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;



    // defining state for the component
    // constructor () {
    //     //  Can’t use `this` yet
    //     super();           // super refers to the parent class constructor        // call the constructer for my Component class in REACT 
    //     //  Now it’s okay though
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    //     //this.testing();
    // }

    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000)
    //     }) 

    //     promise.then(() => {
    //         // set state acts like syncronous call
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});

    //         console.log('state ' + this.state.qty);
    //     })
    // }

    // increaseQuantity = () => {  // the arrow function will automaticall bind the value of THIS ot the instance of the class
        // this.state.qty += 1; // the value of qty changes here but React does not know about the change so it does not rerender
        //console.log(this.state);

        // setstate form 1 (use this form to change title, etc as it does not depend on the previous state)
        // this.setState({  // it is inherited from component
        //     qty: this.state.qty +1
        // }, () => {
        //     console.log('first' +this.state.qty)
        // }) 
        // this.setState({  // it is inherited from component
        //     qty: this.state.qty +2
        // }, () => {
        //     console.log('second' +this.state.qty)
        // }) 
        
        //setState form 2 (this form is used when the value to be changed depends on the previous state)
    //     this.setState( (prevState) => {   //the function will be called by ReACt internally and when react does that it will pass previous State to us
    //        return {
    //            qty: prevState.qty + 1
    //        }
    //     }, () => {
    //         console.log('this.state ', this.state)
    //     }) 
    // }

    
    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if (qty === 0) {
    //         return;
    //     }  
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     }, () => {
    //         console.log('this.state ', this.state)
    //     }) 
    // }