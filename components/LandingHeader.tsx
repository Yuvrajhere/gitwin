import Button from "./Button";
import {
  CommitObj1,
  CommitObj2,
  CommitObj3,
  CommitObj4,
} from "./smallerComponents/headerObjects";

const LandingHeader = () => {
  return (
    <header className="px-36 flex flex-col justify-center h-[90vh] w-[100vw] overflow-hidden relative">
      <h1 className="font-extrabold text-7xl w-5/6 backdrop-blur-sm bg-white/50 ">
        Break free from your 9–5 to work on{" "}
        <span className="text-medium_sea_green ">open source</span> projects
        that matter.
      </h1>
      <h3 className="font-medium text-2xl text-dim_gray mt-4 mb-8 w-4/6 backdrop-blur-sm bg-white/50 ">
        Millions of dollars flow into projects on gitwin. Earn by participating
        in sponsored hackathons, bounties, and funded community grants.
      </h3>
      <Button type="black" className="" >
        I’m ready to earn
      </Button>
      <CommitObj1 />
      <CommitObj2 />
      <CommitObj3 />
      <CommitObj4 />
    </header>
  );
};

export default LandingHeader;
