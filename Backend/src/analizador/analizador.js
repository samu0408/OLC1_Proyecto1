/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var analizador = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,13],$V2=[1,14],$V3=[1,15],$V4=[1,16],$V5=[1,17],$V6=[1,18],$V7=[1,19],$V8=[1,20],$V9=[1,21],$Va=[1,22],$Vb=[5,16,19,24,26,30,31,32,36,37,38,39,40],$Vc=[1,44],$Vd=[1,38],$Ve=[1,37],$Vf=[1,36],$Vg=[1,39],$Vh=[1,40],$Vi=[1,41],$Vj=[1,42],$Vk=[1,43],$Vl=[1,45],$Vm=[1,52],$Vn=[1,53],$Vo=[1,54],$Vp=[1,55],$Vq=[1,56],$Vr=[1,57],$Vs=[1,58],$Vt=[1,59],$Vu=[1,60],$Vv=[1,61],$Vw=[1,62],$Vx=[1,63],$Vy=[8,23,41,42,43,44,45,46,47,48,49,50,51,52],$Vz=[8,23,51,52],$VA=[23,34],$VB=[8,23,41,42,45,46,47,48,49,50,51,52],$VC=[8,23,45,46,47,48,49,50,51,52],$VD=[1,115],$VE=[5,16,19,24,26,27,30,31,32,36,37,38,39,40];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DEC_VAR":7,"ptcoma":8,"ASIG_VAR":9,"PRINT":10,"IF":11,"WHILE":12,"DOWHILE":13,"METODO":14,"TIPO":15,"identificador":16,"igual":17,"EXPRESION":18,"Rconsole":19,"punto":20,"Rwrite":21,"parA":22,"parC":23,"Rif":24,"llaveA":25,"llaveC":26,"Relse":27,"ELSEIF":28,"CONEIF":29,"Rwhile":30,"Rdo":31,"Rvoid":32,"LIST_PARAMETROS":33,"coma":34,"PARAMETRO":35,"Rint":36,"Rdouble":37,"Rchar":38,"Rboolean":39,"Rstring":40,"mas":41,"menos":42,"por":43,"div":44,"menor":45,"mayor":46,"menorIgual":47,"mayorIgual":48,"diferente":49,"igualigual":50,"and":51,"or":52,"not":53,"decimal":54,"entero":55,"Rtrue":56,"Rfalse":57,"string":58,"char":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"ptcoma",16:"identificador",17:"igual",19:"Rconsole",20:"punto",21:"Rwrite",22:"parA",23:"parC",24:"Rif",25:"llaveA",26:"llaveC",27:"Relse",30:"Rwhile",31:"Rdo",32:"Rvoid",34:"coma",36:"Rint",37:"Rdouble",38:"Rchar",39:"Rboolean",40:"Rstring",41:"mas",42:"menos",43:"por",44:"div",45:"menor",46:"mayor",47:"menorIgual",48:"mayorIgual",49:"diferente",50:"igualigual",51:"and",52:"or",53:"not",54:"decimal",55:"entero",56:"Rtrue",57:"Rfalse",58:"string",59:"char"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,1],[6,1],[6,1],[6,1],[6,1],[7,2],[7,4],[9,3],[10,7],[11,7],[11,11],[11,8],[11,12],[28,2],[28,1],[29,8],[12,7],[13,9],[14,7],[14,8],[33,3],[33,1],[35,2],[15,1],[15,1],[15,1],[15,1],[15,1],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,2],[18,2],[18,3],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2: case 19:
this.$ = $$[$0-1]; $$[$0-1].push($$[$0]);
break;
case 3: case 20: case 27:
this.$ = [$$[$0]];
break;
case 4: case 5:
this.$ = $$[$0-1];
break;
case 6: case 7: case 8: case 9: case 10:
this.$ = $$[$0];
break;
case 11:
 this.$ = INSTRUCCION.nuevaDeclaracion($$[$0], null, $$[$0-1], this._$.first_line, this._$.first_column+1) 
break;
case 12:
 this.$ = INSTRUCCION.nuevaDeclaracion($$[$0-2], $$[$0], $$[$0-3], this._$.first_line, this._$.first_column+1) 
