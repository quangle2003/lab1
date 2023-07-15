import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cong, tru, nhan, chia } from '../counter/store/actions';

const Calculator: React.FC = () => {
    const dispatch = useDispatch();
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const handleChangeNum1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum1(e.target.value);
    };

    const handleChangeNum2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum2(e.target.value);
    };

    const handleCong = () => {
        if (num1 !== '' && num2 !== '') {
            dispatch(cong(Number(num1), Number(num2)));
            setNum1('');
            setNum2('');
        }
    };

    const handleTru = () => {
        if (num1 !== '' && num2 !== '') {
            dispatch(tru(Number(num1), Number(num2)));
            setNum1('');
            setNum2('');
        }
    };

    const handleNhan = () => {
        if (num1 !== '' && num2 !== '') {
            dispatch(nhan(Number(num1), Number(num2)));
            setNum1('');
            setNum2('');
        }
    };

    const handleChia = () => {
        if (num1 !== '' && num2 !== '') {
            dispatch(chia(Number(num1), Number(num2)));
            setNum1('');
            setNum2('');
        }
    };

    const handleReset = () => {
        setNum1('');
        setNum2('');
        window.location.reload(); // Tải lại trang
    };
    return (
        <div className='w-50 mx-auto mt-5  p-4'>
            <h2 className=''>Phép tính hai số</h2>
            <div className="mb-3">
                <label className="form-label">Số thứ nhất</label>
                <input type="number" value={num1} onChange={handleChangeNum1} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Số thứ hai</label>
                <input type="number" value={num2} onChange={handleChangeNum2} className="form-control" />
            </div>
            <button onClick={handleCong} >Cộng</button>
            <button onClick={handleTru} >Trừ</button>
            <button onClick={handleNhan}>Nhân</button>
            <button onClick={handleChia} >Chia</button>
            <button onClick={handleReset} >Reset</button>
        </div>
    );
};

export default Calculator;
