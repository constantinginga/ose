import { useState, ChangeEvent } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';
import { Bard } from 'googlebard';

const defaultFormFields = {
  text: '',
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [answer, setAnswer] = useState('');
  const [bard] = useState(
    new Bard(
      `__Secure-3PSID=XAgsV3do62lnp3TBqP23j9k06IyGBx1_RvJBbWc1ZaYVaVIK8ugguGp0Xr9qiBVQ7EMxUQ.`
    )
  );
  const { text } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await bard.ask(text);
      setAnswer(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      width={'100vw'}
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Box display="flex" gap={4}>
        <Input type="text" onChange={handleChange} value={text} name="text" />
        <Button onClick={handleSubmit}>Ask Bard</Button>
      </Box>
      <Box>{answer}</Box>
    </Box>
  );
}

export default App;
