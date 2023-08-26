import { useDispatch } from "react-redux";
import { ButtonType } from "../types";
import { calculatorActions } from "../redux/calculatorSlice";

const Button = ({ operator, number }: ButtonType) => {
  const dispatch = useDispatch();
  //const value = useSelector((state: RootState) => state.calculator.value);

  const click = () => {
    if (operator && !number) {
      if (operator === "DEL") {
        dispatch(calculatorActions.deletion());
      } else if (operator === "C") {
        dispatch(calculatorActions.clear());
      }else if((operator && operator !== "DEL") || (operator && operator !== "C")){
        dispatch(calculatorActions.operation(operator));
      }
    } else if (!operator && number) {
      if (number && number !== "=") {
        dispatch(calculatorActions.operation(number));
      } else if (number && number === "=") {
        dispatch(calculatorActions.calculate());
      }
    }
  };

  return (
    <button className="p-5 text-white" onClick={click}>
      {operator || number}
    </button>
  );
};

export default Button;
