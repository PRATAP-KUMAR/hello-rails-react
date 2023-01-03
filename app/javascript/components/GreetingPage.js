import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../redux/greeting/greeting';

const GreetingPage = () => {
    const array = useSelector((state) => state.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAction());
    }, []);

    return (
        <>
            <h1>
                Welcome to Hello Rails React Project
            </h1>
            <div className="message">
                {array.message}
            </div>
        </>
    )
}

export default GreetingPage;