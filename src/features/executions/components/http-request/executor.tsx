import type { NodeExecutor } from "@/features/executions/types"; 

type HttpRequestData = Record<string , unknown>;

export const httpRequestExecutor: NodeExecutor<HttpRequestData> = async ({
    data,
    nodeId,
    context,
    step,
}) => {
    // TODO: Publish "Loading" state for http request

    const result = await step.run("http-request", async () => context);

    // TODO: Publish "Success" state for http request

    return result;
}