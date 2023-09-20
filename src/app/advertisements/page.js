import AdvertisementsPage from "@/template/AdvertisementsPage";

const Advertisements = async () => {
  // بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم(این مورد حالت تمرینی دارد)
  const res = await fetch("http://localhost:3000/api/ads", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error)
    return (
      <h3 className="text-xl py-2 px-3 rounded-md bg-red-200 text-red-700">
        {data.error}
      </h3>
    );

  return <AdvertisementsPage data={data.data} />;
};

export default Advertisements;
