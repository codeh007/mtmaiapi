// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file api-contracts/workflows/workflows.proto (syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv1";
import {
  enumDesc,
  fileDesc,
  messageDesc,
  serviceDesc,
} from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file api-contracts/workflows/workflows.proto.
 */
export const file_api_contracts_workflows_workflows: GenFile =
  /*@__PURE__*/
  fileDesc(
    "CidhcGktY29udHJhY3RzL3dvcmtmbG93cy93b3JrZmxvd3MucHJvdG8iPgoSUHV0V29ya2Zsb3dSZXF1ZXN0EigKBG9wdHMYASABKAsyGi5DcmVhdGVXb3JrZmxvd1ZlcnNpb25PcHRzIr8EChlDcmVhdGVXb3JrZmxvd1ZlcnNpb25PcHRzEgwKBG5hbWUYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkSDwoHdmVyc2lvbhgDIAEoCRIWCg5ldmVudF90cmlnZ2VycxgEIAMoCRIVCg1jcm9uX3RyaWdnZXJzGAUgAygJEjYKEnNjaGVkdWxlZF90cmlnZ2VycxgGIAMoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASJAoEam9icxgHIAMoCzIWLkNyZWF0ZVdvcmtmbG93Sm9iT3B0cxItCgtjb25jdXJyZW5jeRgIIAEoCzIYLldvcmtmbG93Q29uY3VycmVuY3lPcHRzEh0KEHNjaGVkdWxlX3RpbWVvdXQYCSABKAlIAIgBARIXCgpjcm9uX2lucHV0GAogASgJSAGIAQESMwoOb25fZmFpbHVyZV9qb2IYCyABKAsyFi5DcmVhdGVXb3JrZmxvd0pvYk9wdHNIAogBARIkCgZzdGlja3kYDCABKA4yDy5TdGlja3lTdHJhdGVneUgDiAEBEiAKBGtpbmQYDSABKA4yDS5Xb3JrZmxvd0tpbmRIBIgBARIdChBkZWZhdWx0X3ByaW9yaXR5GA4gASgFSAWIAQFCEwoRX3NjaGVkdWxlX3RpbWVvdXRCDQoLX2Nyb25faW5wdXRCEQoPX29uX2ZhaWx1cmVfam9iQgkKB19zdGlja3lCBwoFX2tpbmRCEwoRX2RlZmF1bHRfcHJpb3JpdHki0AEKF1dvcmtmbG93Q29uY3VycmVuY3lPcHRzEhMKBmFjdGlvbhgBIAEoCUgAiAEBEhUKCG1heF9ydW5zGAIgASgFSAGIAQESNgoObGltaXRfc3RyYXRlZ3kYAyABKA4yGS5Db25jdXJyZW5jeUxpbWl0U3RyYXRlZ3lIAogBARIXCgpleHByZXNzaW9uGAQgASgJSAOIAQFCCQoHX2FjdGlvbkILCglfbWF4X3J1bnNCEQoPX2xpbWl0X3N0cmF0ZWd5Qg0KC19leHByZXNzaW9uImgKFUNyZWF0ZVdvcmtmbG93Sm9iT3B0cxIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEiYKBXN0ZXBzGAQgAygLMhcuQ3JlYXRlV29ya2Zsb3dTdGVwT3B0c0oECAMQBCLhAQoTRGVzaXJlZFdvcmtlckxhYmVscxIVCghzdHJWYWx1ZRgBIAEoCUgAiAEBEhUKCGludFZhbHVlGAIgASgFSAGIAQESFQoIcmVxdWlyZWQYAyABKAhIAogBARIvCgpjb21wYXJhdG9yGAQgASgOMhYuV29ya2VyTGFiZWxDb21wYXJhdG9ySAOIAQESEwoGd2VpZ2h0GAUgASgFSASIAQFCCwoJX3N0clZhbHVlQgsKCV9pbnRWYWx1ZUILCglfcmVxdWlyZWRCDQoLX2NvbXBhcmF0b3JCCQoHX3dlaWdodCK1AwoWQ3JlYXRlV29ya2Zsb3dTdGVwT3B0cxITCgtyZWFkYWJsZV9pZBgBIAEoCRIOCgZhY3Rpb24YAiABKAkSDwoHdGltZW91dBgDIAEoCRIOCgZpbnB1dHMYBCABKAkSDwoHcGFyZW50cxgFIAMoCRIRCgl1c2VyX2RhdGEYBiABKAkSDwoHcmV0cmllcxgHIAEoBRIpCgtyYXRlX2xpbWl0cxgIIAMoCzIULkNyZWF0ZVN0ZXBSYXRlTGltaXQSQAoNd29ya2VyX2xhYmVscxgJIAMoCzIpLkNyZWF0ZVdvcmtmbG93U3RlcE9wdHMuV29ya2VyTGFiZWxzRW50cnkSGwoOYmFja29mZl9mYWN0b3IYCiABKAJIAIgBARIgChNiYWNrb2ZmX21heF9zZWNvbmRzGAsgASgFSAGIAQEaSQoRV29ya2VyTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEiMKBXZhbHVlGAIgASgLMhQuRGVzaXJlZFdvcmtlckxhYmVsczoCOAFCEQoPX2JhY2tvZmZfZmFjdG9yQhYKFF9iYWNrb2ZmX21heF9zZWNvbmRzIvoBChNDcmVhdGVTdGVwUmF0ZUxpbWl0EgsKA2tleRgBIAEoCRISCgV1bml0cxgCIAEoBUgAiAEBEhUKCGtleV9leHByGAMgASgJSAGIAQESFwoKdW5pdHNfZXhwchgEIAEoCUgCiAEBEh4KEWxpbWl0X3ZhbHVlc19leHByGAUgASgJSAOIAQESKQoIZHVyYXRpb24YBiABKA4yEi5SYXRlTGltaXREdXJhdGlvbkgEiAEBQggKBl91bml0c0ILCglfa2V5X2V4cHJCDQoLX3VuaXRzX2V4cHJCFAoSX2xpbWl0X3ZhbHVlc19leHByQgsKCV9kdXJhdGlvbiIWChRMaXN0V29ya2Zsb3dzUmVxdWVzdCLNAgoXU2NoZWR1bGVXb3JrZmxvd1JlcXVlc3QSDAoEbmFtZRgBIAEoCRItCglzY2hlZHVsZXMYAiADKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEg0KBWlucHV0GAMgASgJEhYKCXBhcmVudF9pZBgEIAEoCUgAiAEBEh8KEnBhcmVudF9zdGVwX3J1bl9pZBgFIAEoCUgBiAEBEhgKC2NoaWxkX2luZGV4GAYgASgFSAKIAQESFgoJY2hpbGRfa2V5GAcgASgJSAOIAQESIAoTYWRkaXRpb25hbF9tZXRhZGF0YRgIIAEoCUgEiAEBQgwKCl9wYXJlbnRfaWRCFQoTX3BhcmVudF9zdGVwX3J1bl9pZEIOCgxfY2hpbGRfaW5kZXhCDAoKX2NoaWxkX2tleUIWChRfYWRkaXRpb25hbF9tZXRhZGF0YSJPChFTY2hlZHVsZWRXb3JrZmxvdxIKCgJpZBgBIAEoCRIuCgp0cmlnZ2VyX2F0GAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCLjAQoPV29ya2Zsb3dWZXJzaW9uEgoKAmlkGAEgASgJEi4KCmNyZWF0ZWRfYXQYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEg8KB3ZlcnNpb24YBSABKAkSDQoFb3JkZXIYBiABKAMSEwoLd29ya2Zsb3dfaWQYByABKAkSLwoTc2NoZWR1bGVkX3dvcmtmbG93cxgIIAMoCzISLlNjaGVkdWxlZFdvcmtmbG93Ij8KF1dvcmtmbG93VHJpZ2dlckV2ZW50UmVmEhEKCXBhcmVudF9pZBgBIAEoCRIRCglldmVudF9rZXkYAiABKAkiOQoWV29ya2Zsb3dUcmlnZ2VyQ3JvblJlZhIRCglwYXJlbnRfaWQYASABKAkSDAoEY3JvbhgCIAEoCSJIChpCdWxrVHJpZ2dlcldvcmtmbG93UmVxdWVzdBIqCgl3b3JrZmxvd3MYASADKAsyFy5UcmlnZ2VyV29ya2Zsb3dSZXF1ZXN0IjcKG0J1bGtUcmlnZ2VyV29ya2Zsb3dSZXNwb25zZRIYChB3b3JrZmxvd19ydW5faWRzGAEgAygJIvcCChZUcmlnZ2VyV29ya2Zsb3dSZXF1ZXN0EgwKBG5hbWUYASABKAkSDQoFaW5wdXQYAiABKAkSFgoJcGFyZW50X2lkGAMgASgJSACIAQESHwoScGFyZW50X3N0ZXBfcnVuX2lkGAQgASgJSAGIAQESGAoLY2hpbGRfaW5kZXgYBSABKAVIAogBARIWCgljaGlsZF9rZXkYBiABKAlIA4gBARIgChNhZGRpdGlvbmFsX21ldGFkYXRhGAcgASgJSASIAQESHgoRZGVzaXJlZF93b3JrZXJfaWQYCCABKAlIBYgBARIVCghwcmlvcml0eRgJIAEoBUgGiAEBQgwKCl9wYXJlbnRfaWRCFQoTX3BhcmVudF9zdGVwX3J1bl9pZEIOCgxfY2hpbGRfaW5kZXhCDAoKX2NoaWxkX2tleUIWChRfYWRkaXRpb25hbF9tZXRhZGF0YUIUChJfZGVzaXJlZF93b3JrZXJfaWRCCwoJX3ByaW9yaXR5IjIKF1RyaWdnZXJXb3JrZmxvd1Jlc3BvbnNlEhcKD3dvcmtmbG93X3J1bl9pZBgBIAEoCSJXChNQdXRSYXRlTGltaXRSZXF1ZXN0EgsKA2tleRgBIAEoCRINCgVsaW1pdBgCIAEoBRIkCghkdXJhdGlvbhgDIAEoDjISLlJhdGVMaW1pdER1cmF0aW9uIhYKFFB1dFJhdGVMaW1pdFJlc3BvbnNlKiQKDlN0aWNreVN0cmF0ZWd5EggKBFNPRlQQABIICgRIQVJEEAEqMgoMV29ya2Zsb3dLaW5kEgwKCEZVTkNUSU9OEAASCwoHRFVSQUJMRRABEgcKA0RBRxACKn8KGENvbmN1cnJlbmN5TGltaXRTdHJhdGVneRIWChJDQU5DRUxfSU5fUFJPR1JFU1MQABIPCgtEUk9QX05FV0VTVBABEhAKDFFVRVVFX05FV0VTVBACEhUKEUdST1VQX1JPVU5EX1JPQklOEAMSEQoNQ0FOQ0VMX05FV0VTVBAEKoUBChVXb3JrZXJMYWJlbENvbXBhcmF0b3ISCQoFRVFVQUwQABINCglOT1RfRVFVQUwQARIQCgxHUkVBVEVSX1RIQU4QAhIZChVHUkVBVEVSX1RIQU5fT1JfRVFVQUwQAxINCglMRVNTX1RIQU4QBBIWChJMRVNTX1RIQU5fT1JfRVFVQUwQBSpdChFSYXRlTGltaXREdXJhdGlvbhIKCgZTRUNPTkQQABIKCgZNSU5VVEUQARIICgRIT1VSEAISBwoDREFZEAMSCAoEV0VFSxAEEgkKBU1PTlRIEAUSCAoEWUVBUhAGMtwCCg9Xb3JrZmxvd1NlcnZpY2USNAoLUHV0V29ya2Zsb3cSEy5QdXRXb3JrZmxvd1JlcXVlc3QaEC5Xb3JrZmxvd1ZlcnNpb24SPgoQU2NoZWR1bGVXb3JrZmxvdxIYLlNjaGVkdWxlV29ya2Zsb3dSZXF1ZXN0GhAuV29ya2Zsb3dWZXJzaW9uEkQKD1RyaWdnZXJXb3JrZmxvdxIXLlRyaWdnZXJXb3JrZmxvd1JlcXVlc3QaGC5UcmlnZ2VyV29ya2Zsb3dSZXNwb25zZRJQChNCdWxrVHJpZ2dlcldvcmtmbG93EhsuQnVsa1RyaWdnZXJXb3JrZmxvd1JlcXVlc3QaHC5CdWxrVHJpZ2dlcldvcmtmbG93UmVzcG9uc2USOwoMUHV0UmF0ZUxpbWl0EhQuUHV0UmF0ZUxpbWl0UmVxdWVzdBoVLlB1dFJhdGVMaW1pdFJlc3BvbnNlQkVCDldvcmtmbG93c1Byb3RvUAFaMWdpdGh1Yi5jb20vY29kZWgwMDcvZ29tdG0vYXBpLWNvbnRyYWN0cy93b3JrZmxvd3NiBnByb3RvMw",
    [file_google_protobuf_timestamp],
  );

