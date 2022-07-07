import { ILuck } from "./Luck.interface";

const VLuck: React.FC<ILuck.IVProps> = (props) => {
  const { todaysLuck, info, handleChange, handleOnClick } = props;

  return (
    <>
      <input
        type="text"
        value={info}
        onChange={(value) => handleChange(value)}
      />
      <div style={styleTodayLuck}>오늘의 운세는 {todaysLuck} 입니다.</div>
      <button type="button" onClick={handleOnClick}>
        오늘의 운세는?
      </button>
    </>
  );
};

const styleTodayLuck = {
  color: "red",
};

export default VLuck;

/**
 * view : 화면
 * impl로 부터 props로 받은 데이터를 화면에 출력하는 코드를 작성하는 영역
 */
