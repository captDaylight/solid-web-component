import Counter from "./components/Counter";
import Dialog from "./components/Dialog";
import { createSignal, Component } from "solid-js";

const App: Component = () => {
  const [open, setOpen] = createSignal(false);
  return (
    <div>
      <h2>Counter</h2>
      <Counter />

      <div
        style={{
          border: "1px solid black",
          "margin-top": "50px",
          "margin-bottom": "50px",
        }}
      ></div>

      <h2>Dialog</h2>
      <button onClick={() => setOpen(true)}> open dialog</button>
      <Dialog onClose={() => setOpen(false)} open={open()} />
    </div>
  );
};

export default App;
