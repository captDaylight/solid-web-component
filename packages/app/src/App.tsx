import { Dialog, Counter } from "solid-components";
import { createSignal, Component } from "solid-js";

const App: Component = () => {
  const [open, setOpen] = createSignal(false);
  return (
    <div>
      <h1>Counter</h1>
      <Counter />

      <div
        style={{
          border: "1px solid black",
          "margin-top": "50px",
          "margin-bottom": "50px",
        }}
      ></div>

      <h1>Dialog</h1>
      <button onClick={() => setOpen(true)}> open dialog</button>
      <Dialog onClose={() => setOpen(false)} open={open()} />
    </div>
  );
};

export default App;
