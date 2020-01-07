declare module 'infrastructure/utils' {
    type NonObj = number | string | boolean | ((...args: unknown[]) => unknown) | null | undefined;

    export type Exact<T1, T2> = (
        [ANY_LITERAL, ANY_LITERAL] extends [IsAny<T2>, IsAny<T1>]
            ? true
            : ANY_LITERAL extends (IsAny<T2> | IsAny<T1>)
            ? false
            : keyof T1 extends keyof T2
                ? keyof T2 extends keyof T1
                    ? [T1] extends [T2]
                        ? [T2] extends [T1]
                            ? true
                            : false
                        : false
                    : false
                : false
        );

    export interface Indexed<T = any> {
        [x: string]: T;
    }

    export type Iterable<R> = Promise<R> | IterableIterator<R>;

    export type Callable<TArgs extends any[] = any[], TRes = any> = (...args: TArgs) => TRes | Iterable<TRes>;

    export type ExtractByType<T, S> = Pick<T, {
        [K in keyof T]: T[K] extends S ? K : never
    }[keyof T]>;

    export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    export type Response<T extends (...args: any[]) => any> = ReturnType<T> extends Promise<infer U> ? U : never;

    export type ExtractArgs<TFunc> = TFunc extends (...args: infer TArgs) => any
        ? TArgs
        : never;

    export type ExtractFirstArg<TFunc> = TFunc extends (arg: infer TArg) => any
        ? TArg
        : never;

    export type ReplaceReturn<TFunc, TRet> = TFunc extends (...args: infer TArgs) => any
        ? (...args: TArgs) => TRet
        : never;

    export type DeepPartial<T> = T extends NonObj
        ? T
        : T extends (infer U)[]
            ? {
                [K in keyof U]?: DeepPartial<U[K]>
            }[]
            : {
                [K in keyof T]?: DeepPartial<T[K]>
            };

    export type InstanceOf<T> = T extends new(...args: any[]) => infer I ? I : never;

    export type ANY_LITERAL = '__$ANY_LITERAL$__';

    export type NOT_ANY_LITERAL = '__$NOT_ANY_LITERAL$__';

    type AnyPrecheck<T> = T extends never ? ANY_LITERAL : NOT_ANY_LITERAL;

    export type IsAny<T> =  AnyPrecheck<T> extends NOT_ANY_LITERAL
        ? NOT_ANY_LITERAL
        : ANY_LITERAL;

    export type PURE_OBJ_LITERAL = '__$PURE_OBJ_LITERAL$__';

    export type NOT_PURE_OBJ_LITERAL = '__$NOT_PURE_OBJ_LITERAL$__';

    type PureObjPrecheck<T> = (
        [T] extends [never]
            ? NOT_PURE_OBJ_LITERAL
            : T extends object
            ? T extends NonObj | any[]
                ? NOT_PURE_OBJ_LITERAL
                : PURE_OBJ_LITERAL
            : NOT_PURE_OBJ_LITERAL
        );

    export type IsPureObj<T> = PureObjPrecheck<T> extends PURE_OBJ_LITERAL
        ? PURE_OBJ_LITERAL
        : NOT_PURE_OBJ_LITERAL;

    export type KnownKeys<T> = {
        [K in keyof T]: string extends K ? never : number extends K ? never : K
    } extends { [_ in keyof T]: infer U } ? U : never;

    export type PickKnown<T> = Pick<T, Extract<KnownKeys<T>, keyof T>>;

    export type Assign<T1, T2> = {
        [K in keyof T2]: (
            K extends keyof (T2 | T1)
                // any надо проверять отдельно
                ? ANY_LITERAL extends (IsAny<T2[K]> | IsAny<T1[K]>)
                ? T2[K]
                : T1[K] extends (infer U)[]
                    // для элементов массивов мерджим только объектные типы, иначе перетираем
                    ? T2[K] extends (infer W)[]
                        ? ANY_LITERAL extends (IsAny<U> | IsAny<W>)
                            ? T2[K]
                            : NOT_PURE_OBJ_LITERAL extends (IsPureObj<U> | IsPureObj<W>)
                                ? T2[K] // не мерджим всякие пересечения
                                : Assign<U, W>[] // оба массивы - мерджим айтемы
                        : T2[K] // T2 массив, T1 объект, то перетираем
                    : NOT_PURE_OBJ_LITERAL extends (IsPureObj<T1[K]> | IsPureObj<T2[K]>)
                        ? T2[K] // не мерджим всякие пересечения
                        : Assign<T1[K], T2[K]> // оба - объекты, то мерджим дальше
                : T2[K]
            )
    } & (
        KnownKeys<T1> extends infer K
            ? [K] extends [never]
            ? unknown
            : Exclude<K, keyof T2> extends infer U
                ? [U] extends [never]
                    ? unknown
                    : Exact<U, K> extends true
                        ? T1
                        : Pick<T1, U extends keyof T1 ? U : never>
                : never
            : never
        ) & (
        Exclude<keyof T1, keyof T2> extends infer U
            ? (string | number) extends U
            ? Pick<T1, Exclude<keyof T1, KnownKeys<T1>>>
            : unknown
            : never
        );

    export type GetProps<T> = T extends React.ComponentType<infer P> ? P
        : T extends React.PureComponent<infer P> ? P
            : never;

    export type TupleKeys<T extends any[]> = ({[K in keyof T]: K})[number];

    export type TupleValues<T extends any[]> = ({[K in keyof T]: T[K]})[number];

    export type IsTuple<T extends any[]> = number extends T['length'] ? false : true;

    export type ArgsCompatible<T1 extends any[], T2 extends any[]> = (
        [IsTuple<T1>, IsTuple<T2>] extends [true, true]
            ? (
                Exact<TupleKeys<T2>, never> extends true
                    ? Exact<TupleKeys<T1>, never>
                    : Pick<T2, TupleKeys<T1>> extends Pick<T1, TupleKeys<T1>> ? true : false
                )
            : IsTuple<T1> extends true
            ?  TupleValues<T1> extends T2[number] ? true: false
            : IsTuple<T2> extends true
                ? TupleValues<T2> extends T1[number] ? true: false
                : T2[number] extends T1[number] ? true: false
        );
}
