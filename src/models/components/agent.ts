/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Agent = {
  /**
   * Unique id of agent.
   */
  agentId: string;
  /**
   * The name of the agent. Only used for your own reference.
   */
  agentName?: string | undefined;
  /*
   * The URL we will establish LLM websocket for getting response, usually your server.
   */
  llmWebsocketUrl: string;
  /**
   * Unique voice id used for the agent. Find list of available voices in documentation.
   */
  voiceId: string;
  /**
   * Last modification timestamp (milliseconds since epoch). Either the time of last update or creation if no updates available.
   */
  lastModificationTimestamp: number;
  /**
   * Controls whether the agent would backchannel (agent interjects the speaker with phrases like "yeah", "uh-huh" to signify interest and engagement).
   */
  enableBackchannel?: boolean | undefined;
  /**
   * Controls how stable the voice is. Value ranging from [0,2]. Lower value means more stable, and higher value means more variant speech generation. Currently this setting only applies to 11labs voices. If unset, default value 1 will apply.
   */
  voiceTemperature?: number | undefined;
  /**
  * Controls speed of voice. Value ranging from [0.5,2]. Lower value means slower speech, while higher value means faster speech rate. If unset, default value 1 will apply.
  */
  voiceSpeed?: number | undefined;
  /**
  * Controls how responsive is the agent. Value ranging from [0,1]. Lower value means less responsive agent (wait more, respond slower), while higher value means faster exchanges (respond when it can). If unset, default value 1 will apply.
  */
  responsiveness?: number | undefined;
  /**
  * If set, will add ambient environment sound to the call to make experience more realistic.
  */
  ambientSound?: 'coffee-shop' | 'convention-hall' | 'summer-outdoor' | 'mountain-outdoor' | 'null' | undefined;
  /**
  * The webhook for agent to listen to call events. See what events it would get at webhook doc. If set, will binds webhook events for this agent to the specified url, and will ignore the account level webhook for this agent. Set to string null to remove webhook url from this agent.
  */
  webhookUrl?: string | undefined;
  /**
  * Provide a customized list of keywords to expand our models' vocabulary, aimed at improving performance and understanding within your specific context.
  */
  boostedKeywords?: string[] | undefined;
};

/** @internal */
export namespace Agent$ {
  export type Inbound = {
    agent_id: string;
    agent_name?: string | undefined;
    llm_websocket_url: string;
    voice_id: string;
    last_modification_timestamp: number;
    enable_backchannel?: boolean | undefined;
    voice_temperature?: number | undefined;
    voice_speed?: number | undefined;
    responsiveness?: number | undefined;
    ambient_sound?: 'coffee-shop' | 'convention-hall' | 'summer-outdoor' | 'mountain-outdoor' | 'null' | undefined;
    webhook_url?: string | undefined;
    boosted_keywords?: string[] | undefined;
  };

  export const inboundSchema: z.ZodType<Agent, z.ZodTypeDef, Inbound> = z
    .object({
      agent_id: z.string(),
      agent_name: z.string().optional(),
      llm_websocket_url: z.string(),
      voice_id: z.string(),
      last_modification_timestamp: z.number().int(),
      enable_backchannel: z.boolean().optional(),
      voice_temperature: z.number().optional(),
      voice_speed: z.number().optional(),
      responsiveness: z.number().optional(),
      ambient_sound: z.enum(['coffee-shop', 'convention-hall', 'summer-outdoor', 'mountain-outdoor', 'null']).optional(),
      webhook_url: z.string().optional(),
      boosted_keywords: z.array(z.string()).optional(),
    })
    .transform((v) => {
      return {
        agentId: v.agent_id,
        ...(v.agent_name === undefined ? null : { agentName: v.agent_name }),
        llmWebsocketUrl: v.llm_websocket_url,
        voiceId: v.voice_id,
        lastModificationTimestamp: v.last_modification_timestamp,
        ...(v.enable_backchannel === undefined ? null : { enableBackchannel: v.enable_backchannel }),
        ...(v.voice_temperature === undefined ? null : { voiceTemperature: v.voice_temperature }),
        ...(v.voice_speed === undefined ? null : { voiceSpeed: v.voice_speed }),
        ...(v.responsiveness === undefined ? null : { responsiveness: v.responsiveness }),
        ...(v.ambient_sound === undefined ? null : { ambientSound: v.ambient_sound }),
        ...(v.webhook_url === undefined ? null : { webhookUrl: v.webhook_url }),
        ...(v.boosted_keywords === undefined ? null : { boostedKeywords: v.boosted_keywords }),
      };
    });

  export type Outbound = {
    agent_id: string;
    agent_name?: string | undefined;
    llm_websocket_url: string;
    voice_id: string;
    last_modification_timestamp: number;
    enable_backchannel?: boolean | undefined;
    voice_temperature?: number | undefined;
    voice_speed?: number | undefined;
    responsiveness?: number | undefined;
    ambient_sound?: 'coffee-shop' | 'convention-hall' | 'summer-outdoor' | 'mountain-outdoor' | 'null' | undefined;
    webhook_url?: string | undefined;
    boosted_keywords?: string[] | undefined;

  };

  export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Agent> = z
    .object({
      agentId: z.string(),
      agentName: z.string().optional(),
      llmWebsocketUrl: z.string(),
      voiceId: z.string(),
      lastModificationTimestamp: z.number().int(),
      enableBackchannel: z.boolean().optional(),
      voiceTemperature: z.number().optional(),
      voiceSpeed: z.number().optional(),
      responsiveness: z.number().optional(),
      ambientSound: z.enum(['coffee-shop', 'convention-hall', 'summer-outdoor', 'mountain-outdoor', 'null']).optional(),
      webhookUrl: z.string().optional(),
      boostedKeywords: z.array(z.string()).optional(),
    })
    .transform((v) => {
      return {
        agent_id: v.agentId,
        ...(v.agentName === undefined ? null : { agent_name: v.agentName }),
        llm_websocket_url: v.llmWebsocketUrl,
        voice_id: v.voiceId,
        last_modification_timestamp: v.lastModificationTimestamp,
        ...(v.enableBackchannel === undefined ? null : { enable_backchannel: v.enableBackchannel }),
        ...(v.voiceTemperature === undefined ? null : { voice_temperature: v.voiceTemperature }),
        ...(v.voiceSpeed === undefined ? null : { voice_speed: v.voiceSpeed }),
        ...(v.responsiveness === undefined ? null : { responsiveness: v.responsiveness }),
        ...(v.ambientSound === undefined ? null : { ambient_sound: v.ambientSound }),
        ...(v.webhookUrl === undefined ? null : { webhook_url: v.webhookUrl }),
        ...(v.boostedKeywords === undefined ? null : { boosted_keywords: v.boostedKeywords }), // Correctly transformed
      };
    });
}
