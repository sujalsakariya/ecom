import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule, // Import your AppModule
    ServerModule, // Import ServerModule for server-side rendering
  ],
  bootstrap: [AppComponent], // Bootstrap your AppComponent
})
export class AppServerModule {}
