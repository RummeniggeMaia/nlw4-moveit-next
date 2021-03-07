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

  let userName = request.body.userName
  let level = Number(request.body.level)
  let currentExperience = Number(request.body.currentExperience)
  let challengesCompleted = Number(request.body.challengesCompleted)

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('users_progress')

  let userData = {}

  switch (request.method) {
    case 'GET': {
      const { userName } = request.query
      if (userName) {
        userData = await collection.findOne({ 'userName': userName })
      } else {
        userData = await collection.find({}).sort({ level: -1 }).toArray()
      }
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
        userName: userName,
        level: { $lte: level }
      }, {
        $set: {
          level,
          currentExperience,
          challengesCompleted
        }
      })
    }
  }

  return response.status(201).json(userData)
}
