import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './components/pages/landing-component/main/main.component'
import { NotFoundComponent } from './components/pages/not-found/not-found.component'
import { AuthGuard } from './features/auth/auth.guard'

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'menu',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./features/restaurant/restaurant.module').then(
        (m) => m.RestaurantModule,
      ),
  },
  {
    path: 'riders',
    loadChildren: () =>
      import('./features/riders/riders.module').then((m) => m.RidersModule),
  },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
