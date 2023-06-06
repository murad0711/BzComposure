import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";

const Invoice2 = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[67.5rem] overflow-hidden text-left text-[0.88rem] text-dimgray font-text-sm-leading-5-font-normal">
      <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_16px_rgba(0,_0,_0,_0.02)] w-[120rem] h-[3.69rem] overflow-hidden text-[1.5rem] text-black">
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
      <div className="absolute top-[4.75rem] left-[0.94rem] rounded-lg bg-white shadow-[0px_4px_32px_rgba(0,_0,_0,_0.04)] w-[58.81rem] h-[49.69rem] overflow-hidden flex flex-col p-[2rem] box-border items-start justify-between">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[1.5rem]">
              <div className="relative">Customer :</div>
              <DropdownButton
                className="w-[15.19rem] flex flex-col self-stretch"
                title="New User"
                variant="primary"
                align="start"
                drop="down"
              >
                <Dropdown.Item>New User</Dropdown.Item>
              </DropdownButton>
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
                          src="/vector5.svg"
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
                        src="/fiplus6.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash2.svg"
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
                          src="/vector5.svg"
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
                        src="/fiplus7.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash3.svg"
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
                          src="/vector6.svg"
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
                        src="/fiplus8.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash3.svg"
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
                          src="/vector6.svg"
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
                        src="/fiplus8.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem]">$400</div>
                  <div className="rounded bg-red-100 w-[2rem] h-[2rem] overflow-hidden shrink-0 flex flex-row py-[0.56rem] px-[1.06rem] box-border items-center justify-center">
                    <img
                      className="relative rounded-[2.67px] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/fitrash3.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative box-border h-[0.06rem] hidden border-t-[1px] border-solid border-grayapa-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.5rem] text-center text-[0.94rem] text-grayapa-500">
          <div className="rounded-md bg-whitesmoke box-border w-[54.81rem] overflow-hidden flex flex-col p-[1.5rem] items-start justify-start gap-[1rem] border-[1px] border-dashed border-actions-extras-unactive-text-color">
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
          <div className="w-[54.81rem] flex flex-row items-center justify-between text-left text-[1rem] text-black">
            <div className="relative leading-[1.25rem] font-medium">
              Payment Method
            </div>
            <div className="w-[27.75rem] h-[3.5rem] flex flex-row items-start justify-start gap-[1.5rem] text-[0.88rem] text-grayapa-500">
              <div className="self-stretch flex-1 rounded bg-white flex flex-row py-[0.5rem] px-[1rem] items-center justify-start border-[1px] border-solid border-grayapa-200">
                <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
                  <input
                    className="cursor-pointer relative rounded-lg bg-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-grayapa-300"
                    type="radio"
                  />
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
              <div className="self-stretch flex-1 rounded bg-white flex flex-row py-[0.5rem] px-[1rem] items-center justify-start border-[1px] border-solid border-grayapa-200">
                <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
                  <input
                    className="cursor-pointer relative rounded-lg bg-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-grayapa-300"
                    type="radio"
                  />
                  <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                    <img
                      className="relative w-[1.62rem] h-[1rem]"
                      alt=""
                      src="/mastercard-logo1.svg"
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
          </div>
        </div>
      </div>
      <div className="absolute top-[4.75rem] left-[60.81rem] rounded-lg bg-white shadow-[0px_4px_32px_rgba(0,_0,_0,_0.04)] w-[58rem] h-[49.69rem] overflow-hidden flex flex-row p-[2rem] box-border items-start justify-end gap-[1.5rem] text-center">
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem]">
          <input
            className="font-text-sm-leading-5-font-normal text-[0.88rem] bg-white self-stretch rounded-md shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[0.56rem] px-[0.81rem] items-center justify-start border-[1px] border-solid border-grayapa-300"
            type="text"
            placeholder="Search Product By Name/Code"
          />
          <div className="flex-1 overflow-y-auto flex flex-col items-start justify-start gap-[0.5rem]">
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
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
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
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
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
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
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
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
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
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
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
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[1rem] bg-whitesmoke flex-1 rounded-md flex flex-col items-center justify-center gap-[1rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                  <div className="self-stretch relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-dimgray text-center">
                    Age of Empires 2 Gold
                  </div>
                  <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
                    (G-AOE2-A)
                  </div>
                </div>
                <div className="relative text-[0.88rem] font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
                  $146
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded bg-whitesmoke w-[10.94rem] flex flex-col p-[0.5rem] box-border items-start justify-start gap-[1rem] text-left text-cadetblue">
          <div className="self-stretch rounded bg-white flex flex-row p-[0.5rem] items-center justify-start gap-[0.63rem]">
            <div className="flex flex-col p-[0.25rem] items-start justify-start">
              <img
                className="relative w-[1rem] h-[1rem]"
                alt=""
                src="/component-2.svg"
              />
            </div>
            <div className="relative font-medium">All</div>
          </div>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-226.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              Software
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-227.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              Monitor
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-210.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              DVD
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-228.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              Unclassified
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-212.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              Video Games
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-229.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              Hardware
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-230.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              <p className="m-0">Upfront</p>
              <p className="m-0">Deposit</p>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-231.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              Security
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-232.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              Productivity
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-233.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              <p className="m-0">Computer</p>
              <p className="m-0">Service</p>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0.5rem] bg-white self-stretch rounded flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-234.svg"
            />
            <div className="relative text-[0.88rem] font-text-sm-leading-5-font-normal text-grayapa-500 text-left">
              <p className="m-0">Recurring</p>
              <p className="m-0">Service Billing</p>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[10.81rem] left-[8.13rem] rounded-md w-[13.88rem] hidden flex-col items-start justify-start text-[1rem] text-grayapa-500">
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
      <div className="absolute bottom-[0rem] left-[0rem] bg-white w-[120rem] flex flex-row py-[1rem] px-[0rem] box-border items-center justify-center">
        <div className="w-[40.44rem] flex flex-row items-start justify-start gap-[1.5rem]">
          <button className="cursor-pointer [border:none] p-[1rem] bg-gainsboro flex-1 rounded-md flex flex-row items-center justify-center gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/fiprinter2.svg"
            />
            <div className="relative text-[1rem] uppercase font-medium font-text-sm-leading-5-font-normal text-white text-left">{`Save & Print`}</div>
          </button>
          <button className="cursor-pointer [border:none] p-[1rem] bg-lightcyan flex-1 rounded-md flex flex-row items-center justify-center gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/fisave2.svg"
            />
            <div className="relative text-[1rem] uppercase font-medium font-text-sm-leading-5-font-normal text-cadetblue text-left">
              Draft
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[1rem] bg-red-100 flex-1 rounded-md flex flex-row items-center justify-center gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/fix1.svg"
            />
            <div className="relative text-[1rem] uppercase font-medium font-text-sm-leading-5-font-normal text-firebrick text-left">
              Clear All
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice2;
