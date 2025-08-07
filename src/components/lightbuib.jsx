import { useState } from "react";
export default function LIGHTBULB() {
  const [lighton, setlight] = useState(true);
  return (
    <main>
      <Light lighton={lighton} setlight={setlight} />
    </main>
  );
}
function Light({ lighton, setlight }) {
  return (
    <>
      <LightBulb lighton={lighton} />
      <LightSwitch setlight={setlight} />
    </>
  );
}
function LightBulb({ lighton }) {
  return <>{lighton ? <div>Light is on </div> : <div>Light is off</div>}</>;
}
function LightSwitch({ setlight }) {
  function changelight() {
    setlight((prev) => !prev);
  }
  return (
    <>
      <button onClick={changelight}>Toggle</button>
    </>
  );
}
