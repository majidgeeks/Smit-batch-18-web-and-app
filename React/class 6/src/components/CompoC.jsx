import CompoB from "./CompoB";


const CompoC = ({userName}) => {
    return(


        <div>
          <h2>this is component C</h2>
          {/* <p>{name}</p> */}
          <CompoB userName={userName} />
        </div>
    )
};

export default CompoC;