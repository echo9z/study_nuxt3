// composables 下模块的同名导出将被自动按需引入
export const useCounter = () => useState('counter', () => 100)