import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ViewService } from '../view.service';
//import { AnyNaptrRecord } from 'dns';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  username:any;
  Department:any;
  displayDesignation:any;
  display:any;
  UserCategory: string;
  constructor(private fb: FormBuilder, private viewService:ViewService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.username = queryParams.get("username");
     this.Department = queryParams.get("department");
      // this.lname = queryParams.get("lastname");
      // this.email = queryParams.get("email");
      localStorage.setItem('username', this.username);
      localStorage.setItem('deparment', this.Department);
    })
    console.log('username', this.username);
    console.log('department', this.Department);

    switch(this.Department)
    {
      case "1":

      this.displayDesignation = "FACULTY";
      break;

      case "2":

      this.displayDesignation = "HOD";
      break;

      case "3":

      this.displayDesignation = "OPERATIONAL STAFF";
      break;

      case "4":
        this.displayDesignation = "SENATE";
        break;

        case "7":
          this.displayDesignation = "FEEDBACK";
          break;

          case "8":
            this.displayDesignation = "STUDENT FACULTY FEEDBACK";
            break;

            case "9":
              this.displayDesignation = "LIBRARY FACILITIES";
              break;

              case "10":
                this.displayDesignation = "SPORTS DEPARTMENT";
                break;

                case "11":
                this.displayDesignation = "COMPUTING & INSTRUCTION SUPPORT";
                break;

                case "12":
                  this.displayDesignation = "LABORATORIES & INSTRUCTION SUPPORT";
                  break;
                case "13":
                  this.displayDesignation = "COUNSELING OFFICE";
                  break;
                  case "14":
                    this.displayDesignation = "STUDENT AFFAIRS OFFICE";
                    break;
                    case "15":
                      this.displayDesignation = "MARKETING & REGISTRATIONS";
                      break;
                      case "16":
                        this.displayDesignation = "FINANCE DEPARTMENT";
                        break;
                        case "17":
                          this.displayDesignation = "ADMINISTRATION & EXAMINATION";
                          break;

                          case "18":
                            this.displayDesignation = "FACULTY SATISFACTION SURVEY";
                            break;
                

    }
    
   // if(this.Department == '4'){this.displayDesignation = "SENATE"}

     
    //this.displayDesignation = this.Department;
    console.log('dept', this.displayDesignation);

    if(this.Department == '7' || this.Department == '8'|| this.Department == '9'|| this.Department == '10'|| this.Department == '11' || this.Department == '13' || this.Department == '14'|| this.Department == '15' || this.Department == '16'|| this.Department == '17'|| this.Department == '12'|| this.Department == '18')
    {
      this.UserCategory = "FeedBack";
    }
    else{
      this.UserCategory = "Survey";
    }
    

  }

  start()
  {
    this.router.navigate(['/survey'])

  }

}
