import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header'
import LeftSection from './components/LeftSection'
import MainContent from './components/MainContent'
import { useDispatch } from 'react-redux';
import { 
  addColors
} from './features/colorsList/colorSlice'
import { ColorObject, ColorType} from './types'

function App() {
  // allow for access to the redux store
  const dispatch = useDispatch();

  async function getData(url = '') {
    const response = await fetch(url, {
      method:'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    return response ? response.json() : {'error': 'no response'}
  }

  const [loader, setLoader] = useState<boolean>(true)

  // grab the selection of colors
  useEffect(() => {
    getData('https://nameless-badlands-02590.herokuapp.com/colors').then(response => {

      // place array in redux state
      dispatch(addColors(response))

      // data has arrived, change the loader
      setLoader(false)
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mainContainer">
      <Header />
      <LeftSection />
      { loader ?
        <div className='loader'>
          <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
            <circle fill="none" stroke="#363C3C" strokeWidth="4" cx="50" cy="50" r="44" style={{ opacity: "0.5" }} />
            <circle fill="#363C3C" stroke="#363C3C" strokeWidth="3" cx="8" cy="54" r="6" >
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 48"
                to="360 50 52"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
        :
        <MainContent />
      }
    </div>
  );
}

export default App;
