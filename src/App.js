import { click } from "@testing-library/user-event/dist/click";
import Button from "./components/Button";
export default function App() {
  return (
    <div>
      <Button>Click me!</Button>
      <Button>Press ME!</Button>
      <Button>hover Me!</Button>
      <Button>primary</Button>
      <Button>Secondary</Button>
    </div>
  );
}
