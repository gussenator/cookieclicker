const CookieStore = ({upgrades, handleAmmount}) => {


    
    return (
        <div>
            <ul>
                {upgrades.map((upgrade) => (
                    <li key={upgrade.id}>
                        {upgrade.id}
                        <button  onClick={() => handleAmmount(upgrade.id)} >Buy</button>
                        <p>You have: {upgrade.ammount} {upgrade.id}'s</p>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

export default CookieStore
