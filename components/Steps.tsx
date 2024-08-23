import { steps } from "@/constants/steps";
import Container from "./Container";
import Title from "./Title";
import { cn } from "@/lib/utils";

const Steps = () => {
  return (
    <Container
      id="steps"
      className="flex flex-col xl:gap-[50px] gap-[30px] items-center scroll-mt-28 px-4"
    >
      <Title>Этапы нашей работы</Title>

      <ul className="w-full flex xl:flex-wrap xl:flex-row flex-col xl:gap-6 gap-[30px] xl:pl-0 pl-10 xl:border-none border-dashed border-l border-red">
        {steps.map(({ id, text }, idx) => {
          const everyThree = (idx + 1) % 3 === 0;

          return (
            <li
              key={id}
              className={cn(
                "flex flex-col xl:gap-1 group",
                !everyThree ? "xl:w-[415px] w-full" : "xl:w-[276px] w-full"
              )}
            >
              <div className="relative">
                <svg
                  className="absolute top-4 -left-10 -translate-x-1/2 xl:hidden block"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-5.68248e-07 13C-8.82083e-07 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 -2.54413e-07 13 -5.68248e-07C5.8203 -8.82083e-07 -2.54413e-07 5.8203 -5.68248e-07 13Z"
                    fill="#EFBAB9"
                  />
                  <path
                    d="M8 13C8 15.7614 10.2386 18 13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13Z"
                    fill="#DE2E2D"
                  />
                </svg>

                <span className="font-semibold xl:text-[52px] text-[46px] xl:leading-[63.34px] leading-[56.03px] opacity-30 group-hover:opacity-100 transition-all duration-300">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex gap-1.5">
                <p
                  className="xl:text-xl text-lg xl:leading-[26px] leading-[23.4px] text-black-36 xl:max-w-[276px] w-full"
                  dangerouslySetInnerHTML={{ __html: text }}
                />

                {!everyThree && (
                  <svg
                    className="xl:block hidden flex-shrink-0"
                    width="133"
                    height="26"
                    viewBox="0 0 133 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_74_776)">
                      <path d="M16 13H119" stroke="#DE2E2D" />
                      <path
                        d="M23 26C30.1797 26 36 20.1797 36 13C36 5.8203 30.1797 0 23 0C15.8203 0 10 5.8203 10 13C10 20.1797 15.8203 26 23 26Z"
                        fill="#EFBAB9"
                      />
                      <path
                        d="M23 18C25.7614 18 28 15.7614 28 13C28 10.2386 25.7614 8 23 8C20.2386 8 18 10.2386 18 13C18 15.7614 20.2386 18 23 18Z"
                        fill="white"
                      />
                      <path
                        d="M120 26C127.18 26 133 20.1797 133 13C133 5.8203 127.18 0 120 0C112.82 0 107 5.8203 107 13C107 20.1797 112.82 26 120 26Z"
                        fill="#EFBAB9"
                      />
                      <path
                        d="M124.5 13C124.5 15.4853 122.485 17.5 120 17.5C117.515 17.5 115.5 15.4853 115.5 13C115.5 10.5147 117.515 8.5 120 8.5C122.485 8.5 124.5 10.5147 124.5 13Z"
                        fill="#DE2E2D"
                        stroke="#DE2E2D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_74_776">
                        <rect width="133" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
export default Steps;
