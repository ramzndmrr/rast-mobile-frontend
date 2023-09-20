import { SocialMediaService } from '../services/social-media.service';
import { Component, computed, signal, Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISocialMedia } from '../model/SocialMediaModel';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent {

  //dependency ınjectionlaarımızı gerçekleştirdik
  formBuilder = inject(FormBuilder);
  socialMediaService = inject(SocialMediaService);

  readonly allowedPageSizes = [5, 10,15];
  title = 'datagrid';
  gelenVeriler: [] = [];
  socialMediaAddForm:FormGroup;
  isPopupVisible: boolean;
  social = signal<ISocialMedia[]>([]);
  totalSocials = computed(()=>this.social().length);



  ngOnInit():void {
    //sayfa açılırken verileri localden çekme işlemi gerçekleşiyor bu işlem için service gidiliyor
    const storedData = this.socialMediaService.getFromLocalStorage();
    console.log(storedData)
    if (storedData) {
      this.gelenVeriler = JSON.parse(storedData);
      this.social.mutate(data => {
        data.push(...this.gelenVeriler);
      });
    }

    this.isPopupVisible = false;
    this.createSocialMediaAddForm();
  }


  togglePopup(): void {
      this.isPopupVisible = !this.isPopupVisible;
  }

  createSocialMediaAddForm(){
      this.socialMediaAddForm = this.formBuilder.group({
      socialMediaLink:["",Validators.required],
      socialMediaName:["",Validators.required],
      socialMediaDesc:["",Validators.required],
  })
}
addMeeting(){

  if(this.socialMediaAddForm.value) {
    let socialList = Object.assign({},this.socialMediaAddForm.value);
    this.social.mutate(data=>{data.push(socialList)})
    //burda ise kaydetme işlemi service aracılığıyla gerçekleşiyor
    this.socialMediaService.addSocialMedia(this.social());
    this.cancel()
  }
}

cancel(){
  this.isPopupVisible = false;
}

removeSocial(id:number){
  this.social.mutate(val=>{
    val.splice(id,1);
  })
}


}
