import { enableProdMode, Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
/*import { Module } from 'module';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}*/

@Component({
  // Component decorators
  selector: 'app-start',  // user-define tag names
  template: `<h1>Hello Angular...!</h1>
  <p>Hey their!!!!</p>`,// view to render
})
class AppComponent {}

@NgModule({
  //Module decorators
  declarations: [AppComponent],  //all components which control by modules
  imports:[BrowserModule],      //All common logics to run components
  bootstrap: [AppComponent],   //Start Root Component
})
class AppModule {}

//Bootstrap root module,
platformBrowserDynamic().bootstrapModule(AppModule)
//.catch(err => console.error(err));