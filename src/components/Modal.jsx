import Button from "./Button.jsx";




export default function Modal({ setIsModalOpen, closeModal, alertModal,
                                  title='Title', content = 'Content', showButton = false}){
            return (
                <div className="overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>

                        <Button handleClick={closeModal}  variant={'closeButton'}  >
                            &times;
                        </Button>
                        <h2 className="modalHeader">{title}</h2>
                        <div className="modalBody">{content}

                        </div>
                        <div className="modalFooter">
                            {showButton && (
                            <Button handleClick={closeModal}  variant={'secondaryButton'}  >
                                Cancel
                            </Button>)}
                            <Button handleClick={alertModal}  variant={'primaryButton'}  >
                                Yes, Continue
                            </Button>
                        </div>
                    </div>
                </div>
            )
}






