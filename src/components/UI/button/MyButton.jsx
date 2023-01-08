import buttonStyles from './MyButton.module.css';

function MyButton({children, ...props}) {
    return ( 
        <button {...props} className={buttonStyles.myBtn}>
            {children}
        </button>
     );
}

export default MyButton;