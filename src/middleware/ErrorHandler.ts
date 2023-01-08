import { NextFunction, Request, Response } from "express"

export default async function ErrorHandler( err: Error, req: Request, res: Response, next: NextFunction) { 
	console.error(err.message)
	if (res.headersSent) {
		return next(err)
	}
	res.status(504).json({ error: err.message })
}