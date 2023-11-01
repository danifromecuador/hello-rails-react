import { useSelector } from 'react-redux';

function Greetings() {
  const greetings = useSelector((state) => state.greetings.greetings);
  return (
    <>
      { randomGreeting.message }
    </>
  );
}

export default Greetings;