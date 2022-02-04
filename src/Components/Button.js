import React from 'react';


const Button = ({text,color,bcolor,height,width,bradius,fs,fw}) => {
  return <div>
      <button style={{
          color: color,
          backgroundColor:bcolor,
          height:height,
          width:width,
          border:'none',
          fontSize:fs,
          fontWeight:fw,
          borderRadius:bradius,
          cursor:'pointer'
      }}>
          {text}
      </button>
  </div>;
};

Button.defaultProps = {
    color:"white",
    bcolor:"green",
    borderRadius:"none"
}

export default Button;
