import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BotonLoginComponent } from './boton-login/boton-login.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { BtnRedesComponent } from './btn-redes/btn-redes.component';



@NgModule({
  declarations: [
    BotonLoginComponent,
    EducacionComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    BtnRedesComponent,

    

    

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({
     
      radius:50,
      outerStrokeWidth: 8,
      outerStrokeColor: "palevioletred",
      innerStrokeWidth: 0,
      showInnerStroke:false,

      title:"",
      titleFontSize:"20",
      titleColor: "white",
      titleFontWeight:"400",

      subtitle: "",
      subtitleFontSize:"17",
      subtitleColor:"peachpuff",
      subtitleFontWeight:"500",


      units:" %",
      unitsFontSize: "20",
      unitsFontWeight:"400" ,	
      unitsColor:"white",

      backgroundColor:"pink",
      backgroundOpacity: 0.3,
      backgroundPadding:3,
      backgroundStrokeWidth:5,
      })
    
  ],

  exports: [
    BotonLoginComponent,
    EducacionComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    BtnRedesComponent
  ]
})
export class ComponentesModule { }
