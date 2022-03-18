import { Pipe, PipeTransform } from "@angular/core";
import { isNil } from "../helpers/utils";

@Pipe({
    name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
        if (isNil(value))
            return ""

        const minutes: number = Math.floor(value / 60);
        const seconds = value - minutes * 60
        const secondsString: string = seconds >= 10 ? seconds.toString() : "0" + seconds.toString()
        return minutes + ':' + secondsString;
    }
}