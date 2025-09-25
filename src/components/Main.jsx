
import Button from "./Button.jsx";



export default function Main({ openModal, isModalOpen,
                             children}){
    return (
        <>
            <h1 className="title">Universal Modal Component</h1>
            <Button variant={'button'} handleClick={openModal}>Open Modal  wdwdwdwdwdw</Button>

            {isModalOpen && children}
        </>
    )
}