/**
 * @generated from message PutWorkflowRequest
 */
export type PutWorkflowRequest = Message<"PutWorkflowRequest"> & {
  /**
   * @generated from field: CreateWorkflowVersionOpts opts = 1;
   */
  opts?: CreateWorkflowVersionOpts;
};

/**
 * Describes the message PutWorkflowRequest.
 * Use `create(PutWorkflowRequestSchema)` to create a new message.
 */
export const PutWorkflowRequestSchema: GenMessage<PutWorkflowRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 0);

/**
 * CreateWorkflowVersionOpts represents options to create a workflow version.
 *
 * @generated from message CreateWorkflowVersionOpts
 */
export type CreateWorkflowVersionOpts = Message<"CreateWorkflowVersionOpts"> & {
  /**
   * (required) the workflow name
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * (optional) the workflow description
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * (required) the workflow version
   *
   * @generated from field: string version = 3;
   */
  version: string;

  /**
   * (optional) event triggers for the workflow
   *
   * @generated from field: repeated string event_triggers = 4;
   */
  eventTriggers: string[];

  /**
   * (optional) cron triggers for the workflow
   *
   * @generated from field: repeated string cron_triggers = 5;
   */
  cronTriggers: string[];

  /**
   * (optional) scheduled triggers for the workflow
   *
   * @generated from field: repeated google.protobuf.Timestamp scheduled_triggers = 6;
   */
  scheduledTriggers: Timestamp[];

  /**
   * (required) the workflow jobs
   *
   * @generated from field: repeated CreateWorkflowJobOpts jobs = 7;
   */
  jobs: CreateWorkflowJobOpts[];

  /**
   * (optional) the workflow concurrency options
   *
   * @generated from field: WorkflowConcurrencyOpts concurrency = 8;
   */
  concurrency?: WorkflowConcurrencyOpts;

  /**
   * (optional) the timeout for the schedule
   *
   * @generated from field: optional string schedule_timeout = 9;
   */
  scheduleTimeout?: string;

  /**
   * (optional) the input for the cron trigger
   *
   * @generated from field: optional string cron_input = 10;
   */
  cronInput?: string;

  /**
   * (optional) the job to run on failure
   *
   * @generated from field: optional CreateWorkflowJobOpts on_failure_job = 11;
   */
  onFailureJob?: CreateWorkflowJobOpts;

  /**
   * (optional) the sticky strategy for assigning steps to workers
   *
   * @generated from field: optional StickyStrategy sticky = 12;
   */
  sticky?: StickyStrategy;

  /**
   * (optional) the kind of workflow
   *
   * @generated from field: optional WorkflowKind kind = 13;
   */
  kind?: WorkflowKind;

  /**
   * (optional) the priority of the workflow
   *
   * @generated from field: optional int32 default_priority = 14;
   */
  defaultPriority?: number;
};

