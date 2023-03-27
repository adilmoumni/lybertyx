// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {firestore} from '../../utils/firebase_init';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  firestore
    .collection("users")
    .get()
    .then((data) => {
      console.log(data.docs.length);
      res.status(200).json({ name: data.docs.length.toString() });
    });
}
