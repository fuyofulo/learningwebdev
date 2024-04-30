import { useState, useEffect, useMemo, useCallback } from "react";

function App () {

  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    setExchange2Data({
      returns: 100
    });
  }, [])


  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      })
    }, 5000)
  }, [])


  
  const cryptoReturns = useCallback(() => {
    console.log("hi there from before")
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])



  return <div>
    <CryptoGainsCalculator cryptoReturns={cryptoReturns}></CryptoGainsCalculator>
  </div>
}

const CryptoGainsCalculator = ({ cryptoReturns }) => {
  console.log("crypto re-renders");
  return <div>
    Your crypto returns are {cryptoReturns()}
  </div>

}




export default App;
