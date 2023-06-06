import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const POS1 = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/pos1");
  }, [navigate]);

  return (
    <div className="relative rounded-2xl bg-whitesmoke w-full h-[50.75rem] overflow-hidden text-left text-[1rem] text-black font-text-sm-leading-5-font-normal">
      <div className="absolute top-[calc(50%_-_378px)] left-[1.38rem] w-[19.63rem] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[0.56rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/fichevronleft.svg"
          />
          <div className="relative font-medium">POS</div>
        </div>
        <img
          className="relative w-[1.5rem] h-[1.44rem] cursor-pointer"
          alt=""
          src="/group-405.svg"
          onClick={onGroupIconClick}
        />
      </div>
      <div className="absolute top-[4.25rem] left-[1.88rem] w-[19.69rem] flex flex-col items-start justify-start gap-[0.75rem] text-[0.88rem] text-grayapa-500">
        <div className="rounded w-[54rem] flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="rounded-31xl bg-white flex flex-row py-[0.25rem] px-[1rem] items-center justify-start gap-[0.5rem] text-cadetblue">
            <div className="flex flex-col p-[0.25rem] items-start justify-start">
              <img
                className="relative w-[1rem] h-[1rem]"
                alt=""
                src="/component-2.svg"
              />
            </div>
            <div className="relative font-medium">All</div>
          </div>
          <div className="rounded-31xl bg-white flex flex-row py-[0.25rem] px-[1rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-21.svg"
            />
            <div className="relative">Software</div>
          </div>
          <div className="rounded-31xl bg-white flex flex-row py-[0.25rem] px-[1rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-22.svg"
            />
            <div className="relative">Monitor</div>
          </div>
          <div className="rounded bg-white w-[8.13rem] flex flex-row py-[0.25rem] px-[0.5rem] box-border items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-23.svg"
            />
            <div className="relative">DVD</div>
          </div>
          <div className="rounded bg-white flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-24.svg"
            />
            <div className="relative">Unclassified</div>
          </div>
          <div className="rounded bg-white flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-start gap-[0.63rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/component-25.svg"
            />
            <div className="relative">Video Games</div>
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/fichevronright.svg"
          />
        </div>
        <div className="rounded-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[19.69rem] overflow-hidden flex flex-row py-[0.56rem] px-[0.81rem] items-center justify-start gap-[0.5rem] border-[1px] border-solid border-grayapa-300">
          <img
            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
            alt=""
            src="/search.svg"
          />
          <div className="relative leading-[1.5rem]">
            Search Product By Name/Code
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.25rem] text-dimgray">
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
          <div className="rounded-md bg-white w-[19.63rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-start justify-between">
            <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative font-medium">
                Age of Empires 2 Gold
              </div>
              <div className="relative text-[0.75rem] text-grayapa-500">
                (G-AOE2-A)
              </div>
            </div>
            <div className="relative font-medium text-cadetblue">$146</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS1;
