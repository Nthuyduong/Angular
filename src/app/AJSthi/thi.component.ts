import {Component, Input} from "@angular/core";
import {ISome} from "../interfaces/thi.interfaces";
import {IPerson} from "../interfaces/gdien.interfaces";

@Component({
    /*ten*/
    selector: 'baithi',
    /*dia chi lay du lieu*/
    templateUrl: './thi.component.html',
    styleUrls: ['./thi.component.css']
})
/*tao ra mot component co class la*/
export class ThiComponent extends Component{


    bt: ISome [] = [
        {title:'Team Lead', name:"Robert King"},
        {title:'Developer', name:"Michael Suyama"},
        {title:'Developer', name:"Margaret Peacock"}
    ]

}