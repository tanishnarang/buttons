// import { click } from "@testing-library/user-event/dist/click";
import Button from "./components/Button";
export default function App() {
  return (
    <div>
      <Button primary>Click me!</Button>
      <Button secondary rounded>
        Press ME!
      </Button>
      <Button success outline>
        hover Me!
      </Button>
      <Button warning>primary</Button>
      <Button danger rounded>
        Secondary
      </Button>
    </div>
  );
}
