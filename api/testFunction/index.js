
module.exports = async function (context, req) {

        // Read .env file and set environment variables
    require('dotenv').config();
    const random = Math.floor(Math.random() * 100);

        // Use official mongodb driver to connect to the server
    const { MongoClient, ObjectId } = require('mongodb');

        // New instance of MongoClient with connection string
    const client = new MongoClient("mongodb://localhost:27017/");

    async function main(){
        // Use connect method to connect to the server
            await client.connect();
   
        // Database reference with creation if it does not already exist
            const db = client.db(`UserDatabase`);
            console.log(`New database:\t${db.databaseName}\n`);
            
            const indexResult = await collection.createIndex({ name: 1 });
            console.log(`indexResult: ${JSON.stringify(indexResult)}\n`);
        }

        main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
        


// ------------------------------------Azure Function------------------------------------------------------------------------------------------



    const name = (req.query.name || (req.body && req.body.name));
    const email = (req.query.email || (req.body && req.body.email));
    let UserData = {
        name: name,
        email: email
    }

    if(req.method == "POST"){

        // hier jetzt die bekommen UserData an MongoDB Senden. 

        context.res = {
                // return: true -> Daten wurden erfolgreich an DB gesendet.
            body: "true" 
        }; 
    }

    if(req.method == "GET"){

        // hier jetzt die MongoDB User-Abfrage implementieren

            // Simulierte Daten von MongoDB
       let simulatedUserData = [
        User1 = {
            _id: "635a6607fb1d8547b5da54fd",
            name:  "Noah",
            email: "Noah@gmail.com"
        },
        User2 = {
            _id: "545a6607fb1d8547bgsgegsg",
            name:  "Tom",
            email: "Tom@gmail.com"
        }]

        context.res = {
            body: simulatedUserData
        }
    }
}

