const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>SAD-on-MongoDV</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../style.css"/>
            </head>
            <body>
            <nav>
                <ul>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/topics">Topics</a>
                    </li>
                    <li>
                    <a href="/topics/new">Add Topic</a>
                    </li>
                </ul>
                </nav>
                 {html.children}
            </body>                      

        </html>
    )
}

module.exports = Def