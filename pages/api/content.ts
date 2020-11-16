import { NextApiRequest, NextApiResponse } from "next";
import getAllRecords from "../../lib/getAllRecords";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allRecords = await getAllRecords();
    res.status(200).json({ records: allRecords });
  } catch (error) {
    res.status(500).json({ records: [] });
  }
};
