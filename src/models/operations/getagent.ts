/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetAgentRequest = {
  /**
   * Unique id of the agent to be retrieved.
   */
  agentId: string;
};

export type GetAgentResponse = {
  /**
   * Successfully retrieved an agent.
   */
  agent?: components.Agent | undefined;
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export namespace GetAgentRequest$ {
  export type Inbound = {
    agent_id: string;
  };

  export const inboundSchema: z.ZodType<
    GetAgentRequest,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      agent_id: z.string(),
    })
    .transform((v) => {
      return {
        agentId: v.agent_id,
      };
    });

  export type Outbound = {
    agent_id: string;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    GetAgentRequest
  > = z
    .object({
      agentId: z.string(),
    })
    .transform((v) => {
      return {
        agent_id: v.agentId,
      };
    });
}

/** @internal */
export namespace GetAgentResponse$ {
  export type Inbound = {
    Agent?: components.Agent$.Inbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
  };

  export const inboundSchema: z.ZodType<
    GetAgentResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      Agent: components.Agent$.inboundSchema.optional(),
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
      return {
        ...(v.Agent === undefined ? null : { agent: v.Agent }),
        contentType: v.ContentType,
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
      };
    });

  export type Outbound = {
    Agent?: components.Agent$.Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    GetAgentResponse
  > = z
    .object({
      agent: components.Agent$.outboundSchema.optional(),
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
    })
    .transform((v) => {
      return {
        ...(v.agent === undefined ? null : { Agent: v.agent }),
        ContentType: v.contentType,
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
      };
    });
}
