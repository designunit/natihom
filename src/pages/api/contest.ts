import { NextApiRequest, NextApiResponse } from 'next'

const pass = 'boomshakalaka1337'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await fetch(
        'https://script.google.com/macros/s/AKfycbz5c4Baw1_YZKfEj6H1liIGolAuVzIkZPCbfpMVniPo7BOSfP013TkCgYpGgmmMnMQ/exec',
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