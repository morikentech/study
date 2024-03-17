"use client"
import { useSearchParams } from "next/navigation"

export default async function Home() {
   const searchParams = useSearchParams()
   return (
    <main>
      <h1 className="title">Index page</h1>
      <ul>
        <li>ID: {searchParams.get('id')}</li>
        <li>Pass: {searchParams.get('pass')}</li>
      </ul>
    </main>
  )
}
