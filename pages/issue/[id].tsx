import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>gitwin - Issue</title>
        <meta
          name="description"
          content="Break free from your 9–5 to work on open source projects that matter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-36 mt-20">
          <Link href="/" scroll={false} passHref>
            <a className="flex items-center text-medium_sea_green hover:underline mb-10">
              <IoIosArrowBack className="h-5 w-5" />
              <p>Back to Issue Explorer</p>
            </a>
          </Link>

          <div>
            <div className="flex gap-6 mb-8">
              <div className="relative w-16 h-16">
                <Image
                  src="https://gitcoin.co/dynamic/avatar/sharex"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-black text-xl">
                  Visual Studio Code Extension Needs References/Definitions
                </h1>
                <div className="flex gap-4 text-xs mb-1 font-black">
                  <p className="bg-dark_slate_gray px-3 py-1 rounded-xl text-snow ">
                    600.00 DAI
                  </p>
                  <p className="bg-silver px-3 py-1 rounded-xl text-dark_slate_gray">
                    600.00 USD
                  </p>
                  <p className="bg-dim_gray px-3 py-1 rounded-xl text-snow">
                    Front End
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="font-black mb-2 text-medium_sea_green">OPEN</h4>
              <div>
                <div className="grid grid-cols-3 justify-between gap-16">
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">Time Left</p>
                    <p className="text-dim_gray">More Than A Year</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">Opened</p>
                    <p className="text-dim_gray">A Day Ago</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">Issue Type</p>
                    <p className="text-dim_gray">Feature</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 justify-between gap-16">
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">
                      Workers Auto Approve
                    </p>
                    <p className="text-dim_gray">Off</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">Project Type </p>
                    <p className="text-dim_gray">Traditional</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">Time Commitment</p>
                    <p className="text-dim_gray">Hours</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 justify-between gap-16">
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">Experience Level</p>
                    <p className="text-dim_gray">Intermediate</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-dark_slate_gray ">Permissions </p>
                    <p className="text-dim_gray">Approval</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-6">
              <Button type="black">Express Interest</Button>
              <Button>
                <div className="flex gap-4 items-center">
                  <AiOutlineGithub className="h-6 w-6 text-dark_slate_gray" />
                  <p>View on Github</p>
                </div>
              </Button>
              <Button>
                <div className="flex gap-4 items-center">
                  <BsFillShareFill className="h-5 w-5 text-dark_slate_gray" />
                  <p>Share</p>
                </div>
              </Button>
            </div>
            <div className="mt-16 ">
              <h4 className="mb-6 font-black text-lg">Description</h4>
              <p className="mb-2 text-dim_gray">
                The visual studio code extension gives compiler diagnostics
                (i.e. compiler warnings and errors). For functions, variables,
                and all other types (events, contracts, etc) it should be able
                to:
              </p>
              <ul className="list-disc ml-10 text-dim_gray">
                <li>Go to definition</li>
                <li>Go to type definition</li>
                <li>Find references</li>
                <li>Find all references</li>
                <li>Rename (and rename all the references)</li>
              </ul>
              <div className="flex gap-2 mt-6 text-sm">
                <p className="text-black px-3 py-1 rounded-xl bg-dark_gray/50 ">
                  language server
                </p>
                <p className="text-black px-3 py-1 rounded-xl bg-dark_gray/50 ">
                  typescript
                </p>
                <p className="text-black px-3 py-1 rounded-xl bg-dark_gray/50 ">
                  vscode
                </p>
                <p className="text-black px-3 py-1 rounded-xl bg-dark_gray/50 ">
                  rust
                </p>
              </div>
            </div>
          </div>

          <div className="my-20">
            <h4 className="font-black text-lg mb-6">APPLICANTS</h4>
            <div className="flex flex-col gap-4">
              <div className="py-2 px-4 border border-silver rounded-xl">
                <div className="flex justify-between mb-4">
                  <Link href="/user/vividwood" passHref scroll={false}>
                    <a className="flex items-center gap-4  hover:underline">
                      <div className="relative h-8 w-8 rounded-full">
                        <Image
                          src="https://c.gitcoin.co/avatars/d3426966300baf6b27501b146e176702/vividwood.png"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                      <p className="text-lg font-medium">vividwood</p>
                    </a>
                  </Link>
                  <p className="text-dim_gray">2 Days Ago</p>
                </div>
                <p className="text-dim_gray">
                  Hi, I have experience in developing VS Code extensions and
                  will be glad to work on this bounty!
                </p>
              </div>
              <div className="py-2 px-4 border border-silver rounded-xl">
                <div className="flex justify-between mb-4">
                  <Link
                    href="/user/theboywhomakesgames"
                    passHref
                    scroll={false}
                  >
                    <a className="flex items-center gap-4  hover:underline">
                      <div className="relative h-8 w-8 rounded-full">
                        <Image
                          src="https://c.gitcoin.co/avatars/01b8ee6c7d4b2368be64eca71969e0d0/theboywhomakesgames.png"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                      <p className="text-lg font-medium">theboywhomakesgames</p>
                    </a>
                  </Link>
                  <p className="text-dim_gray">2 Days Ago</p>
                </div>
                <p className="text-dim_gray">
                  I have similar experience: - Writing compiler and language
                  structure processors - Writing VS Code extensions I'd be happy
                  to explain in detail how I would do it if you are interested
                </p>
              </div>
              <div className="py-2 px-4 border border-silver rounded-xl">
                <div className="flex justify-between mb-4">
                  <Link href="/user/clevermacaw" passHref scroll={false}>
                    <a className="flex items-center gap-4  hover:underline">
                      <div className="relative h-8 w-8 rounded-full">
                        <Image
                          src="https://c.gitcoin.co/avatars/af77769c3199df65bf83750a4c5a1033/clevermacaw.png"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                      <p className="text-lg font-medium">clevermacaw</p>
                    </a>
                  </Link>
                  <p className="text-dim_gray">2 Days Ago</p>
                </div>
                <p className="text-dim_gray">
                  I am very familiar with VS Code and have experience working
                  with VS Code extensions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6">ALL ACTIVITY</h4>
            <div className="flex flex-col gap-4">
              <div
                className="py-2 px-4 border border-silver rounded-xl grid items-center"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr",
                }}
              >
                <Link href="/user/clevermacaw" passHref scroll={false}>
                  <a className="flex items-center gap-4  hover:underline">
                    <div className="relative h-8 w-8 rounded-full">
                      <Image
                        src="https://c.gitcoin.co/avatars/af77769c3199df65bf83750a4c5a1033/clevermacaw.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>
                    <p className="text-lg font-medium">clevermacaw</p>
                  </a>
                </Link>
                <p className="text-dim_gray w-3/10">Contributor Applied</p>
                <p className="text-dim_gray w-2/10 justify-self-end">
                  2 Days Ago
                </p>
              </div>
              <div
                className="py-2 px-4 border border-silver rounded-xl grid items-center"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr",
                }}
              >
                <Link href="/user/theboywhomakesgames" passHref scroll={false}>
                  <a className="flex items-center gap-4  hover:underline">
                    <div className="relative h-8 w-8 rounded-full">
                      <Image
                        src="https://c.gitcoin.co/avatars/01b8ee6c7d4b2368be64eca71969e0d0/theboywhomakesgames.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>
                    <p className="text-lg font-medium">theboywhomakesgames</p>
                  </a>
                </Link>
                <p className="text-dim_gray w-3/10">Contributor Applied</p>
                <p className="text-dim_gray w-2/10 justify-self-end">
                  2 Days Ago
                </p>
              </div>
              <div
                className="py-2 px-4 border border-silver rounded-xl grid items-center"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr",
                }}
              >
                <Link href="/user/vividwood" passHref scroll={false}>
                  <a className="flex items-center gap-4  hover:underline">
                    <div className="relative h-8 w-8 rounded-full">
                      <Image
                        src="https://c.gitcoin.co/avatars/d3426966300baf6b27501b146e176702/vividwood.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>
                    <p className="text-lg font-medium">vividwood</p>
                  </a>
                </Link>
                <p className="text-dim_gray w-3/10">Contributor Applied</p>
                <p className="text-dim_gray w-2/10 justify-self-end">
                  2 Days Ago
                </p>
              </div>
              <div
                className="py-2 px-4 border border-silver rounded-xl grid items-center"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr",
                }}
              >
                <Link href="/user/web3foundation" passHref scroll={false}>
                  <a className="flex items-center gap-4  hover:underline">
                    <div className="relative h-8 w-8 rounded-full">
                      <Image
                        src="https://c.gitcoin.co/avatars/3ed04c6cea880e5e73c868d6f9b08474/web3foundation.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>
                    <p className="text-lg font-medium">web3foundation</p>
                  </a>
                </Link>
                <p className="text-dim_gray">Bounty Created 600 DAI</p>
                <p className="text-dim_gray justify-self-end">
                  2 Days Ago
                </p>
              </div>
            </div>
          </div>

          <div className="my-20">
            <h4 className="font-black text-lg mb-6">Funder</h4>
            <div className="py-2 px-4 border border-silver rounded-xl flex gap-4">
              <div className="relative h-14 w-14 rounded-xl">
                <Image
                  src="https://c.gitcoin.co/avatars/3ed04c6cea880e5e73c868d6f9b08474/web3foundation.png"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div>
                <p className="text-lg font-black">web3foundation</p>
                <a href="mailto:yuvrajisbest13@gmail.com" className="flex items-center gap-2 text-dim_gray hover:underline">
                  <AiOutlineMail className="h-4 w-4" />
                  <p>socialmedia+bounties@web3.foundation</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
