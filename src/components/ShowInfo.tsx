import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../counter/index';

const ShowInfo: React.FC = () => {
    const result = useSelector((state: RootState) => state.calculator.result);

    return (
        <div className='w-50 mx-auto  p-4'>
            <h2>Kêt quả : {result}</h2>
        </div>
    );
};

export default ShowInfo;
