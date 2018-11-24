import { Request, Response, NextFunction } from "express"
import Asset from '../../models/Asset'

export function getAll(req: Request, res: Response, next: NextFunction) {
  Asset.find({}, (err: Error, assets: any) => {
    if (err) return next(err)

    res.send(assets)
  })
}

export function getById(req: Request, res: Response, next: NextFunction) {
  const assetId = req.params.id
  Asset.findById(assetId, (err: Error, asset: any) => {
    if (err) return next(err)

    res.send(asset)
  })
}