/**
 * Describes the message CreateWorkflowVersionOpts.
 * Use `create(CreateWorkflowVersionOptsSchema)` to create a new message.
 */
export const CreateWorkflowVersionOptsSchema: GenMessage<CreateWorkflowVersionOpts> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 1);

/**
 * @generated from message WorkflowConcurrencyOpts
 */
export type WorkflowConcurrencyOpts = Message<"WorkflowConcurrencyOpts"> & {
  /**
   * (optional) the action id for getting the concurrency group
   *
   * @generated from field: optional string action = 1;
   */
  action?: string;

  /**
   * (optional) the maximum number of concurrent workflow runs, default 1
   *
   * @generated from field: optional int32 max_runs = 2;
   */
  maxRuns?: number;

  /**
   * (optional) the strategy to use when the concurrency limit is
   *
   * @generated from field: optional ConcurrencyLimitStrategy limit_strategy = 3;
   */
  limitStrategy?: ConcurrencyLimitStrategy;

  /**
   * reached, default CANCEL_IN_PROGRESS
   *
   * (optional) the expression to use for concurrency
   *
   * @generated from field: optional string expression = 4;
   */
  expression?: string;
};

/**
 * Describes the message WorkflowConcurrencyOpts.
 * Use `create(WorkflowConcurrencyOptsSchema)` to create a new message.
 */
