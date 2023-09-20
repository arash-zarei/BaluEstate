import AdsDetailsPage from "@/template/AdsDetailsPage";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/ads");
  const data = await res.json();
  const params = data.data.map((item) => ({ adsId: String(item._id) }));
  return params;
}

const AdsDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/ads/${params.adsId}`);
  const data = await res.json();

  return <AdsDetailsPage data={data.data} />;
};

export default AdsDetails;
