import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    
    const globalStateValue = {/* Your global state value goes here */};

    const [formData,setFormData] = useState({
        type: 'expense',
        amount:0,
        description: ' '
    })

    const [value,setValue] = useState('expense');
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [allTransaction,setAllTransaction] = useState([]);

    function handleFormSubmit(currentFormData) {
        if (!currentFormData.description || !currentFormData.amount) return; 
        setAllTransaction([
            ...allTransaction,
            { ...currentFormData, id: Date.now() },
          ]);
        }
        console.log(allTransaction);

    return (
        <GlobalContext.Provider value={{
                formData,setFormData,totalExpense,setTotalExpense,totalIncome,setTotalIncome,value,setValue,allTransaction,setAllTransaction,handleFormSubmit
            }}>
            {children}
        </GlobalContext.Provider>
    );
}
