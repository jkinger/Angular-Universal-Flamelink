import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule // <-- needed for lazy-loaded routes
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
