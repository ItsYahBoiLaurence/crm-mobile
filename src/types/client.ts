export type ClientInformationType = {
    name: string
    contactNumber: string
    location: string
    interest: string
    lastContacted: string
    deadline: string | Date
    vip: boolean
    reached: boolean
}

export type ClientLevelPriority = "all" | "urgent"