"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSource = {
    path: 'some/path/to/file.csv'
};
const dbSource = {
    connectionURL: 'some-connection-url'
};
function loadData(source) {
    // opne + read file OR reach out to database server
    if ('path' in source) {
        // source.path
        return;
    }
    // source.connectionUrl
}
//# sourceMappingURL=intersection.js.map