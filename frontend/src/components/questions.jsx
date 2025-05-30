import React,{useState} from "react";

const Questions = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleStatus = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={`mx-6 my-4 px-8 py-4 w-full transition-all ease-in-out duration-300 pr-3 ${isOpen ? "max-h-72" : "max-h-20"  }`}>
            <div 
                className="  flex flex-row justify-between items-center h-20 bg-beige-dark rounded-2xl shadow-2xl
                 hover:shadow-2xl"
            >
                <p className="font-sans text-xl font-semibold text-violet-950 px-3">
                    {props.ques}
                </p>
                <button onClick={toggleStatus} className="flex justify-center items-center text-white h-16 w-16">{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && (
                <div className="text-lg font-sans text-gray-900 h-20 sm:max-h-64 pt-2 bg-slate-100 shadow-2xl hover:shadow-2xl 
                overflow-y-auto rounded-xl font-medium px-4">
                     {props.ans}
                </div>
            )}
        </div>
    );
}

export default Questions;