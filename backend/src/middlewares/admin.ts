import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { AuthRequest } from "./authentication";

export const admin = (req: Request, res: Response, next: NextFunction) => {
	const _req = req as AuthRequest;
	if (_req.role !== "admin") {
		const error = createHttpError(403, "Forbidden: Admins only.");
		return next(error);
	}
	next();
};
