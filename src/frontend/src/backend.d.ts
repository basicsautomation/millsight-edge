import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    city: string;
    name: string;
    isDemo: boolean;
    email: string;
    message: string;
    timestamp: bigint;
    companyName: string;
    phone: string;
    millType: MillType;
}
export enum MillType {
    dal = "dal",
    flour = "flour",
    other = "other",
    rice = "rice"
}
export interface backendInterface {
    getCount(): Promise<bigint>;
    getEnquiries(): Promise<Array<Enquiry>>;
    getEnquiriesByTimestamp(): Promise<Array<Enquiry>>;
    getEnquiry(id: bigint): Promise<Enquiry>;
    submitEnquiry(name: string, companyName: string, city: string, phone: string, email: string, millType: MillType, message: string, isDemo: boolean): Promise<bigint>;
}
