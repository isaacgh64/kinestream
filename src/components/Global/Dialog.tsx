import React from "react";

interface DialogProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ message, onClose,visible }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" hidden={!visible}>
            <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full border border-blue-500 z-50">
                <h2 className="text-lg font-bold text-blue-500">{message}</h2>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
                    >
                        Confirmar
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Dialog;
