
import React, {useState} from 'react'

interface PopUpProps{
  children: React.ReactNode;
}

const WelcomePopupBG:React.FC<PopUpProps> =({children}) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className='min-h-screen w-full bg-[linear-gradient(to_bottom,#3B1F834_30%,#004AAD80_50%,#004AADB2_70%)] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-grainBg'>
          {/* <button onClick={handleButtonClick}>Open Pop-up</button> */}
            <div className="popup">
              <div className="popup-content">
                <h1>Welcome To Digiverse</h1>
                <p>Mint your soul bound NFT pass</p>
                  {children}
              </div>
            </div>
        </div>
      )}
    </>
  );
}

export default WelcomePopupBG