"use server"

export default async function FetchData(url: string) {
    const data = await fetch(url, { next: { revalidate: 3600 } })
    const json = await data.json()
    return json
}