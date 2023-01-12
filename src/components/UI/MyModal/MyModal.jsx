import MyButton from '../button/MyButton';
import modalClasses from './MyModal.module.css';

function MyModal({children, visible, setVisible}) {
    const buttonStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: '0'
      };
    const rootClasses = [modalClasses.myModal];

    if (visible) {
        rootClasses.push(modalClasses.active);
    }

    return ( 
    <div 
        className={rootClasses.join(' ')} >
        <div className={modalClasses.myModalContent}>
        <MyButton style={buttonStyle} onClick={() => setVisible(false)}>X</MyButton>
            {children}
        </div>
    </div> );
}

export default MyModal;