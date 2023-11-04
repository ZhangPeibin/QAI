import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow" style={{
        backgroundImage: `url("/a.svg")`,
        backgroundRepeat: "repeat"
      }}>
        <div className="px-5" >
          <h1 className="text-center mb-8">
            <p className="text-4xl m-0 font-medium mt-1">Q.AI.A</p>
          </h1>
          <div className="flex flex-col justify-center items-center gap-8 mb-14 px-4">
            <h2  style={{lineHeight:0}}  className="text-center text-3xl lg:text-5xl max-w-md lg:max-w-2xl  px-3  mt-12 py-0" 
              >
              Answer AI Question   
            </h2>
            <h1 className="text-center text-3xl lg:text-5xl max-w-md lg:max-w-2xl  px-3 py-0 m-0 ">
              To Earn Blockchain Rewards
            </h1>
            

            <p className="m-0 text-center max-w-xl px-3">
              A platform for learning and making money by answering questions based on AI and blockchain
            </p>
           
          </div>

        </div>

        <div className="flex-grow  w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
