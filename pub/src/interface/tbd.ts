import * as pt from "pareto-core-types"

export type BooleanRange = pt.Nested<boolean>

export type And = ($: BooleanRange) => boolean

export type Or = ($: BooleanRange) => boolean

export type Not = ($: boolean) => boolean

export type GreaterThan = ($: {
    this: number,
    that: number
}) => boolean

export type SmallerThan = ($: {
    this: number,
    that: number
}) => boolean

export type Equal = ($: {
    this: number,
    that: number
}) => boolean

export type IsZero = ($: number) => boolean