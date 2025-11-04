import { create } from "zustand";
import { ClientInformationType, ClientLevelPriority } from "../types/client";

export type ClientState = {
    clients: ClientInformationType[]
    filterByType: ClientLevelPriority
}

export type ClientActions = {
    getFilteredClients: () => ClientInformationType[]
    setFilter: (filterByType: ClientLevelPriority) => void
}

export type ClientStoreType = ClientState & ClientActions

const clients = [
    {
        name: "Maria Angela Santos",
        contactNumber: "09171234567",
        location: "Quezon City, Metro Manila",
        interest: "Columbarium",
        lastContacted: "January 3, 2025",
        deadline: "January 10, 2025",
        vip: true,
        buyer: true,
        reached: true,
    },
    {
        name: "Patricia Gomez",
        contactNumber: "09981234567",
        location: "San Fernando, Pampanga",
        interest: "Family Estate",
        lastContacted: "January 6, 2025",
        deadline: "January 13, 2025",
        vip: true,
        buyer: true,
        reached: true,
    },

    {
        name: "Jerome Tan",
        contactNumber: "09197654321",
        location: "Antipolo City, Rizal",
        interest: "Lawn Lot",
        lastContacted: "January 9, 2025",
        deadline: "January 16, 2025",
        vip: false,
        buyer: true,
        reached: true,
    },
    {
        name: "Eleanor Reyes",
        contactNumber: "09990001122",
        location: "Las Piñas City, Metro Manila",
        interest: "Family Estate",
        lastContacted: "January 11, 2025",
        deadline: "January 18, 2025",
        vip: true,
        buyer: true,
        reached: true,
    },
    {
        name: "Francis Cruz",
        contactNumber: "09225557890",
        location: "Taguig City, Metro Manila",
        interest: "Columbarium",
        lastContacted: "January 10, 2025",
        deadline: "January 17, 2025",
        vip: false,
        buyer: false,
        reached: false,
    },
    {
        name: "Miguel Ramos",
        contactNumber: "09183456789",
        location: "Batangas City, Batangas",
        interest: "Lawn Lot",
        lastContacted: "January 4, 2025",
        deadline: "January 11, 2025",
        vip: false,
        buyer: false,
        reached: false,
    },
    {
        name: "Stephanie Lim",
        contactNumber: "09351239876",
        location: "Pasig City, Metro Manila",
        interest: "Niche",
        lastContacted: "January 8, 2025",
        deadline: "January 15, 2025",
        vip: false,
        buyer: false,
        reached: false,
    },
    {
        name: "Carlos Dela Cruz",
        contactNumber: "09284561234",
        location: "Cavite City, Cavite",
        interest: "Garden Lot",
        lastContacted: "January 5, 2025",
        deadline: "January 12, 2025",
        vip: false,
        buyer: false,
        reached: false,
    },
    {
        name: "Andrea Bautista",
        contactNumber: "09085551234",
        location: "Makati City, Metro Manila",
        interest: "Garden Lot",
        lastContacted: "January 7, 2025",
        deadline: "January 14, 2025",
        vip: false,
        buyer: false,
        reached: false,
    },
    {
        name: "John Laurence Burgos",
        contactNumber: "09916313153",
        location: "26 Vicente Cruz, Sampaloc, Manila",
        interest: "Lawn Lot",
        lastContacted: "January 2, 2025",
        deadline: "January 9, 2025",
        vip: false,
        buyer: false,
        reached: false,
    },
];


export const useClientStore = create<ClientStoreType>((set, get) => ({
    clients: clients,
    filterByType: "urgent" as ClientLevelPriority,
    getFilteredClients: () => {
        if (get().filterByType === "all") return clients
        return clients.filter(client => client.reached == false)
    },
    setFilter: (filterByType) => {
        set({
            filterByType
        })
    }
}))