import CookieStore from './CookieStore'
import Cookie from './Cookie'
import { useState, useEffect } from 'react';

function App() {

  // CookieStore
  const [upgrades, setUpgrades] = useState([
    {
        id: 'ClickValue',
        ammount: 0,
    },
    {
        id: 'Granny',
        ammount: 0,
    }
])
  const handleAmmount = (id) => {
    const listUpgrades = upgrades.map((upgrade) => upgrade.id === id ? {...upgrade, ammount: upgrade.ammount + 1 } : upgrade)
    setUpgrades(listUpgrades)
  }
  let cookiesPerSecond = 0;



// Cookie
  const [cookie, setCookie] = useState(0);

  let cookiesPerClick = 1 + (0.1 * upgrades[0].ammount)

  const handleValue = () => {
    setCookie(cookie + cookiesPerClick)
  }

// other
  useEffect(() => {
    const interval = setInterval(() => {
      setCookie(previousValue => previousValue + upgrades[1].ammount);
    }, 1000);

    return () => clearInterval(interval);
  }, [upgrades[1].ammount]);

  return(
    <div>
      <Cookie cookie={cookie} handleValue={handleValue}/>
      <CookieStore upgrades={upgrades} handleAmmount={handleAmmount}/>
    </div>
  )
}

export default App;
