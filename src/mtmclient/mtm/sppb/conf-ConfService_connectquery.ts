// @generated by protoc-gen-connect-query v2.0.1 with parameter "target=ts,import_extension=none,ts_nocheck=true"
// @generated from file mtm/sppb/conf.proto (package sppb, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConfService } from "./conf_pb";

/**
 * @generated from rpc sppb.ConfService.ConfList
 */
export const confList = ConfService.method.confList;

/**
 * @generated from rpc sppb.ConfService.ConfGet
 */
export const confGet = ConfService.method.confGet;

/**
 * @generated from rpc sppb.ConfService.ConfCreate
 */
export const confCreate = ConfService.method.confCreate;

/**
 * @generated from rpc sppb.ConfService.ConfUpdate
 */
export const confUpdate = ConfService.method.confUpdate;

/**
 * @generated from rpc sppb.ConfService.ConfDelete
 */
export const confDelete = ConfService.method.confDelete;
