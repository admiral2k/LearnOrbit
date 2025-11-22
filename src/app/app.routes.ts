import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MyPathsPageComponent } from './pages/my-paths-page/my-paths-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: "my-paths",
        component: MyPathsPageComponent
    }
];
