import {Component} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../../../Artist";

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  searchString: string;
  searchArtistResult: Artist[];

  constructor(private _spotifyService: SpotifyService) {

  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchString).subscribe(res => {
      this.searchArtistResult = res.artists.items;
    });
  }
}
