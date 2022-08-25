import operate from '../components/logic/operate';

test('check one plus two if equal to three', ()=>{
    expect(operate('1','2','+')).toBe('3');
})