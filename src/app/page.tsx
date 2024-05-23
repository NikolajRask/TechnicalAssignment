import db from "@/db/db";
import FetchData from "@/lib/fetcher";
import Image from "next/image";

export default async function Home() {

  let cases = await db.sag.findMany()

  if (!cases) {
    const response =  await FetchData("/api/fetchData")
    cases = await db.sag.findMany()
  }


  // cases = cases.filter((item: any) => {
  //   return (item.typeid == 3 || item.typeid == 5 || item.typeid == 9 || item.periodeid == 160);
  // })

  return (
    <>
      <nav className="w-full p-5 border-b px-10 flex">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Seal_of_the_Folketing_of_Denmark.svg/2048px-Seal_of_the_Folketing_of_Denmark.svg.png" alt="Folketinget" width={55} height={55}></Image>
        <div className="ml-4">
          <h2 className="font-bold text-xl">Law Overview</h2>
          <p>Lov og beslutningsforslag i folketinget</p>
        </div>
      </nav>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-5 px-10 py-5">

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-bold text-lg">Fremsat</h1>
              {
                cases.filter((item: any) => {
                  return item.statusid == 1;
                }).map((item: any, index: number) => {
                  return (
                    <div className="border rounded-xl p-5" key={index}>
                      <div className="bg-red-500 px-2 py-1 mb-2 rounded-xl w-fit text-white text-sm">
                        <p>{item.nummer}</p>
                      </div>
                      <h1 className="line-clamp-2 font-bold tetx-lg">{item.titel}</h1>
                    </div>
                  )
                })
              }
            </div>
           
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-bold text-lg">1. Behandling</h1>
            </div>
            {
                cases.filter((item: any) => {
                  return item.statusid == 3;
                }).map((item: any, index: number) => {
                  return (
                    <div className="border rounded-xl p-5" key={index}>
                      <div className="bg-red-500 px-2 py-1 mb-2 rounded-xl w-fit text-white text-sm">
                        <p>{item.nummer}</p>
                      </div>
                      <h1 className="line-clamp-2 font-bold tetx-lg">{item.titel}</h1>
                    </div>
                  )
                })
            }
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-bold text-lg">2. Behandling</h1>
            </div>
          
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-bold text-lg">3. Behandling</h1>
            </div>
          
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-bold text-lg">Godkendt</h1>
            </div>
            {
                cases.filter((item: any) => {
                  return item.statusid == 11;
                }).map((item: any, index: number) => {
                  return (
                    <div className="border rounded-xl p-5" key={index}>
                      <div className="bg-red-500 px-2 py-1 mb-2 rounded-xl w-fit text-white text-sm">
                        <p>{item.nummer}</p>
                      </div>
                      <h1 className="line-clamp-2 font-bold tetx-lg">{item.titel}</h1>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  );
}
