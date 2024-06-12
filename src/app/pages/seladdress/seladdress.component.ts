import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { BackNextComponent } from '../../shared/components/back-next/back-next.component';
import { CheckoutstepsComponent } from '../../shared/components/checkoutsteps/checkoutsteps.component';
import { AuthorizationService } from '../../services/authorization.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seladdress',
  standalone: true,
  imports: [BackNextComponent, CheckoutstepsComponent, CommonModule],
  templateUrl: './seladdress.component.html',
  styleUrls: ['./seladdress.component.scss', '../../../styles.scss'],
})
export class SeladdressComponent implements OnInit {
  constructor(private authorizationService: AuthorizationService) {}
  userInfo: any[] = [];
  userAddress: string = '';

  ngOnInit(): void {
    this.getUserInfo();
  }
  getUserInfo() {
    this.authorizationService.getAuth().subscribe((userdata) => {
      this.userInfo = [userdata.address, userdata.zipcode, userdata.phone];
      // console.log(this.userInfo);
    });
  }
}
