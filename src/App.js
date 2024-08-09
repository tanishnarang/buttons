// import { click } from "@testing-library/user-event/dist/click";
import Button from "./components/Button";
export default function App() {
  return (
    <div>
      <Button primary>Click me!</Button>
      <Button secondary>Press ME!</Button>
      <Button success>hover Me!</Button>
      <Button warning>primary</Button>
      <Button danger>Secondary</Button>
    </div>
  );
}
