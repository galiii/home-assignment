import { Appliance } from "./Appliance";

export class Livingroom extends Appliance {
    private weight: number;
    private height: number;

    constructor(data: { price: number; stock: number; weight: number; height: number; }) {
        super({ price: data.price, category: "Livingroom", stock: data.stock });
        this.weight = data.weight;
        this.height = data.height;
    }

    // Get
    public getWeight(): number {
        return this.weight;
    }

    public getHeight(): number {
        return this.height;
    }


    public getLivingroom(): string {
        return `${this.getAppliance()} size of Livingroom height=${this.getHeight()} wight=${this.getWeight()}`;
    }

    // Set
    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public setHeight(height: number): void {
        this.height = height;
    }
}
