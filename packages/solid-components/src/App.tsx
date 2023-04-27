import { Component, createSignal } from "solid-js";

import Dialog from "./components/Dialog";

const App: Component = () => {
  const [open, setOpen] = createSignal(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}> open dialog</button>
      <Dialog onClose={() => setOpen(false)} open={open()} />
    </div>
  );
};

export default App;
