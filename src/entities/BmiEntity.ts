export class BmiEntity {
    height: number;
    weight: number;
    bmi: number;

    constructor(height: number, weight: number, bmi: number) {
       
        this.height = height;
        this.weight = weight;
        this.bmi = bmi;
    }
}