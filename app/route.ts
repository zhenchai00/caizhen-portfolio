/**
 * This route file is about the api endpoint route handler.
 * More info please refer to this https://nextjs.org/docs/app/api-reference/file-conventions/route
 */

export async function GET(request: Request) {
    return new Response("Hello world!");
}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}