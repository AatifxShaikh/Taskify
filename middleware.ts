import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    //this defines the public route and provides with certain conditions 

    publicRoutes: ["/", "/api/webhook"],
    afterAuth(auth, req) {
        if (auth.userId && auth.isPublicRoute) {
            let path = "/select-org";
            //if the userislogged in and try to acces the public route we will push him back to select-org route


            if (auth.orgId) {
                path = `/organization/${auth.orgId}`
                //amd if orgid is also present we will sent him to the organisation/:id route

            }
            const orgSelection = new URL(path, req.url)
            return NextResponse.redirect(orgSelection)
        }
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url })
            //if the user is not loggedin and he is also not present in the public route then we will redirect him to sign in

        }
        if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
            const orgSelection = new URL("/select-org", req.url)
            return NextResponse.redirect(orgSelection)
            //if the user islogged in but he doesnt have a org idnand he is also not at he the selct org page then we will redirect him to the select-org page

        }
    }

});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};