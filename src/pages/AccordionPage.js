import Accordion from "../components/Accordion";
export default function AccordionPage() {
  const items = [
    {
      label: "Can i use React in my project",
      content:
        "yes we can the react in our project.yes we can the react in our project.yes we can the react in our project.yes we can the react in our project.",
    },
    {
      label: "Can i use JavaScript in my project",
      content:
        "yes we can the react in our project.yes we can the react in our project.yes we can the react in our project.yes we can the react in our project.",
    },
    {
      label: "Can i use CSS in my project",
      content:
        "yes we can the react in our project.yes we can the react in our project.yes we can the react in our project.yes we can the react in our project.",
    },
  ];

  return <Accordion items={items} />;
}
