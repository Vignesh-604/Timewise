
import { bestsellers, newArrivals, automaticWatches, extendedWatches } from './data/watches.js';

const allProducts = [
    ...bestsellers,
    ...newArrivals,
    ...automaticWatches,
    ...extendedWatches
];

const ids = allProducts.map(p => p.id);
const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
const uniqueDuplicates = [...new Set(duplicates)];

if (uniqueDuplicates.length > 0) {
    console.log('Found duplicate IDs:', uniqueDuplicates);
} else {
    console.log('No duplicate IDs found.');
}
