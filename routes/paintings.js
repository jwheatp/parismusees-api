import _ from "lodash"

import express from "express"

import { fetchAPI } from '../utils/fetchAPI.js'

import paintings from '../db/paintings.js'

import { getPainting } from '../queries.js'

import createError from 'http-errors'

import * as dotenv from "dotenv"
dotenv.config()

const router = express.Router()

router.get('/', async(req, res) => {
  res.json(paintings)
})

router.get('/:id', async(req, res, next) => {
  let paintings;

  try {
    paintings = await fetchAPI(getPainting(req.params.id), req.headers.auth_token || process.env.API_AUTH_TOKEN)
  } catch(error) {
    return next(error)
  }

  if(paintings.length == 0) return next(createError(404, "Painting not found"))

  res.json(paintings[0])
})

router.get('/sample/:size', async(req, res, next) => {
  const size = parseInt(req.params.size)
  if(isNaN(size) || size <= 0) return next(createError(400, 'Size should be a number greater than 0.'))
  
  res.json(_.sampleSize(paintings, size))
})

export default router
