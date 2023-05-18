import { Appliance } from "./Appliance";


export class Bathroom extends Appliance {
    private voltage: number;
    private isElectric: boolean;

    constructor(data: { price: number; stock: number; voltage: number; isElectric: boolean; }) {
        super({ price: data.price, category: "Bathroom", stock: data.stock });
        this.voltage = data.voltage;
        this.isElectric = data.isElectric;
    }


    // Get 
    public getVoltage(): number {
        return this.voltage;
    }

    public getIsElectric(): boolean {
        return this.isElectric;
    }

    public getBathroom(): string {
        return `${this.getAppliance()} size of Bathroom voltage=${this.getVoltage()} isElectric=${this.getIsElectric()}`;
    }

    // Set
    public setVoltage(voltage: number): void {
        this.voltage = voltage;
    }

    public setIsElectric(isElectric: boolean): void {
        this.isElectric = isElectric;
    }
}