import Link from "next/link"

export default function Other() {
    return(
        <main>
            <h1 className="title">Other page</h1>
            <p className="msg">これは、別のページです。</p>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    )
}