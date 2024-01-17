import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebase";

import HomeElements from "./_reuse-components/HomeElements";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default async function Home() {
  const userCollection = collection(db, "medicine");
  const data = await getDocs(userCollection);
  const medicineData = data.docs.map((e) => ({ ...e.data(), id: e.id }));
  return (
    <main className="w-full bg-[#292b2f] pb-20 pt-[66px]">
      <HomeElements data={medicineData} />
    </main>
  );
}
