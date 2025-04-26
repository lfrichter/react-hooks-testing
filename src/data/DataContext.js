import { createContext } from "react";

export const Data = {
    number: 1234,
    text: 'Context API...'
}

const DataContext = createContext(null)

export default DataContext
