/**
 * Created by ignatius on 12.12.16.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http"; // for http requests
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;

  constructor(private _http: Http) {
  }

  searchMusic(str: string, type = 'artist') {
    this.searchUrl = 'http://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl).map(res => res.json());
  }

  getArtist(id:string){
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.artistUrl).map(res => res.json());
  }
}
