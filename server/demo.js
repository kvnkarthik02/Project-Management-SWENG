const { MongoClient } = require('mongodb');

async function MediaDeviceInfo() {
    c
const uri = "mongodb+srv://admin:vGZL33etvNyiKSNb@cluster0.dszad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (e) {
        await client.close();
    }
}

main().catch(console.error);

function listDatabases(client) {
    const databases = await
}