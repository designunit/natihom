import { NextApiRequest, NextApiResponse } from 'next'

const pass = 'boomshakalaka1337'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await fetch(
        'https://script.google.com/macros/s/AKfycbwb-lP3fECTLIAk1PJI-Lq4rBo27AFlgCg8MOLOrNNQuJzNXbbxMy9hnhe3m_RD_hzteA/exec',
        {
            method: 'POST',
            body: JSON.stringify(
                { ...JSON.parse(req.body), pass }
            ),
        }
    )
        .then(async value => {
            res
                .status(value.status)
                .json(await value.json())
        })
}