export const WorkflowConcurrencyOptsSchema: GenMessage<WorkflowConcurrencyOpts> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 2);

/**
 * CreateWorkflowJobOpts represents options to create a workflow job.
 *
 * @generated from message CreateWorkflowJobOpts
 */
export type CreateWorkflowJobOpts = Message<"CreateWorkflowJobOpts"> & {
  /**
   * (required) the job name
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * (optional) the job description
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * (required) the job steps
   *
   * @generated from field: repeated CreateWorkflowStepOpts steps = 4;
   */
  steps: CreateWorkflowStepOpts[];
};

/**
 * Describes the message CreateWorkflowJobOpts.
 * Use `create(CreateWorkflowJobOptsSchema)` to create a new message.
 */
export const CreateWorkflowJobOptsSchema: GenMessage<CreateWorkflowJobOpts> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 3);

/**
 * @generated from message DesiredWorkerLabels
 */
export type DesiredWorkerLabels = Message<"DesiredWorkerLabels"> & {
  /**
   * value of the affinity
   *
   * @generated from field: optional string strValue = 1;
   */
  strValue?: string;

  /**
   * @generated from field: optional int32 intValue = 2;
   */
  intValue?: number;

  /**
   * *
   * (optional) Specifies whether the affinity setting is required.
   * If required, the worker will not accept actions that do not have a truthy
   * affinity setting.
   *
   * Defaults to false.
   *
   * @generated from field: optional bool required = 3;
   */
  required?: boolean;

  /**
   * *
   * (optional) Specifies the comparator for the affinity setting.
   * If not set, the default is EQUAL.
   *
   * @generated from field: optional WorkerLabelComparator comparator = 4;
   */
  comparator?: WorkerLabelComparator;

  /**
   * *
   * (optional) Specifies the weight of the affinity setting.
   * If not set, the default is 100.
   *
   * @generated from field: optional int32 weight = 5;
   */
  weight?: number;
};

