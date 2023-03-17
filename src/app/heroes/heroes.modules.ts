import { NgModule } from '@angular/core';
import { heroecomponet } from './hereo/heroe.componet';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule} from '@angular/common'

@NgModule({
    declarations: [heroecomponet,
        ListadoComponent],
        exports:[
            ListadoComponent
        ],
        imports:[
            CommonModule
        ]

})
export class heroesModule {


}