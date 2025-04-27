import React from 'react'

// interface InfoBoxProps {
//   tmsg: string
//   msg: string
// }

const InfoBox = ({ tmsg, msg }: { tmsg: string; msg: string }) => {
  return (
    <div className='h-36 w-40 p-6 bg-gradient-to-t from-[#181818] via-[#004AAD] to-[#191818] rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center gap-8'>
        <p className="text-md font-chakra uppercase text-white font-medium">{tmsg}</p>
        <div className="w-36 h-10 bg-[#A176D6] p-4 flex items-center justify-center">
        <p className="text-md font-chakra p-2 uppercase text-white font-medium">{msg}</p>
        </div>
    </div>
  //   <div className='h-36 w-40 py-4 bg-gradient-to-t from-[#181818] via-[#004AAD] to-[#191818] rounded-tl-[50px] rounded-br-[50px] flex flex-col items-center justify-center gap-8 shadow-lg shadow-blue-500/20 transition-all duration-500'>
  //   <p className="text-md font-chatra uppercase text-white font-medium">{tmsg}</p>
  //   <div className="w-36 h-10 bg-[#A176D6] flex items-center justify-center rounded-md">
  //     <p className="text-md font-chatra uppercase text-white font-medium">{msg}</p>
  //   </div>
  // </div>
  )
}

export default InfoBox