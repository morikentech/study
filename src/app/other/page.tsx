'use client'

import Link from "next/link"
import Image from "next/image"
import style from "../style/style.module.css"
import JSXStyle from "styled-jsx/style"

export default function Other() {
    return(
        <main>
            <JSXStyle>
                {`p.jsx-msg{
                    margin : 10px;
                    text-align : center;
                    color: red;
                    font-weigt: bold;
                }`}
            </JSXStyle>
            <h1 className={styles.title}>Other page</h1>
            <p className="jsx-msg">これは、別のページです。</p>
            <div>
                <Image src="/sample.jpg" width={200} height={200} />
            </div>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    )
}