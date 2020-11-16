import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "apppUMWusSTdivOJV"
);

export default async function getAllRecords() {
  return new Promise((resolve, reject) => {
    let allRecords = [];
    base("Games_FR")
      .select({filterByFormula: "{Publié} = 1"}) // put view here later on
      .eachPage(
        function page(records, fetchNextPage) {
          allRecords = allRecords.concat(records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
            return;
          } else {
            resolve(allRecords.map(r => ({ ...r.fields, id: r.id })));
          }
        }
      );
  });
}
