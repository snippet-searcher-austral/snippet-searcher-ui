// pages/api/session/route.js
import { getSession } from '@auth0/nextjs-auth0';
import {NextRequest, NextResponse} from "next/server";

export const GET = async (req: NextRequest) => {
    const res = NextResponse.next();
    const session = await getSession(req, res);
    if (session) {
        return NextResponse.json({
            status: 'ok',
            accessToken: session.accessToken, // assuming accessToken exists in the session
        });
    }
    else {
        return NextResponse.json({
            status: 'error',
            error: 'no session',
        });
    }
}