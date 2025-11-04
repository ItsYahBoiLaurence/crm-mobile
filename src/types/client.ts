export type ClientInformationType = {
    name: string
    contactNumber: string
    location?: string
    interest?: string
    lastContacted?: string
    deadline?: string | Date
    vip?: boolean
    reached?: boolean
    notes?: string
    buyer?: boolean
}

export type ClientLevelPriority = "all" | "urgent"

export type AddNewClientType = {
    name: string
    contactNumber: string
    notes?: string
}