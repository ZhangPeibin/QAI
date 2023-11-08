import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, CubeTransparentIcon, GifIcon, GiftIcon, MagnifyingGlassIcon, NoSymbolIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { Welcome } from "~~/components/Welcome";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow" style={{
        backgroundImage: `url("/a.svg")`,
        backgroundRepeat: "repeat"
      }}>
        <div className="px-5" >
          <h1 className="text-center mb-4">
            <p className="text-4xl m-0 font-medium mt-1">Q.AI.A</p>
          </h1>
          <div className="flex flex-col justify-center items-center gap-8 mb-2 px-4">
            <h2 style={{ lineHeight: 0 }} className="text-center text-3xl lg:text-5xl max-w-md lg:max-w-2xl  px-3  mt-12 py-0"
            >
              Answer AI Question
            </h2>
            <h1 style={{ lineHeight: 0 }} className="text-center text-3xl lg:text-5xl max-w-md lg:max-w-2xl  px-3 py-0 m-0 mt-8">
              To Earn Blockchain Rewards
            </h1>

            <p className="m-0 text-center max-w-xl px-3 m-0 mt-4">
              A platform for learning and making money by answering questions based on AI and blockchain
            </p>
          </div>
        </div>
  
        <div className="flex mb-4 mt-4">
          <div className="rounded-tr-3xl rounded-tl-xl rounded-br-xl rounded-bl-3xl bg-teal-300 p-4  mr-2"><a>Get Started</a></div>
          <div className="rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl bg-pink-300 p-4 ml-2"><a>Get Started</a></div>
        </div>


        <Welcome />

        <div className="flex-grow  w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <NoSymbolIcon className="h-8 w-8 " />
              <p>
              Grow your blockchain knowledge using <b>ChatGPT</b>.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <CubeTransparentIcon className="h-8 w-8 " />
              <p>
              Browse your learning records on the <b>blockchain</b>.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <GiftIcon className="h-8 w-8 " />
              <p>
              Earn <b>points</b> by completing learning progress
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
