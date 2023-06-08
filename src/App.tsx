import { useState, useEffect, ChangeEvent } from 'react';
// import Bard from './utils/bard.utils';

const defaultFormFields = {
  text: '',
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [answer, setAnswer] = useState<object>({});
  // const [bard] = useState(
  //   new Bard(
  //     'XAgsV3do62lnp3TBqP23j9k06IyGBx1_RvJBbWc1ZaYVaVIK8ugguGp0Xr9qiBVQ7EMxUQ.'
  //   )
  // );
  const { text } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // const response = await bard.getAnswer(text);
      // setAnswer(response);
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={text} name="text" />
      <button onClick={handleSubmit}>Ask Bard</button>
      {/* <div>{answer}</div> */}
    </div>
  );
}

export default App;
