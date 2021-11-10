import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm=this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      phoneno : [''],
      //create skill form Group
      skills : this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency : ['beginner']
      })
    })
  }
  onLoadDataClick()  : void{
    this.employeeForm.patchValue({
      fullName : 'Chandrashekhar Yadav',
      email : 'chandrashekhar9506@gmail.com',
      phoneno: '8975221916',
      skills :{
        skillName : 'C#',
        experienceInYears : '5.8',
        proficiency : 'advanced'
      }
    });
  }
  onSubmit() : void 
  {
    
    console.log(this.employeeForm);
  }

}
