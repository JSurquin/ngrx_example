import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsEffects } from './effects/posts.effects';
import { postsReducer } from './reducers/posts.reducer';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { AutrepageComponent } from './autrepage/autrepage.component';

@NgModule({
  declarations: [AppComponent, PostComponent, AutrepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      postsState: postsReducer,
    }),
    EffectsModule.forRoot([PostsEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
