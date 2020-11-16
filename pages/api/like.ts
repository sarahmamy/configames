import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "apppUMWusSTdivOJV"
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;
    base("Games_FR").find(id, function page(err, record) {
      if (err) {
        res.status(500).json({ error: "err" });
      }
      const r = record.fields;
      const Likes = +r.Likes || 0; // put a L because of the column name, you may not like it
      const newLikes =
        req.query.unlike === "true" ? Math.max(Likes - 1, 0) : Likes + 1;
      base("Games_FR").update(
        [{ id, fields: { Likes: newLikes } }],
        (err, records) => {
          if (err) {
            res.status(500).json({ error: "err" });
          }
          res.status(200).json({ records });
        }
      );
    });
  } catch (error) {
    res.status(500).json({});
  }
};
