import "./style.css"

export default function OtherLayout({
    children,
}) {
    return (
        <html lang="ja">
            <body>
                <h1 className="header">Sample web Application</h1>
                {children}
                <div className="footer">
                    <hr />
                    <p className="footer-content">
                        copyright 2023 SYODA-Tuyano.
                    </p>
                </div>
            </body>
        </html>
    )
}