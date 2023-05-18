import { v4 as uuidv4 } from "uuid";

import { Livingroom, Bathroom, Kitchen } from "./index";

type Category = "kitchen" | "bathroom" | "livingroom";

type CategoryMap = {
    [key in Category]: (data: {
        price: number;
        category: Category;
        stock: number;
        [key: string]: any;
    }) => Appliance;
};

export abstract class Appliance {
    private itemId: string;
    private price: number;
    protected category: string;
    private stock: number;

    constructor(data: { price: number; category: string; stock: number }) {
        this.itemId = uuidv4();
        this.price = data.price;
        this.category = data.category;
        this.stock = data.stock;
    }

    // Get
    public getItemId(): string {
        return this.itemId;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCategory(): string {
        return this.category;
    }

    public getStock(): number {
        return this.stock;
    }

    public getAppliance(): string {
        return `Appliance: id=${this.getItemId()} price=${this.getPrice()} category=${this.getCategory()} ??stock=${this.getStock()}`;
    }

    // Set
    public setPrice(price: number): void {
        this.price = price;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }

    // Stock manipulation methods
    async isInStock(): Promise<boolean> {
        return this.stock > 0;
    }

    addToStock(quantity: number): void {
        this.stock += quantity;
    }

    removeFromStock(quantity: number): void {
        if (quantity <= this.stock) {
            this.stock -= quantity;
        } else {
            throw new Error("Not enough items in stock");
        }
    }

    public static deserialize(json = '{"price": 10, "category": "kitchen", "stock": 5, "size": "small", "isWaterResistant": true}'): Appliance {
        let data = JSON.parse(json);

        const categories: CategoryMap = {
            kitchen: () => new Kitchen({ ...data, size: data.size, isWaterResistant: data.isWaterResistant }),
            bathroom: () => new Bathroom({ ...data, size: data.size, isWaterResistant: data.isWaterResistant }),
            livingroom: () => new Livingroom({ ...data, weight: data.weight, height: data.height })
        };

        const createAppliance = categories[data.category as Category];
        if (!createAppliance) {
            throw new Error("Unknown category");
        }

        return createAppliance(data);
    }

    public static async checkStockConcurrently(data: { appliances: Appliance[]; maxConcurrency: number; }): Promise<boolean[]> {
        const results: boolean[] = [];
        const { appliances, maxConcurrency } = data;

        // Helper function to process a batch of appliances
        const processBatch = async (batch: Appliance[]) => {
            const promises = batch.map((appliance) => appliance.isInStock());
            const batchResults = await Promise.all(promises);
            results.push(...batchResults);
        };

        // Split the appliances into batches
        for (let i = 0; i < appliances.length; i += maxConcurrency) {
            const batch = appliances.slice(i, i + maxConcurrency);
            await processBatch(batch);
        }

        return results;
    }
}
