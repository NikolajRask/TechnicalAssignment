import Navbar from "@/components/Navbar";
import NoCases from "@/components/NoCases";
import Sag from "@/components/Sag";
import db from "@/db/db";
import FetchData from "@/lib/fetcher";

export default async function Home() {

  let cases = await db.sag.findMany({
      where: {
        OR: [
          { typeid: { in: [3, 5, 9] } },
          { periodeId: 160 }
        ]
      }
    })

  if (!cases) {
    const response =  await FetchData("/api/fetchData")
    cases = await db.sag.findMany({
      where: {
        OR: [
          { typeid: { in: [3, 5, 9] } },
          { periodeId: 160 }
        ]
      }
    })
  }

  const kanban1 = cases.filter((item: any) => {
    return item.statusid == 1;
  })

  const kanban2 = cases.filter((item: any) => {
    return item.statusid == 3;
  })

  const kanban3 = cases.filter((item: any) => {
    return item.statusid == 0;
  })

  const kanban4 = cases.filter((item: any) => {
    return item.statusid == 0;
  })

  const kanban5 = cases.filter((item: any) => {
    return item.statusid == 11;
  })

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 px-10 py-10">

          <div className="flex flex-col gap-5">
            <div className="flex">
              <h1 className="font-bold text-lg">Fremsat</h1>
              <div className="px-5 py-1 ml-2 text-sm bg-gray-900 text-white rounded-lg m-0">{kanban1.length}</div>
            </div>
            {
                kanban1.length == 0 ? <NoCases></NoCases> :
                kanban1.map((item: any, index: number) => {
                  return (
                    <Sag key={index} number={item.nummer} title={item.titel}></Sag>
                  )
                })
              }
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex">
              <h1 className="font-bold text-lg">1. Behandling</h1>
              <div className="px-5 py-1 ml-2 text-sm bg-gray-900 text-white rounded-lg m-0">{kanban2.length}</div>
            </div>
            {
                kanban2.length == 0 ? <NoCases></NoCases> :
                kanban2.map((item: any, index: number) => {
                  return (
                    <Sag key={index} number={item.nummer} title={item.titel}></Sag>
                  )
                })
            }
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex">
              <h1 className="font-bold text-lg">2. Behandling</h1>
              <div className="px-5 py-1 ml-2 text-sm bg-gray-900 text-white rounded-lg m-0">{kanban3.length}</div>
            </div>
            {
                kanban3.length == 0 ? <NoCases></NoCases> :
                kanban3.map((item: any, index: number) => {
                  return (
                    <Sag key={index} number={item.nummer} title={item.titel}></Sag>
                  )
                })
            }
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex">
              <h1 className="font-bold text-lg">3. Behandling</h1>
              <div className="px-5 py-1 ml-2 text-sm bg-gray-900 text-white rounded-lg m-0">{kanban4.length}</div>
            </div>
            {
                kanban4.length == 0 ? <NoCases></NoCases> :
                kanban4.map((item: any, index: number) => {
                  return (
                    <Sag key={index} number={item.nummer} title={item.titel}></Sag>
                  )
                })
            }
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex">
              <h1 className="font-bold text-lg">Godkendt</h1>
              <div className="px-5 py-1 ml-2 text-sm bg-gray-900 text-white rounded-lg m-0">{kanban5.length}</div>
            </div>
            {
                kanban5.length == 0 ? <NoCases></NoCases> :
                kanban5.map((item: any, index: number) => {
                  return (
                    <Sag key={index} number={item.nummer} title={item.titel}></Sag>
                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  );
}
