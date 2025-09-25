import Modal from "./Modal.jsx";
import Button from "./Button.jsx";



export default function Main({children, onClick, text, openModal, isModalOpen, setIsModalOpen, closeModal, alertModal}){
    return (
        <>
            <h1 className="title">Universal Modal Component</h1>
            <Button variant={'button'} handleClick={openModal}>Open Modal  wdwdwdwdwdw</Button>

            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}
                                   closeModal={closeModal}
                                   alertModal={alertModal}
                                   content='Are you sure you want to proceed? This action cannot be undone.'
                                   title='Confirm Your Action'
                                   showButton
            />}
            {/*<Modal/>*/}

        </>
    )
}