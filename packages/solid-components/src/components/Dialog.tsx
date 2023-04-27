import { Show } from "solid-js";

interface DialogProps {
  open: boolean;
  onClose: () => void;
}
export default function Dialog(props: DialogProps) {
  return (
    <Show when={props.open}>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "50px" }}
      >
        <div>Dialog</div>
        <button onClick={props.onClose}>close</button>
      </div>
    </Show>
  );
}
