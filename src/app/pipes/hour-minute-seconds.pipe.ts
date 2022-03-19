import { Pipe, PipeTransform } from "@angular/core";
import { isNil } from "../helpers/utils";

@Pipe({
    name: 'hourMinuteSeconds'
})
export class HourMinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
        if (isNil(value))
            return ""

        const hours = Math.floor(value / 3600);
        const minutes = Math.floor((value - (hours * 3600)) / 60);
        const seconds = value - (hours * 3600) - (minutes * 60);
        return `${this.prependLeadingZero(hours)}:${this.prependLeadingZero(minutes)}:${this.prependLeadingZero(seconds)}`;
    }

    private prependLeadingZero(value: number): string {
        return value >= 10 ? value.toString() : "0" + value.toString()
    }
}