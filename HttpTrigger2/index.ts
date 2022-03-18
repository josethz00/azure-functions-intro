import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const person: Person = req.body;
    let responseStatus: number;
    let responseMessage: string;

    if (person && person.name) {
        responseStatus = 200;
        responseMessage = `Hello ${person.name}. This HTTP triggered function executed successfully.`;
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

interface Person {
    name: string;
}