/**
 * Describes the message DesiredWorkerLabels.
 * Use `create(DesiredWorkerLabelsSchema)` to create a new message.
 */
export const DesiredWorkerLabelsSchema: GenMessage<DesiredWorkerLabels> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 4);

/**
 * CreateWorkflowStepOpts represents options to create a workflow step.
 *
 * @generated from message CreateWorkflowStepOpts
 */
export type CreateWorkflowStepOpts = Message<"CreateWorkflowStepOpts"> & {
  /**
   * (required) the step name
   *
   * @generated from field: string readable_id = 1;
   */
  readableId: string;

  /**
   * (required) the step action id
   *
   * @generated from field: string action = 2;
   */
  action: string;

  /**
   * (optional) the step timeout
   *
   * @generated from field: string timeout = 3;
   */
  timeout: string;

  /**
   * (optional) the step inputs, assuming string representation of JSON
   *
   * @generated from field: string inputs = 4;
   */
  inputs: string;

  /**
   * (optional) the step parents. if none are
   *
   * @generated from field: repeated string parents = 5;
   */
  parents: string[];

  /**
   * passed in, this is a root step
   *
   * (optional) the custom step user data, assuming string
   *
   * @generated from field: string user_data = 6;
   */
  userData: string;

  /**
   * representation of JSON
   *
   * (optional) the number of retries for the step, default 0
   *
   * @generated from field: int32 retries = 7;
   */
  retries: number;

  /**
   * (optional) the rate limits for the step
   *
   * @generated from field: repeated CreateStepRateLimit rate_limits = 8;
   */
  rateLimits: CreateStepRateLimit[];

  /**
   * (optional) the desired worker affinity state for the step
   *
   * @generated from field: map<string, DesiredWorkerLabels> worker_labels = 9;
   */
  workerLabels: { [key: string]: DesiredWorkerLabels };

  /**
   * (optional) the retry backoff factor for the step
   *
   * @generated from field: optional float backoff_factor = 10;
   */
  backoffFactor?: number;

  /**
   * (optional) the maximum backoff time for the step
   *
   * @generated from field: optional int32 backoff_max_seconds = 11;
   */
  backoffMaxSeconds?: number;
};

/**
 * Describes the message CreateWorkflowStepOpts.
 * Use `create(CreateWorkflowStepOptsSchema)` to create a new message.
 */
export const CreateWorkflowStepOptsSchema: GenMessage<CreateWorkflowStepOpts> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 5);

/**
 * @generated from message CreateStepRateLimit
 */
export type CreateStepRateLimit = Message<"CreateStepRateLimit"> & {
  /**
   * (required) the key for the rate limit
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * (optional) the number of units this step consumes
   *
   * @generated from field: optional int32 units = 2;
   */
  units?: number;

  /**
   * (optional) a CEL expression for determining the rate limit key
   *
   * @generated from field: optional string key_expr = 3;
   */
  keyExpr?: string;

  /**
   * (optional) a CEL expression for determining
   *
   * @generated from field: optional string units_expr = 4;
   */
  unitsExpr?: string;

  /**
   * the number of units consumed
   *
   * (optional) a CEL expression for determining the total amount of rate
   *
   * @generated from field: optional string limit_values_expr = 5;
   */
  limitValuesExpr?: string;

  /**
   * limit units
   *
   * (optional) the default rate limit window to use for dynamic rate
   *
   * @generated from field: optional RateLimitDuration duration = 6;
   */
  duration?: RateLimitDuration;
};

/**
 * Describes the message CreateStepRateLimit.
 * Use `create(CreateStepRateLimitSchema)` to create a new message.
 */
export const CreateStepRateLimitSchema: GenMessage<CreateStepRateLimit> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 6);

/**
 * ListWorkflowsRequest is the request for ListWorkflows.
 *
 * @generated from message ListWorkflowsRequest
 */
export type ListWorkflowsRequest = Message<"ListWorkflowsRequest"> & {};

/**
 * Describes the message ListWorkflowsRequest.
 * Use `create(ListWorkflowsRequestSchema)` to create a new message.
 */
export const ListWorkflowsRequestSchema: GenMessage<ListWorkflowsRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 7);

/**
 * @generated from message ScheduleWorkflowRequest
 */
