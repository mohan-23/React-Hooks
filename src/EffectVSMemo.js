import React from "react";

const EffectVSMemo = () => {
  const [effect, setEffect] = React.useState(0);
  const [memo, setMemo] = React.useState(0);

  React.useEffect(() => {
    console.log("From useEffect" + effect);
  }, [effect]);
  React.useMemo(() => {
    console.log("From useMemo" + memo);
  }, [memo]);
  return (
    <div>
      <center>
        <button onClick={() => setEffect(effect + 1)}>
          useEffect Increment
        </button>
        <br />
        <button onClick={() => setMemo(memo + 1)}>useMemo Increment</button>
      </center>
    </div>
  );
};

export default EffectVSMemo;
