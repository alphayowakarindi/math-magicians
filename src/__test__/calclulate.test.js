import calculate from '../components/logic/calculate';

test('If AC button is clicked the reusult null obj', () => {
  expect(
    calculate(
      {
        total: '8',
        next: '5',
        operation: null,
      },
      'AC',
    ),
  ).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
