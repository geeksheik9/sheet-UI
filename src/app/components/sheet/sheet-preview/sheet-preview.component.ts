import { Component, OnInit } from '@angular/core';
import { Characteristics, ForceSheet } from 'src/app/models/forcesheet';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-sheet-preview',
  templateUrl: './sheet-preview.component.html',
  styleUrls: ['./sheet-preview.component.scss']
})
export class SheetPreviewComponent implements OnInit {
  user: User;
  sheet: ForceSheet;

  constructor(
    private accountService: AccountService,
    private sheetService: SheetService
    ) {
      this.user = this.accountService.userValue;
     }

  ngOnInit(): void {
    this.sheet = new ForceSheet();
    const name = this.user.firstName + " " + this.user.lastName;
    this.sheetService.getUserSheet(name).subscribe(sheet => {
      this.sheet = sheet;
    });
  }

}
