// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts,import_extension=none"
// @generated from file mtm/sppb/conf.proto (package sppb, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  ConfCreateReq,
  ConfGetReq,
  ConfGetRes,
  ConfListReq,
  ConfListRes,
  ConfUpdateReq,
} from "./conf_pb";
import { MethodKind } from "@bufbuild/protobuf";
import { ResDeleteReq, Result } from "./mtm_pb";

/**
 * @generated from service sppb.ConfService
 */
export const ConfService = {
  typeName: "sppb.ConfService",
  methods: {
    /**
     * @generated from rpc sppb.ConfService.ConfList
     */
    confList: {
      name: "ConfList",
      I: ConfListReq,
      O: ConfListRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc sppb.ConfService.ConfGet
     */
    confGet: {
      name: "ConfGet",
      I: ConfGetReq,
      O: ConfGetRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc sppb.ConfService.ConfCreate
     */
    confCreate: {
      name: "ConfCreate",
      I: ConfCreateReq,
      O: Result,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc sppb.ConfService.ConfUpdate
     */
    confUpdate: {
      name: "ConfUpdate",
      I: ConfUpdateReq,
      O: Result,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc sppb.ConfService.ConfDelete
     */
    confDelete: {
      name: "ConfDelete",
      I: ResDeleteReq,
      O: Result,
      kind: MethodKind.Unary,
    },
  },
} as const;
