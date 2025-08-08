import { render } from '@testing-library/react-native';
import { Box } from '../index';

function App() {
  return <Box>Lorem ipsum dolor sit amet</Box>;
}

test('basic test 1', () => {
  const { getByText } = render(<App />);

  expect(getByText('Lorem ipsum dolor sit amet')).toBeOnTheScreen();
});

test('basic test 2', () => {
  const { getAllByText } = render(<App />);

  expect(getAllByText('Lorem ipsum dolor sit amet')).toHaveLength(1);
});
