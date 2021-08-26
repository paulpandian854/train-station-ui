
import TrainTableComponent from './TrainTableComponent';
import {render, screen, cleanup} from '@testing-library/react';

import renderer from 'react-test-renderer';
afterEach(cleanup);
//Mock Function
const functionForTesting = jest.fn((x,y)=> 3)

test('Test TrainTable Component', () => {
    expect(1).toBe(1);
})

test('Test TrainTable Component and props', () => {
    render(<TrainTableComponent jwt="abcd"/>);
    const traindetails = screen.getByTestId('train-1');
    expect(traindetails).toBeInTheDocument();
    expect(traindetails).toHaveTextContent('abcd');
})

test('Test TrainTable Component3', () => {
    render(<TrainTableComponent jwt="abcd"/>);
    const traindetails = screen.getByTestId('train-1');
    expect(traindetails).toBeInTheDocument();
    expect(traindetails).toHaveTextContent('abcd');
})


test('Test TrainTable Componen- Snapshot testing', () => {
    const tree = renderer.create(<TrainTableComponent jwt="abcd"/>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})

test('Test a dummy function inside train details component', () => {
    expect(functionForTesting(1,2)).toBeUndefined();
})