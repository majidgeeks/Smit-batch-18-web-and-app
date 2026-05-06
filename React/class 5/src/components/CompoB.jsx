import CompoA from "./CompoA";


const CompoB = ({userName}) => {
    return(
        <div>
          <h2>this is component B {userName}</h2>
          <CompoA userName={userName}  />
        </div>
    )
};

export default CompoB;