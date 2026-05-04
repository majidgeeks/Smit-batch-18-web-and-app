
const CustomInput = ({containerStyle, title = 'label', inputStyle}) => {
    return(
        <div style={{display:'flex', backgroundColor:'yellow', alignItems:'center', ...containerStyle}}> 
            <p >{title}</p>
           <input type="text" style={{marginLeft:5}} />
        </div>
    )
};

export default CustomInput;