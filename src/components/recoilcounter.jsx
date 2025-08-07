
import { atom, RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
const count = atom({
  key: "countstate",
  default: 0,
});
function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}
function Increase() {
  const setcount = useSetRecoilState(count);
  return (
    <button
      onClick={() => {
        setcount((prev) => prev + 1);
      }}
    >
      Inc
    </button>
  );
}
function Decrease() {
  const setcount = useSetRecoilState(count);
  return (
    <button
      onClick={() => {
        setcount((prev) => prev - 1);
      }}
    >
      Dec
    </button>
  );
}
function Value() {
  const countval = useRecoilValue(count);
  return <div>{countval}</div>;
}

export default function RecoilCounter() {
  return (
    <>
      <Parent />
    </>
  );
}
