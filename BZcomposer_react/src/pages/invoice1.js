import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Invoice1 = () => {
  const navigate = useNavigate();

  const onActionsContainerClick = useCallback(() => {
    navigate("/invoice1");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke w-full h-[67.5rem] overflow-hidden text-left text-[1.5rem] text-grayapa-500 font-text-sm-leading-5-font-normal">
      <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_16px_rgba(0,_0,_0,_0.02)] w-[120rem] h-[3.69rem] overflow-hidden text-black">
        <img
          className="absolute top-[0rem] left-[0rem] w-[120rem] h-[5rem] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="absolute top-[0.25rem] left-[1.5rem] bg-white w-[17.25rem] h-[4.5rem]" />
        <div className="absolute top-[0rem] left-[82.06rem] bg-white w-[37.94rem] h-[5rem]" />
        <div className="absolute top-[calc(50%_-_14.5px)] left-[1.5rem] flex flex-row items-center justify-start gap-[0.56rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/fichevronleft1.svg"
          />
          <div className="relative font-medium">POS</div>
        </div>
      </div>
      <div className="absolute top-[4.75rem] left-[0.94rem] rounded-lg bg-white shadow-[0px_4px_32px_rgba(0,_0,_0,_0.04)] w-[58.81rem] h-[47.75rem] overflow-hidden flex flex-col p-[2rem] box-border items-start justify-between text-[0.88rem] text-dimgray">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[1.5rem]">
              <div className="relative">Customer :</div>
              <div className="self-stretch rounded-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[15.19rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-[1rem] text-gray-900 border-[1px] border-solid border-grayapa-300">
                <div className="self-stretch rounded-t-md rounded-b-none bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[0.56rem] px-[0.81rem] items-center justify-start gap-[0.25rem] border-[1px] border-solid border-grayapa-300">
                  <div className="flex-1 relative leading-[1.5rem]">
                    New User
                  </div>
                  <img
                    className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-[1rem] font-medium text-cadetblue hidden">
              Invoice: 1007
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between relative">
                <div className="relative font-medium z-[0]">Product Name</div>
                <div className="relative font-medium z-[1]">Action</div>
                <div className="absolute my-0 mx-[!important] top-[0rem] left-[30.38rem] font-medium z-[2]">
                  Quantity
                </div>
                <div className="absolute my-0 mx-[!important] top-[0rem] left-[43.38rem] font-medium z-[3]">
                  Sub Total
                </div>
                <div className="absolute my-0 mx-[!important] top-[0rem] left-[21.25rem] font-medium z-[4]">
                  Unit Price
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-grayapa-500">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-start gap-[0.5rem] text-cadetblue">
                    <div className="relative font-medium">The Game of Life</div>
                    <div className="relative text-[0.88rem] text-grayapa-500">
                      (G-LIFE-JC2)
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$146</div>
                  <div className="flex flex-row items-center justify-start gap-[1.25rem]">
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                        <img
                          className="relative w-[0.68rem] h-[0.09rem]"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-medium">4</div>
                    <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden flex-row py-[0rem] px-[0.5rem] items-center justify-center text-[0.88rem] border-[1px] border-solid border-grayapa-300">
                      <div className="relative leading-[1.5rem]">4</div>
                    </div>
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <img
                        className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fiplus4.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-grayapa-300" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-start gap-[0.5rem] text-cadetblue">
                    <div className="relative font-medium">The Game of Life</div>
                    <div className="relative text-[0.88rem] text-grayapa-500">
                      (G-LIFE-JC2)
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$146</div>
                  <div className="flex flex-row items-center justify-start gap-[1.25rem]">
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                        <img
                          className="relative w-[0.68rem] h-[0.09rem]"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-medium">3</div>
                    <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden flex-row py-[0rem] px-[0.5rem] items-center justify-center text-[0.88rem] border-[1px] border-solid border-grayapa-300">
                      <div className="relative leading-[1.5rem]">4</div>
                    </div>
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <img
                        className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fiplus4.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-grayapa-300" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-start gap-[0.5rem] text-cadetblue">
                    <div className="relative font-medium">The Game of Life</div>
                    <div className="relative text-[0.88rem] text-grayapa-500">
                      (G-LIFE-JC2)
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$146</div>
                  <div className="flex flex-row items-center justify-start gap-[1.25rem]">
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                        <img
                          className="relative w-[0.68rem] h-[0.09rem]"
                          alt=""
                          src="/vector4.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-medium">1</div>
                    <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden flex-row py-[0rem] px-[0.5rem] items-center justify-center text-[0.88rem] border-[1px] border-solid border-grayapa-300">
                      <div className="relative leading-[1.5rem]">4</div>
                    </div>
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <img
                        className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fiplus5.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-grayapa-300" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-start gap-[0.5rem] text-cadetblue">
                    <div className="relative font-medium">The Game of Life</div>
                    <div className="relative text-[0.88rem] text-grayapa-500">
                      (G-LIFE-JC2)
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$146</div>
                  <div className="flex flex-row items-center justify-start gap-[1.25rem]">
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <div className="rounded-[2.67px] overflow-hidden flex flex-col py-[0.5rem] px-[0.21rem] items-start justify-start">
                        <img
                          className="relative w-[0.68rem] h-[0.09rem]"
                          alt=""
                          src="/vector4.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-medium">2</div>
                    <div className="rounded bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[3.5rem] overflow-hidden shrink-0 hidden flex-row py-[0rem] px-[0.5rem] items-center justify-center text-[0.88rem] border-[1px] border-solid border-grayapa-300">
                      <div className="relative leading-[1.5rem]">4</div>
                    </div>
                    <div className="rounded bg-aliceblue w-[1.5rem] h-[1.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <img
                        className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fiplus5.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative box-border h-[0.06rem] hidden border-t-[1px] border-solid border-grayapa-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-center text-[0.94rem] text-grayapa-500">
          <div className="rounded-md bg-whitesmoke box-border w-[54.81rem] overflow-hidden flex flex-col py-[1.5rem] px-[2rem] items-start justify-start gap-[1rem] border-[1px] border-dashed border-actions-extras-unactive-text-color">
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
            <div className="self-stretch flex flex-row items-start justify-between text-left text-[1.88rem] text-black">
              <div className="relative uppercase font-semibold">total</div>
              <div className="relative uppercase font-semibold text-right">
                $1180
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4.75rem] left-[60.81rem] rounded-lg bg-white shadow-[0px_4px_32px_rgba(0,_0,_0,_0.04)] w-[58rem] h-[47.75rem] overflow-hidden flex flex-row p-[2rem] box-border items-start justify-end gap-[1.5rem] text-[0.88rem]">
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem]">
          <div className="self-stretch rounded-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[0.56rem] px-[0.81rem] items-center justify-start gap-[0.5rem] border-[1px] border-solid border-grayapa-300">
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/search.svg"
            />
            <div className="relative leading-[1.5rem]">
              Search Product By Name/Code
            </div>
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col items-start justify-start gap-[0.5rem] text-center text-dimgray">
            <div className="w-[41.56rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
            </div>
            <div className="w-[41.56rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
            </div>
            <div className="w-[41.56rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
            </div>
            <div className="w-[41.56rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
            </div>
            <div className="w-[41.56rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
            </div>
            <div className="w-[41.56rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-col p-[1rem] items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative font-medium">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative font-medium text-cadetblue text-left">
                  $146
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded bg-whitesmoke w-[10.94rem] flex flex-col p-[0.5rem] box-border items-start justify-start gap-[1rem]">
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem] text-cadetblue">
            <div className="flex flex-col p-[0.25rem] items-start justify-start">
              <img
                className="relative w-[1rem] h-[1rem]"
                alt=""
                src="/component-219.svg"
              />
            </div>
            <div className="relative font-medium">All</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-220.svg"
            />
            <div className="relative">Software</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-221.svg"
            />
            <div className="relative">Monitor</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-210.svg"
            />
            <div className="relative">DVD</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-222.svg"
            />
            <div className="relative">Unclassified</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-212.svg"
            />
            <div className="relative">Video Games</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-213.svg"
            />
            <div className="relative">Hardware</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-214.svg"
            />
            <div className="relative">
              <p className="m-0">Upfront</p>
              <p className="m-0">Deposit</p>
            </div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-215.svg"
            />
            <div className="relative">Security</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-223.svg"
            />
            <div className="relative">Productivity</div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-224.svg"
            />
            <div className="relative">
              <p className="m-0">Computer</p>
              <p className="m-0">Service</p>
            </div>
          </div>
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-225.svg"
            />
            <div className="relative">
              <p className="m-0">Recurring</p>
              <p className="m-0">Service Billing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[10.81rem] left-[8.13rem] rounded-md w-[13.88rem] hidden flex-col items-start justify-start text-[1rem]">
        <div className="self-stretch rounded-t-md rounded-b-none bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[0.56rem] px-[0.81rem] items-center justify-start text-cadetblue">
          <div className="relative leading-[1.5rem]">New User</div>
        </div>
        <div className="self-stretch bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[0.56rem] px-[0.81rem] items-center justify-start">
          <div className="relative leading-[1.5rem]">Add User</div>
        </div>
        <div className="self-stretch rounded-tl-none rounded-tr-md rounded-b-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[0.56rem] px-[0.81rem] items-center justify-start">
          <div className="relative leading-[1.5rem]">Postal code</div>
        </div>
      </div>
      <div className="absolute bottom-[0rem] left-[0rem] bg-white w-[120rem] flex flex-row py-[1rem] px-[0rem] box-border items-center justify-center text-[1rem] text-white">
        <div className="w-[40.44rem] flex flex-row items-start justify-start gap-[1.5rem]">
          <div className="flex-1 rounded-md bg-cadetblue flex flex-row p-[1rem] items-center justify-center gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/fiprinter2.svg"
            />
            <div className="relative uppercase font-medium">{`Save & Print`}</div>
          </div>
          <div className="flex-1 rounded-md bg-lightcyan flex flex-row p-[1rem] items-center justify-center gap-[0.63rem] text-cadetblue">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/fisave2.svg"
            />
            <div className="relative uppercase font-medium">Draft</div>
          </div>
          <div className="flex-1 rounded-md bg-red-100 flex flex-row p-[1rem] items-center justify-center gap-[0.63rem] text-firebrick">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/fix1.svg"
            />
            <div className="relative uppercase font-medium">Clear All</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_540px)] left-[calc(50%_-_960px)] bg-slategray w-[120rem] h-[67.5rem] flex flex-col items-center justify-center text-center text-gray-900">
        <div className="rounded-lg bg-white shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_10px_10px_-5px_rgba(0,_0,_0,_0.04)] w-[24rem] overflow-hidden flex flex-col p-[2rem] box-border items-center justify-start gap-[2rem]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
              <img
                className="relative rounded-3xl w-[3rem] h-[3rem]"
                alt=""
                src="/modalsillustration.svg"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                <div className="self-stretch relative leading-[1.5rem] font-medium">
                  Successful
                </div>
                <div className="self-stretch relative text-[0.88rem] leading-[1.25rem] text-grayapa-500">
                  Your data was successfully saved and printed
                </div>
              </div>
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start cursor-pointer text-left text-[0.88rem] text-white"
            onClick={onActionsContainerClick}
          >
            <div className="self-stretch rounded-md bg-cadetblue shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[2.75rem] overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1.06rem] box-border items-center justify-center">
              <div className="relative leading-[1.25rem] font-medium">Done</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice1;
