import React, { useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackFunction'

const UseCallback = (props) => {
    const [count, setCount] = React.useState(0)

    const inc = useCallback(function inc(delta) {
        setCount(current => current + delta)
    }, [setCount])

    // function inc(delta) {
    //     setCount(count + delta)
    // }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
