import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatInboxComponent } from './chat/chat-inbox/chat-inbox.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { ConversationDetailsComponent } from './chat/conversation-details/conversation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatInboxComponent,
    ChatWindowComponent,
    ConversationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
