import { NextApiRequest, NextApiResponse } from 'next'

const pass = 'boomshakalaka1337'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    res.status(404)

    await fetch(
        'https://script.google.com/macros/s/AKfycby0hJfQ3XvcXoKfJZkofqe-NnZ1GD-ElLlk7awabBL6QwrlNw0kjKxFYQmHaqjVRBKl/exec',
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