import Button from "./Button";
import IssueCard from "./IssueCard";

const IssueList = () => {
  return (
    <div className="flex gap-2 h-[90vh]">
      <section className="w-1/4 bg-black"></section>
      <section className="w-3/4 pl-10">
        <div className="mb-10">
          <h3 className="text-3xl font-extrabold">
            Issue Explorer - Freelance Code Bounties
          </h3>
          <p className="font-medium text-xl text-dim_gray">
            Choose a issue and start earning
          </p>
        </div>
        <div className="overflow-y-auto h-full pb-36 flex flex-col items-center">
          <div className="flex flex-col gap-4 mb-4 w-full pr-10">
            <IssueCard />
            <IssueCard />
            <IssueCard />
            <IssueCard />
            <IssueCard />
            <IssueCard />
            <IssueCard />
          </div>
          <Button className="">See more</Button>
        </div>
      </section>
    </div>
  );
};

export default IssueList;
