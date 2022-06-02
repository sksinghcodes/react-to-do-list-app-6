const Control = ({action, classNameValue, text}) => {

    return (
        <button 
            onClick={action}
            className={classNameValue}
        >{text}
        </button>
    );
}
 
export default Control;