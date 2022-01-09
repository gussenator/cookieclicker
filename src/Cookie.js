import cockie from './images/cockie.png'

const Cookie = ({ cookie, handleValue}) => {


    return (
      <div>
        <h1>Value: {(Math.round(cookie*10))/10}</h1>
        <button onClick={() => handleValue()}>
            <img src={cockie} />
        </button>
      </div>
    );
}

export default Cookie

