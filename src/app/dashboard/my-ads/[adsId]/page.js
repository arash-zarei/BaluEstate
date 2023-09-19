import Ads from "@/models/Ads";
import AddAdsPage from "@/template/AddAdsPage";
import connectDB from "@/utils/connectDB";

const Edit = async ({ params: { adsId } }) => {
  await connectDB();

  const ads = await Ads.findOne({ _id: adsId });

  if (!ads)
    return (
      <h3 className="text-xl text-red-600">
        مشکلی پیش آمده است. لطفا دوباره امتحان کنید!
      </h3>
    );

  return <AddAdsPage data={JSON.parse(JSON.stringify(ads))} />;
};

export default Edit;
