import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TextPageComponent } from './pages/text-page/text-page.component';

const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  // {
  //   path: '500',
  //   component: InternalServerComponent
  // },
  { path: '', component: HomepageComponent},
  { path: 'contacts', component: ContactsComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'textpage', component: TextPageComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
