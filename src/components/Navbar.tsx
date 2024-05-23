import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full p-5 border-b px-10 flex bg-white">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Seal_of_the_Folketing_of_Denmark.svg/2048px-Seal_of_the_Folketing_of_Denmark.svg.png" alt="Folketinget" width={55} height={55}></Image>
            <div className="ml-4">
            <h2 className="font-bold text-xl">Law Overview</h2>
            <p>Lov og beslutningsforslag i folketinget</p>
            </div>
        </nav>
    )
}