"use client"
import { useState, ChangeEvent, useEffect, forwardRef, useImperativeHandle } from "react";
import { extractLabels, extractPrices } from "./GlobalServicesLookup";
import { FaRecycle } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";


const designLabels = extractLabels("diseno");
const dominioLabels = extractLabels("dominio");
const hostingLabels = extractLabels("hosting");
const adminLabels = extractLabels("admin");
const tiempoLabels = extractLabels("tiempo");
const prices = extractPrices();

const getDesignLabel = (value: number): string => {
    return designLabels[value];
};

const getLabelFromArray:any = (value: number, labels: string[]): string => {
    return labels[value];
};

const getPriceFromLabel = (label: string, prices: { [key: string]: number }): number => {
    return prices[label] || 0;
};

const tiempoMultipliers: any = {
    "Standard (5-7 days)": 3,
    "Expedited (2-3 days)": 2,
    "Emergency (24 hours)": 1.5,
    "1 Week": 1.3,
    "2 Weeks": 1.1,
    "1 Month": 1
};

interface RangeInputProps {
    defaultValue?: number;
    label: string;
    name: string;
    min: number;
    max: number;
    value: number;
    noborder?: boolean;
    emoji?: any
    style?: any
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput = ({ label, name, min, max, value, defaultValue, noborder, emoji,style, handleChange }: RangeInputProps) => (
    <div className="w-max-250px w-100 flex-col py-1 " style={{borderTop: noborder ? "none" : "1px solid #00000011",...style}}>
        <div className="flex w-100">
            <label className="tx-lg flex-1">{label}</label>
            <div>{emoji}</div>
        </div>
        <input
            className="w-100"
            type="range"
            value={value}
            step={1}
            min={min}
            max={max}
            name={name}
            onChange={handleChange}
            defaultValue={defaultValue}
            style={{}} />
        </div>
);

interface Values {
    dominio: number;
    hosting: number;
    diseno: number;
    tiempo: number;
    admin: number;
    modulos: number;
    bots: number;
}

export const ProjectCalc = forwardRef((props, ref) => {
    const initialValues = {
        dominio: 0,
        hosting: 0,
        diseno: 0,
        tiempo: 2,  // Setting default value for tiempo
        admin: 0,
        modulos: 0,
        bots: 0
    };

    const [values, setValues] = useState<Values>(() => {
        if (typeof window === "undefined") { return initialValues }
        const storedValues = window?.localStorage?.getItem("projectCalcValues")
        return storedValues ? JSON.parse(storedValues) : initialValues;
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValues = {
            ...values,
            [e.target.name]: parseFloat(e.target.value)
        };
        setValues(newValues);
        if (typeof window === "undefined") { return }
        window.localStorage?.setItem?.("projectCalcValues", JSON.stringify(newValues));
    };

    useEffect(() => {
    }, [values]);

    const resetForm = () => {
        setValues(initialValues);
        if (typeof window === "undefined") { return }
        window.localStorage?.setItem?.("projectCalcValues", JSON.stringify(initialValues));
    };

    const calculateSubtotal = () => {
        const dominioPrice = getPriceFromLabel(getLabelFromArray(values.dominio, dominioLabels), prices);
        const hostingPrice = getPriceFromLabel(getLabelFromArray(values.hosting, hostingLabels), prices);
        const disenoPrice = getPriceFromLabel(getDesignLabel(values.diseno), prices);
        const adminPrice = getPriceFromLabel(getLabelFromArray(values.admin, adminLabels), prices);
        const modulosPrice = values.modulos * (prices["modulos"]  || 50);
        const botsPrice = values.bots * (prices["bots"] || 50);

        return dominioPrice + hostingPrice + disenoPrice + adminPrice + modulosPrice + botsPrice;
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const tiempoLabel = getLabelFromArray(values.tiempo, tiempoLabels);
        const tiempoMultiplier = tiempoMultipliers[tiempoLabel];

        return subtotal * tiempoMultiplier;
    };


    const handleDominoChange = (value: number) => {
        const newValues = {
            ...values,
            dominio: value
        };
        setValues(newValues);
        if (typeof window === "undefined") { return }
        window.localStorage?.setItem?.("projectCalcValues", JSON.stringify(newValues));
    };
    useImperativeHandle(ref, () => ({
        getOrder: () => ({
            ...values,
            labels: {
                dominio: getLabelFromArray(values.dominio, dominioLabels),
                hosting: getLabelFromArray(values.hosting, hostingLabels),
                diseno: getDesignLabel(values.diseno),
                tiempo: getLabelFromArray(values.tiempo, tiempoLabels),
                admin: getLabelFromArray(values.admin, adminLabels),
                modulos: values.modulos > 0 ? `${values.modulos} Priorities` : '0 Priorities',
                bots: values.bots >= 10 ? 'Unlimited Bots' : `${Math.round(values.bots)} Bots`
            },
            subtotal: calculateSubtotal(),
            total: calculateTotal()
        })
    }));

    return (
        <>
        <div className=" flex-wrap flex-justify-center flex-align-end  w-100 py-8 Q_xs_py-0">
            <div className=" w-100 w-max-300px flex-col">
            <div className="w-max-250px w-100 flex-col py-1" style={{borderTop: "1px solid #00000011"}}>
                    <div className="flex w-100">
                        <label className="tx-lg flex-1">{getLabelFromArray(values.dominio, dominioLabels)}</label>
                        <div>{!values.dominio ? null : <>🌐</>}</div>
                    </div>
                    <div className="flex w-100 gap-2">
                        <button className="button py-2 noborder opaci-chov--25 bg-trans flex-1 bord-r-50"  
                        style={getLabelFromArray(values.dominio, dominioLabels) == 0 ? {} : {boxShadow:"inset 0 0 1px #f90"}}
                        onClick={() => handleDominoChange(0)}>Free</button>
                        <button className="button py-2 noborder opaci-chov--25 bg-trans flex-1 bord-r-50"  
                        style={getLabelFromArray(values.dominio, dominioLabels) == 0 ? {} : {boxShadow:"inset 0 0 1px #f90"}}
                        onClick={() => handleDominoChange(1)}>Standard</button>
                    </div>
                </div>
                <RangeInput emoji={!values.hosting ? null : <>🏠</>} label={getLabelFromArray(values.hosting, hostingLabels)} name="hosting" min={0} max={hostingLabels.length - 1} value={values.hosting} handleChange={handleChange} />
                <RangeInput emoji={!values.diseno ? null : <>🎨</>} label={getDesignLabel(values.diseno)} name="diseno" min={0} max={designLabels.length - 1} value={values.diseno} handleChange={handleChange} />
                <RangeInput emoji={!values.admin ? null : <>💻</>} label={getLabelFromArray(values.admin, adminLabels)} name="admin" min={0} max={adminLabels.length - 1} value={values.admin} handleChange={handleChange} />
                <RangeInput emoji={!values.modulos ? null : <>📦</>} label={values.modulos > 0 ? `${values.modulos} Priorities` : '0 Priorities'} name="modulos" min={0} max={50} value={values.modulos} handleChange={handleChange} />
                <RangeInput emoji={!values.bots ? null : <>🤖</>}  label={values.bots >= 10 ? 'Unlimited Bots' : `${Math.round(values.bots)} Bots`} name="bots" min={0} max={10} value={values.bots} handleChange={handleChange} />
            </div>
            <div className="bg-b-10 h-300px Q_md_x " style={{width: "2px"}}></div>

            {/* <div></div> */}
            <div className="flex-col w-min-300px ">
                
                <div className="w-max-250px w-100 flex flex-center py-4 ">
                    
                    <div className="flex flex-align-end tx-lgx tx-bold-8 flex-1 flex gap-2"><div className=" tx-sm">SubTotal:</div> <b className="">{calculateSubtotal()}</b></div>
                    <div className="flex-col gap-1 Q_y_xs_md">
                        <a href="#send" className="tx-lgx tx-bold-8 px-2 bg-b-10 bord-r-15 px-3 nodeco pb-1 tx-white "
                            style={{background: "#4096FF"}}
                        >
                            Next ↓
                        </a>
                    </div>
                </div>
                {calculateSubtotal() != 235 &&
                    <button onClick={resetForm} className="opaci-chov--50 tx-lgx noborder tx-bold-8 px-2 bg-b-10 bord-r-15 pa-1 mb-4">
                        <div className="flex">
                            <div className="tx-bold-2">Reset Form</div>
                            <div className="px-1"></div>
                            <div><FaArrowRotateLeft /></div>
                        </div>
                    </button>
                }

                <div className="Q_xs_pb-8 w-100 flex-col">

                    <RangeInput label={"Tiempo: "+getLabelFromArray(values.tiempo, tiempoLabels)} name="tiempo" min={0} max={tiempoLabels.length - 1} value={values.tiempo} handleChange={handleChange} noborder   />
                    
                    <div className="w-max-250px w-100 flex flex-center py-4">
                        <div className="tx-lgx tx-bold-8">TOTAL: {calculateTotal()}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
});

ProjectCalc.displayName = "ProjectCalc"
