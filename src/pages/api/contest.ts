import { NextApiRequest, NextApiResponse } from 'next'

const pass = 'boomshakalaka1337'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await fetch(
        'https://script.google.com/macros/s/AKfycbypv4YtoSw0Z4PohxtLRZ46VMDW3YNBPUSwUZcuBLFaM2rWhW8c6Z5Uz5ucDCTzP12D/exec',
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