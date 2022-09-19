// 请求包括任意的路由
// 比如请求 /api/foo/bar/baz，但实际上是 只有接口/api/foo/
export default defineEventHandler(() => `Default foo handler`)