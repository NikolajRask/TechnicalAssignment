type SagProps = {
    key: number,
    number: string
    title: string
}

export default function Sag({ key, number, title }: SagProps) {
    return (
        <div className="border rounded-xl p-5" key={key}>
            <div className="bg-red-500 px-2 py-1 mb-2 rounded-xl w-fit text-white text-sm">
                <p>{number}</p>
            </div>
            <h1 className="line-clamp-2 font-bold tetx-lg">{title}</h1>
        </div>
    )
}