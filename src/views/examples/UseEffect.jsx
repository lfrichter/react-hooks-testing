import React, { use, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function checkEven(num) {
    if(num % 2 === 0) {
        return true
    }
    return false
}

const UseEffect = (props) => {

    const [number, setNumber] = React.useState(1)
    const [fatorial, setFatorial] = React.useState(0)
    const [isEven, setEven] = React.useState(false)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    // Side effect triggered by the state change
    // setFatorial(calcFatorial(number))

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = 'Eita, fatorial too hight!'
        }
    }, [fatorial])

    useEffect(function() {
        setEven(checkEven(number))
    }, [number])

    const numberKind = () => {
        return <span className={isEven ? 'text red' : 'text blue'}>{isEven ? 'Even' : 'Odd'}</span>
    }


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'It does not exists!' : fatorial}</span>
                </div>
                <span className="text red">{document.title !== 'React App' ? document.title : ''}</span>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{number} is {numberKind()}</span>
            </div>
        </div>
    )
}

export default UseEffect
