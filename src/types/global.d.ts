/**
 * @description クエリパラメータやその他の用途で使える型
 */
type PrimitiveValue = string | number | boolean | Date | undefined | null;

/**
 * @description 汎用オブジェクトの型
 */
type GenericObjectType = {
  [key: string]: PrimitiveValue;
};

/**
 * @description クエリパラメータの型
 */
type QueryParamsType = GenericObjectType;
