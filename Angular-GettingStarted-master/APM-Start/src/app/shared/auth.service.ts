import { Injectable } from "@angular/core";
import { IUser } from "./User";
import { containsTree } from "@angular/router/src/url_tree";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUserActivity } from "./UserActivity";
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable'
@Injectable()



export class AuthService {

    private user: string
    private activity: IUserActivity;
    constructor(private _http: HttpClient, private _cookieService: CookieService) {

    }

    private _AuthUsersUrl = 'http://item-87485/AcmeProdRestfull/User';
    
    async CheckLogin(user: string, password: string): Promise<boolean> {

        let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };


        return this._http.post<IUserActivity>(this._AuthUsersUrl, { 'UserName': user, 'Password': password }, httpOptions).map(
            (response: IUserActivity) => {
                this.activity = response;

                if (this.activity) {
                    this.activity.ExpireOn = new Date();
                    this.activity.ExpireOn.setTime(this.activity.ExpireOn.getTime() + (1 * (1000 * 60 * 60 * 24)));

                    console.log("Ativity token set to:" + this.activity.AuthCode);
                    this._cookieService.set("currentUser", this.activity.UserName, 1/1440);
                    this._cookieService.set("serverAuthCode", this.activity.AuthCode, 1/1440 );
                    

                    console.log(response);
                    return true;
                }
                this._cookieService.delete("currentUser");
                return false;

            }).toPromise();

    }

    async Login(user: string, password: string) {
        console.log("user:" + user + " password:" + password);
        this._cookieService.delete("currentUser");
        console.log("Ativity token deleted");

        this.user = user;

        let pr = this.CheckLogin(user, password);
        
        await pr.then(
            values => {
                console.log("Values:" + values);
                
            },
            (reason: any) => {
                console.log("Failed reason:" + reason);
                this._cookieService.delete("currentUser");
                this._cookieService.delete("serverAuthCode");
            });
    }

   
    getCurrentUser(): string {
        return this._cookieService.get("currentUser");        
    }

    getCurrentAuthCode(): string {        
        return this._cookieService.get("serverAuthCode");        
    }

    getExpiration(): string {
        if (this.activity)
            return this.activity.ExpireOn.toDateString();

        return undefined;
    }

    isConnected(): boolean {
        if (this._cookieService.get("serverAuthCode"))
            return true;
        return false;
    }
}