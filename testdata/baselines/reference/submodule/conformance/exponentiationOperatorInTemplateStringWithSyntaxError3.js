//// [tests/cases/conformance/es7/exponentiationOperator/exponentiationOperatorInTemplateStringWithSyntaxError3.ts] ////

//// [exponentiationOperatorInTemplateStringWithSyntaxError3.ts]
var t1 = 10;
var t2 = 10;
var s;

// Error: early syntax error using ES7 SimpleUnaryExpression on left-hand side without ()
// With TemplateTail
`${-t1 ** t2 - t1} world`;
`${-++t1 ** t2 - t1} world`;
`${-t1++ ** t2 - t1} world`;
`${!t1 ** t2 ** --t1 } world`;
`${typeof t1 ** t2 ** t1} world`;
`${1 + typeof t1 ** t2 ** t1} world`;

`${-t1 ** t2 - t1}${-t1 ** t2 - t1} world`;
`${-++t1 ** t2 - t1}${-++t1 ** t2 - t1} world`;
`${-t1++ ** t2 - t1}${-t1++ ** t2 - t1} world`;
`${!t1 ** t2 ** --t1 }${!t1 ** t2 ** --t1 } world`;
`${typeof t1 ** t2 ** t1}${typeof t1 ** t2 ** t1} world`;
`${1 + typeof t1 ** t2 ** t1}${1 + typeof t1 ** t2 ** t1} world`;

`${-t1 ** t2 - t1} hello world ${-t1 ** t2 - t1} !!`;
`${-++t1 ** t2 - t1} hello world ${-++t1 ** t2 - t1} !!`;
`${-t1++ ** t2 - t1} hello world ${-t1++ ** t2 - t1} !!`;
`${!t1 ** t2 ** --t1 } hello world ${!t1 ** t2 ** --t1 } !!`;
`${typeof t1 ** t2 ** t1} hello world ${typeof t1 ** t2 ** t1} !!`;
`${1 + typeof t1 ** t2 ** t1} hello world ${1 + typeof t1 ** t2 ** t1} !!`;

//// [exponentiationOperatorInTemplateStringWithSyntaxError3.js]
var t1 = 10;
var t2 = 10;
var s;
// Error: early syntax error using ES7 SimpleUnaryExpression on left-hand side without ()
// With TemplateTail
`${Math.pow(-t1, t2) - t1} world`;
`${Math.pow(-++t1, t2) - t1} world`;
`${Math.pow(-t1++, t2) - t1} world`;
`${Math.pow(!t1, Math.pow(t2, --t1))} world`;
`${Math.pow(typeof t1, Math.pow(t2, t1))} world`;
`${1 + Math.pow(typeof t1, Math.pow(t2, t1))} world`;
`${Math.pow(-t1, t2) - t1}${Math.pow(-t1, t2) - t1} world`;
`${Math.pow(-++t1, t2) - t1}${Math.pow(-++t1, t2) - t1} world`;
`${Math.pow(-t1++, t2) - t1}${Math.pow(-t1++, t2) - t1} world`;
`${Math.pow(!t1, Math.pow(t2, --t1))}${Math.pow(!t1, Math.pow(t2, --t1))} world`;
`${Math.pow(typeof t1, Math.pow(t2, t1))}${Math.pow(typeof t1, Math.pow(t2, t1))} world`;
`${1 + Math.pow(typeof t1, Math.pow(t2, t1))}${1 + Math.pow(typeof t1, Math.pow(t2, t1))} world`;
`${Math.pow(-t1, t2) - t1} hello world ${Math.pow(-t1, t2) - t1} !!`;
`${Math.pow(-++t1, t2) - t1} hello world ${Math.pow(-++t1, t2) - t1} !!`;
`${Math.pow(-t1++, t2) - t1} hello world ${Math.pow(-t1++, t2) - t1} !!`;
`${Math.pow(!t1, Math.pow(t2, --t1))} hello world ${Math.pow(!t1, Math.pow(t2, --t1))} !!`;
`${Math.pow(typeof t1, Math.pow(t2, t1))} hello world ${Math.pow(typeof t1, Math.pow(t2, t1))} !!`;
`${1 + Math.pow(typeof t1, Math.pow(t2, t1))} hello world ${1 + Math.pow(typeof t1, Math.pow(t2, t1))} !!`;
