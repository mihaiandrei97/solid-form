import { createSignal } from "solid-js";
import "./App.css";
import Stepper from "./components/Stepper";
import Final from "./components/Final";
import Form from "./components/Form";
import { createStore } from "solid-js/store";

const inputValues: Array<Array<{
  label: string;
  type: string;
  id: "address" | "city" | "zip" | "firstName" | "lastName" | "email" | "phone";
}>>
 = [
  [
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
  ],
  [
    {
      label: "Email",
      type: "email",
      id: "email",
    },
    {
      label: "Phone",
      type: "tel",
      id: "phone",
    },
  ],
  [
    {
      label: "Address",
      type: "text",
      id: "address",
    },
    {
      label: "City",
      type: "text",
      id: "city",
    },
    {
      label: "Zip",
      type: "text",
      id: "zip",
    },
  ],
];

function App() {
  const [step, setStep] = createSignal(0);
  const inputs = () => inputValues[step()];
  const [store, setStore] = createStore({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  return (
    <>
      <div class="card">
        <Stepper currentStep={step} />

        {step() < 3 && (
          <Form
            inputs={inputs}
            update={(type, value) => {
              setStore(type, value);
            }}
            store={store}
          />
        )}
        {step() === 3 && <Final store={store} />}

        <div class="buttons">
          <button onClick={() => setStep(step() - 1)} disabled={step() === 0}>
            Previous
          </button>
          <button onClick={() => setStep(step() + 1)} disabled={step() === 3}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
