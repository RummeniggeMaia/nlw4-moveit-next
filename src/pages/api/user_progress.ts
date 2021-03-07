import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDb: Db = null

const connectToDatabase = async (uri: string) => {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = client.db('mexase_db')

  cachedDb = db
  return db
}

export default async (request: NowRequest, response: NowResponse) => {

  const {
    userName,
    level,
    currentExperience,
    challengesCompleted,
  } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('users_progress')

  let userData = {}

  switch (request.method) {
    case 'GET': {
      const { userName } = request.query
      userData = await collection.findOne({ 'userName': userName })
    }
    case 'POST': {
      if (typeof userName !== 'undefined') {
        await collection.insertOne({
          userName: userName,
          level: level,
          currentExperience: currentExperience,
          challengesCompleted: challengesCompleted,
        })
      }
    }
    case 'PATCH': {
      await collection.updateOne({
        userName: userName
      }, {
        $set: {
          level,
          currentExperience,
          challengesCompleted,
          userName
        }
      })
    }
  }

  return response.status(201).json(userData)
}
