import { Handler } from '@netlify/functions';
import { Bard } from 'googlebard';

const handler: Handler = async (event, context) => {
  try {
    // const { queryStringParameters } = event;
    const bard = new Bard(
      `__Secure-3PSID=XAgsV3do62lnp3TBqP23j9k06IyGBx1_RvJBbWc1ZaYVaVIK8ugguGp0Xr9qiBVQ7EMxUQ.`
    );
    const bardResponse = await bard.ask("Hello, what's your name?");

    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: bardResponse }),
    };
    return response;
  } catch (error) {
    // Handle any errors that occur during processing
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

export { handler };
