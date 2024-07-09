import { useInput } from "../../hooks/useInput";
import { useDisappearingElement } from "../../hooks/useDisappearingElement";

export default function Form() {
  const name = useInput("Name");
  const email = useInput("Email");
  const elementRef = useDisappearingElement();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`name: ${name.value} email: ${email.value}`);
  }

  function handleMouseOver(e) {
    e.target.style.opacity = 0;
  }

  function handleMouseLeave(e) {
    e.target.style.opacity = 1;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1
          ref={elementRef}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          As pradingstu
        </h1>
        <input type="text" {...name} />
        <br />
        <input type="text" {...email} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