export type ScheduleWorkflowRequest = Message<"ScheduleWorkflowRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated google.protobuf.Timestamp schedules = 2;
   */
  schedules: Timestamp[];

  /**
   * (optional) the input data for the workflow
   *
   * @generated from field: string input = 3;
   */
  input: string;

  /**
   * (optional) the parent workflow run id
   *
   * @generated from field: optional string parent_id = 4;
   */
  parentId?: string;

  /**
   * (optional) the parent step run id
   *
   * @generated from field: optional string parent_step_run_id = 5;
   */
  parentStepRunId?: string;

  /**
   * (optional) the index of the child workflow. if this is set, matches on the
   * index or the child key will be a no-op, even if the schedule has changed.
   *
   * @generated from field: optional int32 child_index = 6;
   */
  childIndex?: number;

  /**
   * (optional) the key for the child. if this is set, matches on the index or
   * the child key will be a no-op, even if the schedule has changed.
   *
   * @generated from field: optional string child_key = 7;
   */
  childKey?: string;

  /**
   * (optional) the additional metadata for the workflow
   *
   * @generated from field: optional string additional_metadata = 8;
   */
  additionalMetadata?: string;
};

/**
 * Describes the message ScheduleWorkflowRequest.
 * Use `create(ScheduleWorkflowRequestSchema)` to create a new message.
 */
export const ScheduleWorkflowRequestSchema: GenMessage<ScheduleWorkflowRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 8);

/**
 * ScheduledWorkflow represents a scheduled workflow.
 *
 * @generated from message ScheduledWorkflow
 */
export type ScheduledWorkflow = Message<"ScheduledWorkflow"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: google.protobuf.Timestamp trigger_at = 2;
   */
  triggerAt?: Timestamp;
};

/**
 * Describes the message ScheduledWorkflow.
 * Use `create(ScheduledWorkflowSchema)` to create a new message.
 */
export const ScheduledWorkflowSchema: GenMessage<ScheduledWorkflow> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 9);

/**
 * WorkflowVersion represents the WorkflowVersion model.
 *
 * @generated from message WorkflowVersion
 */
export type WorkflowVersion = Message<"WorkflowVersion"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 2;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 3;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string version = 5;
   */
  version: string;

  /**
   * @generated from field: int64 order = 6;
   */
  order: bigint;

  /**
   * @generated from field: string workflow_id = 7;
   */
  workflowId: string;

  /**
   * @generated from field: repeated ScheduledWorkflow scheduled_workflows = 8;
   */
  scheduledWorkflows: ScheduledWorkflow[];
};

/**
 * Describes the message WorkflowVersion.
 * Use `create(WorkflowVersionSchema)` to create a new message.
 */
export const WorkflowVersionSchema: GenMessage<WorkflowVersion> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 10);

/**
 * WorkflowTriggerEventRef represents the WorkflowTriggerEventRef model.
 *
 * @generated from message WorkflowTriggerEventRef
 */
export type WorkflowTriggerEventRef = Message<"WorkflowTriggerEventRef"> & {
  /**
   * @generated from field: string parent_id = 1;
   */
  parentId: string;

  /**
   * @generated from field: string event_key = 2;
   */
  eventKey: string;
};

/**
 * Describes the message WorkflowTriggerEventRef.
 * Use `create(WorkflowTriggerEventRefSchema)` to create a new message.
 */
export const WorkflowTriggerEventRefSchema: GenMessage<WorkflowTriggerEventRef> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 11);

/**
 * WorkflowTriggerCronRef represents the WorkflowTriggerCronRef model.
 *
 * @generated from message WorkflowTriggerCronRef
 */
export type WorkflowTriggerCronRef = Message<"WorkflowTriggerCronRef"> & {
  /**
   * @generated from field: string parent_id = 1;
   */
  parentId: string;

  /**
   * @generated from field: string cron = 2;
   */
  cron: string;
};

/**
 * Describes the message WorkflowTriggerCronRef.
 * Use `create(WorkflowTriggerCronRefSchema)` to create a new message.
 */
export const WorkflowTriggerCronRefSchema: GenMessage<WorkflowTriggerCronRef> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 12);

/**
 * @generated from message BulkTriggerWorkflowRequest
 */
export type BulkTriggerWorkflowRequest =
  Message<"BulkTriggerWorkflowRequest"> & {
    /**
     * @generated from field: repeated TriggerWorkflowRequest workflows = 1;
     */
    workflows: TriggerWorkflowRequest[];
  };

/**
 * Describes the message BulkTriggerWorkflowRequest.
 * Use `create(BulkTriggerWorkflowRequestSchema)` to create a new message.
 */
export const BulkTriggerWorkflowRequestSchema: GenMessage<BulkTriggerWorkflowRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 13);

