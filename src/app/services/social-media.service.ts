import { Injectable, signal } from '@angular/core';
import { ISocialMedia } from '../model/SocialMediaModel';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor() { }

  addSocialMedia(socialList:any){
    localStorage.setItem("socialList", JSON.stringify(socialList));
  }

  getFromLocalStorage():any{
   return  localStorage.getItem("socialList");
  }
}
