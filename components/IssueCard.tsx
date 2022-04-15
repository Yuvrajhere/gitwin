import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";

const IssueCard = () => {

  let sum = 40; // comonentWillMount

  useEffect(() => { // componenetDidMount || componentDidUpdate
    sum = 70;
  })

  // render
  return (
    <Link href="/issue/1" scroll={false} passHref>
      <a>
        <div className="group flex gap-4 w-full cursor-pointer py-2 px-4 border border-silver hover:bg-medium_sea_green hover:text-snow rounded-xl">
          <div className="relative w-16 h-16">
            <Image
              src="https://gitcoin.co/dynamic/avatar/sharex"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full py-1">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold">Need A Linux Build</h4>
              <div className="flex gap-4 text-sm font-black">
                <p className="bg-dark_slate_gray px-3 py-1 rounded-xl text-snow ">
                  100.05 USD
                </p>
                <p className="bg-silver px-3 py-1 rounded-xl text-dark_slate_gray">
                  100.00 USD
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-dim_gray group-hover:text-snow">
              <p className="text-dark_slate_gray group-hover:text-snow font-medium">
                Opened 11 Hours Ago
              </p>
              <p>•</p>
              <p>Intermediate</p>
              <p>•</p>
              <p>Feature</p>
              <p>•</p>
              <div className="flex gap-1 items-center">
                <BsFillPersonFill className="h-5 w-5" />
                <p>0 Applicants</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default IssueCard;
