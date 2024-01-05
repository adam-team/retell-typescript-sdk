/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class AgentPromptParams extends SpeakeasyBase {
    /**
     * The name of the parameter enclosed as `${YOUR_PARAM_NAME}` in agent prompt.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The value of parameter to substitute in agent prompt.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}
