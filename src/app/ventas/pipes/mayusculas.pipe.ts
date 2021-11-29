import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayuscula'
})
export class MayusculasPipe implements PipeTransform{ // se agrega en ventasModule
    transform(valor:string, enMayusculas:boolean = true):string {
        console.log(valor)
        console.log(enMayusculas)
        if(enMayusculas){
            return valor.toUpperCase();
        }else{
        return valor.toLocaleLowerCase();
        }
    }



}