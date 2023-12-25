# serverless-express-example
example app for serverless express


run npm install

run npm run start

make get  request to http://localhost:8000/plst

example request

http://localhost:8000/plst?where=sap_equip_id in ('test', 'test', 'test' )&orderBy=sap_equip_id

example response

{
    "status": "success",
    "query": {
        "where": "sap_equip_id in ('test', 'test', 'test' )",
        "orderBy": "sap_equip_id"
    }
}
