"use client";


export interface GlobalServicesLookup {
    diseño: ServiceLookupItem[];
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
    diseño: [
        { label: "Diseño Gratis", price: 50 },
        { label: "Diseño Plantilla", price: 100 },
        { label: "Diseño Customizado", price: 150 },
        { label: "Diseño Profesional", price: 200 },
    ],
    dominio: [
        { label: "Dominio Gratis", price: 10 },
        { label: "Dominio Básico", price: 40 },
        { label: "Dominio Premium", price: 80 },
    ],
    hosting: [
        { label: "Hosting Gratis", price: 25 },
        { label: "Hosting Compartido", price: 90 },
        { label: "Hosting Dedicado", price: 120 },
    ],
    admin: [
        { label: "Admin Básico", price: 150 },
        { label: "Admin Intermedio", price: 300 },
        { label: "Admin Avanzado", price: 400 },
    ],
    tiempo: [
        { label: "1 Semana", price: 100 },
        { label: "1 Quincena", price: 100 },
        { label: "1 Mes", price: 100 },
        { label: "1 Trimestre", price: 100 },
        { label: "1 Semestre", price: 100 },
        { label: "1 Año", price: 100 },
    ],
    modulos: { label: "Módulos", price: 50 },
    bots: { label: "Bots", price: 50 },
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