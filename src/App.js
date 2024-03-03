import React, { useState } from "react";
import InputBox from "./Component/InputBox";
import Button from "./Component/Button";
import { countryList } from "./Util/Codes";
import CurrencyInfo from "./Util/CurrencyInfo";

const App = () => {
  const [selectedFromCurrency, setSelectedFromCurrency] = useState("USD");
  const [selectedToCurrency, setSelectedToCurrency] = useState("INR");
  const [fromAmout, setFromAmount] = useState(0);
  const [toAmout, setToAmount] = useState(0);

  const currencyInfo = CurrencyInfo(selectedFromCurrency.toLowerCase());
  const swap = () => {
    setFromAmount(toAmout);
    setToAmount(fromAmout);
    setSelectedFromCurrency(selectedToCurrency);
    setSelectedToCurrency(selectedFromCurrency);
  };
  const convert = () => {
    setToAmount(fromAmout * currencyInfo[selectedToCurrency.toLowerCase()]);
  };
  return (
    <div
      className="w-full h-full flex flex-wrap justify-center item-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/904735/pexels-photo-904735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="bg-white/30  w-2/4 mx-auto my-[8%] rounded-3xl backdrop-blur-sm  pb-8">
        <InputBox
          label={"From"}
          boxStyle={
            "flex flex-row mt-6 bg-white rounded-3xl w-11/12 mt- mx-auto z-12"
          }
          selectedCurrency={selectedFromCurrency}
          onCurrencyChange={setSelectedFromCurrency}
          amount={fromAmout}
          onAmountChange={setFromAmount}
          currencyOptions={countryList}
        />
        <InputBox
          label={"To"}
          boxStyle={
            "flex flex-row mt-4 bg-white rounded-3xl w-11/12 mt- mx-auto z-12"
          }
          amount={toAmout}
          onAmountChange={setToAmount}
          selectedCurrency={selectedToCurrency}
          onCurrencyChange={setSelectedToCurrency}
          currencyOptions={countryList}
          amountDisable={true}
        />
        <Button
          buttonStyle={
            "w-1/12 bg-slate-400 flex justify-center items-center mx-auto h-8 rounded-xl z-10 mt-[-14.3rem]"
          }
          textStyle={"text-xl text-center"}
          buttonLable={"Swap"}
          handleOnClick={swap}
        />

        <Button
          buttonStyle={
            "mt-6 bg-slate-400 flex justify-center items-center w-11/12 mx-auto h-20 rounded-3xl mt-[14rem]"
          }
          textStyle={"text-center text-3xl"}
          buttonLable={`Convert ${selectedFromCurrency} to ${selectedToCurrency}`}
          countryList={countryList}
          fromCountryCode={selectedFromCurrency.toLowerCase()}
          toCountryCode={selectedToCurrency.toLowerCase()}
          handleOnClick={convert}
        />
      </div>
    </div>
  );
};

export default App;
