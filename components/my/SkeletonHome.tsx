import { Skeleton } from "../ui/skeleton";

export const SkeletonHome = () => {
  return (
    <div>
      <Skeleton className="w-full h-[1169px] rounded-xl"></Skeleton>

      <div className=" flex w-[1280px] justify-between items-center m-auto">
        <Skeleton className="w-[250px] h-[32px] rounded-[9px] mt-[52px]"></Skeleton>
        <Skeleton className="w-[165px] h-[36px] rounded-[9px] mt-[52px]"></Skeleton>
      </div>
      <div className="mt-[32px] flex gap-[32px] flex-wrap justify-center w-[1280px] m-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-[230px] h-[440px] rounded-[8px]"
          ></Skeleton>
        ))}
      </div>
      <div className=" flex w-[1280px] justify-between items-center m-auto">
        <Skeleton className="w-[250px] h-[32px] rounded-[9px] mt-[52px]"></Skeleton>
        <Skeleton className="w-[165px] h-[36px] rounded-[9px] mt-[52px]"></Skeleton>
      </div>
      <div className="mt-[32px] flex gap-[32px] flex-wrap justify-center w-[1280px] m-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-[230px] h-[440px] rounded-[8px]"
          ></Skeleton>
        ))}
      </div>
      <div className=" flex w-[1280px] justify-between items-center m-auto">
        <Skeleton className="w-[250px] h-[32px] rounded-[9px] mt-[52px]"></Skeleton>
        <Skeleton className="w-[165px] h-[36px] rounded-[9px] mt-[52px]"></Skeleton>
      </div>
      <div className="mt-[32px] flex gap-[32px] flex-wrap justify-center w-[1280px] m-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-[230px] h-[440px] rounded-[8px]"
          ></Skeleton>
        ))}
      </div>

      <Skeleton className="w-full h-[32px] rounded-[9px] mt-[52px]"></Skeleton>
    </div>
  );
};
