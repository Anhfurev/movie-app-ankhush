import Home from "@/components/my/Home";
import { SkeletonHome } from "@/components/my";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<SkeletonHome />}>
      <Home></Home>
    </Suspense>
  );
};

export default page;
