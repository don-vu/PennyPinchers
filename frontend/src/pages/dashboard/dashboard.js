const {MongoClient} = require('mongodb');
//import { useReducer } from "react";

async function main() {
    const uri = "mongodb+srv://demo:admin@cluster0.hlvpvjl.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        const totalIncome = await getTotalAmount(client, 620, "income_sources");
        console.log(totalIncome);

        const totalExpenses = await getTotalAmount(client, 620, "expenses");
        console.log(totalExpenses);

    } catch (e) {
        console.error(e)
    } finally {
        await client.close();
    }
}

// Get total income or expenses of a user id (int), given their id and which collection.
// Available collections: "income_sources", "expenses"
async function getTotalAmount(client, uid, collection) {

    const agg = [
        {
          '$match': {
            'id': uid
          }
        }, {
          '$group': {
            '_id': null, 
            'total': {
              '$sum': '$amount'
            }
          }
        }
      ];

    const cursor = await client.db("pennypinchers").collection(collection).aggregate(agg);
    const result = await cursor.toArray();

    return(Object.values(result[0])[1]);
}

main().catch(console.error);


function Dashboard() {
    // variables here
    // present selected month; if selectedMonth == null, selectedMonth = current month
    
    // keep user id

    // get expenses, income_sources documents *only* within selected month and user id

    // simply: net = income - expenses


}

//export default Dashboard;
