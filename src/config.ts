// we may need to import external config
export const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoic2VlbnllYSIsImEiOiJjanJ6eTlvamsxZHVkNDlsdm40MnVoejc4In0.AzM2YIBfmI47aJQLfoO8zg';

export const DEFAULT_MEGACONFIG_LIST = [
  // {
  //   type: 'megawise',
  //   host: '127.0.0.1',
  //   username: 'zilliz',
  //   password: 'zilliz',
  //   database: 'aalocal',
  //   port: '5432',
  // },
  {
    type: 'megawise',
    host: '192.168.1.169',
    username: 'gis_user',
    password: 'gis_passwd',
    database: 'postgres',
    port: '5432',
  },
  // {
  //   type: 'megawise',
  //   host: '192.168.1.58',
  //   username: 'zilliz',
  //   password: 'zilliz',
  //   database: 'postgres',
  //   port: '5430',
  // },
  {
    type: 'megawsise',
    host: '192.168.2.26',
    username: 'gis_user',
    password: 'gis_passwd',
    database: 'postgres',
    port: '5432',
  },
];

// column typs definition
const MYSQL_INTEGER: string[] = ['TINYINT', 'SMALLINT', 'MEDIUMINT', 'INT', 'BIGINT'];
const MYSQL_FLOAT: string[] = ['FLOAT', 'DOUBLE'];
const MYSQL_DATE: string[] = ['DATE', 'TIME', 'DATETIME', 'TIMESTAMP', 'YEAR'];
const MYSQL_TEXT: string[] = ['CHAR', 'VARCHAR', 'BLOB', 'TEXT', 'ENUM', 'SET'];

const PG_INTEGER: string[] = ['INT8', 'SERIAL8', 'INT', 'INT4', 'INT2', 'SERIAL2', 'SERIAL4'];
const PG_FLOAT: string[] = ['FLOAT8', 'FLOAT4'];
const PG_DATE: string[] = ['DATE', 'TIMEZ', 'TIMESTAMPTZ', 'TIMESTAMP'];
const PG_TEXT: string[] = ['TEXT', 'XML', 'UUID', 'JSON'];

const OTHER_TEXT: string[] = ['STRING'];

export const NumberTypes: string[] = [...PG_INTEGER, ...PG_FLOAT, ...MYSQL_INTEGER, ...MYSQL_FLOAT];
export const DateTypes: string[] = [...PG_DATE, ...MYSQL_DATE];
export const TextTypes: string[] = [...PG_TEXT, ...MYSQL_TEXT, ...OTHER_TEXT];
export const FloatTypes: string[] = [...MYSQL_FLOAT, ...PG_FLOAT];
export const IntTypes: string[] = [...MYSQL_INTEGER, ...PG_INTEGER];
