import Dropdown from "react-bootstrap/Dropdown";
import templates from "./templates";

function SelectTemplate(props) {
  function dropwdown_items(type) {
    return (
      Object.keys(templates).filter(key => templates[key].type === type).map((key) => (
        <Dropdown.Item key={key} eventKey={key}>{templates[key].title}</Dropdown.Item>
      ))
    )
  }

  return (
    <Dropdown onSelect={props.handleSelectTemplate}>
      <Dropdown.Toggle variant="outline-secondary" id="template-dropdown">
        {props.selectedTemplate || "Select a template"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>Answer Question</Dropdown.Header>
        {dropwdown_items("answerQuestion")}
        <Dropdown.Header>Conversation</Dropdown.Header>
        {dropwdown_items("conversation")}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SelectTemplate;