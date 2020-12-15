import React from 'react';


const Navbar = (props) => {
    return (
        <div style= {styles.nav}>
            <div style= {styles.cartIconContainer}>
                <img style= {styles.cartIcon} src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg" alt="cart-icon" />
                <span style= {styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '1px 6px',
      position: 'absolute',
      right: 10,
      top: -7
    }
  };

export default Navbar;


