type Length<T extends readonly (string | number | symbol)[]> = T['length']


// as const 它告诉 TS 它所断言的值以及该值的所有层级的子属性都是不可篡改的，故对每一级子属性都会做最严格的类型推断
// const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

