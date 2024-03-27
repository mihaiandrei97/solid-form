import Form from "./Form";

export default function Step1() {
  return (
    <Form
      inputs={[
        {
          label: "First Name",
          type: "text",
          id: "firstName",
        },
        {
          label: "Last Name",
          type: "text",
          id: "lastName",
        },
      ]}
      update={(type, value) => {
        console.log(type, value);
      }}
    />
  );
}