break;
case 13:
this.$ = INSTRUCCION.nuevaAsignacion($$[$0-2], $$[$0], this._$.first_line, this._$.first_column+1)
break;
case 14:
this.$ = INSTRUCCION.nuevoPrint($$[$0-2], this._$.first_line, this._$.first_column+1)
break;
case 15:
this.$ = INSTRUCCION.nuevoIf($$[$0-4], $$[$0-1], this._$.first_line, this._$.first_column+1)
break;
case 16:
this.$ = INSTRUCCION.nuevoIfElse($$[$0-8], $$[$0-5], $$[$0-1], this._$.first_line, this._$.first_column+1)
break;
case 17:
this.$ = INSTRUCCION.nuevoIfConElseIf($$[$0-5], $$[$0-2], $$[$0], null, this._$.first_line, this._$.first_column+1)
break;
case 18:
this.$= INSTRUCCION.nuevoIfConElseIf($$[$0-9], $$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 21:
this.$ = INSTRUCCION.nuevoElseIf($$[$0-4], $$[$0-1], this._$.first_line, this._$.first_column+1) 
break;
case 22:
this.$ = INSTRUCCION.nuevoWhile($$[$0-4], $$[$0-1], this._$.first_line, this._$.first_column+1)
break;
case 23:
this.$ = INSTRUCCION.nuevoDoWhile($$[$0-2], $$[$0-6], this._$.first_line, this._$.first_column+1)
break;
case 24:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-5], null, $$[$0-1], this._$.first_line, this._$.first_column+1)
break;
case 25:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 26:
this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
case 28:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0], null, $$[$0-1], this._$.first_line, this._$.first_column+1);
break;
case 29:
this.$ = TIPO_DATO.ENTERO
break;
case 30:
this.$ = TIPO_DATO.DECIMAL
break;
case 31:
this.$ = TIPO_DATO.CHAR
break;
case 32:
this.$ = TIPO_DATO.BOOL
break;
case 33:
this.$ = TIPO_DATO.CADENA
break;
case 34:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.SUMA, this._$.first_line, this._$.first_column+1);
break;
case 35:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.RESTA, this._$.first_line, this._$.first_column+1);
break;
case 36:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MULTIPLICACION, this._$.first_line, this._$.first_column+1);
break;
case 37:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DIVISION, this._$.first_line, this._$.first_column+1);
break;
case 38:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENOR, this._$.first_line, this._$.first_column+1);
break;
case 39:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYOR, this._$.first_line, this._$.first_column+1);
break;
case 40:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENORIGUAL, this._$.first_line, this._$.first_column+1);
break;
case 41:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYORIGUAL, this._$.first_line, this._$.first_column+1);
break;
case 42:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DIFERENTE, this._$.first_line, this._$.first_column+1);
break;
case 43:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.IGUALIGUAL, this._$.first_line, this._$.first_column+1);
break;
case 44:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.AND, this._$.first_line, this._$.first_column+1);
break;
case 45:
this.$ = INSTRUCCION.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.OR, this._$.first_line, this._$.first_column+1);
break;
case 46:
this.$ = INSTRUCCION.nuevaOperacionUnaria($$[$0], TIPO_OPERACION.NOT, this._$.first_line, this._$.first_column+1);
break;
case 47:
this.$ = INSTRUCCION.nuevaOperacionUnaria($$[$0], TIPO_OPERACION.NEGATIVO, this._$.first_line, this._$.first_column+1);
break;
case 48:
this.$ = $$[$0-1]
break;
case 49:
this.$ = INSTRUCCION.nuevoValor(Number($$[$0]), TIPO_VALOR.DECIMAL, this._$.first_line, this._$.first_column+1);
break;
case 50:
this.$ = INSTRUCCION.nuevoValor(Number($$[$0]), TIPO_VALOR.ENTERO, this._$.first_line, this._$.first_column+1);
break;
case 51: case 52:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.BOOL, this._$.first_line, this._$.first_column+1);
break;
case 53:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.CADENA, this._$.first_line, this._$.first_column+1);
break;
case 54:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.IDENTIFICADOR, this._$.first_line, this._$.first_column+1);
break;
case 55:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.CHAR, this._$.first_line, this._$.first_column+1);
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{1:[3]},{5:[1,23],6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},o($Vb,[2,3]),{8:[1,25]},{8:[1,26]},o($Vb,[2,6]),o($Vb,[2,7]),o($Vb,[2,8]),o($Vb,[2,9]),o($Vb,[2,10]),{16:[1,27]},{17:[1,28]},{20:[1,29]},{22:[1,30]},{22:[1,31]},{25:[1,32]},{16:[1,33]},{16:[2,29]},{16:[2,30]},{16:[2,31]},{16:[2,32]},{16:[2,33]},{1:[2,1]},o($Vb,[2,2]),o($Vb,[2,4]),o($Vb,[2,5]),{8:[2,11],17:[1,34]},{16:$Vc,18:35,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{21:[1,46]},{16:$Vc,18:47,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:48,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{4:49,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{22:[1,50]},{16:$Vc,18:51,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{8:[2,13],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},{16:$Vc,18:64,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:65,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:66,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},o($Vy,[2,49]),o($Vy,[2,50]),o($Vy,[2,51]),o($Vy,[2,52]),o($Vy,[2,53]),o($Vy,[2,54]),o($Vy,[2,55]),{22:[1,67]},{23:[1,68],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},{23:[1,69],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,70],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{15:74,23:[1,71],33:72,35:73,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{8:[2,12],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},{16:$Vc,18:75,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:76,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:77,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:78,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:79,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:80,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:81,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:82,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:83,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:84,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:85,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{16:$Vc,18:86,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},o($Vz,[2,46],{41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv}),o($Vy,[2,47]),{23:[1,87],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},{16:$Vc,18:88,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{25:[1,89]},{25:[1,90]},{30:[1,91]},{25:[1,92]},{23:[1,93],34:[1,94]},o($VA,[2,27]),{16:[1,95]},o($VB,[2,34],{43:$Vo,44:$Vp}),o($VB,[2,35],{43:$Vo,44:$Vp}),o($Vy,[2,36]),o($Vy,[2,37]),o($VC,[2,38],{41:$Vm,42:$Vn,43:$Vo,44:$Vp}),o($VC,[2,39],{41:$Vm,42:$Vn,43:$Vo,44:$Vp}),o($VC,[2,40],{41:$Vm,42:$Vn,43:$Vo,44:$Vp}),o($VC,[2,41],{41:$Vm,42:$Vn,43:$Vo,44:$Vp}),o($VC,[2,42],{41:$Vm,42:$Vn,43:$Vo,44:$Vp}),o($VC,[2,43],{41:$Vm,42:$Vn,43:$Vo,44:$Vp}),o($Vz,[2,44],{41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv}),o([8,23,52],[2,45],{41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw}),o($Vy,[2,48]),{23:[1,96],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},{4:97,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{4:98,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{22:[1,99]},{4:100,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{25:[1,101]},{15:74,35:102,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},o($VA,[2,28]),{8:[1,103]},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,104],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,105],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{16:$Vc,18:106,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,107],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{4:108,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},o($VA,[2,26]),o($Vb,[2,14]),o($Vb,[2,15],{28:110,29:111,27:[1,109]}),o($Vb,[2,22]),{23:[1,112],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},o($Vb,[2,24]),{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,113],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{24:$VD,25:[1,114]},o($Vb,[2,17],{29:117,27:[1,116]}),o($VE,[2,20]),{8:[1,118]},o($Vb,[2,25]),{4:119,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{22:[1,120]},{24:$VD,25:[1,121]},o($VE,[2,19]),o($Vb,[2,23]),{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,122],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{16:$Vc,18:123,22:$Vd,42:$Ve,53:$Vf,54:$Vg,55:$Vh,56:$Vi,57:$Vj,58:$Vk,59:$Vl},{4:124,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},o($Vb,[2,16]),{23:[1,125],41:$Vm,42:$Vn,43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,126],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{25:[1,127]},o($Vb,[2,18]),{4:128,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,19:$V1,24:$V2,26:[1,129],30:$V3,31:$V4,32:$V5,36:$V6,37:$V7,38:$V8,39:$V9,40:$Va},o($VE,[2,21])],
defaultActions: {18:[2,29],19:[2,30],20:[2,31],21:[2,32],22:[2,33],23:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const TIPO_OPERACION = require('../controllers/enums/tipoOperacion')
    const TIPO_VALOR = require('../controllers/enums/tipoValor')
    const TIPO_DATO = require('../controllers/enums/tipoDato')
    const INSTRUCCION = require('../controllers/instrucciones/instruccion')
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:// comentario lineal
break;
case 2:// comentario multiple línea 
break;
case 3:return 36
break;
case 4:return 37
break;
case 5:return 39
break;
case 6:return 38
break;
case 7:return 40
break;
case 8:return 56
break;
case 9:return 57
break;
case 10:return 19
break;
case 11:return 21
break;
case 12:return 24
break;
case 13:return 27
break;
case 14:return 30
break;
case 15:return 31
break;
case 16:return 32
break;
case 17:return 54
break;
case 18:return 20
break;
case 19:return 55
break;
case 20:return 50       
break;
case 21:return 49
break;
case 22:return 47
break;
case 23:return 45
break;
case 24:return 48
break;
case 25:return 17
break;
case 26:return 46
break;
case 27:return 34
break;
case 28:return 8
break;
case 29:return 'dospuntos'
break;
case 30:return 52
break;
case 31:return 51
break;
case 32:return 25
break;
case 33:return 26
break;
case 34:return 43
break;
case 35:return 44
break;
case 36:return 'menosmenos'
break;
case 37:return 'masmas'
break;
case 38:return 42
break;
case 39:return 41
break;
case 40:return 'exponente'
break;
case 41:return 53
break;
case 42:return 'modulo'
break;
case 43:return 22
break;
case 44:return 23
break;
case 45:return 'corchA'
break;
case 46:return 'corchC'
break;
case 47:return 16
break;
case 48:return 58
break;
case 49:return 59
break;
case 50:return 5    // Fin de archivo
break;
case 51:    
    console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);

break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:string\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:Console\b)/i,/^(?:Write\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:void\b)/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:\.)/i,/^(?:[0-9]+\b)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:=)/i,/^(?:>)/i,/^(?:,)/i,/^(?:;)/i,/^(?::)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:--)/i,/^(?:\+\+)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\^)/i,/^(?:!)/i,/^(?:%)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:([a-zA-Z])([a-zA-Z0-9_])*)/i,/^(?:["\""]([^"\""])*["\""])/i,/^(?:["\'"]([^"\'"])*["\'"])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analizador;
exports.Parser = analizador.Parser;
exports.parse = function () { return analizador.parse.apply(analizador, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}