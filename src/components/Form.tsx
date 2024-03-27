type Props = {
  inputs: () => {
    label: string;
    type: string;
    id: "address" | "city" | "zip" | "firstName" | "lastName" | "email" | "phone";
  }[];
  update: (type: "address" | "city" | "zip" | "firstName" | "lastName" | "email" | "phone", value: string) => void;
  store: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zip: string;
  };
};

export default function Form({ inputs, update, store }: Props) {
  return (
    <form>
      {inputs().map((input) => (
        <label>
          {input.label}
          <input
            type={input.type}
            id={input.id}
            value={store[input.id]}
            onInput={(e) => update(input.id, e.currentTarget.value)}
          />
        </label>
      ))}
    </form>
  );
}
