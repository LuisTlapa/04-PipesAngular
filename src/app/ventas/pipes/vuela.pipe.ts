import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela'
})
export class VuelaPipe implements PipeTransform{ // se agrega en ventasModule
    transform(valor:boolean):string {
        return(valor)
           ? 'vuela'
           :'no vuela';
    }

}

