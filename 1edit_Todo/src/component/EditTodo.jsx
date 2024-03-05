import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function EditTodo() {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([{ id: 1, name: 'apple' }]);
    const [isEditItem, setIsEditItem] = useState(null);
    const [changeIcon, setChangeIcon] = useState(true)

    const addItem = () => {
        if (!inputData.trim()) {
            alert(`Please fill the data`);
            return;
        }

        if (isEditItem !== null) {
            setItems(items.map((item) => {
                if (item.id === isEditItem) {
                    return { ...item, name: inputData };
                }
                return item;
            }));
            setIsEditItem(null);
            setChangeIcon(true)
        } else {
            const newItem = { id: new Date().getTime(), name: inputData };
            setItems([...items, newItem]);
        }
        setInputData('');
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const selectedItem = items.find((item) => item.id === id);
        if (selectedItem) {
            setInputData(selectedItem.name);
            setIsEditItem(id);
        }
        setChangeIcon(false)
    };

    const removeAll = () => {
        setItems([]);
    };

    return (
        <div className='w-full h-full bg-blue-900 flex justify-center'>
            <div className='pt-2'>
                <figure className='w-[30vw] flex flex-col justify-center items-center'>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/450/666/original/vector-files-icon.jpg" alt="img" className='w-16' />
                    <figcaption>Add your List here</figcaption>
                </figure>

                <div className="addItems flex mt-2">
                    <input type="text" placeholder=' ✏️Add items...' value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        className='px-2 py-1 text-black' />
                    {

                        changeIcon ? <IoMdAdd onClick={addItem} className='text-3xl bg-white text-black'></IoMdAdd> : <FaRegEdit className=' mt-0.5 bg-white text-3xl p-1' onClick={addItem} ></FaRegEdit>
                    }
                </div>

                <div className='mt-2'>
                    {
                        items.map((item) => (
                            <div key={item.id} className='flex bg-white w-[230px] text-black justify-between py-1 px-3  transition duration-2000  hover:bg-green-700'>
                                <h3>{item.name}</h3>
                                <div className='flex'>
                                    <FaRegEdit className='text-lg mt-0.5' onClick={() => editItem(item.id)}></FaRegEdit>
                                    <FaRegTrashAlt className='mt-1' onClick={() => deleteItem(item.id)}></FaRegTrashAlt>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='hello'>
                    <button onClick={removeAll} className='mt-4 bg-green-400 px-2 py-1 rounded'>
                        Remove All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditTodo;
