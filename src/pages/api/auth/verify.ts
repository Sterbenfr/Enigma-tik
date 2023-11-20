import { NextApiRequest, NextApiResponse } from 'next'
import { withAuth } from '../auth/withAuth'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const equipe = req.equipe
  res.status(200).json(equipe)
}

export default withAuth(handler)
