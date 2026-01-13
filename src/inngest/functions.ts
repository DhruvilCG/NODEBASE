import { NonRetriableError } from "inngest";
import { inngest } from "./client";
import prisma from "@/lib/db";

export const executeWorkflow = inngest.createFunction(
  { id: "execute-workflow" },
  { event: "workflow/execute.workflow" },
  async ({ event, step }) => {
    const workflowId = event.data.workflowId;

    if (!workflowId) {
      throw new NonRetriableError("Workflow ID missing");
    }

    const nodes = await step.run("prepare-workflow", async () => {
      const workflow = await prisma.workflows.findUniqueOrThrow({
        where: { id: workflowId },
        include: { nodes: true, connections: true },
      });

      return workflow.nodes;
    });

    return nodes;
  }
);
