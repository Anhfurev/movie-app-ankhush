import SeeMore from "@/components/my/SeeMore";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;

  return (
    <div>
      <SeeMore id={id}></SeeMore>
    </div>
  );
};

export default DetailDynamicPage;
