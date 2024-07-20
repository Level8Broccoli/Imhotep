import { render } from "https://esm.sh/preact@10.19.2";
import { useReducer } from "https://esm.sh/preact@10.19.2/hooks";
import { html } from "https://esm.sh/htm@3.1.1/preact?external=preact";

export function App() {
  const [count, add] = useReducer((a, b) => a + b, 0);

  return html`
    <div class="container">
      <section class="section">
        <div class="is-flex is-justify-content-space-between">
          <div class="field">
            <button class="button is-black" onClick=${() =>
    add(-1)}>Decrement</button>
          </div>
          <div class="field">
            <button class="button is-black" onClick=${() =>
    add(1)}>Increment</button>
          </div>
        </div>
        <div class="field">
          <input class="input" readonly size="4" value=${count} />
        </div>
      </section>
    </div>
    `;
}

render(html`<${App} />`, document.body);
