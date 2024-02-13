import { Flex, Heading,Button, useDisclosure } from "@chakra-ui/react";
import Expense from "../expense-view";
import Summary from "../summary";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main(){
    const {isOpen,onOpen,onClose} = useDisclosure();
    const {
        totalExpense,
        allTransaction,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
      } = useContext(GlobalContext);

      useEffect(() => {
        let income = 0;
        let expense = 0;
    
        allTransaction.forEach((item) => {
          item.type === "income"
            ? (income = income + parseFloat(item.amount))
            : (expense = expense + parseFloat(item.amount));
        });
    
        setTotalExpense(expense);
        setTotalIncome(income);
      }, [allTransaction]);

    return <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'} >
        <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'} mb={5}>
            <Heading color={'#319795'} display={['none','block','block','block']}>
                Expense Tracker
            </Heading>
            <Flex alignItems={'center'}> 
            <Button onClick={onOpen}
                bg={'#6fe8e4'}
                color={'black'}
                ml={'4'}
                >
                    Add new Transaction
                </Button>
            </Flex>
        </Flex>
        
        <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose}/>

        <Flex w="full" alignItems={"flex-start"} justifyContent={"space-evenly"} flexDirection={["column","column","column","row","row"]}>
        <Expense  data={allTransaction.filter((item) => item.type === "expense")}
          type={"expense"}/>
        <Expense data={allTransaction.filter((item) => item.type === "income")}
          type={"income"}/>
        </Flex>
    </Flex>
}