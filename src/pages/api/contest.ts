import { NextApiRequest, NextApiResponse } from 'next'

const pass = 'boomshakalaka1337'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await fetch(
        'https://script.google.com/macros/s/AKfycbwbPCJX35dqIbN-BK4lu9dIX5slVqKavkPbJUvEgyb4dgmAIRFYH7xDcYAJdNPCJxid/exec',
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