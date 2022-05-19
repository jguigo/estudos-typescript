//O TS possui uma typagem dinâmica, mas um pouco diferente da do JS

let curso = "TypeScript"; //desta forma a gente tem uma atribuição de tipo dinamica, porém
                          //se eu tentar atribuir a essa variável um tipo diferente de string
                          //o typescript já me acusa um problema falando que essa variável é do tipo
                          //string, por exemplo: curso = 123; 
console.log(curso);                    

let tecnologias = [ //o mesmo acontece quando é feito utilizando arrays!
   "PHP",
   "React JS",       //se eu faço um array que tenha string e number ele vai aceitar apenas strings
   2022              //e numbers
]

tecnologias.push('Express')
tecnologias.push(13)
// tecnologias.push(true); se eu tentar fazer isso ele vai dar problema, pois estou colocando um boolean

console.log(tecnologias);