/**
 * @generated from message BulkTriggerWorkflowResponse
 */
export type BulkTriggerWorkflowResponse =
  Message<"BulkTriggerWorkflowResponse"> & {
    /**
     * @generated from field: repeated string workflow_run_ids = 1;
     */
    workflowRunIds: string[];
  };

/**
 * Describes the message BulkTriggerWorkflowResponse.
 * Use `create(BulkTriggerWorkflowResponseSchema)` to create a new message.
 */
export const BulkTriggerWorkflowResponseSchema: GenMessage<BulkTriggerWorkflowResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 14);

/**
 * @generated from message TriggerWorkflowRequest
 */
export type TriggerWorkflowRequest = Message<"TriggerWorkflowRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * (optional) the input data for the workflow
   *
   * @generated from field: string input = 2;
   */
  input: string;

  /**
   * (optional) the parent workflow run id
   *
   * @generated from field: optional string parent_id = 3;
   */
  parentId?: string;

  /**
   * (optional) the parent step run id
   *
   * @generated from field: optional string parent_step_run_id = 4;
   */
  parentStepRunId?: string;

  /**
   * (optional) the index of the child workflow. if this is set, matches on the
   * index or the child key will return an existing workflow run if the parent
   * id, parent step run id, and child index/key match an existing workflow run.
   *
   * @generated from field: optional int32 child_index = 5;
   */
  childIndex?: number;

  /**
   * (optional) the key for the child. if this is set, matches on the index or
   * the child key will return an existing workflow run if the parent id, parent
   * step run id, and child index/key match an existing workflow run.
   *
   * @generated from field: optional string child_key = 6;
   */
  childKey?: string;

  /**
   * (optional) additional metadata for the workflow
   *
   * @generated from field: optional string additional_metadata = 7;
   */
  additionalMetadata?: string;

  /**
   * (optional) desired worker id for the workflow run,
   * requires the workflow definition to have a sticky strategy
   *
   * @generated from field: optional string desired_worker_id = 8;
   */
  desiredWorkerId?: string;

  /**
   * (optional) override for the priority of the workflow steps, will set all
   * steps to this priority
   *
   * @generated from field: optional int32 priority = 9;
   */
  priority?: number;
};

/**
 * Describes the message TriggerWorkflowRequest.
 * Use `create(TriggerWorkflowRequestSchema)` to create a new message.
 */
export const TriggerWorkflowRequestSchema: GenMessage<TriggerWorkflowRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 15);

/**
 * @generated from message TriggerWorkflowResponse
 */
export type TriggerWorkflowResponse = Message<"TriggerWorkflowResponse"> & {
  /**
   * @generated from field: string workflow_run_id = 1;
   */
  workflowRunId: string;
};

/**
 * Describes the message TriggerWorkflowResponse.
 * Use `create(TriggerWorkflowResponseSchema)` to create a new message.
 */
export const TriggerWorkflowResponseSchema: GenMessage<TriggerWorkflowResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 16);

/**
 * @generated from message PutRateLimitRequest
 */
export type PutRateLimitRequest = Message<"PutRateLimitRequest"> & {
  /**
   * (required) the global key for the rate limit
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * (required) the max limit for the rate limit (per unit of time)
   *
   * @generated from field: int32 limit = 2;
   */
  limit: number;

  /**
   * (required) the duration of time for the rate limit (second|minute|hour)
   *
   * @generated from field: RateLimitDuration duration = 3;
   */
  duration: RateLimitDuration;
};

/**
 * Describes the message PutRateLimitRequest.
 * Use `create(PutRateLimitRequestSchema)` to create a new message.
 */
export const PutRateLimitRequestSchema: GenMessage<PutRateLimitRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 17);

/**
 * @generated from message PutRateLimitResponse
 */
export type PutRateLimitResponse = Message<"PutRateLimitResponse"> & {};

/**
 * Describes the message PutRateLimitResponse.
 * Use `create(PutRateLimitResponseSchema)` to create a new message.
 */
export const PutRateLimitResponseSchema: GenMessage<PutRateLimitResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_workflows_workflows, 18);

/**
 * @generated from enum StickyStrategy
 */
export enum StickyStrategy {
  /**
   * @generated from enum value: SOFT = 0;
   */
  SOFT = 0,

  /**
   * @generated from enum value: HARD = 1;
   */
  HARD = 1,
}

/**
 * Describes the enum StickyStrategy.
 */
export const StickyStrategySchema: GenEnum<StickyStrategy> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_workflows_workflows, 0);

/**
 * @generated from enum WorkflowKind
 */
export enum WorkflowKind {
  /**
   * @generated from enum value: FUNCTION = 0;
   */
  FUNCTION = 0,

  /**
   * @generated from enum value: DURABLE = 1;
   */
  DURABLE = 1,

