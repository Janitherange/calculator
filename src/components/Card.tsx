import Button from "./Button";
import { useSelector } from "react-redux";
import { NumbersType, OperationsType, RootState } from "../types";

const Card = () => {
  const value = useSelector((state: RootState) => state.calculator.value);
  const total = useSelector((state: RootState) => state.calculator.total);

  const CONTROL: OperationsType[] = [
    {
      operator: "/",
    },
    {
      operator: "*",
    },
    {
      operator: "-",
    },
    {
      operator: "+",
    },
    {
      operator: "DEL",
    },
    {
      operator: "C",
    },
  ];

  const NUMBERS: NumbersType[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ,".", "="];

  return (
    <div className="rounded-3xl bg-[#0a0a23] w-3/5">
      <div className="text-white p-5 text-right">
        { total === "" ? "" : <span className="text-xs text-[#d81f5b]">({total})</span>}
        <span>{value === "" ? 0 : value}</span>
      </div>
      <div className="grid grid-cols-6 bg-[#d81f5b]">
        {CONTROL.map((ctrl) => (
          <Button operator={ctrl.operator} number={null} key={ctrl.operator} />
        ))}
      </div>
      <div className="grid grid-cols-3">
        {NUMBERS.map((num) => (
          <Button operator={null} number={num} key={num} />
        ))}
      </div>
    </div>
  );
};

export default Card;
