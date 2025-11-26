type FileSource = { path: string}

const fileSource: FileSource = {
    path: 'some/path/to/file.csv'
}

type DBSource = { connectionURL: string}
const dbSource: DBSource = {
    connectionURL: 'some-connection-url'
}

type Source = FileSource | DBSource

function loadData(source: Source) {
    // opne + read file OR reach out to database server
    if('path' in source) {
        // source.path
        return
    }

    // source.connectionUrl
}