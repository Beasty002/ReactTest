import React, { useState } from 'react'
import Barcode from 'react-barcode';


const Barcodegenerator = () => {
    const [barcodeVal, setBarcodeVal] = useState('')
    const [inputVal, setInputVal] = useState('')

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const setBarVal = () => {
        setBarcodeVal(inputVal)
    }



    return (
        <div>
            <Barcode value={barcodeVal} />

            <div className='mt-4 flex'>
                <input type="text" placeholder='Enter number to generate barcode' className='rounded-full w-96 px-4 py-3 border' onChange={handleInputChange} value={inputVal} />
                <button onClick={setBarVal} className='ml-4 bg-blue-700 text-white px-4 rounded-md hover:bg-blue-800 '>Generate</button>
            </div>


            <input type="text" className='rounded-full w-96 px-4 py-3 border mt-6' placeholder='This the barcode' />



        </div>
    )
}

export default Barcodegenerator
