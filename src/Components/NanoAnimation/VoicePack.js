import React from 'react'
import "./VoicePackCSS.css"

function VoicePack() {

    return (
        <div className={`flex items-center justify-center gap-[2px] w-fit`}>
            <div className="w-[2px] bg-gray-100 rounded-full line line-one"></div>
            <div className="w-[2px] bg-gray-100 rounded-full line line-two"></div>
            <div className="w-[2px] bg-gray-100 rounded-full line line-two"></div>
            <div className="w-[2px] bg-gray-100 rounded-full line line-four"></div>
        </div>
    )
}

export default VoicePack