
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MunicipalUser
 * 
 */
export type MunicipalUser = $Result.DefaultSelection<Prisma.$MunicipalUserPayload>
/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model FacilityConnection
 * 
 */
export type FacilityConnection = $Result.DefaultSelection<Prisma.$FacilityConnectionPayload>
/**
 * Model Sensor
 * 
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>
/**
 * Model SensorReading
 * 
 */
export type SensorReading = $Result.DefaultSelection<Prisma.$SensorReadingPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model AlertNote
 * 
 */
export type AlertNote = $Result.DefaultSelection<Prisma.$AlertNotePayload>
/**
 * Model MonitoringThreshold
 * 
 */
export type MonitoringThreshold = $Result.DefaultSelection<Prisma.$MonitoringThresholdPayload>
/**
 * Model ApplicationSetting
 * 
 */
export type ApplicationSetting = $Result.DefaultSelection<Prisma.$ApplicationSettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MunicipalUsers
 * const municipalUsers = await prisma.municipalUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MunicipalUsers
   * const municipalUsers = await prisma.municipalUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.municipalUser`: Exposes CRUD operations for the **MunicipalUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MunicipalUsers
    * const municipalUsers = await prisma.municipalUser.findMany()
    * ```
    */
  get municipalUser(): Prisma.MunicipalUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facilityConnection`: Exposes CRUD operations for the **FacilityConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilityConnections
    * const facilityConnections = await prisma.facilityConnection.findMany()
    * ```
    */
  get facilityConnection(): Prisma.FacilityConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensor.findMany()
    * ```
    */
  get sensor(): Prisma.SensorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensorReading`: Exposes CRUD operations for the **SensorReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorReadings
    * const sensorReadings = await prisma.sensorReading.findMany()
    * ```
    */
  get sensorReading(): Prisma.SensorReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertNote`: Exposes CRUD operations for the **AlertNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertNotes
    * const alertNotes = await prisma.alertNote.findMany()
    * ```
    */
  get alertNote(): Prisma.AlertNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monitoringThreshold`: Exposes CRUD operations for the **MonitoringThreshold** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonitoringThresholds
    * const monitoringThresholds = await prisma.monitoringThreshold.findMany()
    * ```
    */
  get monitoringThreshold(): Prisma.MonitoringThresholdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationSetting`: Exposes CRUD operations for the **ApplicationSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationSettings
    * const applicationSettings = await prisma.applicationSetting.findMany()
    * ```
    */
  get applicationSetting(): Prisma.ApplicationSettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MunicipalUser: 'MunicipalUser',
    Facility: 'Facility',
    FacilityConnection: 'FacilityConnection',
    Sensor: 'Sensor',
    SensorReading: 'SensorReading',
    Alert: 'Alert',
    AlertNote: 'AlertNote',
    MonitoringThreshold: 'MonitoringThreshold',
    ApplicationSetting: 'ApplicationSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "municipalUser" | "facility" | "facilityConnection" | "sensor" | "sensorReading" | "alert" | "alertNote" | "monitoringThreshold" | "applicationSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MunicipalUser: {
        payload: Prisma.$MunicipalUserPayload<ExtArgs>
        fields: Prisma.MunicipalUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipalUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipalUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>
          }
          findFirst: {
            args: Prisma.MunicipalUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipalUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>
          }
          findMany: {
            args: Prisma.MunicipalUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>[]
          }
          create: {
            args: Prisma.MunicipalUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>
          }
          createMany: {
            args: Prisma.MunicipalUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipalUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>[]
          }
          delete: {
            args: Prisma.MunicipalUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>
          }
          update: {
            args: Prisma.MunicipalUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>
          }
          deleteMany: {
            args: Prisma.MunicipalUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipalUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipalUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>[]
          }
          upsert: {
            args: Prisma.MunicipalUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalUserPayload>
          }
          aggregate: {
            args: Prisma.MunicipalUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipalUser>
          }
          groupBy: {
            args: Prisma.MunicipalUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipalUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipalUserCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipalUserCountAggregateOutputType> | number
          }
        }
      }
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      FacilityConnection: {
        payload: Prisma.$FacilityConnectionPayload<ExtArgs>
        fields: Prisma.FacilityConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>
          }
          findFirst: {
            args: Prisma.FacilityConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>
          }
          findMany: {
            args: Prisma.FacilityConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>[]
          }
          create: {
            args: Prisma.FacilityConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>
          }
          createMany: {
            args: Prisma.FacilityConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>[]
          }
          delete: {
            args: Prisma.FacilityConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>
          }
          update: {
            args: Prisma.FacilityConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>
          }
          deleteMany: {
            args: Prisma.FacilityConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>[]
          }
          upsert: {
            args: Prisma.FacilityConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityConnectionPayload>
          }
          aggregate: {
            args: Prisma.FacilityConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacilityConnection>
          }
          groupBy: {
            args: Prisma.FacilityConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityConnectionCountAggregateOutputType> | number
          }
        }
      }
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>
        fields: Prisma.SensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensor>
          }
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>
            result: $Utils.Optional<SensorCountAggregateOutputType> | number
          }
        }
      }
      SensorReading: {
        payload: Prisma.$SensorReadingPayload<ExtArgs>
        fields: Prisma.SensorReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findFirst: {
            args: Prisma.SensorReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findMany: {
            args: Prisma.SensorReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          create: {
            args: Prisma.SensorReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          createMany: {
            args: Prisma.SensorReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          delete: {
            args: Prisma.SensorReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          update: {
            args: Prisma.SensorReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          deleteMany: {
            args: Prisma.SensorReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          upsert: {
            args: Prisma.SensorReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          aggregate: {
            args: Prisma.SensorReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorReading>
          }
          groupBy: {
            args: Prisma.SensorReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorReadingCountArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      AlertNote: {
        payload: Prisma.$AlertNotePayload<ExtArgs>
        fields: Prisma.AlertNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>
          }
          findFirst: {
            args: Prisma.AlertNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>
          }
          findMany: {
            args: Prisma.AlertNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>[]
          }
          create: {
            args: Prisma.AlertNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>
          }
          createMany: {
            args: Prisma.AlertNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>[]
          }
          delete: {
            args: Prisma.AlertNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>
          }
          update: {
            args: Prisma.AlertNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>
          }
          deleteMany: {
            args: Prisma.AlertNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>[]
          }
          upsert: {
            args: Prisma.AlertNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertNotePayload>
          }
          aggregate: {
            args: Prisma.AlertNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertNote>
          }
          groupBy: {
            args: Prisma.AlertNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertNoteCountArgs<ExtArgs>
            result: $Utils.Optional<AlertNoteCountAggregateOutputType> | number
          }
        }
      }
      MonitoringThreshold: {
        payload: Prisma.$MonitoringThresholdPayload<ExtArgs>
        fields: Prisma.MonitoringThresholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitoringThresholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitoringThresholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>
          }
          findFirst: {
            args: Prisma.MonitoringThresholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitoringThresholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>
          }
          findMany: {
            args: Prisma.MonitoringThresholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>[]
          }
          create: {
            args: Prisma.MonitoringThresholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>
          }
          createMany: {
            args: Prisma.MonitoringThresholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitoringThresholdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>[]
          }
          delete: {
            args: Prisma.MonitoringThresholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>
          }
          update: {
            args: Prisma.MonitoringThresholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>
          }
          deleteMany: {
            args: Prisma.MonitoringThresholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitoringThresholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonitoringThresholdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>[]
          }
          upsert: {
            args: Prisma.MonitoringThresholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringThresholdPayload>
          }
          aggregate: {
            args: Prisma.MonitoringThresholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoringThreshold>
          }
          groupBy: {
            args: Prisma.MonitoringThresholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitoringThresholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitoringThresholdCountArgs<ExtArgs>
            result: $Utils.Optional<MonitoringThresholdCountAggregateOutputType> | number
          }
        }
      }
      ApplicationSetting: {
        payload: Prisma.$ApplicationSettingPayload<ExtArgs>
        fields: Prisma.ApplicationSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>
          }
          findFirst: {
            args: Prisma.ApplicationSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>
          }
          findMany: {
            args: Prisma.ApplicationSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>[]
          }
          create: {
            args: Prisma.ApplicationSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>
          }
          createMany: {
            args: Prisma.ApplicationSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>[]
          }
          delete: {
            args: Prisma.ApplicationSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>
          }
          update: {
            args: Prisma.ApplicationSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSettingPayload>
          }
          aggregate: {
            args: Prisma.ApplicationSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationSetting>
          }
          groupBy: {
            args: Prisma.ApplicationSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationSettingCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationSettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    municipalUser?: MunicipalUserOmit
    facility?: FacilityOmit
    facilityConnection?: FacilityConnectionOmit
    sensor?: SensorOmit
    sensorReading?: SensorReadingOmit
    alert?: AlertOmit
    alertNote?: AlertNoteOmit
    monitoringThreshold?: MonitoringThresholdOmit
    applicationSetting?: ApplicationSettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    sensors: number
    readings: number
    alerts: number
    outgoingConnections: number
    incomingConnections: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | FacilityCountOutputTypeCountSensorsArgs
    readings?: boolean | FacilityCountOutputTypeCountReadingsArgs
    alerts?: boolean | FacilityCountOutputTypeCountAlertsArgs
    outgoingConnections?: boolean | FacilityCountOutputTypeCountOutgoingConnectionsArgs
    incomingConnections?: boolean | FacilityCountOutputTypeCountIncomingConnectionsArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorReadingWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountOutgoingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityConnectionWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountIncomingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityConnectionWhereInput
  }


  /**
   * Count Type AlertCountOutputType
   */

  export type AlertCountOutputType = {
    notes: number
  }

  export type AlertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | AlertCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * AlertCountOutputType without action
   */
  export type AlertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertCountOutputType
     */
    select?: AlertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlertCountOutputType without action
   */
  export type AlertCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertNoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MunicipalUser
   */

  export type AggregateMunicipalUser = {
    _count: MunicipalUserCountAggregateOutputType | null
    _min: MunicipalUserMinAggregateOutputType | null
    _max: MunicipalUserMaxAggregateOutputType | null
  }

  export type MunicipalUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    fullName: string | null
    designation: string | null
    department: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MunicipalUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    fullName: string | null
    designation: string | null
    department: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MunicipalUserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    fullName: number
    designation: number
    department: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MunicipalUserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    fullName?: true
    designation?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MunicipalUserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    fullName?: true
    designation?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MunicipalUserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    fullName?: true
    designation?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MunicipalUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MunicipalUser to aggregate.
     */
    where?: MunicipalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalUsers to fetch.
     */
    orderBy?: MunicipalUserOrderByWithRelationInput | MunicipalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MunicipalUsers
    **/
    _count?: true | MunicipalUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipalUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipalUserMaxAggregateInputType
  }

  export type GetMunicipalUserAggregateType<T extends MunicipalUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipalUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipalUser[P]>
      : GetScalarType<T[P], AggregateMunicipalUser[P]>
  }




  export type MunicipalUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalUserWhereInput
    orderBy?: MunicipalUserOrderByWithAggregationInput | MunicipalUserOrderByWithAggregationInput[]
    by: MunicipalUserScalarFieldEnum[] | MunicipalUserScalarFieldEnum
    having?: MunicipalUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipalUserCountAggregateInputType | true
    _min?: MunicipalUserMinAggregateInputType
    _max?: MunicipalUserMaxAggregateInputType
  }

  export type MunicipalUserGroupByOutputType = {
    id: string
    email: string
    username: string
    passwordHash: string
    fullName: string
    designation: string
    department: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MunicipalUserCountAggregateOutputType | null
    _min: MunicipalUserMinAggregateOutputType | null
    _max: MunicipalUserMaxAggregateOutputType | null
  }

  type GetMunicipalUserGroupByPayload<T extends MunicipalUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipalUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipalUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipalUserGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipalUserGroupByOutputType[P]>
        }
      >
    >


  export type MunicipalUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    designation?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["municipalUser"]>

  export type MunicipalUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    designation?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["municipalUser"]>

  export type MunicipalUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    designation?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["municipalUser"]>

  export type MunicipalUserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    designation?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MunicipalUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "fullName" | "designation" | "department" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["municipalUser"]>

  export type $MunicipalUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MunicipalUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      passwordHash: string
      fullName: string
      designation: string
      department: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["municipalUser"]>
    composites: {}
  }

  type MunicipalUserGetPayload<S extends boolean | null | undefined | MunicipalUserDefaultArgs> = $Result.GetResult<Prisma.$MunicipalUserPayload, S>

  type MunicipalUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipalUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipalUserCountAggregateInputType | true
    }

  export interface MunicipalUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MunicipalUser'], meta: { name: 'MunicipalUser' } }
    /**
     * Find zero or one MunicipalUser that matches the filter.
     * @param {MunicipalUserFindUniqueArgs} args - Arguments to find a MunicipalUser
     * @example
     * // Get one MunicipalUser
     * const municipalUser = await prisma.municipalUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipalUserFindUniqueArgs>(args: SelectSubset<T, MunicipalUserFindUniqueArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MunicipalUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipalUserFindUniqueOrThrowArgs} args - Arguments to find a MunicipalUser
     * @example
     * // Get one MunicipalUser
     * const municipalUser = await prisma.municipalUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipalUserFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipalUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MunicipalUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalUserFindFirstArgs} args - Arguments to find a MunicipalUser
     * @example
     * // Get one MunicipalUser
     * const municipalUser = await prisma.municipalUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipalUserFindFirstArgs>(args?: SelectSubset<T, MunicipalUserFindFirstArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MunicipalUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalUserFindFirstOrThrowArgs} args - Arguments to find a MunicipalUser
     * @example
     * // Get one MunicipalUser
     * const municipalUser = await prisma.municipalUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipalUserFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipalUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MunicipalUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MunicipalUsers
     * const municipalUsers = await prisma.municipalUser.findMany()
     * 
     * // Get first 10 MunicipalUsers
     * const municipalUsers = await prisma.municipalUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipalUserWithIdOnly = await prisma.municipalUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipalUserFindManyArgs>(args?: SelectSubset<T, MunicipalUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MunicipalUser.
     * @param {MunicipalUserCreateArgs} args - Arguments to create a MunicipalUser.
     * @example
     * // Create one MunicipalUser
     * const MunicipalUser = await prisma.municipalUser.create({
     *   data: {
     *     // ... data to create a MunicipalUser
     *   }
     * })
     * 
     */
    create<T extends MunicipalUserCreateArgs>(args: SelectSubset<T, MunicipalUserCreateArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MunicipalUsers.
     * @param {MunicipalUserCreateManyArgs} args - Arguments to create many MunicipalUsers.
     * @example
     * // Create many MunicipalUsers
     * const municipalUser = await prisma.municipalUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipalUserCreateManyArgs>(args?: SelectSubset<T, MunicipalUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MunicipalUsers and returns the data saved in the database.
     * @param {MunicipalUserCreateManyAndReturnArgs} args - Arguments to create many MunicipalUsers.
     * @example
     * // Create many MunicipalUsers
     * const municipalUser = await prisma.municipalUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MunicipalUsers and only return the `id`
     * const municipalUserWithIdOnly = await prisma.municipalUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipalUserCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipalUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MunicipalUser.
     * @param {MunicipalUserDeleteArgs} args - Arguments to delete one MunicipalUser.
     * @example
     * // Delete one MunicipalUser
     * const MunicipalUser = await prisma.municipalUser.delete({
     *   where: {
     *     // ... filter to delete one MunicipalUser
     *   }
     * })
     * 
     */
    delete<T extends MunicipalUserDeleteArgs>(args: SelectSubset<T, MunicipalUserDeleteArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MunicipalUser.
     * @param {MunicipalUserUpdateArgs} args - Arguments to update one MunicipalUser.
     * @example
     * // Update one MunicipalUser
     * const municipalUser = await prisma.municipalUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipalUserUpdateArgs>(args: SelectSubset<T, MunicipalUserUpdateArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MunicipalUsers.
     * @param {MunicipalUserDeleteManyArgs} args - Arguments to filter MunicipalUsers to delete.
     * @example
     * // Delete a few MunicipalUsers
     * const { count } = await prisma.municipalUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipalUserDeleteManyArgs>(args?: SelectSubset<T, MunicipalUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MunicipalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MunicipalUsers
     * const municipalUser = await prisma.municipalUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipalUserUpdateManyArgs>(args: SelectSubset<T, MunicipalUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MunicipalUsers and returns the data updated in the database.
     * @param {MunicipalUserUpdateManyAndReturnArgs} args - Arguments to update many MunicipalUsers.
     * @example
     * // Update many MunicipalUsers
     * const municipalUser = await prisma.municipalUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MunicipalUsers and only return the `id`
     * const municipalUserWithIdOnly = await prisma.municipalUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MunicipalUserUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipalUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MunicipalUser.
     * @param {MunicipalUserUpsertArgs} args - Arguments to update or create a MunicipalUser.
     * @example
     * // Update or create a MunicipalUser
     * const municipalUser = await prisma.municipalUser.upsert({
     *   create: {
     *     // ... data to create a MunicipalUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MunicipalUser we want to update
     *   }
     * })
     */
    upsert<T extends MunicipalUserUpsertArgs>(args: SelectSubset<T, MunicipalUserUpsertArgs<ExtArgs>>): Prisma__MunicipalUserClient<$Result.GetResult<Prisma.$MunicipalUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MunicipalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalUserCountArgs} args - Arguments to filter MunicipalUsers to count.
     * @example
     * // Count the number of MunicipalUsers
     * const count = await prisma.municipalUser.count({
     *   where: {
     *     // ... the filter for the MunicipalUsers we want to count
     *   }
     * })
    **/
    count<T extends MunicipalUserCountArgs>(
      args?: Subset<T, MunicipalUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipalUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MunicipalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MunicipalUserAggregateArgs>(args: Subset<T, MunicipalUserAggregateArgs>): Prisma.PrismaPromise<GetMunicipalUserAggregateType<T>>

    /**
     * Group by MunicipalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MunicipalUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipalUserGroupByArgs['orderBy'] }
        : { orderBy?: MunicipalUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MunicipalUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipalUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MunicipalUser model
   */
  readonly fields: MunicipalUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MunicipalUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipalUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MunicipalUser model
   */
  interface MunicipalUserFieldRefs {
    readonly id: FieldRef<"MunicipalUser", 'String'>
    readonly email: FieldRef<"MunicipalUser", 'String'>
    readonly username: FieldRef<"MunicipalUser", 'String'>
    readonly passwordHash: FieldRef<"MunicipalUser", 'String'>
    readonly fullName: FieldRef<"MunicipalUser", 'String'>
    readonly designation: FieldRef<"MunicipalUser", 'String'>
    readonly department: FieldRef<"MunicipalUser", 'String'>
    readonly isActive: FieldRef<"MunicipalUser", 'Boolean'>
    readonly createdAt: FieldRef<"MunicipalUser", 'DateTime'>
    readonly updatedAt: FieldRef<"MunicipalUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MunicipalUser findUnique
   */
  export type MunicipalUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * Filter, which MunicipalUser to fetch.
     */
    where: MunicipalUserWhereUniqueInput
  }

  /**
   * MunicipalUser findUniqueOrThrow
   */
  export type MunicipalUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * Filter, which MunicipalUser to fetch.
     */
    where: MunicipalUserWhereUniqueInput
  }

  /**
   * MunicipalUser findFirst
   */
  export type MunicipalUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * Filter, which MunicipalUser to fetch.
     */
    where?: MunicipalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalUsers to fetch.
     */
    orderBy?: MunicipalUserOrderByWithRelationInput | MunicipalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MunicipalUsers.
     */
    cursor?: MunicipalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MunicipalUsers.
     */
    distinct?: MunicipalUserScalarFieldEnum | MunicipalUserScalarFieldEnum[]
  }

  /**
   * MunicipalUser findFirstOrThrow
   */
  export type MunicipalUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * Filter, which MunicipalUser to fetch.
     */
    where?: MunicipalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalUsers to fetch.
     */
    orderBy?: MunicipalUserOrderByWithRelationInput | MunicipalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MunicipalUsers.
     */
    cursor?: MunicipalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MunicipalUsers.
     */
    distinct?: MunicipalUserScalarFieldEnum | MunicipalUserScalarFieldEnum[]
  }

  /**
   * MunicipalUser findMany
   */
  export type MunicipalUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * Filter, which MunicipalUsers to fetch.
     */
    where?: MunicipalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalUsers to fetch.
     */
    orderBy?: MunicipalUserOrderByWithRelationInput | MunicipalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MunicipalUsers.
     */
    cursor?: MunicipalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalUsers.
     */
    skip?: number
    distinct?: MunicipalUserScalarFieldEnum | MunicipalUserScalarFieldEnum[]
  }

  /**
   * MunicipalUser create
   */
  export type MunicipalUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * The data needed to create a MunicipalUser.
     */
    data: XOR<MunicipalUserCreateInput, MunicipalUserUncheckedCreateInput>
  }

  /**
   * MunicipalUser createMany
   */
  export type MunicipalUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MunicipalUsers.
     */
    data: MunicipalUserCreateManyInput | MunicipalUserCreateManyInput[]
  }

  /**
   * MunicipalUser createManyAndReturn
   */
  export type MunicipalUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * The data used to create many MunicipalUsers.
     */
    data: MunicipalUserCreateManyInput | MunicipalUserCreateManyInput[]
  }

  /**
   * MunicipalUser update
   */
  export type MunicipalUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * The data needed to update a MunicipalUser.
     */
    data: XOR<MunicipalUserUpdateInput, MunicipalUserUncheckedUpdateInput>
    /**
     * Choose, which MunicipalUser to update.
     */
    where: MunicipalUserWhereUniqueInput
  }

  /**
   * MunicipalUser updateMany
   */
  export type MunicipalUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MunicipalUsers.
     */
    data: XOR<MunicipalUserUpdateManyMutationInput, MunicipalUserUncheckedUpdateManyInput>
    /**
     * Filter which MunicipalUsers to update
     */
    where?: MunicipalUserWhereInput
    /**
     * Limit how many MunicipalUsers to update.
     */
    limit?: number
  }

  /**
   * MunicipalUser updateManyAndReturn
   */
  export type MunicipalUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * The data used to update MunicipalUsers.
     */
    data: XOR<MunicipalUserUpdateManyMutationInput, MunicipalUserUncheckedUpdateManyInput>
    /**
     * Filter which MunicipalUsers to update
     */
    where?: MunicipalUserWhereInput
    /**
     * Limit how many MunicipalUsers to update.
     */
    limit?: number
  }

  /**
   * MunicipalUser upsert
   */
  export type MunicipalUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * The filter to search for the MunicipalUser to update in case it exists.
     */
    where: MunicipalUserWhereUniqueInput
    /**
     * In case the MunicipalUser found by the `where` argument doesn't exist, create a new MunicipalUser with this data.
     */
    create: XOR<MunicipalUserCreateInput, MunicipalUserUncheckedCreateInput>
    /**
     * In case the MunicipalUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipalUserUpdateInput, MunicipalUserUncheckedUpdateInput>
  }

  /**
   * MunicipalUser delete
   */
  export type MunicipalUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
    /**
     * Filter which MunicipalUser to delete.
     */
    where: MunicipalUserWhereUniqueInput
  }

  /**
   * MunicipalUser deleteMany
   */
  export type MunicipalUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MunicipalUsers to delete
     */
    where?: MunicipalUserWhereInput
    /**
     * Limit how many MunicipalUsers to delete.
     */
    limit?: number
  }

  /**
   * MunicipalUser without action
   */
  export type MunicipalUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalUser
     */
    select?: MunicipalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalUser
     */
    omit?: MunicipalUserOmit<ExtArgs> | null
  }


  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    capacityMld: number | null
    storageCapacityLiters: number | null
    currentStorageLiters: number | null
  }

  export type FacilitySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    capacityMld: number | null
    storageCapacityLiters: number | null
    currentStorageLiters: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    type: string | null
    locality: string | null
    latitude: number | null
    longitude: number | null
    capacityMld: number | null
    storageCapacityLiters: number | null
    currentStorageLiters: number | null
    operationalStatus: string | null
    provenanceStatus: string | null
    sourceReference: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    type: string | null
    locality: string | null
    latitude: number | null
    longitude: number | null
    capacityMld: number | null
    storageCapacityLiters: number | null
    currentStorageLiters: number | null
    operationalStatus: string | null
    provenanceStatus: string | null
    sourceReference: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    code: number
    name: number
    type: number
    locality: number
    latitude: number
    longitude: number
    capacityMld: number
    storageCapacityLiters: number
    currentStorageLiters: number
    operationalStatus: number
    provenanceStatus: number
    sourceReference: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    capacityMld?: true
    storageCapacityLiters?: true
    currentStorageLiters?: true
  }

  export type FacilitySumAggregateInputType = {
    latitude?: true
    longitude?: true
    capacityMld?: true
    storageCapacityLiters?: true
    currentStorageLiters?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    locality?: true
    latitude?: true
    longitude?: true
    capacityMld?: true
    storageCapacityLiters?: true
    currentStorageLiters?: true
    operationalStatus?: true
    provenanceStatus?: true
    sourceReference?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    locality?: true
    latitude?: true
    longitude?: true
    capacityMld?: true
    storageCapacityLiters?: true
    currentStorageLiters?: true
    operationalStatus?: true
    provenanceStatus?: true
    sourceReference?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    locality?: true
    latitude?: true
    longitude?: true
    capacityMld?: true
    storageCapacityLiters?: true
    currentStorageLiters?: true
    operationalStatus?: true
    provenanceStatus?: true
    sourceReference?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld: number | null
    storageCapacityLiters: number | null
    currentStorageLiters: number | null
    operationalStatus: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    locality?: boolean
    latitude?: boolean
    longitude?: boolean
    capacityMld?: boolean
    storageCapacityLiters?: boolean
    currentStorageLiters?: boolean
    operationalStatus?: boolean
    provenanceStatus?: boolean
    sourceReference?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sensors?: boolean | Facility$sensorsArgs<ExtArgs>
    readings?: boolean | Facility$readingsArgs<ExtArgs>
    alerts?: boolean | Facility$alertsArgs<ExtArgs>
    outgoingConnections?: boolean | Facility$outgoingConnectionsArgs<ExtArgs>
    incomingConnections?: boolean | Facility$incomingConnectionsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    locality?: boolean
    latitude?: boolean
    longitude?: boolean
    capacityMld?: boolean
    storageCapacityLiters?: boolean
    currentStorageLiters?: boolean
    operationalStatus?: boolean
    provenanceStatus?: boolean
    sourceReference?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    locality?: boolean
    latitude?: boolean
    longitude?: boolean
    capacityMld?: boolean
    storageCapacityLiters?: boolean
    currentStorageLiters?: boolean
    operationalStatus?: boolean
    provenanceStatus?: boolean
    sourceReference?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    locality?: boolean
    latitude?: boolean
    longitude?: boolean
    capacityMld?: boolean
    storageCapacityLiters?: boolean
    currentStorageLiters?: boolean
    operationalStatus?: boolean
    provenanceStatus?: boolean
    sourceReference?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "type" | "locality" | "latitude" | "longitude" | "capacityMld" | "storageCapacityLiters" | "currentStorageLiters" | "operationalStatus" | "provenanceStatus" | "sourceReference" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["facility"]>
  export type FacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | Facility$sensorsArgs<ExtArgs>
    readings?: boolean | Facility$readingsArgs<ExtArgs>
    alerts?: boolean | Facility$alertsArgs<ExtArgs>
    outgoingConnections?: boolean | Facility$outgoingConnectionsArgs<ExtArgs>
    incomingConnections?: boolean | Facility$incomingConnectionsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {
      sensors: Prisma.$SensorPayload<ExtArgs>[]
      readings: Prisma.$SensorReadingPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      outgoingConnections: Prisma.$FacilityConnectionPayload<ExtArgs>[]
      incomingConnections: Prisma.$FacilityConnectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      type: string
      locality: string
      latitude: number
      longitude: number
      capacityMld: number | null
      storageCapacityLiters: number | null
      currentStorageLiters: number | null
      operationalStatus: string
      provenanceStatus: string
      sourceReference: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityFindUniqueArgs>(args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityFindFirstArgs>(args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityFindManyArgs>(args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends FacilityCreateArgs>(args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facilities.
     * @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityCreateManyArgs>(args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {FacilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends FacilityDeleteArgs>(args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityUpdateArgs>(args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityDeleteManyArgs>(args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityUpdateManyArgs>(args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities and returns the data updated in the database.
     * @param {FacilityUpdateManyAndReturnArgs} args - Arguments to update many Facilities.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends FacilityUpsertArgs>(args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensors<T extends Facility$sensorsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$sensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readings<T extends Facility$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Facility$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outgoingConnections<T extends Facility$outgoingConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$outgoingConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingConnections<T extends Facility$incomingConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$incomingConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Facility model
   */
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'String'>
    readonly code: FieldRef<"Facility", 'String'>
    readonly name: FieldRef<"Facility", 'String'>
    readonly type: FieldRef<"Facility", 'String'>
    readonly locality: FieldRef<"Facility", 'String'>
    readonly latitude: FieldRef<"Facility", 'Float'>
    readonly longitude: FieldRef<"Facility", 'Float'>
    readonly capacityMld: FieldRef<"Facility", 'Float'>
    readonly storageCapacityLiters: FieldRef<"Facility", 'Float'>
    readonly currentStorageLiters: FieldRef<"Facility", 'Float'>
    readonly operationalStatus: FieldRef<"Facility", 'String'>
    readonly provenanceStatus: FieldRef<"Facility", 'String'>
    readonly sourceReference: FieldRef<"Facility", 'String'>
    readonly description: FieldRef<"Facility", 'String'>
    readonly createdAt: FieldRef<"Facility", 'DateTime'>
    readonly updatedAt: FieldRef<"Facility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }

  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
  }

  /**
   * Facility createManyAndReturn
   */
  export type FacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
  }

  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility updateManyAndReturn
   */
  export type FacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }

  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to delete.
     */
    limit?: number
  }

  /**
   * Facility.sensors
   */
  export type Facility$sensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Facility.readings
   */
  export type Facility$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    cursor?: SensorReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * Facility.alerts
   */
  export type Facility$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Facility.outgoingConnections
   */
  export type Facility$outgoingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    where?: FacilityConnectionWhereInput
    orderBy?: FacilityConnectionOrderByWithRelationInput | FacilityConnectionOrderByWithRelationInput[]
    cursor?: FacilityConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityConnectionScalarFieldEnum | FacilityConnectionScalarFieldEnum[]
  }

  /**
   * Facility.incomingConnections
   */
  export type Facility$incomingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    where?: FacilityConnectionWhereInput
    orderBy?: FacilityConnectionOrderByWithRelationInput | FacilityConnectionOrderByWithRelationInput[]
    cursor?: FacilityConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityConnectionScalarFieldEnum | FacilityConnectionScalarFieldEnum[]
  }

  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
  }


  /**
   * Model FacilityConnection
   */

  export type AggregateFacilityConnection = {
    _count: FacilityConnectionCountAggregateOutputType | null
    _avg: FacilityConnectionAvgAggregateOutputType | null
    _sum: FacilityConnectionSumAggregateOutputType | null
    _min: FacilityConnectionMinAggregateOutputType | null
    _max: FacilityConnectionMaxAggregateOutputType | null
  }

  export type FacilityConnectionAvgAggregateOutputType = {
    diameterMm: number | null
  }

  export type FacilityConnectionSumAggregateOutputType = {
    diameterMm: number | null
  }

  export type FacilityConnectionMinAggregateOutputType = {
    id: string | null
    fromFacilityId: string | null
    toFacilityId: string | null
    pipelineLabel: string | null
    diameterMm: number | null
    verificationStatus: string | null
    sourceReference: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type FacilityConnectionMaxAggregateOutputType = {
    id: string | null
    fromFacilityId: string | null
    toFacilityId: string | null
    pipelineLabel: string | null
    diameterMm: number | null
    verificationStatus: string | null
    sourceReference: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type FacilityConnectionCountAggregateOutputType = {
    id: number
    fromFacilityId: number
    toFacilityId: number
    pipelineLabel: number
    diameterMm: number
    verificationStatus: number
    sourceReference: number
    notes: number
    createdAt: number
    _all: number
  }


  export type FacilityConnectionAvgAggregateInputType = {
    diameterMm?: true
  }

  export type FacilityConnectionSumAggregateInputType = {
    diameterMm?: true
  }

  export type FacilityConnectionMinAggregateInputType = {
    id?: true
    fromFacilityId?: true
    toFacilityId?: true
    pipelineLabel?: true
    diameterMm?: true
    verificationStatus?: true
    sourceReference?: true
    notes?: true
    createdAt?: true
  }

  export type FacilityConnectionMaxAggregateInputType = {
    id?: true
    fromFacilityId?: true
    toFacilityId?: true
    pipelineLabel?: true
    diameterMm?: true
    verificationStatus?: true
    sourceReference?: true
    notes?: true
    createdAt?: true
  }

  export type FacilityConnectionCountAggregateInputType = {
    id?: true
    fromFacilityId?: true
    toFacilityId?: true
    pipelineLabel?: true
    diameterMm?: true
    verificationStatus?: true
    sourceReference?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type FacilityConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityConnection to aggregate.
     */
    where?: FacilityConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityConnections to fetch.
     */
    orderBy?: FacilityConnectionOrderByWithRelationInput | FacilityConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilityConnections
    **/
    _count?: true | FacilityConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilityConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityConnectionMaxAggregateInputType
  }

  export type GetFacilityConnectionAggregateType<T extends FacilityConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilityConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilityConnection[P]>
      : GetScalarType<T[P], AggregateFacilityConnection[P]>
  }




  export type FacilityConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityConnectionWhereInput
    orderBy?: FacilityConnectionOrderByWithAggregationInput | FacilityConnectionOrderByWithAggregationInput[]
    by: FacilityConnectionScalarFieldEnum[] | FacilityConnectionScalarFieldEnum
    having?: FacilityConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityConnectionCountAggregateInputType | true
    _avg?: FacilityConnectionAvgAggregateInputType
    _sum?: FacilityConnectionSumAggregateInputType
    _min?: FacilityConnectionMinAggregateInputType
    _max?: FacilityConnectionMaxAggregateInputType
  }

  export type FacilityConnectionGroupByOutputType = {
    id: string
    fromFacilityId: string
    toFacilityId: string
    pipelineLabel: string
    diameterMm: number | null
    verificationStatus: string
    sourceReference: string
    notes: string | null
    createdAt: Date
    _count: FacilityConnectionCountAggregateOutputType | null
    _avg: FacilityConnectionAvgAggregateOutputType | null
    _sum: FacilityConnectionSumAggregateOutputType | null
    _min: FacilityConnectionMinAggregateOutputType | null
    _max: FacilityConnectionMaxAggregateOutputType | null
  }

  type GetFacilityConnectionGroupByPayload<T extends FacilityConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityConnectionGroupByOutputType[P]>
        }
      >
    >


  export type FacilityConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromFacilityId?: boolean
    toFacilityId?: boolean
    pipelineLabel?: boolean
    diameterMm?: boolean
    verificationStatus?: boolean
    sourceReference?: boolean
    notes?: boolean
    createdAt?: boolean
    fromFacility?: boolean | FacilityDefaultArgs<ExtArgs>
    toFacility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityConnection"]>

  export type FacilityConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromFacilityId?: boolean
    toFacilityId?: boolean
    pipelineLabel?: boolean
    diameterMm?: boolean
    verificationStatus?: boolean
    sourceReference?: boolean
    notes?: boolean
    createdAt?: boolean
    fromFacility?: boolean | FacilityDefaultArgs<ExtArgs>
    toFacility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityConnection"]>

  export type FacilityConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromFacilityId?: boolean
    toFacilityId?: boolean
    pipelineLabel?: boolean
    diameterMm?: boolean
    verificationStatus?: boolean
    sourceReference?: boolean
    notes?: boolean
    createdAt?: boolean
    fromFacility?: boolean | FacilityDefaultArgs<ExtArgs>
    toFacility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityConnection"]>

  export type FacilityConnectionSelectScalar = {
    id?: boolean
    fromFacilityId?: boolean
    toFacilityId?: boolean
    pipelineLabel?: boolean
    diameterMm?: boolean
    verificationStatus?: boolean
    sourceReference?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type FacilityConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromFacilityId" | "toFacilityId" | "pipelineLabel" | "diameterMm" | "verificationStatus" | "sourceReference" | "notes" | "createdAt", ExtArgs["result"]["facilityConnection"]>
  export type FacilityConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromFacility?: boolean | FacilityDefaultArgs<ExtArgs>
    toFacility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromFacility?: boolean | FacilityDefaultArgs<ExtArgs>
    toFacility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromFacility?: boolean | FacilityDefaultArgs<ExtArgs>
    toFacility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $FacilityConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacilityConnection"
    objects: {
      fromFacility: Prisma.$FacilityPayload<ExtArgs>
      toFacility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromFacilityId: string
      toFacilityId: string
      pipelineLabel: string
      diameterMm: number | null
      verificationStatus: string
      sourceReference: string
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["facilityConnection"]>
    composites: {}
  }

  type FacilityConnectionGetPayload<S extends boolean | null | undefined | FacilityConnectionDefaultArgs> = $Result.GetResult<Prisma.$FacilityConnectionPayload, S>

  type FacilityConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityConnectionCountAggregateInputType | true
    }

  export interface FacilityConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacilityConnection'], meta: { name: 'FacilityConnection' } }
    /**
     * Find zero or one FacilityConnection that matches the filter.
     * @param {FacilityConnectionFindUniqueArgs} args - Arguments to find a FacilityConnection
     * @example
     * // Get one FacilityConnection
     * const facilityConnection = await prisma.facilityConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityConnectionFindUniqueArgs>(args: SelectSubset<T, FacilityConnectionFindUniqueArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacilityConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityConnectionFindUniqueOrThrowArgs} args - Arguments to find a FacilityConnection
     * @example
     * // Get one FacilityConnection
     * const facilityConnection = await prisma.facilityConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityConnectionFindFirstArgs} args - Arguments to find a FacilityConnection
     * @example
     * // Get one FacilityConnection
     * const facilityConnection = await prisma.facilityConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityConnectionFindFirstArgs>(args?: SelectSubset<T, FacilityConnectionFindFirstArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityConnectionFindFirstOrThrowArgs} args - Arguments to find a FacilityConnection
     * @example
     * // Get one FacilityConnection
     * const facilityConnection = await prisma.facilityConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacilityConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilityConnections
     * const facilityConnections = await prisma.facilityConnection.findMany()
     * 
     * // Get first 10 FacilityConnections
     * const facilityConnections = await prisma.facilityConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityConnectionWithIdOnly = await prisma.facilityConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityConnectionFindManyArgs>(args?: SelectSubset<T, FacilityConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacilityConnection.
     * @param {FacilityConnectionCreateArgs} args - Arguments to create a FacilityConnection.
     * @example
     * // Create one FacilityConnection
     * const FacilityConnection = await prisma.facilityConnection.create({
     *   data: {
     *     // ... data to create a FacilityConnection
     *   }
     * })
     * 
     */
    create<T extends FacilityConnectionCreateArgs>(args: SelectSubset<T, FacilityConnectionCreateArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacilityConnections.
     * @param {FacilityConnectionCreateManyArgs} args - Arguments to create many FacilityConnections.
     * @example
     * // Create many FacilityConnections
     * const facilityConnection = await prisma.facilityConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityConnectionCreateManyArgs>(args?: SelectSubset<T, FacilityConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacilityConnections and returns the data saved in the database.
     * @param {FacilityConnectionCreateManyAndReturnArgs} args - Arguments to create many FacilityConnections.
     * @example
     * // Create many FacilityConnections
     * const facilityConnection = await prisma.facilityConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacilityConnections and only return the `id`
     * const facilityConnectionWithIdOnly = await prisma.facilityConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacilityConnection.
     * @param {FacilityConnectionDeleteArgs} args - Arguments to delete one FacilityConnection.
     * @example
     * // Delete one FacilityConnection
     * const FacilityConnection = await prisma.facilityConnection.delete({
     *   where: {
     *     // ... filter to delete one FacilityConnection
     *   }
     * })
     * 
     */
    delete<T extends FacilityConnectionDeleteArgs>(args: SelectSubset<T, FacilityConnectionDeleteArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacilityConnection.
     * @param {FacilityConnectionUpdateArgs} args - Arguments to update one FacilityConnection.
     * @example
     * // Update one FacilityConnection
     * const facilityConnection = await prisma.facilityConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityConnectionUpdateArgs>(args: SelectSubset<T, FacilityConnectionUpdateArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacilityConnections.
     * @param {FacilityConnectionDeleteManyArgs} args - Arguments to filter FacilityConnections to delete.
     * @example
     * // Delete a few FacilityConnections
     * const { count } = await prisma.facilityConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityConnectionDeleteManyArgs>(args?: SelectSubset<T, FacilityConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilityConnections
     * const facilityConnection = await prisma.facilityConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityConnectionUpdateManyArgs>(args: SelectSubset<T, FacilityConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityConnections and returns the data updated in the database.
     * @param {FacilityConnectionUpdateManyAndReturnArgs} args - Arguments to update many FacilityConnections.
     * @example
     * // Update many FacilityConnections
     * const facilityConnection = await prisma.facilityConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacilityConnections and only return the `id`
     * const facilityConnectionWithIdOnly = await prisma.facilityConnection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacilityConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacilityConnection.
     * @param {FacilityConnectionUpsertArgs} args - Arguments to update or create a FacilityConnection.
     * @example
     * // Update or create a FacilityConnection
     * const facilityConnection = await prisma.facilityConnection.upsert({
     *   create: {
     *     // ... data to create a FacilityConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilityConnection we want to update
     *   }
     * })
     */
    upsert<T extends FacilityConnectionUpsertArgs>(args: SelectSubset<T, FacilityConnectionUpsertArgs<ExtArgs>>): Prisma__FacilityConnectionClient<$Result.GetResult<Prisma.$FacilityConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacilityConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityConnectionCountArgs} args - Arguments to filter FacilityConnections to count.
     * @example
     * // Count the number of FacilityConnections
     * const count = await prisma.facilityConnection.count({
     *   where: {
     *     // ... the filter for the FacilityConnections we want to count
     *   }
     * })
    **/
    count<T extends FacilityConnectionCountArgs>(
      args?: Subset<T, FacilityConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilityConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityConnectionAggregateArgs>(args: Subset<T, FacilityConnectionAggregateArgs>): Prisma.PrismaPromise<GetFacilityConnectionAggregateType<T>>

    /**
     * Group by FacilityConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilityConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityConnectionGroupByArgs['orderBy'] }
        : { orderBy?: FacilityConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilityConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacilityConnection model
   */
  readonly fields: FacilityConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilityConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromFacility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toFacility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacilityConnection model
   */
  interface FacilityConnectionFieldRefs {
    readonly id: FieldRef<"FacilityConnection", 'String'>
    readonly fromFacilityId: FieldRef<"FacilityConnection", 'String'>
    readonly toFacilityId: FieldRef<"FacilityConnection", 'String'>
    readonly pipelineLabel: FieldRef<"FacilityConnection", 'String'>
    readonly diameterMm: FieldRef<"FacilityConnection", 'Int'>
    readonly verificationStatus: FieldRef<"FacilityConnection", 'String'>
    readonly sourceReference: FieldRef<"FacilityConnection", 'String'>
    readonly notes: FieldRef<"FacilityConnection", 'String'>
    readonly createdAt: FieldRef<"FacilityConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacilityConnection findUnique
   */
  export type FacilityConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * Filter, which FacilityConnection to fetch.
     */
    where: FacilityConnectionWhereUniqueInput
  }

  /**
   * FacilityConnection findUniqueOrThrow
   */
  export type FacilityConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * Filter, which FacilityConnection to fetch.
     */
    where: FacilityConnectionWhereUniqueInput
  }

  /**
   * FacilityConnection findFirst
   */
  export type FacilityConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * Filter, which FacilityConnection to fetch.
     */
    where?: FacilityConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityConnections to fetch.
     */
    orderBy?: FacilityConnectionOrderByWithRelationInput | FacilityConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityConnections.
     */
    cursor?: FacilityConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityConnections.
     */
    distinct?: FacilityConnectionScalarFieldEnum | FacilityConnectionScalarFieldEnum[]
  }

  /**
   * FacilityConnection findFirstOrThrow
   */
  export type FacilityConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * Filter, which FacilityConnection to fetch.
     */
    where?: FacilityConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityConnections to fetch.
     */
    orderBy?: FacilityConnectionOrderByWithRelationInput | FacilityConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityConnections.
     */
    cursor?: FacilityConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityConnections.
     */
    distinct?: FacilityConnectionScalarFieldEnum | FacilityConnectionScalarFieldEnum[]
  }

  /**
   * FacilityConnection findMany
   */
  export type FacilityConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * Filter, which FacilityConnections to fetch.
     */
    where?: FacilityConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityConnections to fetch.
     */
    orderBy?: FacilityConnectionOrderByWithRelationInput | FacilityConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilityConnections.
     */
    cursor?: FacilityConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityConnections.
     */
    skip?: number
    distinct?: FacilityConnectionScalarFieldEnum | FacilityConnectionScalarFieldEnum[]
  }

  /**
   * FacilityConnection create
   */
  export type FacilityConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a FacilityConnection.
     */
    data: XOR<FacilityConnectionCreateInput, FacilityConnectionUncheckedCreateInput>
  }

  /**
   * FacilityConnection createMany
   */
  export type FacilityConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacilityConnections.
     */
    data: FacilityConnectionCreateManyInput | FacilityConnectionCreateManyInput[]
  }

  /**
   * FacilityConnection createManyAndReturn
   */
  export type FacilityConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many FacilityConnections.
     */
    data: FacilityConnectionCreateManyInput | FacilityConnectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityConnection update
   */
  export type FacilityConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a FacilityConnection.
     */
    data: XOR<FacilityConnectionUpdateInput, FacilityConnectionUncheckedUpdateInput>
    /**
     * Choose, which FacilityConnection to update.
     */
    where: FacilityConnectionWhereUniqueInput
  }

  /**
   * FacilityConnection updateMany
   */
  export type FacilityConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacilityConnections.
     */
    data: XOR<FacilityConnectionUpdateManyMutationInput, FacilityConnectionUncheckedUpdateManyInput>
    /**
     * Filter which FacilityConnections to update
     */
    where?: FacilityConnectionWhereInput
    /**
     * Limit how many FacilityConnections to update.
     */
    limit?: number
  }

  /**
   * FacilityConnection updateManyAndReturn
   */
  export type FacilityConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * The data used to update FacilityConnections.
     */
    data: XOR<FacilityConnectionUpdateManyMutationInput, FacilityConnectionUncheckedUpdateManyInput>
    /**
     * Filter which FacilityConnections to update
     */
    where?: FacilityConnectionWhereInput
    /**
     * Limit how many FacilityConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityConnection upsert
   */
  export type FacilityConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the FacilityConnection to update in case it exists.
     */
    where: FacilityConnectionWhereUniqueInput
    /**
     * In case the FacilityConnection found by the `where` argument doesn't exist, create a new FacilityConnection with this data.
     */
    create: XOR<FacilityConnectionCreateInput, FacilityConnectionUncheckedCreateInput>
    /**
     * In case the FacilityConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityConnectionUpdateInput, FacilityConnectionUncheckedUpdateInput>
  }

  /**
   * FacilityConnection delete
   */
  export type FacilityConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
    /**
     * Filter which FacilityConnection to delete.
     */
    where: FacilityConnectionWhereUniqueInput
  }

  /**
   * FacilityConnection deleteMany
   */
  export type FacilityConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityConnections to delete
     */
    where?: FacilityConnectionWhereInput
    /**
     * Limit how many FacilityConnections to delete.
     */
    limit?: number
  }

  /**
   * FacilityConnection without action
   */
  export type FacilityConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityConnection
     */
    select?: FacilityConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityConnection
     */
    omit?: FacilityConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityConnectionInclude<ExtArgs> | null
  }


  /**
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  export type SensorMinAggregateOutputType = {
    id: string | null
    sensorCode: string | null
    name: string | null
    kind: string | null
    unit: string | null
    status: string | null
    isSimulated: boolean | null
    facilityId: string | null
    lastReadingAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SensorMaxAggregateOutputType = {
    id: string | null
    sensorCode: string | null
    name: string | null
    kind: string | null
    unit: string | null
    status: string | null
    isSimulated: boolean | null
    facilityId: string | null
    lastReadingAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SensorCountAggregateOutputType = {
    id: number
    sensorCode: number
    name: number
    kind: number
    unit: number
    status: number
    isSimulated: number
    facilityId: number
    lastReadingAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SensorMinAggregateInputType = {
    id?: true
    sensorCode?: true
    name?: true
    kind?: true
    unit?: true
    status?: true
    isSimulated?: true
    facilityId?: true
    lastReadingAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SensorMaxAggregateInputType = {
    id?: true
    sensorCode?: true
    name?: true
    kind?: true
    unit?: true
    status?: true
    isSimulated?: true
    facilityId?: true
    lastReadingAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SensorCountAggregateInputType = {
    id?: true
    sensorCode?: true
    name?: true
    kind?: true
    unit?: true
    status?: true
    isSimulated?: true
    facilityId?: true
    lastReadingAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sensors
    **/
    _count?: true | SensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMaxAggregateInputType
  }

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
        [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>
  }




  export type SensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithAggregationInput | SensorOrderByWithAggregationInput[]
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum
    having?: SensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorCountAggregateInputType | true
    _min?: SensorMinAggregateInputType
    _max?: SensorMaxAggregateInputType
  }

  export type SensorGroupByOutputType = {
    id: string
    sensorCode: string
    name: string
    kind: string
    unit: string
    status: string
    isSimulated: boolean
    facilityId: string
    lastReadingAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>
        }
      >
    >


  export type SensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    name?: boolean
    kind?: boolean
    unit?: boolean
    status?: boolean
    isSimulated?: boolean
    facilityId?: boolean
    lastReadingAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    name?: boolean
    kind?: boolean
    unit?: boolean
    status?: boolean
    isSimulated?: boolean
    facilityId?: boolean
    lastReadingAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    name?: boolean
    kind?: boolean
    unit?: boolean
    status?: boolean
    isSimulated?: boolean
    facilityId?: boolean
    lastReadingAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectScalar = {
    id?: boolean
    sensorCode?: boolean
    name?: boolean
    kind?: boolean
    unit?: boolean
    status?: boolean
    isSimulated?: boolean
    facilityId?: boolean
    lastReadingAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SensorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sensorCode" | "name" | "kind" | "unit" | "status" | "isSimulated" | "facilityId" | "lastReadingAt" | "createdAt" | "updatedAt", ExtArgs["result"]["sensor"]>
  export type SensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type SensorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type SensorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $SensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sensor"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorCode: string
      name: string
      kind: string
      unit: string
      status: string
      isSimulated: boolean
      facilityId: string
      lastReadingAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sensor"]>
    composites: {}
  }

  type SensorGetPayload<S extends boolean | null | undefined | SensorDefaultArgs> = $Result.GetResult<Prisma.$SensorPayload, S>

  type SensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorCountAggregateInputType | true
    }

  export interface SensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sensor'], meta: { name: 'Sensor' } }
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorFindUniqueArgs>(args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorFindFirstArgs>(args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorFindManyArgs>(args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     * 
     */
    create<T extends SensorCreateArgs>(args: SelectSubset<T, SensorCreateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sensors.
     * @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorCreateManyArgs>(args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sensors and returns the data saved in the database.
     * @param {SensorCreateManyAndReturnArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     * 
     */
    delete<T extends SensorDeleteArgs>(args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorUpdateArgs>(args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDeleteManyArgs>(args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorUpdateManyArgs>(args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors and returns the data updated in the database.
     * @param {SensorUpdateManyAndReturnArgs} args - Arguments to update many Sensors.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SensorUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
     */
    upsert<T extends SensorUpsertArgs>(args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SensorAggregateArgs>(args: Subset<T, SensorAggregateArgs>): Prisma.PrismaPromise<GetSensorAggregateType<T>>

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sensor model
   */
  readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sensor model
   */
  interface SensorFieldRefs {
    readonly id: FieldRef<"Sensor", 'String'>
    readonly sensorCode: FieldRef<"Sensor", 'String'>
    readonly name: FieldRef<"Sensor", 'String'>
    readonly kind: FieldRef<"Sensor", 'String'>
    readonly unit: FieldRef<"Sensor", 'String'>
    readonly status: FieldRef<"Sensor", 'String'>
    readonly isSimulated: FieldRef<"Sensor", 'Boolean'>
    readonly facilityId: FieldRef<"Sensor", 'String'>
    readonly lastReadingAt: FieldRef<"Sensor", 'DateTime'>
    readonly createdAt: FieldRef<"Sensor", 'DateTime'>
    readonly updatedAt: FieldRef<"Sensor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor create
   */
  export type SensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>
  }

  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
  }

  /**
   * Sensor createManyAndReturn
   */
  export type SensorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sensor update
   */
  export type SensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
  }

  /**
   * Sensor updateManyAndReturn
   */
  export type SensorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
  }

  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to delete.
     */
    limit?: number
  }

  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
  }


  /**
   * Model SensorReading
   */

  export type AggregateSensorReading = {
    _count: SensorReadingCountAggregateOutputType | null
    _avg: SensorReadingAvgAggregateOutputType | null
    _sum: SensorReadingSumAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  export type SensorReadingAvgAggregateOutputType = {
    inletFlow: number | null
    outletFlow: number | null
    flowDifference: number | null
    pressureBar: number | null
  }

  export type SensorReadingSumAggregateOutputType = {
    inletFlow: number | null
    outletFlow: number | null
    flowDifference: number | null
    pressureBar: number | null
  }

  export type SensorReadingMinAggregateOutputType = {
    id: string | null
    facilityId: string | null
    inletFlow: number | null
    outletFlow: number | null
    flowDifference: number | null
    pressureBar: number | null
    dataSource: string | null
    isValid: boolean | null
    recordedAt: Date | null
  }

  export type SensorReadingMaxAggregateOutputType = {
    id: string | null
    facilityId: string | null
    inletFlow: number | null
    outletFlow: number | null
    flowDifference: number | null
    pressureBar: number | null
    dataSource: string | null
    isValid: boolean | null
    recordedAt: Date | null
  }

  export type SensorReadingCountAggregateOutputType = {
    id: number
    facilityId: number
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: number
    isValid: number
    recordedAt: number
    _all: number
  }


  export type SensorReadingAvgAggregateInputType = {
    inletFlow?: true
    outletFlow?: true
    flowDifference?: true
    pressureBar?: true
  }

  export type SensorReadingSumAggregateInputType = {
    inletFlow?: true
    outletFlow?: true
    flowDifference?: true
    pressureBar?: true
  }

  export type SensorReadingMinAggregateInputType = {
    id?: true
    facilityId?: true
    inletFlow?: true
    outletFlow?: true
    flowDifference?: true
    pressureBar?: true
    dataSource?: true
    isValid?: true
    recordedAt?: true
  }

  export type SensorReadingMaxAggregateInputType = {
    id?: true
    facilityId?: true
    inletFlow?: true
    outletFlow?: true
    flowDifference?: true
    pressureBar?: true
    dataSource?: true
    isValid?: true
    recordedAt?: true
  }

  export type SensorReadingCountAggregateInputType = {
    id?: true
    facilityId?: true
    inletFlow?: true
    outletFlow?: true
    flowDifference?: true
    pressureBar?: true
    dataSource?: true
    isValid?: true
    recordedAt?: true
    _all?: true
  }

  export type SensorReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReading to aggregate.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorReadings
    **/
    _count?: true | SensorReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorReadingMaxAggregateInputType
  }

  export type GetSensorReadingAggregateType<T extends SensorReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorReading[P]>
      : GetScalarType<T[P], AggregateSensorReading[P]>
  }




  export type SensorReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithAggregationInput | SensorReadingOrderByWithAggregationInput[]
    by: SensorReadingScalarFieldEnum[] | SensorReadingScalarFieldEnum
    having?: SensorReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorReadingCountAggregateInputType | true
    _avg?: SensorReadingAvgAggregateInputType
    _sum?: SensorReadingSumAggregateInputType
    _min?: SensorReadingMinAggregateInputType
    _max?: SensorReadingMaxAggregateInputType
  }

  export type SensorReadingGroupByOutputType = {
    id: string
    facilityId: string
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: string
    isValid: boolean
    recordedAt: Date
    _count: SensorReadingCountAggregateOutputType | null
    _avg: SensorReadingAvgAggregateOutputType | null
    _sum: SensorReadingSumAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  type GetSensorReadingGroupByPayload<T extends SensorReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
            : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
        }
      >
    >


  export type SensorReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    inletFlow?: boolean
    outletFlow?: boolean
    flowDifference?: boolean
    pressureBar?: boolean
    dataSource?: boolean
    isValid?: boolean
    recordedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    inletFlow?: boolean
    outletFlow?: boolean
    flowDifference?: boolean
    pressureBar?: boolean
    dataSource?: boolean
    isValid?: boolean
    recordedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    inletFlow?: boolean
    outletFlow?: boolean
    flowDifference?: boolean
    pressureBar?: boolean
    dataSource?: boolean
    isValid?: boolean
    recordedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectScalar = {
    id?: boolean
    facilityId?: boolean
    inletFlow?: boolean
    outletFlow?: boolean
    flowDifference?: boolean
    pressureBar?: boolean
    dataSource?: boolean
    isValid?: boolean
    recordedAt?: boolean
  }

  export type SensorReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facilityId" | "inletFlow" | "outletFlow" | "flowDifference" | "pressureBar" | "dataSource" | "isValid" | "recordedAt", ExtArgs["result"]["sensorReading"]>
  export type SensorReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type SensorReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type SensorReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $SensorReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorReading"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facilityId: string
      inletFlow: number
      outletFlow: number
      flowDifference: number
      pressureBar: number
      dataSource: string
      isValid: boolean
      recordedAt: Date
    }, ExtArgs["result"]["sensorReading"]>
    composites: {}
  }

  type SensorReadingGetPayload<S extends boolean | null | undefined | SensorReadingDefaultArgs> = $Result.GetResult<Prisma.$SensorReadingPayload, S>

  type SensorReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorReadingCountAggregateInputType | true
    }

  export interface SensorReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorReading'], meta: { name: 'SensorReading' } }
    /**
     * Find zero or one SensorReading that matches the filter.
     * @param {SensorReadingFindUniqueArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorReadingFindUniqueArgs>(args: SelectSubset<T, SensorReadingFindUniqueArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorReadingFindUniqueOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorReadingFindFirstArgs>(args?: SelectSubset<T, SensorReadingFindFirstArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany()
     * 
     * // Get first 10 SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorReadingFindManyArgs>(args?: SelectSubset<T, SensorReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorReading.
     * @param {SensorReadingCreateArgs} args - Arguments to create a SensorReading.
     * @example
     * // Create one SensorReading
     * const SensorReading = await prisma.sensorReading.create({
     *   data: {
     *     // ... data to create a SensorReading
     *   }
     * })
     * 
     */
    create<T extends SensorReadingCreateArgs>(args: SelectSubset<T, SensorReadingCreateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorReadings.
     * @param {SensorReadingCreateManyArgs} args - Arguments to create many SensorReadings.
     * @example
     * // Create many SensorReadings
     * const sensorReading = await prisma.sensorReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorReadingCreateManyArgs>(args?: SelectSubset<T, SensorReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SensorReadings and returns the data saved in the database.
     * @param {SensorReadingCreateManyAndReturnArgs} args - Arguments to create many SensorReadings.
     * @example
     * // Create many SensorReadings
     * const sensorReading = await prisma.sensorReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SensorReadings and only return the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SensorReading.
     * @param {SensorReadingDeleteArgs} args - Arguments to delete one SensorReading.
     * @example
     * // Delete one SensorReading
     * const SensorReading = await prisma.sensorReading.delete({
     *   where: {
     *     // ... filter to delete one SensorReading
     *   }
     * })
     * 
     */
    delete<T extends SensorReadingDeleteArgs>(args: SelectSubset<T, SensorReadingDeleteArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorReading.
     * @param {SensorReadingUpdateArgs} args - Arguments to update one SensorReading.
     * @example
     * // Update one SensorReading
     * const sensorReading = await prisma.sensorReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorReadingUpdateArgs>(args: SelectSubset<T, SensorReadingUpdateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorReadings.
     * @param {SensorReadingDeleteManyArgs} args - Arguments to filter SensorReadings to delete.
     * @example
     * // Delete a few SensorReadings
     * const { count } = await prisma.sensorReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorReadingDeleteManyArgs>(args?: SelectSubset<T, SensorReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorReadings
     * const sensorReading = await prisma.sensorReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorReadingUpdateManyArgs>(args: SelectSubset<T, SensorReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorReadings and returns the data updated in the database.
     * @param {SensorReadingUpdateManyAndReturnArgs} args - Arguments to update many SensorReadings.
     * @example
     * // Update many SensorReadings
     * const sensorReading = await prisma.sensorReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SensorReadings and only return the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SensorReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SensorReading.
     * @param {SensorReadingUpsertArgs} args - Arguments to update or create a SensorReading.
     * @example
     * // Update or create a SensorReading
     * const sensorReading = await prisma.sensorReading.upsert({
     *   create: {
     *     // ... data to create a SensorReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorReading we want to update
     *   }
     * })
     */
    upsert<T extends SensorReadingUpsertArgs>(args: SelectSubset<T, SensorReadingUpsertArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingCountArgs} args - Arguments to filter SensorReadings to count.
     * @example
     * // Count the number of SensorReadings
     * const count = await prisma.sensorReading.count({
     *   where: {
     *     // ... the filter for the SensorReadings we want to count
     *   }
     * })
    **/
    count<T extends SensorReadingCountArgs>(
      args?: Subset<T, SensorReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SensorReadingAggregateArgs>(args: Subset<T, SensorReadingAggregateArgs>): Prisma.PrismaPromise<GetSensorReadingAggregateType<T>>

    /**
     * Group by SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SensorReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorReadingGroupByArgs['orderBy'] }
        : { orderBy?: SensorReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SensorReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorReading model
   */
  readonly fields: SensorReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SensorReading model
   */
  interface SensorReadingFieldRefs {
    readonly id: FieldRef<"SensorReading", 'String'>
    readonly facilityId: FieldRef<"SensorReading", 'String'>
    readonly inletFlow: FieldRef<"SensorReading", 'Float'>
    readonly outletFlow: FieldRef<"SensorReading", 'Float'>
    readonly flowDifference: FieldRef<"SensorReading", 'Float'>
    readonly pressureBar: FieldRef<"SensorReading", 'Float'>
    readonly dataSource: FieldRef<"SensorReading", 'String'>
    readonly isValid: FieldRef<"SensorReading", 'Boolean'>
    readonly recordedAt: FieldRef<"SensorReading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SensorReading findUnique
   */
  export type SensorReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findUniqueOrThrow
   */
  export type SensorReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findFirst
   */
  export type SensorReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findFirstOrThrow
   */
  export type SensorReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findMany
   */
  export type SensorReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReadings to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading create
   */
  export type SensorReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorReading.
     */
    data: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
  }

  /**
   * SensorReading createMany
   */
  export type SensorReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorReadings.
     */
    data: SensorReadingCreateManyInput | SensorReadingCreateManyInput[]
  }

  /**
   * SensorReading createManyAndReturn
   */
  export type SensorReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * The data used to create many SensorReadings.
     */
    data: SensorReadingCreateManyInput | SensorReadingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorReading update
   */
  export type SensorReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorReading.
     */
    data: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
    /**
     * Choose, which SensorReading to update.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading updateMany
   */
  export type SensorReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorReadings.
     */
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyInput>
    /**
     * Filter which SensorReadings to update
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to update.
     */
    limit?: number
  }

  /**
   * SensorReading updateManyAndReturn
   */
  export type SensorReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * The data used to update SensorReadings.
     */
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyInput>
    /**
     * Filter which SensorReadings to update
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorReading upsert
   */
  export type SensorReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorReading to update in case it exists.
     */
    where: SensorReadingWhereUniqueInput
    /**
     * In case the SensorReading found by the `where` argument doesn't exist, create a new SensorReading with this data.
     */
    create: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
    /**
     * In case the SensorReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
  }

  /**
   * SensorReading delete
   */
  export type SensorReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter which SensorReading to delete.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading deleteMany
   */
  export type SensorReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReadings to delete
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to delete.
     */
    limit?: number
  }

  /**
   * SensorReading without action
   */
  export type SensorReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    inletSnapshot: number | null
    outletSnapshot: number | null
    differenceSnapshot: number | null
    pressureSnapshot: number | null
  }

  export type AlertSumAggregateOutputType = {
    inletSnapshot: number | null
    outletSnapshot: number | null
    differenceSnapshot: number | null
    pressureSnapshot: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    alertCode: string | null
    category: string | null
    severity: string | null
    status: string | null
    title: string | null
    description: string | null
    facilityId: string | null
    inletSnapshot: number | null
    outletSnapshot: number | null
    differenceSnapshot: number | null
    pressureSnapshot: number | null
    dataSource: string | null
    detectedAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    alertCode: string | null
    category: string | null
    severity: string | null
    status: string | null
    title: string | null
    description: string | null
    facilityId: string | null
    inletSnapshot: number | null
    outletSnapshot: number | null
    differenceSnapshot: number | null
    pressureSnapshot: number | null
    dataSource: string | null
    detectedAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    alertCode: number
    category: number
    severity: number
    status: number
    title: number
    description: number
    facilityId: number
    inletSnapshot: number
    outletSnapshot: number
    differenceSnapshot: number
    pressureSnapshot: number
    dataSource: number
    detectedAt: number
    updatedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    inletSnapshot?: true
    outletSnapshot?: true
    differenceSnapshot?: true
    pressureSnapshot?: true
  }

  export type AlertSumAggregateInputType = {
    inletSnapshot?: true
    outletSnapshot?: true
    differenceSnapshot?: true
    pressureSnapshot?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    alertCode?: true
    category?: true
    severity?: true
    status?: true
    title?: true
    description?: true
    facilityId?: true
    inletSnapshot?: true
    outletSnapshot?: true
    differenceSnapshot?: true
    pressureSnapshot?: true
    dataSource?: true
    detectedAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    alertCode?: true
    category?: true
    severity?: true
    status?: true
    title?: true
    description?: true
    facilityId?: true
    inletSnapshot?: true
    outletSnapshot?: true
    differenceSnapshot?: true
    pressureSnapshot?: true
    dataSource?: true
    detectedAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    alertCode?: true
    category?: true
    severity?: true
    status?: true
    title?: true
    description?: true
    facilityId?: true
    inletSnapshot?: true
    outletSnapshot?: true
    differenceSnapshot?: true
    pressureSnapshot?: true
    dataSource?: true
    detectedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    alertCode: string
    category: string
    severity: string
    status: string
    title: string
    description: string
    facilityId: string | null
    inletSnapshot: number | null
    outletSnapshot: number | null
    differenceSnapshot: number | null
    pressureSnapshot: number | null
    dataSource: string
    detectedAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertCode?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    facilityId?: boolean
    inletSnapshot?: boolean
    outletSnapshot?: boolean
    differenceSnapshot?: boolean
    pressureSnapshot?: boolean
    dataSource?: boolean
    detectedAt?: boolean
    updatedAt?: boolean
    facility?: boolean | Alert$facilityArgs<ExtArgs>
    notes?: boolean | Alert$notesArgs<ExtArgs>
    _count?: boolean | AlertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertCode?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    facilityId?: boolean
    inletSnapshot?: boolean
    outletSnapshot?: boolean
    differenceSnapshot?: boolean
    pressureSnapshot?: boolean
    dataSource?: boolean
    detectedAt?: boolean
    updatedAt?: boolean
    facility?: boolean | Alert$facilityArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertCode?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    facilityId?: boolean
    inletSnapshot?: boolean
    outletSnapshot?: boolean
    differenceSnapshot?: boolean
    pressureSnapshot?: boolean
    dataSource?: boolean
    detectedAt?: boolean
    updatedAt?: boolean
    facility?: boolean | Alert$facilityArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    alertCode?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    facilityId?: boolean
    inletSnapshot?: boolean
    outletSnapshot?: boolean
    differenceSnapshot?: boolean
    pressureSnapshot?: boolean
    dataSource?: boolean
    detectedAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alertCode" | "category" | "severity" | "status" | "title" | "description" | "facilityId" | "inletSnapshot" | "outletSnapshot" | "differenceSnapshot" | "pressureSnapshot" | "dataSource" | "detectedAt" | "updatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | Alert$facilityArgs<ExtArgs>
    notes?: boolean | Alert$notesArgs<ExtArgs>
    _count?: boolean | AlertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | Alert$facilityArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | Alert$facilityArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs> | null
      notes: Prisma.$AlertNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alertCode: string
      category: string
      severity: string
      status: string
      title: string
      description: string
      facilityId: string | null
      inletSnapshot: number | null
      outletSnapshot: number | null
      differenceSnapshot: number | null
      pressureSnapshot: number | null
      dataSource: string
      detectedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends Alert$facilityArgs<ExtArgs> = {}>(args?: Subset<T, Alert$facilityArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends Alert$notesArgs<ExtArgs> = {}>(args?: Subset<T, Alert$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly alertCode: FieldRef<"Alert", 'String'>
    readonly category: FieldRef<"Alert", 'String'>
    readonly severity: FieldRef<"Alert", 'String'>
    readonly status: FieldRef<"Alert", 'String'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly description: FieldRef<"Alert", 'String'>
    readonly facilityId: FieldRef<"Alert", 'String'>
    readonly inletSnapshot: FieldRef<"Alert", 'Float'>
    readonly outletSnapshot: FieldRef<"Alert", 'Float'>
    readonly differenceSnapshot: FieldRef<"Alert", 'Float'>
    readonly pressureSnapshot: FieldRef<"Alert", 'Float'>
    readonly dataSource: FieldRef<"Alert", 'String'>
    readonly detectedAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert.facility
   */
  export type Alert$facilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    where?: FacilityWhereInput
  }

  /**
   * Alert.notes
   */
  export type Alert$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    where?: AlertNoteWhereInput
    orderBy?: AlertNoteOrderByWithRelationInput | AlertNoteOrderByWithRelationInput[]
    cursor?: AlertNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertNoteScalarFieldEnum | AlertNoteScalarFieldEnum[]
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model AlertNote
   */

  export type AggregateAlertNote = {
    _count: AlertNoteCountAggregateOutputType | null
    _min: AlertNoteMinAggregateOutputType | null
    _max: AlertNoteMaxAggregateOutputType | null
  }

  export type AlertNoteMinAggregateOutputType = {
    id: string | null
    alertId: string | null
    authorName: string | null
    note: string | null
    createdAt: Date | null
  }

  export type AlertNoteMaxAggregateOutputType = {
    id: string | null
    alertId: string | null
    authorName: string | null
    note: string | null
    createdAt: Date | null
  }

  export type AlertNoteCountAggregateOutputType = {
    id: number
    alertId: number
    authorName: number
    note: number
    createdAt: number
    _all: number
  }


  export type AlertNoteMinAggregateInputType = {
    id?: true
    alertId?: true
    authorName?: true
    note?: true
    createdAt?: true
  }

  export type AlertNoteMaxAggregateInputType = {
    id?: true
    alertId?: true
    authorName?: true
    note?: true
    createdAt?: true
  }

  export type AlertNoteCountAggregateInputType = {
    id?: true
    alertId?: true
    authorName?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type AlertNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertNote to aggregate.
     */
    where?: AlertNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertNotes to fetch.
     */
    orderBy?: AlertNoteOrderByWithRelationInput | AlertNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertNotes
    **/
    _count?: true | AlertNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertNoteMaxAggregateInputType
  }

  export type GetAlertNoteAggregateType<T extends AlertNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertNote[P]>
      : GetScalarType<T[P], AggregateAlertNote[P]>
  }




  export type AlertNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertNoteWhereInput
    orderBy?: AlertNoteOrderByWithAggregationInput | AlertNoteOrderByWithAggregationInput[]
    by: AlertNoteScalarFieldEnum[] | AlertNoteScalarFieldEnum
    having?: AlertNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertNoteCountAggregateInputType | true
    _min?: AlertNoteMinAggregateInputType
    _max?: AlertNoteMaxAggregateInputType
  }

  export type AlertNoteGroupByOutputType = {
    id: string
    alertId: string
    authorName: string
    note: string
    createdAt: Date
    _count: AlertNoteCountAggregateOutputType | null
    _min: AlertNoteMinAggregateOutputType | null
    _max: AlertNoteMaxAggregateOutputType | null
  }

  type GetAlertNoteGroupByPayload<T extends AlertNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertNoteGroupByOutputType[P]>
            : GetScalarType<T[P], AlertNoteGroupByOutputType[P]>
        }
      >
    >


  export type AlertNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    authorName?: boolean
    note?: boolean
    createdAt?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertNote"]>

  export type AlertNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    authorName?: boolean
    note?: boolean
    createdAt?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertNote"]>

  export type AlertNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    authorName?: boolean
    note?: boolean
    createdAt?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertNote"]>

  export type AlertNoteSelectScalar = {
    id?: boolean
    alertId?: boolean
    authorName?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type AlertNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alertId" | "authorName" | "note" | "createdAt", ExtArgs["result"]["alertNote"]>
  export type AlertNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }
  export type AlertNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }
  export type AlertNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }

  export type $AlertNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertNote"
    objects: {
      alert: Prisma.$AlertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alertId: string
      authorName: string
      note: string
      createdAt: Date
    }, ExtArgs["result"]["alertNote"]>
    composites: {}
  }

  type AlertNoteGetPayload<S extends boolean | null | undefined | AlertNoteDefaultArgs> = $Result.GetResult<Prisma.$AlertNotePayload, S>

  type AlertNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertNoteCountAggregateInputType | true
    }

  export interface AlertNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertNote'], meta: { name: 'AlertNote' } }
    /**
     * Find zero or one AlertNote that matches the filter.
     * @param {AlertNoteFindUniqueArgs} args - Arguments to find a AlertNote
     * @example
     * // Get one AlertNote
     * const alertNote = await prisma.alertNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertNoteFindUniqueArgs>(args: SelectSubset<T, AlertNoteFindUniqueArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertNoteFindUniqueOrThrowArgs} args - Arguments to find a AlertNote
     * @example
     * // Get one AlertNote
     * const alertNote = await prisma.alertNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertNoteFindFirstArgs} args - Arguments to find a AlertNote
     * @example
     * // Get one AlertNote
     * const alertNote = await prisma.alertNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertNoteFindFirstArgs>(args?: SelectSubset<T, AlertNoteFindFirstArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertNoteFindFirstOrThrowArgs} args - Arguments to find a AlertNote
     * @example
     * // Get one AlertNote
     * const alertNote = await prisma.alertNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertNotes
     * const alertNotes = await prisma.alertNote.findMany()
     * 
     * // Get first 10 AlertNotes
     * const alertNotes = await prisma.alertNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertNoteWithIdOnly = await prisma.alertNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertNoteFindManyArgs>(args?: SelectSubset<T, AlertNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertNote.
     * @param {AlertNoteCreateArgs} args - Arguments to create a AlertNote.
     * @example
     * // Create one AlertNote
     * const AlertNote = await prisma.alertNote.create({
     *   data: {
     *     // ... data to create a AlertNote
     *   }
     * })
     * 
     */
    create<T extends AlertNoteCreateArgs>(args: SelectSubset<T, AlertNoteCreateArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertNotes.
     * @param {AlertNoteCreateManyArgs} args - Arguments to create many AlertNotes.
     * @example
     * // Create many AlertNotes
     * const alertNote = await prisma.alertNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertNoteCreateManyArgs>(args?: SelectSubset<T, AlertNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertNotes and returns the data saved in the database.
     * @param {AlertNoteCreateManyAndReturnArgs} args - Arguments to create many AlertNotes.
     * @example
     * // Create many AlertNotes
     * const alertNote = await prisma.alertNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertNotes and only return the `id`
     * const alertNoteWithIdOnly = await prisma.alertNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlertNote.
     * @param {AlertNoteDeleteArgs} args - Arguments to delete one AlertNote.
     * @example
     * // Delete one AlertNote
     * const AlertNote = await prisma.alertNote.delete({
     *   where: {
     *     // ... filter to delete one AlertNote
     *   }
     * })
     * 
     */
    delete<T extends AlertNoteDeleteArgs>(args: SelectSubset<T, AlertNoteDeleteArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertNote.
     * @param {AlertNoteUpdateArgs} args - Arguments to update one AlertNote.
     * @example
     * // Update one AlertNote
     * const alertNote = await prisma.alertNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertNoteUpdateArgs>(args: SelectSubset<T, AlertNoteUpdateArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertNotes.
     * @param {AlertNoteDeleteManyArgs} args - Arguments to filter AlertNotes to delete.
     * @example
     * // Delete a few AlertNotes
     * const { count } = await prisma.alertNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertNoteDeleteManyArgs>(args?: SelectSubset<T, AlertNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertNotes
     * const alertNote = await prisma.alertNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertNoteUpdateManyArgs>(args: SelectSubset<T, AlertNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertNotes and returns the data updated in the database.
     * @param {AlertNoteUpdateManyAndReturnArgs} args - Arguments to update many AlertNotes.
     * @example
     * // Update many AlertNotes
     * const alertNote = await prisma.alertNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlertNotes and only return the `id`
     * const alertNoteWithIdOnly = await prisma.alertNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlertNote.
     * @param {AlertNoteUpsertArgs} args - Arguments to update or create a AlertNote.
     * @example
     * // Update or create a AlertNote
     * const alertNote = await prisma.alertNote.upsert({
     *   create: {
     *     // ... data to create a AlertNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertNote we want to update
     *   }
     * })
     */
    upsert<T extends AlertNoteUpsertArgs>(args: SelectSubset<T, AlertNoteUpsertArgs<ExtArgs>>): Prisma__AlertNoteClient<$Result.GetResult<Prisma.$AlertNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlertNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertNoteCountArgs} args - Arguments to filter AlertNotes to count.
     * @example
     * // Count the number of AlertNotes
     * const count = await prisma.alertNote.count({
     *   where: {
     *     // ... the filter for the AlertNotes we want to count
     *   }
     * })
    **/
    count<T extends AlertNoteCountArgs>(
      args?: Subset<T, AlertNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertNoteAggregateArgs>(args: Subset<T, AlertNoteAggregateArgs>): Prisma.PrismaPromise<GetAlertNoteAggregateType<T>>

    /**
     * Group by AlertNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertNoteGroupByArgs['orderBy'] }
        : { orderBy?: AlertNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertNote model
   */
  readonly fields: AlertNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alert<T extends AlertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertDefaultArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlertNote model
   */
  interface AlertNoteFieldRefs {
    readonly id: FieldRef<"AlertNote", 'String'>
    readonly alertId: FieldRef<"AlertNote", 'String'>
    readonly authorName: FieldRef<"AlertNote", 'String'>
    readonly note: FieldRef<"AlertNote", 'String'>
    readonly createdAt: FieldRef<"AlertNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertNote findUnique
   */
  export type AlertNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * Filter, which AlertNote to fetch.
     */
    where: AlertNoteWhereUniqueInput
  }

  /**
   * AlertNote findUniqueOrThrow
   */
  export type AlertNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * Filter, which AlertNote to fetch.
     */
    where: AlertNoteWhereUniqueInput
  }

  /**
   * AlertNote findFirst
   */
  export type AlertNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * Filter, which AlertNote to fetch.
     */
    where?: AlertNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertNotes to fetch.
     */
    orderBy?: AlertNoteOrderByWithRelationInput | AlertNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertNotes.
     */
    cursor?: AlertNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertNotes.
     */
    distinct?: AlertNoteScalarFieldEnum | AlertNoteScalarFieldEnum[]
  }

  /**
   * AlertNote findFirstOrThrow
   */
  export type AlertNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * Filter, which AlertNote to fetch.
     */
    where?: AlertNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertNotes to fetch.
     */
    orderBy?: AlertNoteOrderByWithRelationInput | AlertNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertNotes.
     */
    cursor?: AlertNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertNotes.
     */
    distinct?: AlertNoteScalarFieldEnum | AlertNoteScalarFieldEnum[]
  }

  /**
   * AlertNote findMany
   */
  export type AlertNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * Filter, which AlertNotes to fetch.
     */
    where?: AlertNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertNotes to fetch.
     */
    orderBy?: AlertNoteOrderByWithRelationInput | AlertNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertNotes.
     */
    cursor?: AlertNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertNotes.
     */
    skip?: number
    distinct?: AlertNoteScalarFieldEnum | AlertNoteScalarFieldEnum[]
  }

  /**
   * AlertNote create
   */
  export type AlertNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a AlertNote.
     */
    data: XOR<AlertNoteCreateInput, AlertNoteUncheckedCreateInput>
  }

  /**
   * AlertNote createMany
   */
  export type AlertNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertNotes.
     */
    data: AlertNoteCreateManyInput | AlertNoteCreateManyInput[]
  }

  /**
   * AlertNote createManyAndReturn
   */
  export type AlertNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * The data used to create many AlertNotes.
     */
    data: AlertNoteCreateManyInput | AlertNoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertNote update
   */
  export type AlertNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a AlertNote.
     */
    data: XOR<AlertNoteUpdateInput, AlertNoteUncheckedUpdateInput>
    /**
     * Choose, which AlertNote to update.
     */
    where: AlertNoteWhereUniqueInput
  }

  /**
   * AlertNote updateMany
   */
  export type AlertNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertNotes.
     */
    data: XOR<AlertNoteUpdateManyMutationInput, AlertNoteUncheckedUpdateManyInput>
    /**
     * Filter which AlertNotes to update
     */
    where?: AlertNoteWhereInput
    /**
     * Limit how many AlertNotes to update.
     */
    limit?: number
  }

  /**
   * AlertNote updateManyAndReturn
   */
  export type AlertNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * The data used to update AlertNotes.
     */
    data: XOR<AlertNoteUpdateManyMutationInput, AlertNoteUncheckedUpdateManyInput>
    /**
     * Filter which AlertNotes to update
     */
    where?: AlertNoteWhereInput
    /**
     * Limit how many AlertNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertNote upsert
   */
  export type AlertNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the AlertNote to update in case it exists.
     */
    where: AlertNoteWhereUniqueInput
    /**
     * In case the AlertNote found by the `where` argument doesn't exist, create a new AlertNote with this data.
     */
    create: XOR<AlertNoteCreateInput, AlertNoteUncheckedCreateInput>
    /**
     * In case the AlertNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertNoteUpdateInput, AlertNoteUncheckedUpdateInput>
  }

  /**
   * AlertNote delete
   */
  export type AlertNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
    /**
     * Filter which AlertNote to delete.
     */
    where: AlertNoteWhereUniqueInput
  }

  /**
   * AlertNote deleteMany
   */
  export type AlertNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertNotes to delete
     */
    where?: AlertNoteWhereInput
    /**
     * Limit how many AlertNotes to delete.
     */
    limit?: number
  }

  /**
   * AlertNote without action
   */
  export type AlertNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertNote
     */
    select?: AlertNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertNote
     */
    omit?: AlertNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertNoteInclude<ExtArgs> | null
  }


  /**
   * Model MonitoringThreshold
   */

  export type AggregateMonitoringThreshold = {
    _count: MonitoringThresholdCountAggregateOutputType | null
    _avg: MonitoringThresholdAvgAggregateOutputType | null
    _sum: MonitoringThresholdSumAggregateOutputType | null
    _min: MonitoringThresholdMinAggregateOutputType | null
    _max: MonitoringThresholdMaxAggregateOutputType | null
  }

  export type MonitoringThresholdAvgAggregateOutputType = {
    pressureMinBar: number | null
    pressureMaxBar: number | null
    pressureCriticalMaxBar: number | null
    flowDiffThresholdLpm: number | null
    flowAnomalyPersistenceSec: number | null
    staleTimeoutSec: number | null
  }

  export type MonitoringThresholdSumAggregateOutputType = {
    pressureMinBar: number | null
    pressureMaxBar: number | null
    pressureCriticalMaxBar: number | null
    flowDiffThresholdLpm: number | null
    flowAnomalyPersistenceSec: number | null
    staleTimeoutSec: number | null
  }

  export type MonitoringThresholdMinAggregateOutputType = {
    id: string | null
    pressureMinBar: number | null
    pressureMaxBar: number | null
    pressureCriticalMaxBar: number | null
    flowDiffThresholdLpm: number | null
    flowAnomalyPersistenceSec: number | null
    staleTimeoutSec: number | null
    isIllustrative: boolean | null
    updatedAt: Date | null
  }

  export type MonitoringThresholdMaxAggregateOutputType = {
    id: string | null
    pressureMinBar: number | null
    pressureMaxBar: number | null
    pressureCriticalMaxBar: number | null
    flowDiffThresholdLpm: number | null
    flowAnomalyPersistenceSec: number | null
    staleTimeoutSec: number | null
    isIllustrative: boolean | null
    updatedAt: Date | null
  }

  export type MonitoringThresholdCountAggregateOutputType = {
    id: number
    pressureMinBar: number
    pressureMaxBar: number
    pressureCriticalMaxBar: number
    flowDiffThresholdLpm: number
    flowAnomalyPersistenceSec: number
    staleTimeoutSec: number
    isIllustrative: number
    updatedAt: number
    _all: number
  }


  export type MonitoringThresholdAvgAggregateInputType = {
    pressureMinBar?: true
    pressureMaxBar?: true
    pressureCriticalMaxBar?: true
    flowDiffThresholdLpm?: true
    flowAnomalyPersistenceSec?: true
    staleTimeoutSec?: true
  }

  export type MonitoringThresholdSumAggregateInputType = {
    pressureMinBar?: true
    pressureMaxBar?: true
    pressureCriticalMaxBar?: true
    flowDiffThresholdLpm?: true
    flowAnomalyPersistenceSec?: true
    staleTimeoutSec?: true
  }

  export type MonitoringThresholdMinAggregateInputType = {
    id?: true
    pressureMinBar?: true
    pressureMaxBar?: true
    pressureCriticalMaxBar?: true
    flowDiffThresholdLpm?: true
    flowAnomalyPersistenceSec?: true
    staleTimeoutSec?: true
    isIllustrative?: true
    updatedAt?: true
  }

  export type MonitoringThresholdMaxAggregateInputType = {
    id?: true
    pressureMinBar?: true
    pressureMaxBar?: true
    pressureCriticalMaxBar?: true
    flowDiffThresholdLpm?: true
    flowAnomalyPersistenceSec?: true
    staleTimeoutSec?: true
    isIllustrative?: true
    updatedAt?: true
  }

  export type MonitoringThresholdCountAggregateInputType = {
    id?: true
    pressureMinBar?: true
    pressureMaxBar?: true
    pressureCriticalMaxBar?: true
    flowDiffThresholdLpm?: true
    flowAnomalyPersistenceSec?: true
    staleTimeoutSec?: true
    isIllustrative?: true
    updatedAt?: true
    _all?: true
  }

  export type MonitoringThresholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringThreshold to aggregate.
     */
    where?: MonitoringThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringThresholds to fetch.
     */
    orderBy?: MonitoringThresholdOrderByWithRelationInput | MonitoringThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitoringThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringThresholds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonitoringThresholds
    **/
    _count?: true | MonitoringThresholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonitoringThresholdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonitoringThresholdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringThresholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringThresholdMaxAggregateInputType
  }

  export type GetMonitoringThresholdAggregateType<T extends MonitoringThresholdAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoringThreshold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoringThreshold[P]>
      : GetScalarType<T[P], AggregateMonitoringThreshold[P]>
  }




  export type MonitoringThresholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringThresholdWhereInput
    orderBy?: MonitoringThresholdOrderByWithAggregationInput | MonitoringThresholdOrderByWithAggregationInput[]
    by: MonitoringThresholdScalarFieldEnum[] | MonitoringThresholdScalarFieldEnum
    having?: MonitoringThresholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitoringThresholdCountAggregateInputType | true
    _avg?: MonitoringThresholdAvgAggregateInputType
    _sum?: MonitoringThresholdSumAggregateInputType
    _min?: MonitoringThresholdMinAggregateInputType
    _max?: MonitoringThresholdMaxAggregateInputType
  }

  export type MonitoringThresholdGroupByOutputType = {
    id: string
    pressureMinBar: number
    pressureMaxBar: number
    pressureCriticalMaxBar: number
    flowDiffThresholdLpm: number
    flowAnomalyPersistenceSec: number
    staleTimeoutSec: number
    isIllustrative: boolean
    updatedAt: Date
    _count: MonitoringThresholdCountAggregateOutputType | null
    _avg: MonitoringThresholdAvgAggregateOutputType | null
    _sum: MonitoringThresholdSumAggregateOutputType | null
    _min: MonitoringThresholdMinAggregateOutputType | null
    _max: MonitoringThresholdMaxAggregateOutputType | null
  }

  type GetMonitoringThresholdGroupByPayload<T extends MonitoringThresholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitoringThresholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitoringThresholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitoringThresholdGroupByOutputType[P]>
            : GetScalarType<T[P], MonitoringThresholdGroupByOutputType[P]>
        }
      >
    >


  export type MonitoringThresholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pressureMinBar?: boolean
    pressureMaxBar?: boolean
    pressureCriticalMaxBar?: boolean
    flowDiffThresholdLpm?: boolean
    flowAnomalyPersistenceSec?: boolean
    staleTimeoutSec?: boolean
    isIllustrative?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monitoringThreshold"]>

  export type MonitoringThresholdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pressureMinBar?: boolean
    pressureMaxBar?: boolean
    pressureCriticalMaxBar?: boolean
    flowDiffThresholdLpm?: boolean
    flowAnomalyPersistenceSec?: boolean
    staleTimeoutSec?: boolean
    isIllustrative?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monitoringThreshold"]>

  export type MonitoringThresholdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pressureMinBar?: boolean
    pressureMaxBar?: boolean
    pressureCriticalMaxBar?: boolean
    flowDiffThresholdLpm?: boolean
    flowAnomalyPersistenceSec?: boolean
    staleTimeoutSec?: boolean
    isIllustrative?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monitoringThreshold"]>

  export type MonitoringThresholdSelectScalar = {
    id?: boolean
    pressureMinBar?: boolean
    pressureMaxBar?: boolean
    pressureCriticalMaxBar?: boolean
    flowDiffThresholdLpm?: boolean
    flowAnomalyPersistenceSec?: boolean
    staleTimeoutSec?: boolean
    isIllustrative?: boolean
    updatedAt?: boolean
  }

  export type MonitoringThresholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pressureMinBar" | "pressureMaxBar" | "pressureCriticalMaxBar" | "flowDiffThresholdLpm" | "flowAnomalyPersistenceSec" | "staleTimeoutSec" | "isIllustrative" | "updatedAt", ExtArgs["result"]["monitoringThreshold"]>

  export type $MonitoringThresholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonitoringThreshold"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pressureMinBar: number
      pressureMaxBar: number
      pressureCriticalMaxBar: number
      flowDiffThresholdLpm: number
      flowAnomalyPersistenceSec: number
      staleTimeoutSec: number
      isIllustrative: boolean
      updatedAt: Date
    }, ExtArgs["result"]["monitoringThreshold"]>
    composites: {}
  }

  type MonitoringThresholdGetPayload<S extends boolean | null | undefined | MonitoringThresholdDefaultArgs> = $Result.GetResult<Prisma.$MonitoringThresholdPayload, S>

  type MonitoringThresholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonitoringThresholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonitoringThresholdCountAggregateInputType | true
    }

  export interface MonitoringThresholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonitoringThreshold'], meta: { name: 'MonitoringThreshold' } }
    /**
     * Find zero or one MonitoringThreshold that matches the filter.
     * @param {MonitoringThresholdFindUniqueArgs} args - Arguments to find a MonitoringThreshold
     * @example
     * // Get one MonitoringThreshold
     * const monitoringThreshold = await prisma.monitoringThreshold.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitoringThresholdFindUniqueArgs>(args: SelectSubset<T, MonitoringThresholdFindUniqueArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonitoringThreshold that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitoringThresholdFindUniqueOrThrowArgs} args - Arguments to find a MonitoringThreshold
     * @example
     * // Get one MonitoringThreshold
     * const monitoringThreshold = await prisma.monitoringThreshold.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitoringThresholdFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitoringThresholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonitoringThreshold that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringThresholdFindFirstArgs} args - Arguments to find a MonitoringThreshold
     * @example
     * // Get one MonitoringThreshold
     * const monitoringThreshold = await prisma.monitoringThreshold.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitoringThresholdFindFirstArgs>(args?: SelectSubset<T, MonitoringThresholdFindFirstArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonitoringThreshold that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringThresholdFindFirstOrThrowArgs} args - Arguments to find a MonitoringThreshold
     * @example
     * // Get one MonitoringThreshold
     * const monitoringThreshold = await prisma.monitoringThreshold.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitoringThresholdFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitoringThresholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonitoringThresholds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringThresholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonitoringThresholds
     * const monitoringThresholds = await prisma.monitoringThreshold.findMany()
     * 
     * // Get first 10 MonitoringThresholds
     * const monitoringThresholds = await prisma.monitoringThreshold.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoringThresholdWithIdOnly = await prisma.monitoringThreshold.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitoringThresholdFindManyArgs>(args?: SelectSubset<T, MonitoringThresholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonitoringThreshold.
     * @param {MonitoringThresholdCreateArgs} args - Arguments to create a MonitoringThreshold.
     * @example
     * // Create one MonitoringThreshold
     * const MonitoringThreshold = await prisma.monitoringThreshold.create({
     *   data: {
     *     // ... data to create a MonitoringThreshold
     *   }
     * })
     * 
     */
    create<T extends MonitoringThresholdCreateArgs>(args: SelectSubset<T, MonitoringThresholdCreateArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonitoringThresholds.
     * @param {MonitoringThresholdCreateManyArgs} args - Arguments to create many MonitoringThresholds.
     * @example
     * // Create many MonitoringThresholds
     * const monitoringThreshold = await prisma.monitoringThreshold.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitoringThresholdCreateManyArgs>(args?: SelectSubset<T, MonitoringThresholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonitoringThresholds and returns the data saved in the database.
     * @param {MonitoringThresholdCreateManyAndReturnArgs} args - Arguments to create many MonitoringThresholds.
     * @example
     * // Create many MonitoringThresholds
     * const monitoringThreshold = await prisma.monitoringThreshold.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonitoringThresholds and only return the `id`
     * const monitoringThresholdWithIdOnly = await prisma.monitoringThreshold.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitoringThresholdCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitoringThresholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonitoringThreshold.
     * @param {MonitoringThresholdDeleteArgs} args - Arguments to delete one MonitoringThreshold.
     * @example
     * // Delete one MonitoringThreshold
     * const MonitoringThreshold = await prisma.monitoringThreshold.delete({
     *   where: {
     *     // ... filter to delete one MonitoringThreshold
     *   }
     * })
     * 
     */
    delete<T extends MonitoringThresholdDeleteArgs>(args: SelectSubset<T, MonitoringThresholdDeleteArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonitoringThreshold.
     * @param {MonitoringThresholdUpdateArgs} args - Arguments to update one MonitoringThreshold.
     * @example
     * // Update one MonitoringThreshold
     * const monitoringThreshold = await prisma.monitoringThreshold.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitoringThresholdUpdateArgs>(args: SelectSubset<T, MonitoringThresholdUpdateArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonitoringThresholds.
     * @param {MonitoringThresholdDeleteManyArgs} args - Arguments to filter MonitoringThresholds to delete.
     * @example
     * // Delete a few MonitoringThresholds
     * const { count } = await prisma.monitoringThreshold.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitoringThresholdDeleteManyArgs>(args?: SelectSubset<T, MonitoringThresholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringThresholds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringThresholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonitoringThresholds
     * const monitoringThreshold = await prisma.monitoringThreshold.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitoringThresholdUpdateManyArgs>(args: SelectSubset<T, MonitoringThresholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringThresholds and returns the data updated in the database.
     * @param {MonitoringThresholdUpdateManyAndReturnArgs} args - Arguments to update many MonitoringThresholds.
     * @example
     * // Update many MonitoringThresholds
     * const monitoringThreshold = await prisma.monitoringThreshold.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonitoringThresholds and only return the `id`
     * const monitoringThresholdWithIdOnly = await prisma.monitoringThreshold.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonitoringThresholdUpdateManyAndReturnArgs>(args: SelectSubset<T, MonitoringThresholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonitoringThreshold.
     * @param {MonitoringThresholdUpsertArgs} args - Arguments to update or create a MonitoringThreshold.
     * @example
     * // Update or create a MonitoringThreshold
     * const monitoringThreshold = await prisma.monitoringThreshold.upsert({
     *   create: {
     *     // ... data to create a MonitoringThreshold
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonitoringThreshold we want to update
     *   }
     * })
     */
    upsert<T extends MonitoringThresholdUpsertArgs>(args: SelectSubset<T, MonitoringThresholdUpsertArgs<ExtArgs>>): Prisma__MonitoringThresholdClient<$Result.GetResult<Prisma.$MonitoringThresholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonitoringThresholds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringThresholdCountArgs} args - Arguments to filter MonitoringThresholds to count.
     * @example
     * // Count the number of MonitoringThresholds
     * const count = await prisma.monitoringThreshold.count({
     *   where: {
     *     // ... the filter for the MonitoringThresholds we want to count
     *   }
     * })
    **/
    count<T extends MonitoringThresholdCountArgs>(
      args?: Subset<T, MonitoringThresholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitoringThresholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonitoringThreshold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringThresholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonitoringThresholdAggregateArgs>(args: Subset<T, MonitoringThresholdAggregateArgs>): Prisma.PrismaPromise<GetMonitoringThresholdAggregateType<T>>

    /**
     * Group by MonitoringThreshold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringThresholdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonitoringThresholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitoringThresholdGroupByArgs['orderBy'] }
        : { orderBy?: MonitoringThresholdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonitoringThresholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringThresholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonitoringThreshold model
   */
  readonly fields: MonitoringThresholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonitoringThreshold.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitoringThresholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonitoringThreshold model
   */
  interface MonitoringThresholdFieldRefs {
    readonly id: FieldRef<"MonitoringThreshold", 'String'>
    readonly pressureMinBar: FieldRef<"MonitoringThreshold", 'Float'>
    readonly pressureMaxBar: FieldRef<"MonitoringThreshold", 'Float'>
    readonly pressureCriticalMaxBar: FieldRef<"MonitoringThreshold", 'Float'>
    readonly flowDiffThresholdLpm: FieldRef<"MonitoringThreshold", 'Float'>
    readonly flowAnomalyPersistenceSec: FieldRef<"MonitoringThreshold", 'Int'>
    readonly staleTimeoutSec: FieldRef<"MonitoringThreshold", 'Int'>
    readonly isIllustrative: FieldRef<"MonitoringThreshold", 'Boolean'>
    readonly updatedAt: FieldRef<"MonitoringThreshold", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonitoringThreshold findUnique
   */
  export type MonitoringThresholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * Filter, which MonitoringThreshold to fetch.
     */
    where: MonitoringThresholdWhereUniqueInput
  }

  /**
   * MonitoringThreshold findUniqueOrThrow
   */
  export type MonitoringThresholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * Filter, which MonitoringThreshold to fetch.
     */
    where: MonitoringThresholdWhereUniqueInput
  }

  /**
   * MonitoringThreshold findFirst
   */
  export type MonitoringThresholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * Filter, which MonitoringThreshold to fetch.
     */
    where?: MonitoringThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringThresholds to fetch.
     */
    orderBy?: MonitoringThresholdOrderByWithRelationInput | MonitoringThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringThresholds.
     */
    cursor?: MonitoringThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringThresholds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringThresholds.
     */
    distinct?: MonitoringThresholdScalarFieldEnum | MonitoringThresholdScalarFieldEnum[]
  }

  /**
   * MonitoringThreshold findFirstOrThrow
   */
  export type MonitoringThresholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * Filter, which MonitoringThreshold to fetch.
     */
    where?: MonitoringThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringThresholds to fetch.
     */
    orderBy?: MonitoringThresholdOrderByWithRelationInput | MonitoringThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringThresholds.
     */
    cursor?: MonitoringThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringThresholds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringThresholds.
     */
    distinct?: MonitoringThresholdScalarFieldEnum | MonitoringThresholdScalarFieldEnum[]
  }

  /**
   * MonitoringThreshold findMany
   */
  export type MonitoringThresholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * Filter, which MonitoringThresholds to fetch.
     */
    where?: MonitoringThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringThresholds to fetch.
     */
    orderBy?: MonitoringThresholdOrderByWithRelationInput | MonitoringThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonitoringThresholds.
     */
    cursor?: MonitoringThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringThresholds.
     */
    skip?: number
    distinct?: MonitoringThresholdScalarFieldEnum | MonitoringThresholdScalarFieldEnum[]
  }

  /**
   * MonitoringThreshold create
   */
  export type MonitoringThresholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * The data needed to create a MonitoringThreshold.
     */
    data: XOR<MonitoringThresholdCreateInput, MonitoringThresholdUncheckedCreateInput>
  }

  /**
   * MonitoringThreshold createMany
   */
  export type MonitoringThresholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonitoringThresholds.
     */
    data: MonitoringThresholdCreateManyInput | MonitoringThresholdCreateManyInput[]
  }

  /**
   * MonitoringThreshold createManyAndReturn
   */
  export type MonitoringThresholdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * The data used to create many MonitoringThresholds.
     */
    data: MonitoringThresholdCreateManyInput | MonitoringThresholdCreateManyInput[]
  }

  /**
   * MonitoringThreshold update
   */
  export type MonitoringThresholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * The data needed to update a MonitoringThreshold.
     */
    data: XOR<MonitoringThresholdUpdateInput, MonitoringThresholdUncheckedUpdateInput>
    /**
     * Choose, which MonitoringThreshold to update.
     */
    where: MonitoringThresholdWhereUniqueInput
  }

  /**
   * MonitoringThreshold updateMany
   */
  export type MonitoringThresholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonitoringThresholds.
     */
    data: XOR<MonitoringThresholdUpdateManyMutationInput, MonitoringThresholdUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringThresholds to update
     */
    where?: MonitoringThresholdWhereInput
    /**
     * Limit how many MonitoringThresholds to update.
     */
    limit?: number
  }

  /**
   * MonitoringThreshold updateManyAndReturn
   */
  export type MonitoringThresholdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * The data used to update MonitoringThresholds.
     */
    data: XOR<MonitoringThresholdUpdateManyMutationInput, MonitoringThresholdUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringThresholds to update
     */
    where?: MonitoringThresholdWhereInput
    /**
     * Limit how many MonitoringThresholds to update.
     */
    limit?: number
  }

  /**
   * MonitoringThreshold upsert
   */
  export type MonitoringThresholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * The filter to search for the MonitoringThreshold to update in case it exists.
     */
    where: MonitoringThresholdWhereUniqueInput
    /**
     * In case the MonitoringThreshold found by the `where` argument doesn't exist, create a new MonitoringThreshold with this data.
     */
    create: XOR<MonitoringThresholdCreateInput, MonitoringThresholdUncheckedCreateInput>
    /**
     * In case the MonitoringThreshold was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitoringThresholdUpdateInput, MonitoringThresholdUncheckedUpdateInput>
  }

  /**
   * MonitoringThreshold delete
   */
  export type MonitoringThresholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
    /**
     * Filter which MonitoringThreshold to delete.
     */
    where: MonitoringThresholdWhereUniqueInput
  }

  /**
   * MonitoringThreshold deleteMany
   */
  export type MonitoringThresholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringThresholds to delete
     */
    where?: MonitoringThresholdWhereInput
    /**
     * Limit how many MonitoringThresholds to delete.
     */
    limit?: number
  }

  /**
   * MonitoringThreshold without action
   */
  export type MonitoringThresholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringThreshold
     */
    select?: MonitoringThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringThreshold
     */
    omit?: MonitoringThresholdOmit<ExtArgs> | null
  }


  /**
   * Model ApplicationSetting
   */

  export type AggregateApplicationSetting = {
    _count: ApplicationSettingCountAggregateOutputType | null
    _avg: ApplicationSettingAvgAggregateOutputType | null
    _sum: ApplicationSettingSumAggregateOutputType | null
    _min: ApplicationSettingMinAggregateOutputType | null
    _max: ApplicationSettingMaxAggregateOutputType | null
  }

  export type ApplicationSettingAvgAggregateOutputType = {
    pollIntervalMs: number | null
  }

  export type ApplicationSettingSumAggregateOutputType = {
    pollIntervalMs: number | null
  }

  export type ApplicationSettingMinAggregateOutputType = {
    id: string | null
    dataMode: string | null
    demoScenario: string | null
    liveSensorApiUrl: string | null
    pollIntervalMs: number | null
    networkContext: string | null
    updatedAt: Date | null
  }

  export type ApplicationSettingMaxAggregateOutputType = {
    id: string | null
    dataMode: string | null
    demoScenario: string | null
    liveSensorApiUrl: string | null
    pollIntervalMs: number | null
    networkContext: string | null
    updatedAt: Date | null
  }

  export type ApplicationSettingCountAggregateOutputType = {
    id: number
    dataMode: number
    demoScenario: number
    liveSensorApiUrl: number
    pollIntervalMs: number
    networkContext: number
    updatedAt: number
    _all: number
  }


  export type ApplicationSettingAvgAggregateInputType = {
    pollIntervalMs?: true
  }

  export type ApplicationSettingSumAggregateInputType = {
    pollIntervalMs?: true
  }

  export type ApplicationSettingMinAggregateInputType = {
    id?: true
    dataMode?: true
    demoScenario?: true
    liveSensorApiUrl?: true
    pollIntervalMs?: true
    networkContext?: true
    updatedAt?: true
  }

  export type ApplicationSettingMaxAggregateInputType = {
    id?: true
    dataMode?: true
    demoScenario?: true
    liveSensorApiUrl?: true
    pollIntervalMs?: true
    networkContext?: true
    updatedAt?: true
  }

  export type ApplicationSettingCountAggregateInputType = {
    id?: true
    dataMode?: true
    demoScenario?: true
    liveSensorApiUrl?: true
    pollIntervalMs?: true
    networkContext?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationSetting to aggregate.
     */
    where?: ApplicationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSettings to fetch.
     */
    orderBy?: ApplicationSettingOrderByWithRelationInput | ApplicationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationSettings
    **/
    _count?: true | ApplicationSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationSettingMaxAggregateInputType
  }

  export type GetApplicationSettingAggregateType<T extends ApplicationSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationSetting[P]>
      : GetScalarType<T[P], AggregateApplicationSetting[P]>
  }




  export type ApplicationSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationSettingWhereInput
    orderBy?: ApplicationSettingOrderByWithAggregationInput | ApplicationSettingOrderByWithAggregationInput[]
    by: ApplicationSettingScalarFieldEnum[] | ApplicationSettingScalarFieldEnum
    having?: ApplicationSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationSettingCountAggregateInputType | true
    _avg?: ApplicationSettingAvgAggregateInputType
    _sum?: ApplicationSettingSumAggregateInputType
    _min?: ApplicationSettingMinAggregateInputType
    _max?: ApplicationSettingMaxAggregateInputType
  }

  export type ApplicationSettingGroupByOutputType = {
    id: string
    dataMode: string
    demoScenario: string
    liveSensorApiUrl: string
    pollIntervalMs: number
    networkContext: string
    updatedAt: Date
    _count: ApplicationSettingCountAggregateOutputType | null
    _avg: ApplicationSettingAvgAggregateOutputType | null
    _sum: ApplicationSettingSumAggregateOutputType | null
    _min: ApplicationSettingMinAggregateOutputType | null
    _max: ApplicationSettingMaxAggregateOutputType | null
  }

  type GetApplicationSettingGroupByPayload<T extends ApplicationSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationSettingGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationSettingGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataMode?: boolean
    demoScenario?: boolean
    liveSensorApiUrl?: boolean
    pollIntervalMs?: boolean
    networkContext?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicationSetting"]>

  export type ApplicationSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataMode?: boolean
    demoScenario?: boolean
    liveSensorApiUrl?: boolean
    pollIntervalMs?: boolean
    networkContext?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicationSetting"]>

  export type ApplicationSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataMode?: boolean
    demoScenario?: boolean
    liveSensorApiUrl?: boolean
    pollIntervalMs?: boolean
    networkContext?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicationSetting"]>

  export type ApplicationSettingSelectScalar = {
    id?: boolean
    dataMode?: boolean
    demoScenario?: boolean
    liveSensorApiUrl?: boolean
    pollIntervalMs?: boolean
    networkContext?: boolean
    updatedAt?: boolean
  }

  export type ApplicationSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataMode" | "demoScenario" | "liveSensorApiUrl" | "pollIntervalMs" | "networkContext" | "updatedAt", ExtArgs["result"]["applicationSetting"]>

  export type $ApplicationSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataMode: string
      demoScenario: string
      liveSensorApiUrl: string
      pollIntervalMs: number
      networkContext: string
      updatedAt: Date
    }, ExtArgs["result"]["applicationSetting"]>
    composites: {}
  }

  type ApplicationSettingGetPayload<S extends boolean | null | undefined | ApplicationSettingDefaultArgs> = $Result.GetResult<Prisma.$ApplicationSettingPayload, S>

  type ApplicationSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationSettingCountAggregateInputType | true
    }

  export interface ApplicationSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationSetting'], meta: { name: 'ApplicationSetting' } }
    /**
     * Find zero or one ApplicationSetting that matches the filter.
     * @param {ApplicationSettingFindUniqueArgs} args - Arguments to find a ApplicationSetting
     * @example
     * // Get one ApplicationSetting
     * const applicationSetting = await prisma.applicationSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationSettingFindUniqueArgs>(args: SelectSubset<T, ApplicationSettingFindUniqueArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationSettingFindUniqueOrThrowArgs} args - Arguments to find a ApplicationSetting
     * @example
     * // Get one ApplicationSetting
     * const applicationSetting = await prisma.applicationSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSettingFindFirstArgs} args - Arguments to find a ApplicationSetting
     * @example
     * // Get one ApplicationSetting
     * const applicationSetting = await prisma.applicationSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationSettingFindFirstArgs>(args?: SelectSubset<T, ApplicationSettingFindFirstArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSettingFindFirstOrThrowArgs} args - Arguments to find a ApplicationSetting
     * @example
     * // Get one ApplicationSetting
     * const applicationSetting = await prisma.applicationSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationSettings
     * const applicationSettings = await prisma.applicationSetting.findMany()
     * 
     * // Get first 10 ApplicationSettings
     * const applicationSettings = await prisma.applicationSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationSettingWithIdOnly = await prisma.applicationSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationSettingFindManyArgs>(args?: SelectSubset<T, ApplicationSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationSetting.
     * @param {ApplicationSettingCreateArgs} args - Arguments to create a ApplicationSetting.
     * @example
     * // Create one ApplicationSetting
     * const ApplicationSetting = await prisma.applicationSetting.create({
     *   data: {
     *     // ... data to create a ApplicationSetting
     *   }
     * })
     * 
     */
    create<T extends ApplicationSettingCreateArgs>(args: SelectSubset<T, ApplicationSettingCreateArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationSettings.
     * @param {ApplicationSettingCreateManyArgs} args - Arguments to create many ApplicationSettings.
     * @example
     * // Create many ApplicationSettings
     * const applicationSetting = await prisma.applicationSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationSettingCreateManyArgs>(args?: SelectSubset<T, ApplicationSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationSettings and returns the data saved in the database.
     * @param {ApplicationSettingCreateManyAndReturnArgs} args - Arguments to create many ApplicationSettings.
     * @example
     * // Create many ApplicationSettings
     * const applicationSetting = await prisma.applicationSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationSettings and only return the `id`
     * const applicationSettingWithIdOnly = await prisma.applicationSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationSetting.
     * @param {ApplicationSettingDeleteArgs} args - Arguments to delete one ApplicationSetting.
     * @example
     * // Delete one ApplicationSetting
     * const ApplicationSetting = await prisma.applicationSetting.delete({
     *   where: {
     *     // ... filter to delete one ApplicationSetting
     *   }
     * })
     * 
     */
    delete<T extends ApplicationSettingDeleteArgs>(args: SelectSubset<T, ApplicationSettingDeleteArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationSetting.
     * @param {ApplicationSettingUpdateArgs} args - Arguments to update one ApplicationSetting.
     * @example
     * // Update one ApplicationSetting
     * const applicationSetting = await prisma.applicationSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationSettingUpdateArgs>(args: SelectSubset<T, ApplicationSettingUpdateArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationSettings.
     * @param {ApplicationSettingDeleteManyArgs} args - Arguments to filter ApplicationSettings to delete.
     * @example
     * // Delete a few ApplicationSettings
     * const { count } = await prisma.applicationSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationSettingDeleteManyArgs>(args?: SelectSubset<T, ApplicationSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationSettings
     * const applicationSetting = await prisma.applicationSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationSettingUpdateManyArgs>(args: SelectSubset<T, ApplicationSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationSettings and returns the data updated in the database.
     * @param {ApplicationSettingUpdateManyAndReturnArgs} args - Arguments to update many ApplicationSettings.
     * @example
     * // Update many ApplicationSettings
     * const applicationSetting = await prisma.applicationSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationSettings and only return the `id`
     * const applicationSettingWithIdOnly = await prisma.applicationSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationSetting.
     * @param {ApplicationSettingUpsertArgs} args - Arguments to update or create a ApplicationSetting.
     * @example
     * // Update or create a ApplicationSetting
     * const applicationSetting = await prisma.applicationSetting.upsert({
     *   create: {
     *     // ... data to create a ApplicationSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationSetting we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationSettingUpsertArgs>(args: SelectSubset<T, ApplicationSettingUpsertArgs<ExtArgs>>): Prisma__ApplicationSettingClient<$Result.GetResult<Prisma.$ApplicationSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSettingCountArgs} args - Arguments to filter ApplicationSettings to count.
     * @example
     * // Count the number of ApplicationSettings
     * const count = await prisma.applicationSetting.count({
     *   where: {
     *     // ... the filter for the ApplicationSettings we want to count
     *   }
     * })
    **/
    count<T extends ApplicationSettingCountArgs>(
      args?: Subset<T, ApplicationSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationSettingAggregateArgs>(args: Subset<T, ApplicationSettingAggregateArgs>): Prisma.PrismaPromise<GetApplicationSettingAggregateType<T>>

    /**
     * Group by ApplicationSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationSettingGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationSetting model
   */
  readonly fields: ApplicationSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationSetting model
   */
  interface ApplicationSettingFieldRefs {
    readonly id: FieldRef<"ApplicationSetting", 'String'>
    readonly dataMode: FieldRef<"ApplicationSetting", 'String'>
    readonly demoScenario: FieldRef<"ApplicationSetting", 'String'>
    readonly liveSensorApiUrl: FieldRef<"ApplicationSetting", 'String'>
    readonly pollIntervalMs: FieldRef<"ApplicationSetting", 'Int'>
    readonly networkContext: FieldRef<"ApplicationSetting", 'String'>
    readonly updatedAt: FieldRef<"ApplicationSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationSetting findUnique
   */
  export type ApplicationSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * Filter, which ApplicationSetting to fetch.
     */
    where: ApplicationSettingWhereUniqueInput
  }

  /**
   * ApplicationSetting findUniqueOrThrow
   */
  export type ApplicationSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * Filter, which ApplicationSetting to fetch.
     */
    where: ApplicationSettingWhereUniqueInput
  }

  /**
   * ApplicationSetting findFirst
   */
  export type ApplicationSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * Filter, which ApplicationSetting to fetch.
     */
    where?: ApplicationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSettings to fetch.
     */
    orderBy?: ApplicationSettingOrderByWithRelationInput | ApplicationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationSettings.
     */
    cursor?: ApplicationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationSettings.
     */
    distinct?: ApplicationSettingScalarFieldEnum | ApplicationSettingScalarFieldEnum[]
  }

  /**
   * ApplicationSetting findFirstOrThrow
   */
  export type ApplicationSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * Filter, which ApplicationSetting to fetch.
     */
    where?: ApplicationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSettings to fetch.
     */
    orderBy?: ApplicationSettingOrderByWithRelationInput | ApplicationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationSettings.
     */
    cursor?: ApplicationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationSettings.
     */
    distinct?: ApplicationSettingScalarFieldEnum | ApplicationSettingScalarFieldEnum[]
  }

  /**
   * ApplicationSetting findMany
   */
  export type ApplicationSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * Filter, which ApplicationSettings to fetch.
     */
    where?: ApplicationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSettings to fetch.
     */
    orderBy?: ApplicationSettingOrderByWithRelationInput | ApplicationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationSettings.
     */
    cursor?: ApplicationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSettings.
     */
    skip?: number
    distinct?: ApplicationSettingScalarFieldEnum | ApplicationSettingScalarFieldEnum[]
  }

  /**
   * ApplicationSetting create
   */
  export type ApplicationSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a ApplicationSetting.
     */
    data: XOR<ApplicationSettingCreateInput, ApplicationSettingUncheckedCreateInput>
  }

  /**
   * ApplicationSetting createMany
   */
  export type ApplicationSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationSettings.
     */
    data: ApplicationSettingCreateManyInput | ApplicationSettingCreateManyInput[]
  }

  /**
   * ApplicationSetting createManyAndReturn
   */
  export type ApplicationSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationSettings.
     */
    data: ApplicationSettingCreateManyInput | ApplicationSettingCreateManyInput[]
  }

  /**
   * ApplicationSetting update
   */
  export type ApplicationSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a ApplicationSetting.
     */
    data: XOR<ApplicationSettingUpdateInput, ApplicationSettingUncheckedUpdateInput>
    /**
     * Choose, which ApplicationSetting to update.
     */
    where: ApplicationSettingWhereUniqueInput
  }

  /**
   * ApplicationSetting updateMany
   */
  export type ApplicationSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationSettings.
     */
    data: XOR<ApplicationSettingUpdateManyMutationInput, ApplicationSettingUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationSettings to update
     */
    where?: ApplicationSettingWhereInput
    /**
     * Limit how many ApplicationSettings to update.
     */
    limit?: number
  }

  /**
   * ApplicationSetting updateManyAndReturn
   */
  export type ApplicationSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationSettings.
     */
    data: XOR<ApplicationSettingUpdateManyMutationInput, ApplicationSettingUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationSettings to update
     */
    where?: ApplicationSettingWhereInput
    /**
     * Limit how many ApplicationSettings to update.
     */
    limit?: number
  }

  /**
   * ApplicationSetting upsert
   */
  export type ApplicationSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the ApplicationSetting to update in case it exists.
     */
    where: ApplicationSettingWhereUniqueInput
    /**
     * In case the ApplicationSetting found by the `where` argument doesn't exist, create a new ApplicationSetting with this data.
     */
    create: XOR<ApplicationSettingCreateInput, ApplicationSettingUncheckedCreateInput>
    /**
     * In case the ApplicationSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationSettingUpdateInput, ApplicationSettingUncheckedUpdateInput>
  }

  /**
   * ApplicationSetting delete
   */
  export type ApplicationSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
    /**
     * Filter which ApplicationSetting to delete.
     */
    where: ApplicationSettingWhereUniqueInput
  }

  /**
   * ApplicationSetting deleteMany
   */
  export type ApplicationSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationSettings to delete
     */
    where?: ApplicationSettingWhereInput
    /**
     * Limit how many ApplicationSettings to delete.
     */
    limit?: number
  }

  /**
   * ApplicationSetting without action
   */
  export type ApplicationSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSetting
     */
    select?: ApplicationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSetting
     */
    omit?: ApplicationSettingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MunicipalUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    designation: 'designation',
    department: 'department',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MunicipalUserScalarFieldEnum = (typeof MunicipalUserScalarFieldEnum)[keyof typeof MunicipalUserScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    locality: 'locality',
    latitude: 'latitude',
    longitude: 'longitude',
    capacityMld: 'capacityMld',
    storageCapacityLiters: 'storageCapacityLiters',
    currentStorageLiters: 'currentStorageLiters',
    operationalStatus: 'operationalStatus',
    provenanceStatus: 'provenanceStatus',
    sourceReference: 'sourceReference',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const FacilityConnectionScalarFieldEnum: {
    id: 'id',
    fromFacilityId: 'fromFacilityId',
    toFacilityId: 'toFacilityId',
    pipelineLabel: 'pipelineLabel',
    diameterMm: 'diameterMm',
    verificationStatus: 'verificationStatus',
    sourceReference: 'sourceReference',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type FacilityConnectionScalarFieldEnum = (typeof FacilityConnectionScalarFieldEnum)[keyof typeof FacilityConnectionScalarFieldEnum]


  export const SensorScalarFieldEnum: {
    id: 'id',
    sensorCode: 'sensorCode',
    name: 'name',
    kind: 'kind',
    unit: 'unit',
    status: 'status',
    isSimulated: 'isSimulated',
    facilityId: 'facilityId',
    lastReadingAt: 'lastReadingAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SensorScalarFieldEnum = (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum]


  export const SensorReadingScalarFieldEnum: {
    id: 'id',
    facilityId: 'facilityId',
    inletFlow: 'inletFlow',
    outletFlow: 'outletFlow',
    flowDifference: 'flowDifference',
    pressureBar: 'pressureBar',
    dataSource: 'dataSource',
    isValid: 'isValid',
    recordedAt: 'recordedAt'
  };

  export type SensorReadingScalarFieldEnum = (typeof SensorReadingScalarFieldEnum)[keyof typeof SensorReadingScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    alertCode: 'alertCode',
    category: 'category',
    severity: 'severity',
    status: 'status',
    title: 'title',
    description: 'description',
    facilityId: 'facilityId',
    inletSnapshot: 'inletSnapshot',
    outletSnapshot: 'outletSnapshot',
    differenceSnapshot: 'differenceSnapshot',
    pressureSnapshot: 'pressureSnapshot',
    dataSource: 'dataSource',
    detectedAt: 'detectedAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const AlertNoteScalarFieldEnum: {
    id: 'id',
    alertId: 'alertId',
    authorName: 'authorName',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type AlertNoteScalarFieldEnum = (typeof AlertNoteScalarFieldEnum)[keyof typeof AlertNoteScalarFieldEnum]


  export const MonitoringThresholdScalarFieldEnum: {
    id: 'id',
    pressureMinBar: 'pressureMinBar',
    pressureMaxBar: 'pressureMaxBar',
    pressureCriticalMaxBar: 'pressureCriticalMaxBar',
    flowDiffThresholdLpm: 'flowDiffThresholdLpm',
    flowAnomalyPersistenceSec: 'flowAnomalyPersistenceSec',
    staleTimeoutSec: 'staleTimeoutSec',
    isIllustrative: 'isIllustrative',
    updatedAt: 'updatedAt'
  };

  export type MonitoringThresholdScalarFieldEnum = (typeof MonitoringThresholdScalarFieldEnum)[keyof typeof MonitoringThresholdScalarFieldEnum]


  export const ApplicationSettingScalarFieldEnum: {
    id: 'id',
    dataMode: 'dataMode',
    demoScenario: 'demoScenario',
    liveSensorApiUrl: 'liveSensorApiUrl',
    pollIntervalMs: 'pollIntervalMs',
    networkContext: 'networkContext',
    updatedAt: 'updatedAt'
  };

  export type ApplicationSettingScalarFieldEnum = (typeof ApplicationSettingScalarFieldEnum)[keyof typeof ApplicationSettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type MunicipalUserWhereInput = {
    AND?: MunicipalUserWhereInput | MunicipalUserWhereInput[]
    OR?: MunicipalUserWhereInput[]
    NOT?: MunicipalUserWhereInput | MunicipalUserWhereInput[]
    id?: StringFilter<"MunicipalUser"> | string
    email?: StringFilter<"MunicipalUser"> | string
    username?: StringFilter<"MunicipalUser"> | string
    passwordHash?: StringFilter<"MunicipalUser"> | string
    fullName?: StringFilter<"MunicipalUser"> | string
    designation?: StringFilter<"MunicipalUser"> | string
    department?: StringFilter<"MunicipalUser"> | string
    isActive?: BoolFilter<"MunicipalUser"> | boolean
    createdAt?: DateTimeFilter<"MunicipalUser"> | Date | string
    updatedAt?: DateTimeFilter<"MunicipalUser"> | Date | string
  }

  export type MunicipalUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: MunicipalUserWhereInput | MunicipalUserWhereInput[]
    OR?: MunicipalUserWhereInput[]
    NOT?: MunicipalUserWhereInput | MunicipalUserWhereInput[]
    passwordHash?: StringFilter<"MunicipalUser"> | string
    fullName?: StringFilter<"MunicipalUser"> | string
    designation?: StringFilter<"MunicipalUser"> | string
    department?: StringFilter<"MunicipalUser"> | string
    isActive?: BoolFilter<"MunicipalUser"> | boolean
    createdAt?: DateTimeFilter<"MunicipalUser"> | Date | string
    updatedAt?: DateTimeFilter<"MunicipalUser"> | Date | string
  }, "id" | "email" | "username">

  export type MunicipalUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MunicipalUserCountOrderByAggregateInput
    _max?: MunicipalUserMaxOrderByAggregateInput
    _min?: MunicipalUserMinOrderByAggregateInput
  }

  export type MunicipalUserScalarWhereWithAggregatesInput = {
    AND?: MunicipalUserScalarWhereWithAggregatesInput | MunicipalUserScalarWhereWithAggregatesInput[]
    OR?: MunicipalUserScalarWhereWithAggregatesInput[]
    NOT?: MunicipalUserScalarWhereWithAggregatesInput | MunicipalUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MunicipalUser"> | string
    email?: StringWithAggregatesFilter<"MunicipalUser"> | string
    username?: StringWithAggregatesFilter<"MunicipalUser"> | string
    passwordHash?: StringWithAggregatesFilter<"MunicipalUser"> | string
    fullName?: StringWithAggregatesFilter<"MunicipalUser"> | string
    designation?: StringWithAggregatesFilter<"MunicipalUser"> | string
    department?: StringWithAggregatesFilter<"MunicipalUser"> | string
    isActive?: BoolWithAggregatesFilter<"MunicipalUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MunicipalUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MunicipalUser"> | Date | string
  }

  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: StringFilter<"Facility"> | string
    code?: StringFilter<"Facility"> | string
    name?: StringFilter<"Facility"> | string
    type?: StringFilter<"Facility"> | string
    locality?: StringFilter<"Facility"> | string
    latitude?: FloatFilter<"Facility"> | number
    longitude?: FloatFilter<"Facility"> | number
    capacityMld?: FloatNullableFilter<"Facility"> | number | null
    storageCapacityLiters?: FloatNullableFilter<"Facility"> | number | null
    currentStorageLiters?: FloatNullableFilter<"Facility"> | number | null
    operationalStatus?: StringFilter<"Facility"> | string
    provenanceStatus?: StringFilter<"Facility"> | string
    sourceReference?: StringFilter<"Facility"> | string
    description?: StringFilter<"Facility"> | string
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    updatedAt?: DateTimeFilter<"Facility"> | Date | string
    sensors?: SensorListRelationFilter
    readings?: SensorReadingListRelationFilter
    alerts?: AlertListRelationFilter
    outgoingConnections?: FacilityConnectionListRelationFilter
    incomingConnections?: FacilityConnectionListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    locality?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacityMld?: SortOrderInput | SortOrder
    storageCapacityLiters?: SortOrderInput | SortOrder
    currentStorageLiters?: SortOrderInput | SortOrder
    operationalStatus?: SortOrder
    provenanceStatus?: SortOrder
    sourceReference?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sensors?: SensorOrderByRelationAggregateInput
    readings?: SensorReadingOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    outgoingConnections?: FacilityConnectionOrderByRelationAggregateInput
    incomingConnections?: FacilityConnectionOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    name?: StringFilter<"Facility"> | string
    type?: StringFilter<"Facility"> | string
    locality?: StringFilter<"Facility"> | string
    latitude?: FloatFilter<"Facility"> | number
    longitude?: FloatFilter<"Facility"> | number
    capacityMld?: FloatNullableFilter<"Facility"> | number | null
    storageCapacityLiters?: FloatNullableFilter<"Facility"> | number | null
    currentStorageLiters?: FloatNullableFilter<"Facility"> | number | null
    operationalStatus?: StringFilter<"Facility"> | string
    provenanceStatus?: StringFilter<"Facility"> | string
    sourceReference?: StringFilter<"Facility"> | string
    description?: StringFilter<"Facility"> | string
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    updatedAt?: DateTimeFilter<"Facility"> | Date | string
    sensors?: SensorListRelationFilter
    readings?: SensorReadingListRelationFilter
    alerts?: AlertListRelationFilter
    outgoingConnections?: FacilityConnectionListRelationFilter
    incomingConnections?: FacilityConnectionListRelationFilter
  }, "id" | "code">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    locality?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacityMld?: SortOrderInput | SortOrder
    storageCapacityLiters?: SortOrderInput | SortOrder
    currentStorageLiters?: SortOrderInput | SortOrder
    operationalStatus?: SortOrder
    provenanceStatus?: SortOrder
    sourceReference?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Facility"> | string
    code?: StringWithAggregatesFilter<"Facility"> | string
    name?: StringWithAggregatesFilter<"Facility"> | string
    type?: StringWithAggregatesFilter<"Facility"> | string
    locality?: StringWithAggregatesFilter<"Facility"> | string
    latitude?: FloatWithAggregatesFilter<"Facility"> | number
    longitude?: FloatWithAggregatesFilter<"Facility"> | number
    capacityMld?: FloatNullableWithAggregatesFilter<"Facility"> | number | null
    storageCapacityLiters?: FloatNullableWithAggregatesFilter<"Facility"> | number | null
    currentStorageLiters?: FloatNullableWithAggregatesFilter<"Facility"> | number | null
    operationalStatus?: StringWithAggregatesFilter<"Facility"> | string
    provenanceStatus?: StringWithAggregatesFilter<"Facility"> | string
    sourceReference?: StringWithAggregatesFilter<"Facility"> | string
    description?: StringWithAggregatesFilter<"Facility"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Facility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Facility"> | Date | string
  }

  export type FacilityConnectionWhereInput = {
    AND?: FacilityConnectionWhereInput | FacilityConnectionWhereInput[]
    OR?: FacilityConnectionWhereInput[]
    NOT?: FacilityConnectionWhereInput | FacilityConnectionWhereInput[]
    id?: StringFilter<"FacilityConnection"> | string
    fromFacilityId?: StringFilter<"FacilityConnection"> | string
    toFacilityId?: StringFilter<"FacilityConnection"> | string
    pipelineLabel?: StringFilter<"FacilityConnection"> | string
    diameterMm?: IntNullableFilter<"FacilityConnection"> | number | null
    verificationStatus?: StringFilter<"FacilityConnection"> | string
    sourceReference?: StringFilter<"FacilityConnection"> | string
    notes?: StringNullableFilter<"FacilityConnection"> | string | null
    createdAt?: DateTimeFilter<"FacilityConnection"> | Date | string
    fromFacility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
    toFacility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type FacilityConnectionOrderByWithRelationInput = {
    id?: SortOrder
    fromFacilityId?: SortOrder
    toFacilityId?: SortOrder
    pipelineLabel?: SortOrder
    diameterMm?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    sourceReference?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    fromFacility?: FacilityOrderByWithRelationInput
    toFacility?: FacilityOrderByWithRelationInput
  }

  export type FacilityConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacilityConnectionWhereInput | FacilityConnectionWhereInput[]
    OR?: FacilityConnectionWhereInput[]
    NOT?: FacilityConnectionWhereInput | FacilityConnectionWhereInput[]
    fromFacilityId?: StringFilter<"FacilityConnection"> | string
    toFacilityId?: StringFilter<"FacilityConnection"> | string
    pipelineLabel?: StringFilter<"FacilityConnection"> | string
    diameterMm?: IntNullableFilter<"FacilityConnection"> | number | null
    verificationStatus?: StringFilter<"FacilityConnection"> | string
    sourceReference?: StringFilter<"FacilityConnection"> | string
    notes?: StringNullableFilter<"FacilityConnection"> | string | null
    createdAt?: DateTimeFilter<"FacilityConnection"> | Date | string
    fromFacility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
    toFacility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id">

  export type FacilityConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    fromFacilityId?: SortOrder
    toFacilityId?: SortOrder
    pipelineLabel?: SortOrder
    diameterMm?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    sourceReference?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FacilityConnectionCountOrderByAggregateInput
    _avg?: FacilityConnectionAvgOrderByAggregateInput
    _max?: FacilityConnectionMaxOrderByAggregateInput
    _min?: FacilityConnectionMinOrderByAggregateInput
    _sum?: FacilityConnectionSumOrderByAggregateInput
  }

  export type FacilityConnectionScalarWhereWithAggregatesInput = {
    AND?: FacilityConnectionScalarWhereWithAggregatesInput | FacilityConnectionScalarWhereWithAggregatesInput[]
    OR?: FacilityConnectionScalarWhereWithAggregatesInput[]
    NOT?: FacilityConnectionScalarWhereWithAggregatesInput | FacilityConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacilityConnection"> | string
    fromFacilityId?: StringWithAggregatesFilter<"FacilityConnection"> | string
    toFacilityId?: StringWithAggregatesFilter<"FacilityConnection"> | string
    pipelineLabel?: StringWithAggregatesFilter<"FacilityConnection"> | string
    diameterMm?: IntNullableWithAggregatesFilter<"FacilityConnection"> | number | null
    verificationStatus?: StringWithAggregatesFilter<"FacilityConnection"> | string
    sourceReference?: StringWithAggregatesFilter<"FacilityConnection"> | string
    notes?: StringNullableWithAggregatesFilter<"FacilityConnection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FacilityConnection"> | Date | string
  }

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    id?: StringFilter<"Sensor"> | string
    sensorCode?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    kind?: StringFilter<"Sensor"> | string
    unit?: StringFilter<"Sensor"> | string
    status?: StringFilter<"Sensor"> | string
    isSimulated?: BoolFilter<"Sensor"> | boolean
    facilityId?: StringFilter<"Sensor"> | string
    lastReadingAt?: DateTimeNullableFilter<"Sensor"> | Date | string | null
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    isSimulated?: SortOrder
    facilityId?: SortOrder
    lastReadingAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facility?: FacilityOrderByWithRelationInput
  }

  export type SensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sensorCode?: string
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    name?: StringFilter<"Sensor"> | string
    kind?: StringFilter<"Sensor"> | string
    unit?: StringFilter<"Sensor"> | string
    status?: StringFilter<"Sensor"> | string
    isSimulated?: BoolFilter<"Sensor"> | boolean
    facilityId?: StringFilter<"Sensor"> | string
    lastReadingAt?: DateTimeNullableFilter<"Sensor"> | Date | string | null
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id" | "sensorCode">

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    isSimulated?: SortOrder
    facilityId?: SortOrder
    lastReadingAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SensorCountOrderByAggregateInput
    _max?: SensorMaxOrderByAggregateInput
    _min?: SensorMinOrderByAggregateInput
  }

  export type SensorScalarWhereWithAggregatesInput = {
    AND?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    OR?: SensorScalarWhereWithAggregatesInput[]
    NOT?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sensor"> | string
    sensorCode?: StringWithAggregatesFilter<"Sensor"> | string
    name?: StringWithAggregatesFilter<"Sensor"> | string
    kind?: StringWithAggregatesFilter<"Sensor"> | string
    unit?: StringWithAggregatesFilter<"Sensor"> | string
    status?: StringWithAggregatesFilter<"Sensor"> | string
    isSimulated?: BoolWithAggregatesFilter<"Sensor"> | boolean
    facilityId?: StringWithAggregatesFilter<"Sensor"> | string
    lastReadingAt?: DateTimeNullableWithAggregatesFilter<"Sensor"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
  }

  export type SensorReadingWhereInput = {
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    id?: StringFilter<"SensorReading"> | string
    facilityId?: StringFilter<"SensorReading"> | string
    inletFlow?: FloatFilter<"SensorReading"> | number
    outletFlow?: FloatFilter<"SensorReading"> | number
    flowDifference?: FloatFilter<"SensorReading"> | number
    pressureBar?: FloatFilter<"SensorReading"> | number
    dataSource?: StringFilter<"SensorReading"> | string
    isValid?: BoolFilter<"SensorReading"> | boolean
    recordedAt?: DateTimeFilter<"SensorReading"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type SensorReadingOrderByWithRelationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    inletFlow?: SortOrder
    outletFlow?: SortOrder
    flowDifference?: SortOrder
    pressureBar?: SortOrder
    dataSource?: SortOrder
    isValid?: SortOrder
    recordedAt?: SortOrder
    facility?: FacilityOrderByWithRelationInput
  }

  export type SensorReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    facilityId?: StringFilter<"SensorReading"> | string
    inletFlow?: FloatFilter<"SensorReading"> | number
    outletFlow?: FloatFilter<"SensorReading"> | number
    flowDifference?: FloatFilter<"SensorReading"> | number
    pressureBar?: FloatFilter<"SensorReading"> | number
    dataSource?: StringFilter<"SensorReading"> | string
    isValid?: BoolFilter<"SensorReading"> | boolean
    recordedAt?: DateTimeFilter<"SensorReading"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id">

  export type SensorReadingOrderByWithAggregationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    inletFlow?: SortOrder
    outletFlow?: SortOrder
    flowDifference?: SortOrder
    pressureBar?: SortOrder
    dataSource?: SortOrder
    isValid?: SortOrder
    recordedAt?: SortOrder
    _count?: SensorReadingCountOrderByAggregateInput
    _avg?: SensorReadingAvgOrderByAggregateInput
    _max?: SensorReadingMaxOrderByAggregateInput
    _min?: SensorReadingMinOrderByAggregateInput
    _sum?: SensorReadingSumOrderByAggregateInput
  }

  export type SensorReadingScalarWhereWithAggregatesInput = {
    AND?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    OR?: SensorReadingScalarWhereWithAggregatesInput[]
    NOT?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SensorReading"> | string
    facilityId?: StringWithAggregatesFilter<"SensorReading"> | string
    inletFlow?: FloatWithAggregatesFilter<"SensorReading"> | number
    outletFlow?: FloatWithAggregatesFilter<"SensorReading"> | number
    flowDifference?: FloatWithAggregatesFilter<"SensorReading"> | number
    pressureBar?: FloatWithAggregatesFilter<"SensorReading"> | number
    dataSource?: StringWithAggregatesFilter<"SensorReading"> | string
    isValid?: BoolWithAggregatesFilter<"SensorReading"> | boolean
    recordedAt?: DateTimeWithAggregatesFilter<"SensorReading"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    alertCode?: StringFilter<"Alert"> | string
    category?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    facilityId?: StringNullableFilter<"Alert"> | string | null
    inletSnapshot?: FloatNullableFilter<"Alert"> | number | null
    outletSnapshot?: FloatNullableFilter<"Alert"> | number | null
    differenceSnapshot?: FloatNullableFilter<"Alert"> | number | null
    pressureSnapshot?: FloatNullableFilter<"Alert"> | number | null
    dataSource?: StringFilter<"Alert"> | string
    detectedAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    facility?: XOR<FacilityNullableScalarRelationFilter, FacilityWhereInput> | null
    notes?: AlertNoteListRelationFilter
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    alertCode?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facilityId?: SortOrderInput | SortOrder
    inletSnapshot?: SortOrderInput | SortOrder
    outletSnapshot?: SortOrderInput | SortOrder
    differenceSnapshot?: SortOrderInput | SortOrder
    pressureSnapshot?: SortOrderInput | SortOrder
    dataSource?: SortOrder
    detectedAt?: SortOrder
    updatedAt?: SortOrder
    facility?: FacilityOrderByWithRelationInput
    notes?: AlertNoteOrderByRelationAggregateInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alertCode?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    category?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    facilityId?: StringNullableFilter<"Alert"> | string | null
    inletSnapshot?: FloatNullableFilter<"Alert"> | number | null
    outletSnapshot?: FloatNullableFilter<"Alert"> | number | null
    differenceSnapshot?: FloatNullableFilter<"Alert"> | number | null
    pressureSnapshot?: FloatNullableFilter<"Alert"> | number | null
    dataSource?: StringFilter<"Alert"> | string
    detectedAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    facility?: XOR<FacilityNullableScalarRelationFilter, FacilityWhereInput> | null
    notes?: AlertNoteListRelationFilter
  }, "id" | "alertCode">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    alertCode?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facilityId?: SortOrderInput | SortOrder
    inletSnapshot?: SortOrderInput | SortOrder
    outletSnapshot?: SortOrderInput | SortOrder
    differenceSnapshot?: SortOrderInput | SortOrder
    pressureSnapshot?: SortOrderInput | SortOrder
    dataSource?: SortOrder
    detectedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    alertCode?: StringWithAggregatesFilter<"Alert"> | string
    category?: StringWithAggregatesFilter<"Alert"> | string
    severity?: StringWithAggregatesFilter<"Alert"> | string
    status?: StringWithAggregatesFilter<"Alert"> | string
    title?: StringWithAggregatesFilter<"Alert"> | string
    description?: StringWithAggregatesFilter<"Alert"> | string
    facilityId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    inletSnapshot?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    outletSnapshot?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    differenceSnapshot?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    pressureSnapshot?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    dataSource?: StringWithAggregatesFilter<"Alert"> | string
    detectedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type AlertNoteWhereInput = {
    AND?: AlertNoteWhereInput | AlertNoteWhereInput[]
    OR?: AlertNoteWhereInput[]
    NOT?: AlertNoteWhereInput | AlertNoteWhereInput[]
    id?: StringFilter<"AlertNote"> | string
    alertId?: StringFilter<"AlertNote"> | string
    authorName?: StringFilter<"AlertNote"> | string
    note?: StringFilter<"AlertNote"> | string
    createdAt?: DateTimeFilter<"AlertNote"> | Date | string
    alert?: XOR<AlertScalarRelationFilter, AlertWhereInput>
  }

  export type AlertNoteOrderByWithRelationInput = {
    id?: SortOrder
    alertId?: SortOrder
    authorName?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    alert?: AlertOrderByWithRelationInput
  }

  export type AlertNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertNoteWhereInput | AlertNoteWhereInput[]
    OR?: AlertNoteWhereInput[]
    NOT?: AlertNoteWhereInput | AlertNoteWhereInput[]
    alertId?: StringFilter<"AlertNote"> | string
    authorName?: StringFilter<"AlertNote"> | string
    note?: StringFilter<"AlertNote"> | string
    createdAt?: DateTimeFilter<"AlertNote"> | Date | string
    alert?: XOR<AlertScalarRelationFilter, AlertWhereInput>
  }, "id">

  export type AlertNoteOrderByWithAggregationInput = {
    id?: SortOrder
    alertId?: SortOrder
    authorName?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    _count?: AlertNoteCountOrderByAggregateInput
    _max?: AlertNoteMaxOrderByAggregateInput
    _min?: AlertNoteMinOrderByAggregateInput
  }

  export type AlertNoteScalarWhereWithAggregatesInput = {
    AND?: AlertNoteScalarWhereWithAggregatesInput | AlertNoteScalarWhereWithAggregatesInput[]
    OR?: AlertNoteScalarWhereWithAggregatesInput[]
    NOT?: AlertNoteScalarWhereWithAggregatesInput | AlertNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertNote"> | string
    alertId?: StringWithAggregatesFilter<"AlertNote"> | string
    authorName?: StringWithAggregatesFilter<"AlertNote"> | string
    note?: StringWithAggregatesFilter<"AlertNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AlertNote"> | Date | string
  }

  export type MonitoringThresholdWhereInput = {
    AND?: MonitoringThresholdWhereInput | MonitoringThresholdWhereInput[]
    OR?: MonitoringThresholdWhereInput[]
    NOT?: MonitoringThresholdWhereInput | MonitoringThresholdWhereInput[]
    id?: StringFilter<"MonitoringThreshold"> | string
    pressureMinBar?: FloatFilter<"MonitoringThreshold"> | number
    pressureMaxBar?: FloatFilter<"MonitoringThreshold"> | number
    pressureCriticalMaxBar?: FloatFilter<"MonitoringThreshold"> | number
    flowDiffThresholdLpm?: FloatFilter<"MonitoringThreshold"> | number
    flowAnomalyPersistenceSec?: IntFilter<"MonitoringThreshold"> | number
    staleTimeoutSec?: IntFilter<"MonitoringThreshold"> | number
    isIllustrative?: BoolFilter<"MonitoringThreshold"> | boolean
    updatedAt?: DateTimeFilter<"MonitoringThreshold"> | Date | string
  }

  export type MonitoringThresholdOrderByWithRelationInput = {
    id?: SortOrder
    pressureMinBar?: SortOrder
    pressureMaxBar?: SortOrder
    pressureCriticalMaxBar?: SortOrder
    flowDiffThresholdLpm?: SortOrder
    flowAnomalyPersistenceSec?: SortOrder
    staleTimeoutSec?: SortOrder
    isIllustrative?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringThresholdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonitoringThresholdWhereInput | MonitoringThresholdWhereInput[]
    OR?: MonitoringThresholdWhereInput[]
    NOT?: MonitoringThresholdWhereInput | MonitoringThresholdWhereInput[]
    pressureMinBar?: FloatFilter<"MonitoringThreshold"> | number
    pressureMaxBar?: FloatFilter<"MonitoringThreshold"> | number
    pressureCriticalMaxBar?: FloatFilter<"MonitoringThreshold"> | number
    flowDiffThresholdLpm?: FloatFilter<"MonitoringThreshold"> | number
    flowAnomalyPersistenceSec?: IntFilter<"MonitoringThreshold"> | number
    staleTimeoutSec?: IntFilter<"MonitoringThreshold"> | number
    isIllustrative?: BoolFilter<"MonitoringThreshold"> | boolean
    updatedAt?: DateTimeFilter<"MonitoringThreshold"> | Date | string
  }, "id">

  export type MonitoringThresholdOrderByWithAggregationInput = {
    id?: SortOrder
    pressureMinBar?: SortOrder
    pressureMaxBar?: SortOrder
    pressureCriticalMaxBar?: SortOrder
    flowDiffThresholdLpm?: SortOrder
    flowAnomalyPersistenceSec?: SortOrder
    staleTimeoutSec?: SortOrder
    isIllustrative?: SortOrder
    updatedAt?: SortOrder
    _count?: MonitoringThresholdCountOrderByAggregateInput
    _avg?: MonitoringThresholdAvgOrderByAggregateInput
    _max?: MonitoringThresholdMaxOrderByAggregateInput
    _min?: MonitoringThresholdMinOrderByAggregateInput
    _sum?: MonitoringThresholdSumOrderByAggregateInput
  }

  export type MonitoringThresholdScalarWhereWithAggregatesInput = {
    AND?: MonitoringThresholdScalarWhereWithAggregatesInput | MonitoringThresholdScalarWhereWithAggregatesInput[]
    OR?: MonitoringThresholdScalarWhereWithAggregatesInput[]
    NOT?: MonitoringThresholdScalarWhereWithAggregatesInput | MonitoringThresholdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonitoringThreshold"> | string
    pressureMinBar?: FloatWithAggregatesFilter<"MonitoringThreshold"> | number
    pressureMaxBar?: FloatWithAggregatesFilter<"MonitoringThreshold"> | number
    pressureCriticalMaxBar?: FloatWithAggregatesFilter<"MonitoringThreshold"> | number
    flowDiffThresholdLpm?: FloatWithAggregatesFilter<"MonitoringThreshold"> | number
    flowAnomalyPersistenceSec?: IntWithAggregatesFilter<"MonitoringThreshold"> | number
    staleTimeoutSec?: IntWithAggregatesFilter<"MonitoringThreshold"> | number
    isIllustrative?: BoolWithAggregatesFilter<"MonitoringThreshold"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"MonitoringThreshold"> | Date | string
  }

  export type ApplicationSettingWhereInput = {
    AND?: ApplicationSettingWhereInput | ApplicationSettingWhereInput[]
    OR?: ApplicationSettingWhereInput[]
    NOT?: ApplicationSettingWhereInput | ApplicationSettingWhereInput[]
    id?: StringFilter<"ApplicationSetting"> | string
    dataMode?: StringFilter<"ApplicationSetting"> | string
    demoScenario?: StringFilter<"ApplicationSetting"> | string
    liveSensorApiUrl?: StringFilter<"ApplicationSetting"> | string
    pollIntervalMs?: IntFilter<"ApplicationSetting"> | number
    networkContext?: StringFilter<"ApplicationSetting"> | string
    updatedAt?: DateTimeFilter<"ApplicationSetting"> | Date | string
  }

  export type ApplicationSettingOrderByWithRelationInput = {
    id?: SortOrder
    dataMode?: SortOrder
    demoScenario?: SortOrder
    liveSensorApiUrl?: SortOrder
    pollIntervalMs?: SortOrder
    networkContext?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationSettingWhereInput | ApplicationSettingWhereInput[]
    OR?: ApplicationSettingWhereInput[]
    NOT?: ApplicationSettingWhereInput | ApplicationSettingWhereInput[]
    dataMode?: StringFilter<"ApplicationSetting"> | string
    demoScenario?: StringFilter<"ApplicationSetting"> | string
    liveSensorApiUrl?: StringFilter<"ApplicationSetting"> | string
    pollIntervalMs?: IntFilter<"ApplicationSetting"> | number
    networkContext?: StringFilter<"ApplicationSetting"> | string
    updatedAt?: DateTimeFilter<"ApplicationSetting"> | Date | string
  }, "id">

  export type ApplicationSettingOrderByWithAggregationInput = {
    id?: SortOrder
    dataMode?: SortOrder
    demoScenario?: SortOrder
    liveSensorApiUrl?: SortOrder
    pollIntervalMs?: SortOrder
    networkContext?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationSettingCountOrderByAggregateInput
    _avg?: ApplicationSettingAvgOrderByAggregateInput
    _max?: ApplicationSettingMaxOrderByAggregateInput
    _min?: ApplicationSettingMinOrderByAggregateInput
    _sum?: ApplicationSettingSumOrderByAggregateInput
  }

  export type ApplicationSettingScalarWhereWithAggregatesInput = {
    AND?: ApplicationSettingScalarWhereWithAggregatesInput | ApplicationSettingScalarWhereWithAggregatesInput[]
    OR?: ApplicationSettingScalarWhereWithAggregatesInput[]
    NOT?: ApplicationSettingScalarWhereWithAggregatesInput | ApplicationSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationSetting"> | string
    dataMode?: StringWithAggregatesFilter<"ApplicationSetting"> | string
    demoScenario?: StringWithAggregatesFilter<"ApplicationSetting"> | string
    liveSensorApiUrl?: StringWithAggregatesFilter<"ApplicationSetting"> | string
    pollIntervalMs?: IntWithAggregatesFilter<"ApplicationSetting"> | number
    networkContext?: StringWithAggregatesFilter<"ApplicationSetting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApplicationSetting"> | Date | string
  }

  export type MunicipalUserCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    fullName: string
    designation?: string
    department?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalUserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    fullName: string
    designation?: string
    department?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalUserCreateManyInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    fullName: string
    designation?: string
    department?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityCreateInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingCreateNestedManyWithoutFacilityInput
    alerts?: AlertCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingUncheckedCreateNestedManyWithoutFacilityInput
    alerts?: AlertUncheckedCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUncheckedUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUncheckedUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUncheckedUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityConnectionCreateInput = {
    id?: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
    fromFacility: FacilityCreateNestedOneWithoutOutgoingConnectionsInput
    toFacility: FacilityCreateNestedOneWithoutIncomingConnectionsInput
  }

  export type FacilityConnectionUncheckedCreateInput = {
    id?: string
    fromFacilityId: string
    toFacilityId: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type FacilityConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFacility?: FacilityUpdateOneRequiredWithoutOutgoingConnectionsNestedInput
    toFacility?: FacilityUpdateOneRequiredWithoutIncomingConnectionsNestedInput
  }

  export type FacilityConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromFacilityId?: StringFieldUpdateOperationsInput | string
    toFacilityId?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityConnectionCreateManyInput = {
    id?: string
    fromFacilityId: string
    toFacilityId: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type FacilityConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromFacilityId?: StringFieldUpdateOperationsInput | string
    toFacilityId?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorCreateInput = {
    id?: string
    sensorCode: string
    name: string
    kind: string
    unit: string
    status?: string
    isSimulated?: boolean
    lastReadingAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility: FacilityCreateNestedOneWithoutSensorsInput
  }

  export type SensorUncheckedCreateInput = {
    id?: string
    sensorCode: string
    name: string
    kind: string
    unit: string
    status?: string
    isSimulated?: boolean
    facilityId: string
    lastReadingAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isSimulated?: BoolFieldUpdateOperationsInput | boolean
    lastReadingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutSensorsNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isSimulated?: BoolFieldUpdateOperationsInput | boolean
    facilityId?: StringFieldUpdateOperationsInput | string
    lastReadingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorCreateManyInput = {
    id?: string
    sensorCode: string
    name: string
    kind: string
    unit: string
    status?: string
    isSimulated?: boolean
    facilityId: string
    lastReadingAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isSimulated?: BoolFieldUpdateOperationsInput | boolean
    lastReadingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isSimulated?: BoolFieldUpdateOperationsInput | boolean
    facilityId?: StringFieldUpdateOperationsInput | string
    lastReadingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingCreateInput = {
    id?: string
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: string
    isValid?: boolean
    recordedAt?: Date | string
    facility: FacilityCreateNestedOneWithoutReadingsInput
  }

  export type SensorReadingUncheckedCreateInput = {
    id?: string
    facilityId: string
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: string
    isValid?: boolean
    recordedAt?: Date | string
  }

  export type SensorReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inletFlow?: FloatFieldUpdateOperationsInput | number
    outletFlow?: FloatFieldUpdateOperationsInput | number
    flowDifference?: FloatFieldUpdateOperationsInput | number
    pressureBar?: FloatFieldUpdateOperationsInput | number
    dataSource?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type SensorReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    inletFlow?: FloatFieldUpdateOperationsInput | number
    outletFlow?: FloatFieldUpdateOperationsInput | number
    flowDifference?: FloatFieldUpdateOperationsInput | number
    pressureBar?: FloatFieldUpdateOperationsInput | number
    dataSource?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingCreateManyInput = {
    id?: string
    facilityId: string
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: string
    isValid?: boolean
    recordedAt?: Date | string
  }

  export type SensorReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inletFlow?: FloatFieldUpdateOperationsInput | number
    outletFlow?: FloatFieldUpdateOperationsInput | number
    flowDifference?: FloatFieldUpdateOperationsInput | number
    pressureBar?: FloatFieldUpdateOperationsInput | number
    dataSource?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    inletFlow?: FloatFieldUpdateOperationsInput | number
    outletFlow?: FloatFieldUpdateOperationsInput | number
    flowDifference?: FloatFieldUpdateOperationsInput | number
    pressureBar?: FloatFieldUpdateOperationsInput | number
    dataSource?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
    facility?: FacilityCreateNestedOneWithoutAlertsInput
    notes?: AlertNoteCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    facilityId?: string | null
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
    notes?: AlertNoteUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneWithoutAlertsNestedInput
    notes?: AlertNoteUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    facilityId?: NullableStringFieldUpdateOperationsInput | string | null
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: AlertNoteUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertCreateManyInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    facilityId?: string | null
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    facilityId?: NullableStringFieldUpdateOperationsInput | string | null
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertNoteCreateInput = {
    id?: string
    authorName: string
    note: string
    createdAt?: Date | string
    alert: AlertCreateNestedOneWithoutNotesInput
  }

  export type AlertNoteUncheckedCreateInput = {
    id?: string
    alertId: string
    authorName: string
    note: string
    createdAt?: Date | string
  }

  export type AlertNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alert?: AlertUpdateOneRequiredWithoutNotesNestedInput
  }

  export type AlertNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertNoteCreateManyInput = {
    id?: string
    alertId: string
    authorName: string
    note: string
    createdAt?: Date | string
  }

  export type AlertNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringThresholdCreateInput = {
    id?: string
    pressureMinBar?: number
    pressureMaxBar?: number
    pressureCriticalMaxBar?: number
    flowDiffThresholdLpm?: number
    flowAnomalyPersistenceSec?: number
    staleTimeoutSec?: number
    isIllustrative?: boolean
    updatedAt?: Date | string
  }

  export type MonitoringThresholdUncheckedCreateInput = {
    id?: string
    pressureMinBar?: number
    pressureMaxBar?: number
    pressureCriticalMaxBar?: number
    flowDiffThresholdLpm?: number
    flowAnomalyPersistenceSec?: number
    staleTimeoutSec?: number
    isIllustrative?: boolean
    updatedAt?: Date | string
  }

  export type MonitoringThresholdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pressureMinBar?: FloatFieldUpdateOperationsInput | number
    pressureMaxBar?: FloatFieldUpdateOperationsInput | number
    pressureCriticalMaxBar?: FloatFieldUpdateOperationsInput | number
    flowDiffThresholdLpm?: FloatFieldUpdateOperationsInput | number
    flowAnomalyPersistenceSec?: IntFieldUpdateOperationsInput | number
    staleTimeoutSec?: IntFieldUpdateOperationsInput | number
    isIllustrative?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringThresholdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pressureMinBar?: FloatFieldUpdateOperationsInput | number
    pressureMaxBar?: FloatFieldUpdateOperationsInput | number
    pressureCriticalMaxBar?: FloatFieldUpdateOperationsInput | number
    flowDiffThresholdLpm?: FloatFieldUpdateOperationsInput | number
    flowAnomalyPersistenceSec?: IntFieldUpdateOperationsInput | number
    staleTimeoutSec?: IntFieldUpdateOperationsInput | number
    isIllustrative?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringThresholdCreateManyInput = {
    id?: string
    pressureMinBar?: number
    pressureMaxBar?: number
    pressureCriticalMaxBar?: number
    flowDiffThresholdLpm?: number
    flowAnomalyPersistenceSec?: number
    staleTimeoutSec?: number
    isIllustrative?: boolean
    updatedAt?: Date | string
  }

  export type MonitoringThresholdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pressureMinBar?: FloatFieldUpdateOperationsInput | number
    pressureMaxBar?: FloatFieldUpdateOperationsInput | number
    pressureCriticalMaxBar?: FloatFieldUpdateOperationsInput | number
    flowDiffThresholdLpm?: FloatFieldUpdateOperationsInput | number
    flowAnomalyPersistenceSec?: IntFieldUpdateOperationsInput | number
    staleTimeoutSec?: IntFieldUpdateOperationsInput | number
    isIllustrative?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringThresholdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pressureMinBar?: FloatFieldUpdateOperationsInput | number
    pressureMaxBar?: FloatFieldUpdateOperationsInput | number
    pressureCriticalMaxBar?: FloatFieldUpdateOperationsInput | number
    flowDiffThresholdLpm?: FloatFieldUpdateOperationsInput | number
    flowAnomalyPersistenceSec?: IntFieldUpdateOperationsInput | number
    staleTimeoutSec?: IntFieldUpdateOperationsInput | number
    isIllustrative?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSettingCreateInput = {
    id?: string
    dataMode?: string
    demoScenario?: string
    liveSensorApiUrl?: string
    pollIntervalMs?: number
    networkContext?: string
    updatedAt?: Date | string
  }

  export type ApplicationSettingUncheckedCreateInput = {
    id?: string
    dataMode?: string
    demoScenario?: string
    liveSensorApiUrl?: string
    pollIntervalMs?: number
    networkContext?: string
    updatedAt?: Date | string
  }

  export type ApplicationSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataMode?: StringFieldUpdateOperationsInput | string
    demoScenario?: StringFieldUpdateOperationsInput | string
    liveSensorApiUrl?: StringFieldUpdateOperationsInput | string
    pollIntervalMs?: IntFieldUpdateOperationsInput | number
    networkContext?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataMode?: StringFieldUpdateOperationsInput | string
    demoScenario?: StringFieldUpdateOperationsInput | string
    liveSensorApiUrl?: StringFieldUpdateOperationsInput | string
    pollIntervalMs?: IntFieldUpdateOperationsInput | number
    networkContext?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSettingCreateManyInput = {
    id?: string
    dataMode?: string
    demoScenario?: string
    liveSensorApiUrl?: string
    pollIntervalMs?: number
    networkContext?: string
    updatedAt?: Date | string
  }

  export type ApplicationSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataMode?: StringFieldUpdateOperationsInput | string
    demoScenario?: StringFieldUpdateOperationsInput | string
    liveSensorApiUrl?: StringFieldUpdateOperationsInput | string
    pollIntervalMs?: IntFieldUpdateOperationsInput | number
    networkContext?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataMode?: StringFieldUpdateOperationsInput | string
    demoScenario?: StringFieldUpdateOperationsInput | string
    liveSensorApiUrl?: StringFieldUpdateOperationsInput | string
    pollIntervalMs?: IntFieldUpdateOperationsInput | number
    networkContext?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MunicipalUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SensorListRelationFilter = {
    every?: SensorWhereInput
    some?: SensorWhereInput
    none?: SensorWhereInput
  }

  export type SensorReadingListRelationFilter = {
    every?: SensorReadingWhereInput
    some?: SensorReadingWhereInput
    none?: SensorReadingWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type FacilityConnectionListRelationFilter = {
    every?: FacilityConnectionWhereInput
    some?: FacilityConnectionWhereInput
    none?: FacilityConnectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SensorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    locality?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacityMld?: SortOrder
    storageCapacityLiters?: SortOrder
    currentStorageLiters?: SortOrder
    operationalStatus?: SortOrder
    provenanceStatus?: SortOrder
    sourceReference?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    capacityMld?: SortOrder
    storageCapacityLiters?: SortOrder
    currentStorageLiters?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    locality?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacityMld?: SortOrder
    storageCapacityLiters?: SortOrder
    currentStorageLiters?: SortOrder
    operationalStatus?: SortOrder
    provenanceStatus?: SortOrder
    sourceReference?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    locality?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacityMld?: SortOrder
    storageCapacityLiters?: SortOrder
    currentStorageLiters?: SortOrder
    operationalStatus?: SortOrder
    provenanceStatus?: SortOrder
    sourceReference?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    capacityMld?: SortOrder
    storageCapacityLiters?: SortOrder
    currentStorageLiters?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FacilityScalarRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type FacilityConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    fromFacilityId?: SortOrder
    toFacilityId?: SortOrder
    pipelineLabel?: SortOrder
    diameterMm?: SortOrder
    verificationStatus?: SortOrder
    sourceReference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilityConnectionAvgOrderByAggregateInput = {
    diameterMm?: SortOrder
  }

  export type FacilityConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    fromFacilityId?: SortOrder
    toFacilityId?: SortOrder
    pipelineLabel?: SortOrder
    diameterMm?: SortOrder
    verificationStatus?: SortOrder
    sourceReference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilityConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    fromFacilityId?: SortOrder
    toFacilityId?: SortOrder
    pipelineLabel?: SortOrder
    diameterMm?: SortOrder
    verificationStatus?: SortOrder
    sourceReference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilityConnectionSumOrderByAggregateInput = {
    diameterMm?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    isSimulated?: SortOrder
    facilityId?: SortOrder
    lastReadingAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    isSimulated?: SortOrder
    facilityId?: SortOrder
    lastReadingAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    isSimulated?: SortOrder
    facilityId?: SortOrder
    lastReadingAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SensorReadingCountOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    inletFlow?: SortOrder
    outletFlow?: SortOrder
    flowDifference?: SortOrder
    pressureBar?: SortOrder
    dataSource?: SortOrder
    isValid?: SortOrder
    recordedAt?: SortOrder
  }

  export type SensorReadingAvgOrderByAggregateInput = {
    inletFlow?: SortOrder
    outletFlow?: SortOrder
    flowDifference?: SortOrder
    pressureBar?: SortOrder
  }

  export type SensorReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    inletFlow?: SortOrder
    outletFlow?: SortOrder
    flowDifference?: SortOrder
    pressureBar?: SortOrder
    dataSource?: SortOrder
    isValid?: SortOrder
    recordedAt?: SortOrder
  }

  export type SensorReadingMinOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    inletFlow?: SortOrder
    outletFlow?: SortOrder
    flowDifference?: SortOrder
    pressureBar?: SortOrder
    dataSource?: SortOrder
    isValid?: SortOrder
    recordedAt?: SortOrder
  }

  export type SensorReadingSumOrderByAggregateInput = {
    inletFlow?: SortOrder
    outletFlow?: SortOrder
    flowDifference?: SortOrder
    pressureBar?: SortOrder
  }

  export type FacilityNullableScalarRelationFilter = {
    is?: FacilityWhereInput | null
    isNot?: FacilityWhereInput | null
  }

  export type AlertNoteListRelationFilter = {
    every?: AlertNoteWhereInput
    some?: AlertNoteWhereInput
    none?: AlertNoteWhereInput
  }

  export type AlertNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    alertCode?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facilityId?: SortOrder
    inletSnapshot?: SortOrder
    outletSnapshot?: SortOrder
    differenceSnapshot?: SortOrder
    pressureSnapshot?: SortOrder
    dataSource?: SortOrder
    detectedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    inletSnapshot?: SortOrder
    outletSnapshot?: SortOrder
    differenceSnapshot?: SortOrder
    pressureSnapshot?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    alertCode?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facilityId?: SortOrder
    inletSnapshot?: SortOrder
    outletSnapshot?: SortOrder
    differenceSnapshot?: SortOrder
    pressureSnapshot?: SortOrder
    dataSource?: SortOrder
    detectedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    alertCode?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facilityId?: SortOrder
    inletSnapshot?: SortOrder
    outletSnapshot?: SortOrder
    differenceSnapshot?: SortOrder
    pressureSnapshot?: SortOrder
    dataSource?: SortOrder
    detectedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    inletSnapshot?: SortOrder
    outletSnapshot?: SortOrder
    differenceSnapshot?: SortOrder
    pressureSnapshot?: SortOrder
  }

  export type AlertScalarRelationFilter = {
    is?: AlertWhereInput
    isNot?: AlertWhereInput
  }

  export type AlertNoteCountOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    authorName?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    authorName?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertNoteMinOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    authorName?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MonitoringThresholdCountOrderByAggregateInput = {
    id?: SortOrder
    pressureMinBar?: SortOrder
    pressureMaxBar?: SortOrder
    pressureCriticalMaxBar?: SortOrder
    flowDiffThresholdLpm?: SortOrder
    flowAnomalyPersistenceSec?: SortOrder
    staleTimeoutSec?: SortOrder
    isIllustrative?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringThresholdAvgOrderByAggregateInput = {
    pressureMinBar?: SortOrder
    pressureMaxBar?: SortOrder
    pressureCriticalMaxBar?: SortOrder
    flowDiffThresholdLpm?: SortOrder
    flowAnomalyPersistenceSec?: SortOrder
    staleTimeoutSec?: SortOrder
  }

  export type MonitoringThresholdMaxOrderByAggregateInput = {
    id?: SortOrder
    pressureMinBar?: SortOrder
    pressureMaxBar?: SortOrder
    pressureCriticalMaxBar?: SortOrder
    flowDiffThresholdLpm?: SortOrder
    flowAnomalyPersistenceSec?: SortOrder
    staleTimeoutSec?: SortOrder
    isIllustrative?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringThresholdMinOrderByAggregateInput = {
    id?: SortOrder
    pressureMinBar?: SortOrder
    pressureMaxBar?: SortOrder
    pressureCriticalMaxBar?: SortOrder
    flowDiffThresholdLpm?: SortOrder
    flowAnomalyPersistenceSec?: SortOrder
    staleTimeoutSec?: SortOrder
    isIllustrative?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringThresholdSumOrderByAggregateInput = {
    pressureMinBar?: SortOrder
    pressureMaxBar?: SortOrder
    pressureCriticalMaxBar?: SortOrder
    flowDiffThresholdLpm?: SortOrder
    flowAnomalyPersistenceSec?: SortOrder
    staleTimeoutSec?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ApplicationSettingCountOrderByAggregateInput = {
    id?: SortOrder
    dataMode?: SortOrder
    demoScenario?: SortOrder
    liveSensorApiUrl?: SortOrder
    pollIntervalMs?: SortOrder
    networkContext?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSettingAvgOrderByAggregateInput = {
    pollIntervalMs?: SortOrder
  }

  export type ApplicationSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    dataMode?: SortOrder
    demoScenario?: SortOrder
    liveSensorApiUrl?: SortOrder
    pollIntervalMs?: SortOrder
    networkContext?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSettingMinOrderByAggregateInput = {
    id?: SortOrder
    dataMode?: SortOrder
    demoScenario?: SortOrder
    liveSensorApiUrl?: SortOrder
    pollIntervalMs?: SortOrder
    networkContext?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSettingSumOrderByAggregateInput = {
    pollIntervalMs?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SensorCreateNestedManyWithoutFacilityInput = {
    create?: XOR<SensorCreateWithoutFacilityInput, SensorUncheckedCreateWithoutFacilityInput> | SensorCreateWithoutFacilityInput[] | SensorUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutFacilityInput | SensorCreateOrConnectWithoutFacilityInput[]
    createMany?: SensorCreateManyFacilityInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SensorReadingCreateNestedManyWithoutFacilityInput = {
    create?: XOR<SensorReadingCreateWithoutFacilityInput, SensorReadingUncheckedCreateWithoutFacilityInput> | SensorReadingCreateWithoutFacilityInput[] | SensorReadingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutFacilityInput | SensorReadingCreateOrConnectWithoutFacilityInput[]
    createMany?: SensorReadingCreateManyFacilityInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutFacilityInput = {
    create?: XOR<AlertCreateWithoutFacilityInput, AlertUncheckedCreateWithoutFacilityInput> | AlertCreateWithoutFacilityInput[] | AlertUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFacilityInput | AlertCreateOrConnectWithoutFacilityInput[]
    createMany?: AlertCreateManyFacilityInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type FacilityConnectionCreateNestedManyWithoutFromFacilityInput = {
    create?: XOR<FacilityConnectionCreateWithoutFromFacilityInput, FacilityConnectionUncheckedCreateWithoutFromFacilityInput> | FacilityConnectionCreateWithoutFromFacilityInput[] | FacilityConnectionUncheckedCreateWithoutFromFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutFromFacilityInput | FacilityConnectionCreateOrConnectWithoutFromFacilityInput[]
    createMany?: FacilityConnectionCreateManyFromFacilityInputEnvelope
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
  }

  export type FacilityConnectionCreateNestedManyWithoutToFacilityInput = {
    create?: XOR<FacilityConnectionCreateWithoutToFacilityInput, FacilityConnectionUncheckedCreateWithoutToFacilityInput> | FacilityConnectionCreateWithoutToFacilityInput[] | FacilityConnectionUncheckedCreateWithoutToFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutToFacilityInput | FacilityConnectionCreateOrConnectWithoutToFacilityInput[]
    createMany?: FacilityConnectionCreateManyToFacilityInputEnvelope
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
  }

  export type SensorUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<SensorCreateWithoutFacilityInput, SensorUncheckedCreateWithoutFacilityInput> | SensorCreateWithoutFacilityInput[] | SensorUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutFacilityInput | SensorCreateOrConnectWithoutFacilityInput[]
    createMany?: SensorCreateManyFacilityInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SensorReadingUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<SensorReadingCreateWithoutFacilityInput, SensorReadingUncheckedCreateWithoutFacilityInput> | SensorReadingCreateWithoutFacilityInput[] | SensorReadingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutFacilityInput | SensorReadingCreateOrConnectWithoutFacilityInput[]
    createMany?: SensorReadingCreateManyFacilityInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<AlertCreateWithoutFacilityInput, AlertUncheckedCreateWithoutFacilityInput> | AlertCreateWithoutFacilityInput[] | AlertUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFacilityInput | AlertCreateOrConnectWithoutFacilityInput[]
    createMany?: AlertCreateManyFacilityInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type FacilityConnectionUncheckedCreateNestedManyWithoutFromFacilityInput = {
    create?: XOR<FacilityConnectionCreateWithoutFromFacilityInput, FacilityConnectionUncheckedCreateWithoutFromFacilityInput> | FacilityConnectionCreateWithoutFromFacilityInput[] | FacilityConnectionUncheckedCreateWithoutFromFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutFromFacilityInput | FacilityConnectionCreateOrConnectWithoutFromFacilityInput[]
    createMany?: FacilityConnectionCreateManyFromFacilityInputEnvelope
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
  }

  export type FacilityConnectionUncheckedCreateNestedManyWithoutToFacilityInput = {
    create?: XOR<FacilityConnectionCreateWithoutToFacilityInput, FacilityConnectionUncheckedCreateWithoutToFacilityInput> | FacilityConnectionCreateWithoutToFacilityInput[] | FacilityConnectionUncheckedCreateWithoutToFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutToFacilityInput | FacilityConnectionCreateOrConnectWithoutToFacilityInput[]
    createMany?: FacilityConnectionCreateManyToFacilityInputEnvelope
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SensorUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<SensorCreateWithoutFacilityInput, SensorUncheckedCreateWithoutFacilityInput> | SensorCreateWithoutFacilityInput[] | SensorUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutFacilityInput | SensorCreateOrConnectWithoutFacilityInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutFacilityInput | SensorUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: SensorCreateManyFacilityInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutFacilityInput | SensorUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutFacilityInput | SensorUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SensorReadingUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<SensorReadingCreateWithoutFacilityInput, SensorReadingUncheckedCreateWithoutFacilityInput> | SensorReadingCreateWithoutFacilityInput[] | SensorReadingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutFacilityInput | SensorReadingCreateOrConnectWithoutFacilityInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutFacilityInput | SensorReadingUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: SensorReadingCreateManyFacilityInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutFacilityInput | SensorReadingUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutFacilityInput | SensorReadingUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<AlertCreateWithoutFacilityInput, AlertUncheckedCreateWithoutFacilityInput> | AlertCreateWithoutFacilityInput[] | AlertUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFacilityInput | AlertCreateOrConnectWithoutFacilityInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutFacilityInput | AlertUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: AlertCreateManyFacilityInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutFacilityInput | AlertUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutFacilityInput | AlertUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type FacilityConnectionUpdateManyWithoutFromFacilityNestedInput = {
    create?: XOR<FacilityConnectionCreateWithoutFromFacilityInput, FacilityConnectionUncheckedCreateWithoutFromFacilityInput> | FacilityConnectionCreateWithoutFromFacilityInput[] | FacilityConnectionUncheckedCreateWithoutFromFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutFromFacilityInput | FacilityConnectionCreateOrConnectWithoutFromFacilityInput[]
    upsert?: FacilityConnectionUpsertWithWhereUniqueWithoutFromFacilityInput | FacilityConnectionUpsertWithWhereUniqueWithoutFromFacilityInput[]
    createMany?: FacilityConnectionCreateManyFromFacilityInputEnvelope
    set?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    disconnect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    delete?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    update?: FacilityConnectionUpdateWithWhereUniqueWithoutFromFacilityInput | FacilityConnectionUpdateWithWhereUniqueWithoutFromFacilityInput[]
    updateMany?: FacilityConnectionUpdateManyWithWhereWithoutFromFacilityInput | FacilityConnectionUpdateManyWithWhereWithoutFromFacilityInput[]
    deleteMany?: FacilityConnectionScalarWhereInput | FacilityConnectionScalarWhereInput[]
  }

  export type FacilityConnectionUpdateManyWithoutToFacilityNestedInput = {
    create?: XOR<FacilityConnectionCreateWithoutToFacilityInput, FacilityConnectionUncheckedCreateWithoutToFacilityInput> | FacilityConnectionCreateWithoutToFacilityInput[] | FacilityConnectionUncheckedCreateWithoutToFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutToFacilityInput | FacilityConnectionCreateOrConnectWithoutToFacilityInput[]
    upsert?: FacilityConnectionUpsertWithWhereUniqueWithoutToFacilityInput | FacilityConnectionUpsertWithWhereUniqueWithoutToFacilityInput[]
    createMany?: FacilityConnectionCreateManyToFacilityInputEnvelope
    set?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    disconnect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    delete?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    update?: FacilityConnectionUpdateWithWhereUniqueWithoutToFacilityInput | FacilityConnectionUpdateWithWhereUniqueWithoutToFacilityInput[]
    updateMany?: FacilityConnectionUpdateManyWithWhereWithoutToFacilityInput | FacilityConnectionUpdateManyWithWhereWithoutToFacilityInput[]
    deleteMany?: FacilityConnectionScalarWhereInput | FacilityConnectionScalarWhereInput[]
  }

  export type SensorUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<SensorCreateWithoutFacilityInput, SensorUncheckedCreateWithoutFacilityInput> | SensorCreateWithoutFacilityInput[] | SensorUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutFacilityInput | SensorCreateOrConnectWithoutFacilityInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutFacilityInput | SensorUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: SensorCreateManyFacilityInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutFacilityInput | SensorUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutFacilityInput | SensorUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SensorReadingUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<SensorReadingCreateWithoutFacilityInput, SensorReadingUncheckedCreateWithoutFacilityInput> | SensorReadingCreateWithoutFacilityInput[] | SensorReadingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutFacilityInput | SensorReadingCreateOrConnectWithoutFacilityInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutFacilityInput | SensorReadingUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: SensorReadingCreateManyFacilityInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutFacilityInput | SensorReadingUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutFacilityInput | SensorReadingUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<AlertCreateWithoutFacilityInput, AlertUncheckedCreateWithoutFacilityInput> | AlertCreateWithoutFacilityInput[] | AlertUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFacilityInput | AlertCreateOrConnectWithoutFacilityInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutFacilityInput | AlertUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: AlertCreateManyFacilityInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutFacilityInput | AlertUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutFacilityInput | AlertUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type FacilityConnectionUncheckedUpdateManyWithoutFromFacilityNestedInput = {
    create?: XOR<FacilityConnectionCreateWithoutFromFacilityInput, FacilityConnectionUncheckedCreateWithoutFromFacilityInput> | FacilityConnectionCreateWithoutFromFacilityInput[] | FacilityConnectionUncheckedCreateWithoutFromFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutFromFacilityInput | FacilityConnectionCreateOrConnectWithoutFromFacilityInput[]
    upsert?: FacilityConnectionUpsertWithWhereUniqueWithoutFromFacilityInput | FacilityConnectionUpsertWithWhereUniqueWithoutFromFacilityInput[]
    createMany?: FacilityConnectionCreateManyFromFacilityInputEnvelope
    set?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    disconnect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    delete?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    update?: FacilityConnectionUpdateWithWhereUniqueWithoutFromFacilityInput | FacilityConnectionUpdateWithWhereUniqueWithoutFromFacilityInput[]
    updateMany?: FacilityConnectionUpdateManyWithWhereWithoutFromFacilityInput | FacilityConnectionUpdateManyWithWhereWithoutFromFacilityInput[]
    deleteMany?: FacilityConnectionScalarWhereInput | FacilityConnectionScalarWhereInput[]
  }

  export type FacilityConnectionUncheckedUpdateManyWithoutToFacilityNestedInput = {
    create?: XOR<FacilityConnectionCreateWithoutToFacilityInput, FacilityConnectionUncheckedCreateWithoutToFacilityInput> | FacilityConnectionCreateWithoutToFacilityInput[] | FacilityConnectionUncheckedCreateWithoutToFacilityInput[]
    connectOrCreate?: FacilityConnectionCreateOrConnectWithoutToFacilityInput | FacilityConnectionCreateOrConnectWithoutToFacilityInput[]
    upsert?: FacilityConnectionUpsertWithWhereUniqueWithoutToFacilityInput | FacilityConnectionUpsertWithWhereUniqueWithoutToFacilityInput[]
    createMany?: FacilityConnectionCreateManyToFacilityInputEnvelope
    set?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    disconnect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    delete?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    connect?: FacilityConnectionWhereUniqueInput | FacilityConnectionWhereUniqueInput[]
    update?: FacilityConnectionUpdateWithWhereUniqueWithoutToFacilityInput | FacilityConnectionUpdateWithWhereUniqueWithoutToFacilityInput[]
    updateMany?: FacilityConnectionUpdateManyWithWhereWithoutToFacilityInput | FacilityConnectionUpdateManyWithWhereWithoutToFacilityInput[]
    deleteMany?: FacilityConnectionScalarWhereInput | FacilityConnectionScalarWhereInput[]
  }

  export type FacilityCreateNestedOneWithoutOutgoingConnectionsInput = {
    create?: XOR<FacilityCreateWithoutOutgoingConnectionsInput, FacilityUncheckedCreateWithoutOutgoingConnectionsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutOutgoingConnectionsInput
    connect?: FacilityWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutIncomingConnectionsInput = {
    create?: XOR<FacilityCreateWithoutIncomingConnectionsInput, FacilityUncheckedCreateWithoutIncomingConnectionsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutIncomingConnectionsInput
    connect?: FacilityWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FacilityUpdateOneRequiredWithoutOutgoingConnectionsNestedInput = {
    create?: XOR<FacilityCreateWithoutOutgoingConnectionsInput, FacilityUncheckedCreateWithoutOutgoingConnectionsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutOutgoingConnectionsInput
    upsert?: FacilityUpsertWithoutOutgoingConnectionsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutOutgoingConnectionsInput, FacilityUpdateWithoutOutgoingConnectionsInput>, FacilityUncheckedUpdateWithoutOutgoingConnectionsInput>
  }

  export type FacilityUpdateOneRequiredWithoutIncomingConnectionsNestedInput = {
    create?: XOR<FacilityCreateWithoutIncomingConnectionsInput, FacilityUncheckedCreateWithoutIncomingConnectionsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutIncomingConnectionsInput
    upsert?: FacilityUpsertWithoutIncomingConnectionsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutIncomingConnectionsInput, FacilityUpdateWithoutIncomingConnectionsInput>, FacilityUncheckedUpdateWithoutIncomingConnectionsInput>
  }

  export type FacilityCreateNestedOneWithoutSensorsInput = {
    create?: XOR<FacilityCreateWithoutSensorsInput, FacilityUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutSensorsInput
    connect?: FacilityWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FacilityUpdateOneRequiredWithoutSensorsNestedInput = {
    create?: XOR<FacilityCreateWithoutSensorsInput, FacilityUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutSensorsInput
    upsert?: FacilityUpsertWithoutSensorsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutSensorsInput, FacilityUpdateWithoutSensorsInput>, FacilityUncheckedUpdateWithoutSensorsInput>
  }

  export type FacilityCreateNestedOneWithoutReadingsInput = {
    create?: XOR<FacilityCreateWithoutReadingsInput, FacilityUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutReadingsInput
    connect?: FacilityWhereUniqueInput
  }

  export type FacilityUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<FacilityCreateWithoutReadingsInput, FacilityUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutReadingsInput
    upsert?: FacilityUpsertWithoutReadingsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutReadingsInput, FacilityUpdateWithoutReadingsInput>, FacilityUncheckedUpdateWithoutReadingsInput>
  }

  export type FacilityCreateNestedOneWithoutAlertsInput = {
    create?: XOR<FacilityCreateWithoutAlertsInput, FacilityUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutAlertsInput
    connect?: FacilityWhereUniqueInput
  }

  export type AlertNoteCreateNestedManyWithoutAlertInput = {
    create?: XOR<AlertNoteCreateWithoutAlertInput, AlertNoteUncheckedCreateWithoutAlertInput> | AlertNoteCreateWithoutAlertInput[] | AlertNoteUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertNoteCreateOrConnectWithoutAlertInput | AlertNoteCreateOrConnectWithoutAlertInput[]
    createMany?: AlertNoteCreateManyAlertInputEnvelope
    connect?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
  }

  export type AlertNoteUncheckedCreateNestedManyWithoutAlertInput = {
    create?: XOR<AlertNoteCreateWithoutAlertInput, AlertNoteUncheckedCreateWithoutAlertInput> | AlertNoteCreateWithoutAlertInput[] | AlertNoteUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertNoteCreateOrConnectWithoutAlertInput | AlertNoteCreateOrConnectWithoutAlertInput[]
    createMany?: AlertNoteCreateManyAlertInputEnvelope
    connect?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
  }

  export type FacilityUpdateOneWithoutAlertsNestedInput = {
    create?: XOR<FacilityCreateWithoutAlertsInput, FacilityUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutAlertsInput
    upsert?: FacilityUpsertWithoutAlertsInput
    disconnect?: FacilityWhereInput | boolean
    delete?: FacilityWhereInput | boolean
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutAlertsInput, FacilityUpdateWithoutAlertsInput>, FacilityUncheckedUpdateWithoutAlertsInput>
  }

  export type AlertNoteUpdateManyWithoutAlertNestedInput = {
    create?: XOR<AlertNoteCreateWithoutAlertInput, AlertNoteUncheckedCreateWithoutAlertInput> | AlertNoteCreateWithoutAlertInput[] | AlertNoteUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertNoteCreateOrConnectWithoutAlertInput | AlertNoteCreateOrConnectWithoutAlertInput[]
    upsert?: AlertNoteUpsertWithWhereUniqueWithoutAlertInput | AlertNoteUpsertWithWhereUniqueWithoutAlertInput[]
    createMany?: AlertNoteCreateManyAlertInputEnvelope
    set?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    disconnect?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    delete?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    connect?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    update?: AlertNoteUpdateWithWhereUniqueWithoutAlertInput | AlertNoteUpdateWithWhereUniqueWithoutAlertInput[]
    updateMany?: AlertNoteUpdateManyWithWhereWithoutAlertInput | AlertNoteUpdateManyWithWhereWithoutAlertInput[]
    deleteMany?: AlertNoteScalarWhereInput | AlertNoteScalarWhereInput[]
  }

  export type AlertNoteUncheckedUpdateManyWithoutAlertNestedInput = {
    create?: XOR<AlertNoteCreateWithoutAlertInput, AlertNoteUncheckedCreateWithoutAlertInput> | AlertNoteCreateWithoutAlertInput[] | AlertNoteUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertNoteCreateOrConnectWithoutAlertInput | AlertNoteCreateOrConnectWithoutAlertInput[]
    upsert?: AlertNoteUpsertWithWhereUniqueWithoutAlertInput | AlertNoteUpsertWithWhereUniqueWithoutAlertInput[]
    createMany?: AlertNoteCreateManyAlertInputEnvelope
    set?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    disconnect?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    delete?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    connect?: AlertNoteWhereUniqueInput | AlertNoteWhereUniqueInput[]
    update?: AlertNoteUpdateWithWhereUniqueWithoutAlertInput | AlertNoteUpdateWithWhereUniqueWithoutAlertInput[]
    updateMany?: AlertNoteUpdateManyWithWhereWithoutAlertInput | AlertNoteUpdateManyWithWhereWithoutAlertInput[]
    deleteMany?: AlertNoteScalarWhereInput | AlertNoteScalarWhereInput[]
  }

  export type AlertCreateNestedOneWithoutNotesInput = {
    create?: XOR<AlertCreateWithoutNotesInput, AlertUncheckedCreateWithoutNotesInput>
    connectOrCreate?: AlertCreateOrConnectWithoutNotesInput
    connect?: AlertWhereUniqueInput
  }

  export type AlertUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<AlertCreateWithoutNotesInput, AlertUncheckedCreateWithoutNotesInput>
    connectOrCreate?: AlertCreateOrConnectWithoutNotesInput
    upsert?: AlertUpsertWithoutNotesInput
    connect?: AlertWhereUniqueInput
    update?: XOR<XOR<AlertUpdateToOneWithWhereWithoutNotesInput, AlertUpdateWithoutNotesInput>, AlertUncheckedUpdateWithoutNotesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SensorCreateWithoutFacilityInput = {
    id?: string
    sensorCode: string
    name: string
    kind: string
    unit: string
    status?: string
    isSimulated?: boolean
    lastReadingAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorUncheckedCreateWithoutFacilityInput = {
    id?: string
    sensorCode: string
    name: string
    kind: string
    unit: string
    status?: string
    isSimulated?: boolean
    lastReadingAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorCreateOrConnectWithoutFacilityInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutFacilityInput, SensorUncheckedCreateWithoutFacilityInput>
  }

  export type SensorCreateManyFacilityInputEnvelope = {
    data: SensorCreateManyFacilityInput | SensorCreateManyFacilityInput[]
  }

  export type SensorReadingCreateWithoutFacilityInput = {
    id?: string
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: string
    isValid?: boolean
    recordedAt?: Date | string
  }

  export type SensorReadingUncheckedCreateWithoutFacilityInput = {
    id?: string
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: string
    isValid?: boolean
    recordedAt?: Date | string
  }

  export type SensorReadingCreateOrConnectWithoutFacilityInput = {
    where: SensorReadingWhereUniqueInput
    create: XOR<SensorReadingCreateWithoutFacilityInput, SensorReadingUncheckedCreateWithoutFacilityInput>
  }

  export type SensorReadingCreateManyFacilityInputEnvelope = {
    data: SensorReadingCreateManyFacilityInput | SensorReadingCreateManyFacilityInput[]
  }

  export type AlertCreateWithoutFacilityInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
    notes?: AlertNoteCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateWithoutFacilityInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
    notes?: AlertNoteUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertCreateOrConnectWithoutFacilityInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutFacilityInput, AlertUncheckedCreateWithoutFacilityInput>
  }

  export type AlertCreateManyFacilityInputEnvelope = {
    data: AlertCreateManyFacilityInput | AlertCreateManyFacilityInput[]
  }

  export type FacilityConnectionCreateWithoutFromFacilityInput = {
    id?: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
    toFacility: FacilityCreateNestedOneWithoutIncomingConnectionsInput
  }

  export type FacilityConnectionUncheckedCreateWithoutFromFacilityInput = {
    id?: string
    toFacilityId: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type FacilityConnectionCreateOrConnectWithoutFromFacilityInput = {
    where: FacilityConnectionWhereUniqueInput
    create: XOR<FacilityConnectionCreateWithoutFromFacilityInput, FacilityConnectionUncheckedCreateWithoutFromFacilityInput>
  }

  export type FacilityConnectionCreateManyFromFacilityInputEnvelope = {
    data: FacilityConnectionCreateManyFromFacilityInput | FacilityConnectionCreateManyFromFacilityInput[]
  }

  export type FacilityConnectionCreateWithoutToFacilityInput = {
    id?: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
    fromFacility: FacilityCreateNestedOneWithoutOutgoingConnectionsInput
  }

  export type FacilityConnectionUncheckedCreateWithoutToFacilityInput = {
    id?: string
    fromFacilityId: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type FacilityConnectionCreateOrConnectWithoutToFacilityInput = {
    where: FacilityConnectionWhereUniqueInput
    create: XOR<FacilityConnectionCreateWithoutToFacilityInput, FacilityConnectionUncheckedCreateWithoutToFacilityInput>
  }

  export type FacilityConnectionCreateManyToFacilityInputEnvelope = {
    data: FacilityConnectionCreateManyToFacilityInput | FacilityConnectionCreateManyToFacilityInput[]
  }

  export type SensorUpsertWithWhereUniqueWithoutFacilityInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutFacilityInput, SensorUncheckedUpdateWithoutFacilityInput>
    create: XOR<SensorCreateWithoutFacilityInput, SensorUncheckedCreateWithoutFacilityInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutFacilityInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutFacilityInput, SensorUncheckedUpdateWithoutFacilityInput>
  }

  export type SensorUpdateManyWithWhereWithoutFacilityInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutFacilityInput>
  }

  export type SensorScalarWhereInput = {
    AND?: SensorScalarWhereInput | SensorScalarWhereInput[]
    OR?: SensorScalarWhereInput[]
    NOT?: SensorScalarWhereInput | SensorScalarWhereInput[]
    id?: StringFilter<"Sensor"> | string
    sensorCode?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    kind?: StringFilter<"Sensor"> | string
    unit?: StringFilter<"Sensor"> | string
    status?: StringFilter<"Sensor"> | string
    isSimulated?: BoolFilter<"Sensor"> | boolean
    facilityId?: StringFilter<"Sensor"> | string
    lastReadingAt?: DateTimeNullableFilter<"Sensor"> | Date | string | null
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
  }

  export type SensorReadingUpsertWithWhereUniqueWithoutFacilityInput = {
    where: SensorReadingWhereUniqueInput
    update: XOR<SensorReadingUpdateWithoutFacilityInput, SensorReadingUncheckedUpdateWithoutFacilityInput>
    create: XOR<SensorReadingCreateWithoutFacilityInput, SensorReadingUncheckedCreateWithoutFacilityInput>
  }

  export type SensorReadingUpdateWithWhereUniqueWithoutFacilityInput = {
    where: SensorReadingWhereUniqueInput
    data: XOR<SensorReadingUpdateWithoutFacilityInput, SensorReadingUncheckedUpdateWithoutFacilityInput>
  }

  export type SensorReadingUpdateManyWithWhereWithoutFacilityInput = {
    where: SensorReadingScalarWhereInput
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyWithoutFacilityInput>
  }

  export type SensorReadingScalarWhereInput = {
    AND?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    OR?: SensorReadingScalarWhereInput[]
    NOT?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    id?: StringFilter<"SensorReading"> | string
    facilityId?: StringFilter<"SensorReading"> | string
    inletFlow?: FloatFilter<"SensorReading"> | number
    outletFlow?: FloatFilter<"SensorReading"> | number
    flowDifference?: FloatFilter<"SensorReading"> | number
    pressureBar?: FloatFilter<"SensorReading"> | number
    dataSource?: StringFilter<"SensorReading"> | string
    isValid?: BoolFilter<"SensorReading"> | boolean
    recordedAt?: DateTimeFilter<"SensorReading"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutFacilityInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutFacilityInput, AlertUncheckedUpdateWithoutFacilityInput>
    create: XOR<AlertCreateWithoutFacilityInput, AlertUncheckedCreateWithoutFacilityInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutFacilityInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutFacilityInput, AlertUncheckedUpdateWithoutFacilityInput>
  }

  export type AlertUpdateManyWithWhereWithoutFacilityInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutFacilityInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    alertCode?: StringFilter<"Alert"> | string
    category?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    facilityId?: StringNullableFilter<"Alert"> | string | null
    inletSnapshot?: FloatNullableFilter<"Alert"> | number | null
    outletSnapshot?: FloatNullableFilter<"Alert"> | number | null
    differenceSnapshot?: FloatNullableFilter<"Alert"> | number | null
    pressureSnapshot?: FloatNullableFilter<"Alert"> | number | null
    dataSource?: StringFilter<"Alert"> | string
    detectedAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type FacilityConnectionUpsertWithWhereUniqueWithoutFromFacilityInput = {
    where: FacilityConnectionWhereUniqueInput
    update: XOR<FacilityConnectionUpdateWithoutFromFacilityInput, FacilityConnectionUncheckedUpdateWithoutFromFacilityInput>
    create: XOR<FacilityConnectionCreateWithoutFromFacilityInput, FacilityConnectionUncheckedCreateWithoutFromFacilityInput>
  }

  export type FacilityConnectionUpdateWithWhereUniqueWithoutFromFacilityInput = {
    where: FacilityConnectionWhereUniqueInput
    data: XOR<FacilityConnectionUpdateWithoutFromFacilityInput, FacilityConnectionUncheckedUpdateWithoutFromFacilityInput>
  }

  export type FacilityConnectionUpdateManyWithWhereWithoutFromFacilityInput = {
    where: FacilityConnectionScalarWhereInput
    data: XOR<FacilityConnectionUpdateManyMutationInput, FacilityConnectionUncheckedUpdateManyWithoutFromFacilityInput>
  }

  export type FacilityConnectionScalarWhereInput = {
    AND?: FacilityConnectionScalarWhereInput | FacilityConnectionScalarWhereInput[]
    OR?: FacilityConnectionScalarWhereInput[]
    NOT?: FacilityConnectionScalarWhereInput | FacilityConnectionScalarWhereInput[]
    id?: StringFilter<"FacilityConnection"> | string
    fromFacilityId?: StringFilter<"FacilityConnection"> | string
    toFacilityId?: StringFilter<"FacilityConnection"> | string
    pipelineLabel?: StringFilter<"FacilityConnection"> | string
    diameterMm?: IntNullableFilter<"FacilityConnection"> | number | null
    verificationStatus?: StringFilter<"FacilityConnection"> | string
    sourceReference?: StringFilter<"FacilityConnection"> | string
    notes?: StringNullableFilter<"FacilityConnection"> | string | null
    createdAt?: DateTimeFilter<"FacilityConnection"> | Date | string
  }

  export type FacilityConnectionUpsertWithWhereUniqueWithoutToFacilityInput = {
    where: FacilityConnectionWhereUniqueInput
    update: XOR<FacilityConnectionUpdateWithoutToFacilityInput, FacilityConnectionUncheckedUpdateWithoutToFacilityInput>
    create: XOR<FacilityConnectionCreateWithoutToFacilityInput, FacilityConnectionUncheckedCreateWithoutToFacilityInput>
  }

  export type FacilityConnectionUpdateWithWhereUniqueWithoutToFacilityInput = {
    where: FacilityConnectionWhereUniqueInput
    data: XOR<FacilityConnectionUpdateWithoutToFacilityInput, FacilityConnectionUncheckedUpdateWithoutToFacilityInput>
  }

  export type FacilityConnectionUpdateManyWithWhereWithoutToFacilityInput = {
    where: FacilityConnectionScalarWhereInput
    data: XOR<FacilityConnectionUpdateManyMutationInput, FacilityConnectionUncheckedUpdateManyWithoutToFacilityInput>
  }

  export type FacilityCreateWithoutOutgoingConnectionsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingCreateNestedManyWithoutFacilityInput
    alerts?: AlertCreateNestedManyWithoutFacilityInput
    incomingConnections?: FacilityConnectionCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityUncheckedCreateWithoutOutgoingConnectionsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingUncheckedCreateNestedManyWithoutFacilityInput
    alerts?: AlertUncheckedCreateNestedManyWithoutFacilityInput
    incomingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityCreateOrConnectWithoutOutgoingConnectionsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutOutgoingConnectionsInput, FacilityUncheckedCreateWithoutOutgoingConnectionsInput>
  }

  export type FacilityCreateWithoutIncomingConnectionsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingCreateNestedManyWithoutFacilityInput
    alerts?: AlertCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionCreateNestedManyWithoutFromFacilityInput
  }

  export type FacilityUncheckedCreateWithoutIncomingConnectionsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingUncheckedCreateNestedManyWithoutFacilityInput
    alerts?: AlertUncheckedCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutFromFacilityInput
  }

  export type FacilityCreateOrConnectWithoutIncomingConnectionsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutIncomingConnectionsInput, FacilityUncheckedCreateWithoutIncomingConnectionsInput>
  }

  export type FacilityUpsertWithoutOutgoingConnectionsInput = {
    update: XOR<FacilityUpdateWithoutOutgoingConnectionsInput, FacilityUncheckedUpdateWithoutOutgoingConnectionsInput>
    create: XOR<FacilityCreateWithoutOutgoingConnectionsInput, FacilityUncheckedCreateWithoutOutgoingConnectionsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutOutgoingConnectionsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutOutgoingConnectionsInput, FacilityUncheckedUpdateWithoutOutgoingConnectionsInput>
  }

  export type FacilityUpdateWithoutOutgoingConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUpdateManyWithoutFacilityNestedInput
    incomingConnections?: FacilityConnectionUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutOutgoingConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUncheckedUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutFacilityNestedInput
    incomingConnections?: FacilityConnectionUncheckedUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityUpsertWithoutIncomingConnectionsInput = {
    update: XOR<FacilityUpdateWithoutIncomingConnectionsInput, FacilityUncheckedUpdateWithoutIncomingConnectionsInput>
    create: XOR<FacilityCreateWithoutIncomingConnectionsInput, FacilityUncheckedCreateWithoutIncomingConnectionsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutIncomingConnectionsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutIncomingConnectionsInput, FacilityUncheckedUpdateWithoutIncomingConnectionsInput>
  }

  export type FacilityUpdateWithoutIncomingConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUpdateManyWithoutFromFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutIncomingConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUncheckedUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUncheckedUpdateManyWithoutFromFacilityNestedInput
  }

  export type FacilityCreateWithoutSensorsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: SensorReadingCreateNestedManyWithoutFacilityInput
    alerts?: AlertCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityUncheckedCreateWithoutSensorsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: SensorReadingUncheckedCreateNestedManyWithoutFacilityInput
    alerts?: AlertUncheckedCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityCreateOrConnectWithoutSensorsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutSensorsInput, FacilityUncheckedCreateWithoutSensorsInput>
  }

  export type FacilityUpsertWithoutSensorsInput = {
    update: XOR<FacilityUpdateWithoutSensorsInput, FacilityUncheckedUpdateWithoutSensorsInput>
    create: XOR<FacilityCreateWithoutSensorsInput, FacilityUncheckedCreateWithoutSensorsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutSensorsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutSensorsInput, FacilityUncheckedUpdateWithoutSensorsInput>
  }

  export type FacilityUpdateWithoutSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: SensorReadingUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: SensorReadingUncheckedUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUncheckedUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUncheckedUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityCreateWithoutReadingsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorCreateNestedManyWithoutFacilityInput
    alerts?: AlertCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityUncheckedCreateWithoutReadingsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutFacilityInput
    alerts?: AlertUncheckedCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityCreateOrConnectWithoutReadingsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutReadingsInput, FacilityUncheckedCreateWithoutReadingsInput>
  }

  export type FacilityUpsertWithoutReadingsInput = {
    update: XOR<FacilityUpdateWithoutReadingsInput, FacilityUncheckedUpdateWithoutReadingsInput>
    create: XOR<FacilityCreateWithoutReadingsInput, FacilityUncheckedCreateWithoutReadingsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutReadingsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutReadingsInput, FacilityUncheckedUpdateWithoutReadingsInput>
  }

  export type FacilityUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutFacilityNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUncheckedUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUncheckedUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityCreateWithoutAlertsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityUncheckedCreateWithoutAlertsInput = {
    id?: string
    code: string
    name: string
    type: string
    locality: string
    latitude: number
    longitude: number
    capacityMld?: number | null
    storageCapacityLiters?: number | null
    currentStorageLiters?: number | null
    operationalStatus?: string
    provenanceStatus: string
    sourceReference: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutFacilityInput
    readings?: SensorReadingUncheckedCreateNestedManyWithoutFacilityInput
    outgoingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutFromFacilityInput
    incomingConnections?: FacilityConnectionUncheckedCreateNestedManyWithoutToFacilityInput
  }

  export type FacilityCreateOrConnectWithoutAlertsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutAlertsInput, FacilityUncheckedCreateWithoutAlertsInput>
  }

  export type AlertNoteCreateWithoutAlertInput = {
    id?: string
    authorName: string
    note: string
    createdAt?: Date | string
  }

  export type AlertNoteUncheckedCreateWithoutAlertInput = {
    id?: string
    authorName: string
    note: string
    createdAt?: Date | string
  }

  export type AlertNoteCreateOrConnectWithoutAlertInput = {
    where: AlertNoteWhereUniqueInput
    create: XOR<AlertNoteCreateWithoutAlertInput, AlertNoteUncheckedCreateWithoutAlertInput>
  }

  export type AlertNoteCreateManyAlertInputEnvelope = {
    data: AlertNoteCreateManyAlertInput | AlertNoteCreateManyAlertInput[]
  }

  export type FacilityUpsertWithoutAlertsInput = {
    update: XOR<FacilityUpdateWithoutAlertsInput, FacilityUncheckedUpdateWithoutAlertsInput>
    create: XOR<FacilityCreateWithoutAlertsInput, FacilityUncheckedCreateWithoutAlertsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutAlertsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutAlertsInput, FacilityUncheckedUpdateWithoutAlertsInput>
  }

  export type FacilityUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUpdateManyWithoutToFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    locality?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    capacityMld?: NullableFloatFieldUpdateOperationsInput | number | null
    storageCapacityLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    currentStorageLiters?: NullableFloatFieldUpdateOperationsInput | number | null
    operationalStatus?: StringFieldUpdateOperationsInput | string
    provenanceStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutFacilityNestedInput
    readings?: SensorReadingUncheckedUpdateManyWithoutFacilityNestedInput
    outgoingConnections?: FacilityConnectionUncheckedUpdateManyWithoutFromFacilityNestedInput
    incomingConnections?: FacilityConnectionUncheckedUpdateManyWithoutToFacilityNestedInput
  }

  export type AlertNoteUpsertWithWhereUniqueWithoutAlertInput = {
    where: AlertNoteWhereUniqueInput
    update: XOR<AlertNoteUpdateWithoutAlertInput, AlertNoteUncheckedUpdateWithoutAlertInput>
    create: XOR<AlertNoteCreateWithoutAlertInput, AlertNoteUncheckedCreateWithoutAlertInput>
  }

  export type AlertNoteUpdateWithWhereUniqueWithoutAlertInput = {
    where: AlertNoteWhereUniqueInput
    data: XOR<AlertNoteUpdateWithoutAlertInput, AlertNoteUncheckedUpdateWithoutAlertInput>
  }

  export type AlertNoteUpdateManyWithWhereWithoutAlertInput = {
    where: AlertNoteScalarWhereInput
    data: XOR<AlertNoteUpdateManyMutationInput, AlertNoteUncheckedUpdateManyWithoutAlertInput>
  }

  export type AlertNoteScalarWhereInput = {
    AND?: AlertNoteScalarWhereInput | AlertNoteScalarWhereInput[]
    OR?: AlertNoteScalarWhereInput[]
    NOT?: AlertNoteScalarWhereInput | AlertNoteScalarWhereInput[]
    id?: StringFilter<"AlertNote"> | string
    alertId?: StringFilter<"AlertNote"> | string
    authorName?: StringFilter<"AlertNote"> | string
    note?: StringFilter<"AlertNote"> | string
    createdAt?: DateTimeFilter<"AlertNote"> | Date | string
  }

  export type AlertCreateWithoutNotesInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
    facility?: FacilityCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutNotesInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    facilityId?: string | null
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutNotesInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutNotesInput, AlertUncheckedCreateWithoutNotesInput>
  }

  export type AlertUpsertWithoutNotesInput = {
    update: XOR<AlertUpdateWithoutNotesInput, AlertUncheckedUpdateWithoutNotesInput>
    create: XOR<AlertCreateWithoutNotesInput, AlertUncheckedCreateWithoutNotesInput>
    where?: AlertWhereInput
  }

  export type AlertUpdateToOneWithWhereWithoutNotesInput = {
    where?: AlertWhereInput
    data: XOR<AlertUpdateWithoutNotesInput, AlertUncheckedUpdateWithoutNotesInput>
  }

  export type AlertUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    facilityId?: NullableStringFieldUpdateOperationsInput | string | null
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorCreateManyFacilityInput = {
    id?: string
    sensorCode: string
    name: string
    kind: string
    unit: string
    status?: string
    isSimulated?: boolean
    lastReadingAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorReadingCreateManyFacilityInput = {
    id?: string
    inletFlow: number
    outletFlow: number
    flowDifference: number
    pressureBar: number
    dataSource: string
    isValid?: boolean
    recordedAt?: Date | string
  }

  export type AlertCreateManyFacilityInput = {
    id?: string
    alertCode: string
    category: string
    severity: string
    status?: string
    title: string
    description: string
    inletSnapshot?: number | null
    outletSnapshot?: number | null
    differenceSnapshot?: number | null
    pressureSnapshot?: number | null
    dataSource?: string
    detectedAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityConnectionCreateManyFromFacilityInput = {
    id?: string
    toFacilityId: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type FacilityConnectionCreateManyToFacilityInput = {
    id?: string
    fromFacilityId: string
    pipelineLabel: string
    diameterMm?: number | null
    verificationStatus: string
    sourceReference: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SensorUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isSimulated?: BoolFieldUpdateOperationsInput | boolean
    lastReadingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isSimulated?: BoolFieldUpdateOperationsInput | boolean
    lastReadingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isSimulated?: BoolFieldUpdateOperationsInput | boolean
    lastReadingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    inletFlow?: FloatFieldUpdateOperationsInput | number
    outletFlow?: FloatFieldUpdateOperationsInput | number
    flowDifference?: FloatFieldUpdateOperationsInput | number
    pressureBar?: FloatFieldUpdateOperationsInput | number
    dataSource?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    inletFlow?: FloatFieldUpdateOperationsInput | number
    outletFlow?: FloatFieldUpdateOperationsInput | number
    flowDifference?: FloatFieldUpdateOperationsInput | number
    pressureBar?: FloatFieldUpdateOperationsInput | number
    dataSource?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    inletFlow?: FloatFieldUpdateOperationsInput | number
    outletFlow?: FloatFieldUpdateOperationsInput | number
    flowDifference?: FloatFieldUpdateOperationsInput | number
    pressureBar?: FloatFieldUpdateOperationsInput | number
    dataSource?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: AlertNoteUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: AlertNoteUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertCode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    outletSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    differenceSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    pressureSnapshot?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSource?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityConnectionUpdateWithoutFromFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toFacility?: FacilityUpdateOneRequiredWithoutIncomingConnectionsNestedInput
  }

  export type FacilityConnectionUncheckedUpdateWithoutFromFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    toFacilityId?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityConnectionUncheckedUpdateManyWithoutFromFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    toFacilityId?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityConnectionUpdateWithoutToFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFacility?: FacilityUpdateOneRequiredWithoutOutgoingConnectionsNestedInput
  }

  export type FacilityConnectionUncheckedUpdateWithoutToFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromFacilityId?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityConnectionUncheckedUpdateManyWithoutToFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromFacilityId?: StringFieldUpdateOperationsInput | string
    pipelineLabel?: StringFieldUpdateOperationsInput | string
    diameterMm?: NullableIntFieldUpdateOperationsInput | number | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    sourceReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertNoteCreateManyAlertInput = {
    id?: string
    authorName: string
    note: string
    createdAt?: Date | string
  }

  export type AlertNoteUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertNoteUncheckedUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertNoteUncheckedUpdateManyWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}