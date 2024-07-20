import { render } from "https://esm.sh/preact@10.19.2";
import { useReducer } from "https://esm.sh/preact@10.19.2/hooks";
import { html } from "https://esm.sh/htm@3.1.1/preact?external=preact";

export function App() {
  const [count, add] = useReducer((a, b) => a + b, 0);

  return html`
      <button onClick=${() => add(-1)}>Decrement</button>
      <input readonly size="4" value=${count} />
      <button onClick=${() => add(1)}>Increment</button>
    `;
}

render(html`<${App} />`, document.body);
