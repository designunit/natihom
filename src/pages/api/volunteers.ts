import { NextApiRequest, NextApiResponse } from 'next'

const pass = 'boomshakalaka1337'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await fetch(
        'https://script.google.com/macros/s/AKfycbx1hRaN6lOhwLjz5gNwtHaoY5IMnoOKXiQT4qyRZi7WafzQZbb2KRPOX3sTCA9cvC26jg/exec',
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