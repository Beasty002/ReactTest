import React from 'react'
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className='w-56 h-screen border-r border-[#d7d7d7] bg-blue-100'>
            <ul className='h-full flex flex-col gap-4 justify-center bg-red-200 pl-4 [&>*]:pl-2'>
                <NavLink to={'/'}  >Product Variant</NavLink>
                <NavLink to={'/test'}>Test </NavLink>
                <NavLink to={'/barcode-generator'}>Barcode </NavLink>
                <NavLink to={'/tictactoe'}>TicTacToe </NavLink>
                <NavLink to={'/tabs'}>Tabs </NavLink>
                <NavLink to={'/actualTabs'}>Tabs Components </NavLink>
                <NavLink to={'/cartTest'}>Cart Test </NavLink>
                <NavLink to={'/cart'}>Cart</NavLink>
                <NavLink to={'/reactMemo'}>React Memo</NavLink>
                <NavLink to={'/useMemoReact'}>Use Memo</NavLink>
                <NavLink to={'/useCallbackReact'}>Use Callback </NavLink>
                <NavLink to={'/asyncAwait'}>AsyncAwait </NavLink>

            </ul>
        </div >
    )
}

export default SideBar
