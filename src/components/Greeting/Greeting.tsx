import { GreetingType } from './Greeting.type';

const Greeting = ({ username = 'user' }: GreetingType) => {
  return <p data-testid="user">Hello {username}</p>;
};

export default Greeting;
