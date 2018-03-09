import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about/:id',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
