import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'
import Logo from '../../assets/image/navbar/ACY.png'

const Navbar = () => {
  const [showLangList, setShowLangList] = useState(false)
  const dropDownRef = useRef(null)


  return (
    <>
      <nav className='nav'>
        <div className='navWidth'>
          <div className='navAlign'>
            {/* logo part */}
            <div className='logoArea'>
              <Link to='/' className='navLogo'>
                <img src={Logo} alt='logo' />
              </Link>
            </div>
            {/* login/avatar part */}
            <div className='loginArea login'>
              <Link to='/login' className='navText'>
                {/* {t('navbar.login')} */}
              </Link>
              <div className='text-blue-500'>
                logout
              </div>
              <div onClick={() => setShowLangList(!showLangList)} className='navLang'>
                {/* <div className='navLangIcon'>
                  <img alt='language' src={languageIcon} />
                </div>
                <div className='translateIcon'>
                  <img alt='languageArrow' src={languageArrowIcon} />
                </div> */}
                {/* {showLangList && (
                  <Language
                    dropDownRef={dropDownRef}
                    checkIfClickedOutside={checkIfClickedOutside}
                    showLangList={showLangList}
                    setShowLangList={setShowLangList}
                  />
                )} */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
