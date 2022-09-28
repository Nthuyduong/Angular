import {Component,Input} from "@angular/core";
import {List} from "../interfaces/weather.interfaces";
import {HttpClient} from "@angular/common/http";
import {ICart, IFoodMenu} from "../interfaces/foodmenu.interfaces";
@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent{
    wea: List[] = [];
    constructor(private http: HttpClient) {
    }

    ngOnInit(){
        const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
        this.http.get<{list:List[]}>(url).subscribe(data =>{
            this.wea = data.list;
        });
    }
}