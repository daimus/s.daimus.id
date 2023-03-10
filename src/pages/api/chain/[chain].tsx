// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const { chain: chainIdOrName } = req.query;
    try {
        const response = await fetch(`https://chainid.network/chains.json`);
        const data = await response.json();
        let chain = data.find((chain: any) => chain.chainId.toString() === chainIdOrName || chain.shortName === chainIdOrName);
        if (!chain) {
            return res.status(404).json({ message: "chain not found" });
        }
        return res.status(200).json(chain);
    } catch (err) {
        return res.status(500);
    }

}
