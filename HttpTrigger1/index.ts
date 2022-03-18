import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let name: string;

    if (req.method == 'GET') {
        name = req.query.name;
    } else if (req.method == 'POST') {
        name = (req.body && req.body.name);
    }

    let responseStatus: number;
    let responseMessage: string;

    if (name) {
        responseStatus = req.method == 'GET' ? 200 : 201;
        responseMessage = `Hello ${name}`;
    } else {
        responseStatus = 400;
        responseMessage = `Please pass a name on the query string (GET) or in the request body (POST)`;
    }
    context.res = {
        status: responseStatus,
        body: responseMessage
    };
};

export default httpTrigger;