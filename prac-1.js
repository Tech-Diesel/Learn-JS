
let sym="abcdefghijklabjkl"

let obj={};


for(let i=0; i<sym.length; i++){
	if(obj[sym[i]]==undefined){
	(obj[sym[i]]=1)
	}
	else{
	obj[sym[i]]++
	}

}

for(let key in obj){
	console.log(obj[key])
}