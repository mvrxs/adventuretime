import React from 'react';

const Modal = ({ showModal, toggleModal }) => {
    return (
        <div>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-200 rounded-lg p-8">
                        <div className="flex justify-end">
                            <button onClick={toggleModal} className="text-gray-600 hover:text-gray-800">
                                <svg className="w-6 h-6" fill="red" stroke="white" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', backgroundColor: 'red' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-xl mt-4">Nothing to see here mate...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
