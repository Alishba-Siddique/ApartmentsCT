// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// export function getItemsFiles(type) {
//     const itemsDirectory = path.join(process.cwd(), 'src/data', type);
//     return fs.readdirSync(itemsDirectory);
// }

// export function getItemData(itemIdentifier, type) {
//     const itemsDirectory = path.join(`${process.cwd()}/src/data/${type}`);
//     const itemSlug = itemIdentifier.replace(/\.md$/, ''); // removes the file extension
//     const filePath = path.join(itemsDirectory, `${itemSlug}.md`);
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     const { data, content } = matter(fileContent);

//     const itemData = {
//         slug: itemSlug,
//         ...data,
//         content,
//     };

//     return itemData;
// }

// export function getAllItems(type) {

//     // For accordion, we just need to read the single file
//     if (type === 'accordion') {
//         return getItemData(null, type);
//     }

//     const itemFiles = getItemsFiles(type);

//     const allItems = itemFiles.map((itemFile) => getItemData(itemFile, type));

//     const sortedItems = allItems.sort((itemA, itemB) =>
//         itemA.date > itemB.date ? -1 : 1
//     );

//     return sortedItems;
// }

// export function getFeaturedItems(items) {
//     return items.filter((item) => item.isFeatured);
// }

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getItemsFiles(type) {
    const itemsDirectory = path.join(process.cwd(), 'src/data/', type);
    return fs.readdirSync(itemsDirectory);
}

export function getItemData(itemIdentifier, type) {
    // Special handling for single-file types like accordion
    if (type === 'accordion') {
        const filePath = path.join(
            process.cwd(),
            'src/data/accordion',
            `${type}.md`
        );
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        return data;
    }

    // Original handling for directory-based types
    const itemsDirectory = path.join(`${process.cwd()}/src/data/${type}`);
    const itemSlug = itemIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = path.join(itemsDirectory, `${itemSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const itemData = {
        slug: itemSlug,
        ...data,
        content,
    };

    return itemData;
}

export function getAllItems(type) {
    // Special handling for single-file types like accordion
    if (type === 'accordion') {
        return getItemData(null, type);
    }

    // Original handling for directory-based types
    const itemFiles = getItemsFiles(type);
    const allItems = itemFiles.map((itemFile) => getItemData(itemFile, type));
    const sortedItems = allItems.sort((itemA, itemB) =>
        itemA.date > itemB.date ? -1 : 1
    );

    return sortedItems;
}

export function getFeaturedItems(items) {
    return items.filter((item) => item.isFeatured);
}
