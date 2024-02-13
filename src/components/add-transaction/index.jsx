import { Input,Flex, Box, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, RadioGroup, Radio, ModalFooter, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({onClose,isOpen}) {
const {formData,setFormData,value,setValue,handleFormSubmit} = useContext(GlobalContext);

function handleFormChange(event){
    setFormData({
        ...formData,[event.target.name] : event.target.value,
    })
}
function handleSubmit(event){
    event.preventDefault()
    handleFormSubmit(formData);
}

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add new Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input placeholder="Enter Transaction Description" name="description" type="text" onChange={handleFormChange}></Input>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input placeholder="Enter Transaction Amount" name="amount" type="number" onChange={handleFormChange}></Input>
                        </FormControl>

                         <FormControl>
                            <RadioGroup mt="5" value={value} onChange={setValue}>
                                <Radio checked={formData.type === "income"} value="income" colorScheme="blue" name="type" onChange={handleFormChange}>Income</Radio>
                                <Radio checked={formData.type === "expense"} value="expense" colorScheme="red" name="type" onChange={handleFormChange}>Expense</Radio>
                            </RadioGroup>
                        </FormControl> 



                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button bgColor="#6fe8e4" type="submit" onClick={onClose}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
}