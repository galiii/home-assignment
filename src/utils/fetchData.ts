import { Appliance } from "../classes";
import DB from "../db/appliances.json";

const MAX_CONCURRENCY = 2;
async function fetchAppliancesData() {
    const appliances = DB.map((data) => Appliance.deserialize(JSON.stringify(data)));
    const results = await Appliance.checkStockConcurrently({ appliances, maxConcurrency: MAX_CONCURRENCY });
    return { appliances, results };
}