  /**
   * @generated from enum value: DAG = 2;
   */
  DAG = 2,
}

/**
 * Describes the enum WorkflowKind.
 */
export const WorkflowKindSchema: GenEnum<WorkflowKind> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_workflows_workflows, 1);

/**
 * @generated from enum ConcurrencyLimitStrategy
 */
export enum ConcurrencyLimitStrategy {
  /**
   * @generated from enum value: CANCEL_IN_PROGRESS = 0;
   */
  CANCEL_IN_PROGRESS = 0,

  /**
   * deprecated
   *
   * @generated from enum value: DROP_NEWEST = 1;
   */
  DROP_NEWEST = 1,

  /**
   * deprecated
   *
   * @generated from enum value: QUEUE_NEWEST = 2;
   */
  QUEUE_NEWEST = 2,

  /**
   * @generated from enum value: GROUP_ROUND_ROBIN = 3;
   */
  GROUP_ROUND_ROBIN = 3,

  /**
   * @generated from enum value: CANCEL_NEWEST = 4;
   */
  CANCEL_NEWEST = 4,
}

/**
 * Describes the enum ConcurrencyLimitStrategy.
 */
export const ConcurrencyLimitStrategySchema: GenEnum<ConcurrencyLimitStrategy> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_workflows_workflows, 2);

/**
 * @generated from enum WorkerLabelComparator
 */
export enum WorkerLabelComparator {
  /**
   * @generated from enum value: EQUAL = 0;
   */
  EQUAL = 0,

  /**
   * @generated from enum value: NOT_EQUAL = 1;
   */
  NOT_EQUAL = 1,

  /**
   * @generated from enum value: GREATER_THAN = 2;
   */
  GREATER_THAN = 2,

  /**
   * @generated from enum value: GREATER_THAN_OR_EQUAL = 3;
   */
  GREATER_THAN_OR_EQUAL = 3,

  /**
   * @generated from enum value: LESS_THAN = 4;
   */
  LESS_THAN = 4,

  /**
   * @generated from enum value: LESS_THAN_OR_EQUAL = 5;
   */
  LESS_THAN_OR_EQUAL = 5,
}

/**
 * Describes the enum WorkerLabelComparator.
 */
export const WorkerLabelComparatorSchema: GenEnum<WorkerLabelComparator> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_workflows_workflows, 3);

/**
 * @generated from enum RateLimitDuration
 */
export enum RateLimitDuration {
  /**
   * @generated from enum value: SECOND = 0;
   */
  SECOND = 0,

  /**
   * @generated from enum value: MINUTE = 1;
   */
  MINUTE = 1,

  /**
   * @generated from enum value: HOUR = 2;
   */
  HOUR = 2,

  /**
   * @generated from enum value: DAY = 3;
   */
  DAY = 3,

  /**
   * @generated from enum value: WEEK = 4;
   */
  WEEK = 4,

  /**
   * @generated from enum value: MONTH = 5;
   */
  MONTH = 5,

  /**
   * @generated from enum value: YEAR = 6;
   */
  YEAR = 6,
}

/**
 * Describes the enum RateLimitDuration.
 */
export const RateLimitDurationSchema: GenEnum<RateLimitDuration> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_workflows_workflows, 4);

/**
 * WorkflowService represents a set of RPCs for managing workflows.
 *
 * @generated from service WorkflowService
 */
export const WorkflowService: GenService<{
  /**
   * @generated from rpc WorkflowService.PutWorkflow
   */
  putWorkflow: {
    methodKind: "unary";
    input: typeof PutWorkflowRequestSchema;
    output: typeof WorkflowVersionSchema;
  };
  /**
   * @generated from rpc WorkflowService.ScheduleWorkflow
   */
  scheduleWorkflow: {
    methodKind: "unary";
    input: typeof ScheduleWorkflowRequestSchema;
    output: typeof WorkflowVersionSchema;
  };
  /**
   * @generated from rpc WorkflowService.TriggerWorkflow
   */
  triggerWorkflow: {
    methodKind: "unary";
    input: typeof TriggerWorkflowRequestSchema;
    output: typeof TriggerWorkflowResponseSchema;
  };
  /**
   * @generated from rpc WorkflowService.BulkTriggerWorkflow
   */
  bulkTriggerWorkflow: {
    methodKind: "unary";
    input: typeof BulkTriggerWorkflowRequestSchema;
    output: typeof BulkTriggerWorkflowResponseSchema;
  };
  /**
   * @generated from rpc WorkflowService.PutRateLimit
   */
  putRateLimit: {
    methodKind: "unary";
    input: typeof PutRateLimitRequestSchema;
    output: typeof PutRateLimitResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_api_contracts_workflows_workflows, 0);
