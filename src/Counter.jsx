import React, { useState } from 'react';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

const Counter = () => {
    const [num, setnum] = useState(0);
    const [color, setcolor] = useState(true);
    const bright = color ? "lit" : "dark";
    return (
        <>
            <div className={`main ${bright}`}>

                <div className="change-mode">
                    <div className="mode" onClick={() => {
                        setcolor(!color)
                    }}>
                        {(color) ? <DarkModeSharpIcon /> : <WbSunnyRoundedIcon />}
                    </div>
                </div>

                <div className="counter">
                    <h1>Counter App</h1>

                    <div className="count">
                        <button onClick={() => {
                            setnum(num + 1)
                        }}><AddCircleRoundedIcon style={{ fontSize: "50px", color: "rgb(94, 218, 94)" }} /> </button>
                        <span>{num}</span>
                        <button onClick={() => {
                            setnum(num - 1)
                        }}> <RemoveCircleRoundedIcon style={{ fontSize: "50px", color: "red" }} /> </button>
                    </div>

                    <div className="reset">
                        <button onClick={() => {
                            setnum(0)
                        }}> <RestartAltRoundedIcon style={{ fontSize: "50px", color: "red" }} /> </button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default Counter;