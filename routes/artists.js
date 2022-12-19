import _ from "lodash"

import express from "express"

import artists from '../db/artists.js'
import paintings from '../db/paintings.js'
import createError from 'http-errors'

const router = express.Router()

router.get('/', async(req, res) => {
  res.json(artists)
})

router.get('/:id', async(req, res, next) => {
  const artist = artists.find(a => a.id == req.params.id)
  if(!artist) return next(createError(404, "Artist not found"))

  res.json(artist)
})

router.get('/sample/:size', async(req, res, next) => {
  const size = parseInt(req.params.size)
  if(isNaN(size) || size <= 0) return next(createError(400, 'Size should be a number greater than 0.'))

  res.json(_.sampleSize(artists, req.params.size))
})

router.get('/:id/paintings', async(req, res, next) => {
  const artist = artists.find(a => a.id == req.params.id)
  if(!artist) return next(createError(404, "Artist not found"))

  res.json(paintings.filter(p => p.artistId == req.params.id))
})

router.get('/:id/paintings/sample/:size', async(req, res, next) => {
  const size = parseInt(req.params.size)
  if(isNaN(size) || size <= 0) return next(createError(400, 'Size should be a number greater than 0.'))

  const artist = artists.find(a => a.id == req.params.id)
  if(!artist) return next(createError(404, "Artist not found"))

  res.json(_.sampleSize(paintings.filter(p => p.artistId == req.params.id), req.params.size))
})

export default router