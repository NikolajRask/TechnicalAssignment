"use server"

export default async function FetchData(url: string) {
    const data = await fetch(url)
    const json = await data.json()
    return json
}