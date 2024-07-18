"use client";

export interface GlobalServicesLookup {
    diseno: ServiceLookupItem[];
    dominio: ServiceLookupItem[];
    hosting: ServiceLookupItem[];
    admin: ServiceLookupItem[];
    tiempo: ServiceLookupItem[];
    modulos: ServiceLookupItem;
    bots: ServiceLookupItem;
}

export interface ServiceLookupItem {
    label: string;
    price: number;
}

export const globServicesLookup: GlobalServicesLookup = {
    diseno: [
        { label: "Basic Data Recovery", price: 50 },
        { label: "Advanced Data Recovery", price: 100 },
        { label: "RAID Recovery", price: 150 },
        { label: "Professional Data Recovery", price: 200 },
    ],
    dominio: [
        { label: "Free Diagnostics", price: 10 },
        { label: "In-Person Consultation", price: 40 },
        { label: "Remote Consultation", price: 80 },
    ],
    hosting: [
        { label: "Brand: Seagate", price: 25 },
        { label: "Brand: Western Digital", price: 90 },
        { label: "Brand: Toshiba", price: 120 },
    ],
    admin: [
        { label: "Low Size Memory", price: 150 },
        { label: "Standard Capacity", price: 300 },
        { label: "Big Data Memory", price: 400 },
    ],
    tiempo: [
        { label: "Standard (5-7 days)", price: 100 },
        { label: "Expedited (2-3 days)", price: 100 },
        { label: "Emergency (24 hours)", price: 100 },
        { label: "1 Week", price: 100 },
        { label: "2 Weeks", price: 100 },
        { label: "1 Month", price: 100 },
    ],
    modulos: { label: "Encryption Service", price: 50 },
    bots: { label: "Ongoing Support", price: 50 },
};

export const extractLabels = (key: keyof typeof globServicesLookup): string[] => {
    return (globServicesLookup[key] as Array<ServiceLookupItem>).map((item: { label: string }) => item.label);
};

export const extractPrices = (): { [key: string]: number } => {
    const prices: { [key: string]: number } = {};
    Object.values(globServicesLookup).forEach((group:any) => {
        if (Array.isArray(group)) {
            group.forEach((item: { label: string, price: number }) => {
                prices[item.label] = item.price;
            });
        } else {
            prices[group.label] = group.price;
        }
    });
    return prices;
};
