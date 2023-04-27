import { Dialog, Counter } from "solid-components";
import { createSignal, Component } from "solid-js";

const App: Component = () => {
  const [open, setOpen] = createSignal(true);
  return (
    <div>
      <Counter />
      <div style={{ border: "1px solid black", margin: "50px" }}></div>
      <button onClick={() => setOpen(true)}> open dialog</button>
      <Dialog onClose={() => setOpen(false)} open={open()} />
    </div>
  );
};

export default App;
