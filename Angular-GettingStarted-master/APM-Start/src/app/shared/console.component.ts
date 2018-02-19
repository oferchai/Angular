import { Component,OnInit } from "@angular/core";


@Component({
    selector:'CONSOLE-LOG',
    templateUrl: './console.component.html',
    styleUrls : ['./console.component.css']
})

export class ConsoleComponent  implements OnInit  
{
    private lines:string[] ;
    
    ngOnInit()
    {
        this.lines = [];
    }

    logLine(line:string)
    {
        console.log("new line in ConsoleComponent:"+line);
        this.lines.push(line)
    }

}