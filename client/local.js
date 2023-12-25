const app = require('./app');

const port = process.env.PORT || 8000

const server = app.listen(port, () => {
    console.log(`App running on port ${port}`)
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message)
    server.close(() => {
        process.exit(1)
    })
});

process.on('uncaughtException', () => {
    console.log(err)
    server.close(() => {
        process.exit(1)
    })
});
