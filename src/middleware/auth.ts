import { NextFunction, Request, Response } from "express";
import { UserRole } from "../../generated/prisma/enums";
import { auth as betterAuth } from "../lib/auth";


declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string,
                name: string,
                email: string,
                role: string
            }
        }
    }
}
export const auth = (role: UserRole) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const session = await betterAuth.api.getSession({
            headers: req.headers as any
        })
        if (!session) {
            return res.status(401).json({
                success: false,
                message: "Your are not authenticate!",
            })
        }
        req.user = {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            role: session.user.role as string,
        }
        if (role.length && !role.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden! You don't have permission to access this resources!"
            })
        }
        next()
    }
}

