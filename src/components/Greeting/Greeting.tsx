import { GreetingType } from './Greeting.type';

const Greeting = ({ username }: GreetingType) => {
  return <p data-testid="user">Hello {username ? username : 'Guest'}</p>;
};

export default Greeting;
