import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://fast-chipmunk-20558.upstash.io',
  token: process.env.UPSTASH_REDIS_TOKEN,
})

