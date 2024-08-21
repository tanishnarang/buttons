// import { click } from "@testing-library/user-event/dist/click";
import { GoBell } from "react-icons/go";
import Button from "./components/Button";
export default function ButtonPage() {
  const handleClick = () => {
    console.log("primary button clicked");
  };

  return (
    <div>
      <Button primary onClick={handleClick} className={"mb-5"}>
        <GoBell className="mr-1" />
        Click me!
      </Button>
      <Button secondary rounded onMouseOver={handleClick}>
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
