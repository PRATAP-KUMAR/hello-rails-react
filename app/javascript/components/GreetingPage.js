import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../redux/greeting/greeting';

const GreetingPage = () => {
    const greetingData = useSelector((state) => state.greetingReducer);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(getDataAction)

        return (
            <h1>
                HELLO RAILS
                {greetingData.length}
            </h1>
        );
    })

}

export default GreetingPage;