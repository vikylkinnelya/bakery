import { Toast } from 'react-bootstrap';


const ToastComp = ({ tostIsShown, tostItem, onShowTost }) => {

    return (

        <Toast
            className='added-toast'
            onClose={() => onShowTost(false)}
            show={tostIsShown}
            delay={3000}
            autohide
            style={{
                bottom: 10
            }}
        >
            <Toast.Body>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="35" height="35" viewBox="0 0 510 510" fill='#fdb822'>
                    <path d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204
			S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255
			s114.75,255,255,255s255-114.75,255-255H459z"/>
                </svg>
                {tostItem} was added to your cart!
            </Toast.Body>

        </Toast>

    )
}

export default ToastComp;
