import { ChangeEvent, FormEvent, useState } from "react";
import { ILuck } from "./Luck.interface";
import VLuck from "./Luck.view";

const Luck: React.FC<ILuck.IProps> = () => {
  const [info, setInfo] = useState("");
  const [myLuck, setMyLuck] = useState("");

  const todayLuck = {
    good: "운이좋다",
    bad: "운이 나쁘다.",
  };

  const randomLuck = (input: string) => {
    const birth = input.replaceAll("/", "");

    const year = birth.substring(0, 4);

    if (+year >= 2000) setMyLuck(todayLuck.good);
    else setMyLuck(todayLuck.bad);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInfo(newValue);
  };

  const handleOnClick = () => {
    randomLuck(info);
  };

  return (
    <VLuck
      todaysLuck={myLuck}
      info={info}
      handleChange={handleChange}
      handleOnClick={handleOnClick}
    />
  );
};

export default Luck;

/**
 * impl : Implement : 구현체
 * 데이터를 다루거나 로직을 작성하는 영역
 * 로직을 거친 데이터를 View에 props로 전달해준다.
 */
