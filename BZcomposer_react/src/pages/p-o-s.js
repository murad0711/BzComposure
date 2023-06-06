import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const POS = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/pos");
  }, [navigate]);

  return (
    <div className="relative rounded-2xl bg-whitesmoke w-full h-[50.75rem] overflow-hidden text-left text-[1rem] text-black font-text-sm-leading-5-font-normal">
      <div className="absolute top-[calc(50%_-_378px)] left-[1.38rem] w-[19.63rem] flex flex-row items-center justify-start gap-[6.5rem]">
        <div
          className="flex flex-row items-center justify-start gap-[0.56rem] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/fichevronleft.svg"
          />
          <div className="relative font-medium">Cart</div>
        </div>
        <img
          className="relative w-[1.38rem] h-[1.31rem] hidden"
          alt=""
          src="/group-405.svg"
        />
      </div>
      <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-2xl rounded-b-lg bg-whitesmoke shadow-[0px_0px_16px_rgba(0,_0,_0,_0.04)] h-[46.75rem] overflow-hidden flex flex-col p-[1rem] box-border items-center justify-between text-[0.75rem] text-grayapa-500">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="w-[21.44rem] flex flex-col items-start justify-center gap-[0.5rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="w-[14.25rem] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium text-dimgray">
                    Age of Empires 2 Gold
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Unit Price</div>
                    <div className="relative font-medium text-cadetblue">
                      $146
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Sub Total</div>
                    <div className="relative font-medium text-cadetblue">
                      $400
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[1.25rem] text-[1rem]">
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                      <img
                        className="relative w-[0.68rem] h-[0.09rem]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="relative font-medium">4</div>
                  <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden border-[1px] border-solid border-grayapa-300" />
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fiplus.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-grayapa-300" />
            </div>
            <div className="w-[21.44rem] flex flex-col items-start justify-center gap-[0.5rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="w-[14.25rem] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium text-dimgray">
                    Age of Empires 2 Gold
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Unit Price</div>
                    <div className="relative font-medium text-cadetblue">
                      $146
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Sub Total</div>
                    <div className="relative font-medium text-cadetblue">
                      $400
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[1.25rem] text-[1rem]">
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                      <img
                        className="relative w-[0.68rem] h-[0.09rem]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="relative font-medium">4</div>
                  <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden border-[1px] border-solid border-grayapa-300" />
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fiplus.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-grayapa-300" />
            </div>
            <div className="w-[21.44rem] flex flex-col items-start justify-center gap-[0.5rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="w-[14.25rem] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium text-dimgray">
                    Age of Empires 2 Gold
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Unit Price</div>
                    <div className="relative font-medium text-cadetblue">
                      $146
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Sub Total</div>
                    <div className="relative font-medium text-cadetblue">
                      $400
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[1.25rem] text-[1rem]">
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                      <img
                        className="relative w-[0.68rem] h-[0.09rem]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="relative font-medium">4</div>
                  <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden border-[1px] border-solid border-grayapa-300" />
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fiplus.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-grayapa-300" />
            </div>
            <div className="w-[21.44rem] flex flex-col items-start justify-center gap-[0.5rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="w-[14.25rem] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium text-dimgray">
                    Age of Empires 2 Gold
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Unit Price</div>
                    <div className="relative font-medium text-cadetblue">
                      $146
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative">Sub Total</div>
                    <div className="relative font-medium text-cadetblue">
                      $400
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[1.25rem] text-[1rem]">
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                      <img
                        className="relative w-[0.68rem] h-[0.09rem]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="relative font-medium">4</div>
                  <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden border-[1px] border-solid border-grayapa-300" />
                  <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fiplus1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch relative box-border h-[0.06rem] hidden border-t-[1px] border-solid border-grayapa-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem] text-[0.88rem]">
          <div className="self-stretch rounded-md bg-white overflow-hidden flex flex-col py-[0.5rem] px-[1rem] items-start justify-start gap-[0.5rem] text-center text-[0.94rem] border-[1px] border-dashed border-actions-extras-unactive-text-color">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative capitalize">Items Total</div>
                <div className="relative text-[1rem] uppercase font-medium text-black text-right">
                  $1200
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                    <div className="relative capitalize">Tax</div>
                    <div className="relative text-[0.88rem] uppercase text-black text-right hidden">
                      10%
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-right text-[0.88rem]">
                  <div className="relative uppercase">(7.75%)</div>
                  <div className="relative text-[1rem] uppercase font-medium text-black">
                    $7.5
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative capitalize">Discount Amount</div>
                </div>
                <div className="self-stretch rounded-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[7.44rem] overflow-hidden shrink-0 flex flex-row py-[0.5rem] px-[0.81rem] items-center justify-end text-left text-[1rem] text-gray-900 border-[1px] border-solid border-grayapa-300">
                  <div className="relative leading-[1.5rem]">0.0</div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-dashed border-actions-extras-unactive-text-color" />
            <div className="self-stretch flex flex-row items-start justify-between text-left text-[1.5rem] text-black">
              <div className="relative uppercase font-semibold">total</div>
              <div className="relative uppercase font-semibold text-right">
                $1180
              </div>
            </div>
          </div>
          <div className="w-[21.44rem] h-[2.63rem] flex flex-row items-start justify-start gap-[1.5rem]">
            <div className="self-stretch flex-1 rounded bg-white flex flex-row py-[0.25rem] px-[1rem] items-center justify-start border-[1px] border-solid border-grayapa-200">
              <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
                <div className="relative rounded-lg bg-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-grayapa-300" />
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/moneybag-1.svg"
                  />
                  <div className="relative leading-[1.25rem]">Cash</div>
                </div>
              </div>
              <div className="flex-1 relative leading-[1.25rem] text-center hidden text-gray-900">
                <span className="font-medium">$29 / mo</span>
                <span className="text-grayapa-500"> ($290 / yr)</span>
              </div>
              <div className="flex-1 relative leading-[1.25rem] text-right hidden">
                Up to 5 active job postings
              </div>
            </div>
            <div className="self-stretch flex-1 rounded bg-white flex flex-row py-[0.25rem] px-[1rem] items-center justify-start border-[1px] border-solid border-grayapa-200">
              <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
                <div className="relative rounded-lg bg-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-grayapa-300" />
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="relative w-[1.62rem] h-[1rem]"
                    alt=""
                    src="/mastercard-logo.svg"
                  />
                  <div className="relative leading-[1.25rem]">Card</div>
                </div>
              </div>
              <div className="flex-1 relative leading-[1.25rem] text-center hidden text-gray-900">
                <span className="font-medium">$29 / mo</span>
                <span className="text-grayapa-500"> ($290 / yr)</span>
              </div>
              <div className="flex-1 relative leading-[1.25rem] text-right hidden">
                Up to 5 active job postings
              </div>
            </div>
          </div>
          <div className="w-[21.44rem] flex flex-col items-start justify-start gap-[0.5rem] text-white">
            <div className="self-stretch rounded bg-cadetblue flex flex-row py-[0.75rem] px-[1rem] items-center justify-center gap-[0.63rem]">
              <img
                className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                alt=""
                src="/fiprinter.svg"
              />
              <div className="relative uppercase font-medium">{`Save & Print`}</div>
            </div>
            <div className="self-stretch rounded bg-lightcyan flex flex-row py-[0.75rem] px-[1rem] items-center justify-center gap-[0.63rem] text-cadetblue">
              <img
                className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                alt=""
                src="/fisave.svg"
              />
              <div className="relative uppercase font-medium">Draft</div>
            </div>
            <div className="self-stretch rounded bg-red-100 flex flex-row py-[0.75rem] px-[1rem] items-center justify-center gap-[0.63rem] text-firebrick">
              <img
                className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                alt=""
                src="/fix.svg"
              />
              <div className="relative uppercase font-medium">Clear All</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
