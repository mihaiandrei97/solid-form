type Props = {
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

export default function Final({ store }: Props) {
  console.log(store);
  return (
    <ul>
      <li>
        <strong>First Name:</strong> {store.firstName}
      </li>
      <li>
        <strong>Last Name:</strong> {store.lastName}
      </li>
      <li>
        <strong>Email:</strong> {store.email}
      </li>
      <li>
        <strong>Phone:</strong> {store.phone}
      </li>
      <li>
        <strong>Address:</strong> {store.address}
      </li>
      <li>
        <strong>City:</strong> {store.city}
      </li>
      <li>
        <strong>Zip:</strong> {store.zip}
      </li>
    </ul>
  );
}
