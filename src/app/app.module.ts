import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { GmComponent } from './components/gm/gm.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { NonplayerListComponent } from './components/nonplayer-list/nonplayer-list.component';
import { GmToolsComponent } from './components/gm/gm-tools/gm-tools.component';
import { PlayerComponent } from './components/player-list/player/player.component';
import { NpcComponent } from './components/nonplayer-list/npc/npc.component';
import { RulebookComponent } from './components/rulebook/rulebook.component';
import { DicerollerComponent } from './components/diceroller/diceroller.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SheetPreviewComponent } from './components/sheet/sheet-preview/sheet-preview.component';
import { SheetFullComponent } from './components/sheet/sheet-full/sheet-full.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    EpisodeComponent,
    GmComponent,
    PlayerListComponent,
    NonplayerListComponent,
    GmToolsComponent,
    PlayerComponent,
    NpcComponent,
    RulebookComponent,
    DicerollerComponent,
    AlertComponent,
    RegisterComponent,
    SheetPreviewComponent,
    SheetFullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    NgxDocViewerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
