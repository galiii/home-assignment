import { Appliance } from "./Appliance";

export class Kitchen extends Appliance {
    private size: string;
    private isWaterResistant: boolean;

    constructor(data: { price: number; stock: number; size: string; isWaterResistant: boolean; }) {
        super({ price: data.price, category: "Kitchen", stock: data.stock });
        this.size = data.size;
        this.isWaterResistant = data.isWaterResistant;
    }



    // Get
    public getSize(): string {
        return this.size;
    }

    public getIsWaterResistant(): boolean {
        return this.isWaterResistant;
    }


    public getKitchen(): string {
        return `${this.getAppliance()} size of Kitchen size=${this.getSize()} isWaterResistant=${this.getIsWaterResistant()}`;
    }

    // Set
    public setSize(size: string): void {
        this.size = size;
    }

    public setIsWaterResistant(isWaterResistant: boolean): void {
        this.isWaterResistant = isWaterResistant;
    }

}