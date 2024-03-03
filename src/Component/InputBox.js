import React from "react";

const InputBox = ({
  label,
  boxStyle,
  amount,
  amountDisable = false,
  currencyDisable = false,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency,
  currencyOptions = {},
}) => {
  return (
    <div className={boxStyle}>
      <div className="w-1/2 my-8  flex ml-8 flex-col">
        <label className="text-black/40 mb-2 text-xl my-4">{label}</label>
        <input
          type="number"
          className="my-4 outline-none py-4 appearance-none "
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          onFocus={(e) => onAmountChange("")}
        />
      </div>
      <div className="flex flex-col w-1/2 items-end my-8 mr-8">
        <label className=" text-black/40 mb-2 text-xl my-4">
          Current Currency
        </label>
        <div className="flex flex-row w-5/12 max-h-14  border-[1px] border-gray-300 ml-8 rounded-2xl">
          <img
            src={`https://flagsapi.com/${currencyOptions[selectedCurrency]}/flat/64.png`}
            className=" h-5/6 my-auto ml-2"
            alt={`${selectedCurrency} flag`}
          />
          <select
            name=""
            id=""
            className=" rounded-xl text-xl bg-white focus:outline-none ml-2 w-7/12"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {Object.entries(currencyOptions).map(([countryCode, country]) => {
              return (
                <option key={countryCode} value={countryCode}>
                  {countryCode}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
